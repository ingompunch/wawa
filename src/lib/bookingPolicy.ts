import { doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { db, auth } from './firebase';

export const COMPANY_ID = 'wawa';

export interface BookingPolicy {
  isOpen: boolean;
  blockedDates: string[];
  sameDayBookingBlocked: boolean;
  hourlyCapEnabled: boolean;
  maxCarsPerHour: number;
}

export function getKstToday(): string {
  const now = new Date();
  const kstFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return kstFormatter.format(now);
}

export function datesInRange(startYmd: string, endYmd: string): string[] {
  if (!startYmd || !endYmd) return [];
  const dates: string[] = [];
  const start = new Date(startYmd);
  const end = new Date(endYmd);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return [];
  
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  const cur = new Date(start);
  while (cur <= end) {
    const y = cur.getFullYear();
    const m = String(cur.getMonth() + 1).padStart(2, '0');
    const d = String(cur.getDate()).padStart(2, '0');
    dates.push(`${y}-${m}-${d}`);
    cur.setDate(cur.getDate() + 1);
  }
  return dates;
}

export async function loadWawaBookingPolicy(): Promise<BookingPolicy & { isError?: boolean }> {
  try {
    try {
      await signInAnonymously(auth);
    } catch (authErr) {
      console.warn('Anonymous auth failed, proceeding as guest for policy load:', authErr);
    }

    const snap = await getDoc(doc(db, 'companies', COMPANY_ID));
    if (!snap.exists()) {
      return {
        isOpen: true,
        blockedDates: [],
        sameDayBookingBlocked: false,
        hourlyCapEnabled: false,
        maxCarsPerHour: 0,
      };
    }
    const data = snap.data() || {};
    return {
      isOpen: data.isOpen !== false,
      blockedDates: Array.isArray(data.blockedDates) ? data.blockedDates : [],
      sameDayBookingBlocked: data.sameDayBookingBlocked === true,
      hourlyCapEnabled: data.hourlyCapEnabled === true,
      maxCarsPerHour: typeof data.maxCarsPerHour === 'number' ? data.maxCarsPerHour : 0,
    };
  } catch (error) {
    console.error('Failed to load booking policy:', error);
    return {
      isOpen: true,
      blockedDates: [],
      sameDayBookingBlocked: false,
      hourlyCapEnabled: false,
      maxCarsPerHour: 0,
      isError: true,
    };
  }
}

function parseHour(time: string): number | null {
  const m = String(time || '').trim().match(/^(\d{1,2})/);
  if (!m) return null;
  const h = Number(m[1]);
  return Number.isFinite(h) && h >= 0 && h <= 23 ? h : null;
}

export async function assertHourlyCapacity(
  departureDate: string,
  departureTime: string,
  policy: BookingPolicy
): Promise<void> {
  if (!policy.hourlyCapEnabled || !(policy.maxCarsPerHour > 0)) return;
  const hour = parseHour(departureTime);
  if (hour === null) throw new Error('입고 시각을 확인해 주세요.');

  const snap = await getDocs(
    query(
      collection(db, 'reservations'),
      where('companyId', '==', COMPANY_ID),
      where('departureDate', '==', departureDate)
    )
  );
  let used = 0;
  snap.forEach((d) => {
    const row = d.data();
    if (String(row.status || '') === 'cancelled' || row.status === '취소') return;
    if (parseHour(row.departureTime) === hour) used += 1;
  });
  if (used >= policy.maxCarsPerHour) {
    const hh = String(hour).padStart(2, '0');
    throw new Error(
      `${hh}:00–${hh}:59 시간대 예약이 마감되었습니다. (시간당 최대 ${policy.maxCarsPerHour}대)`
    );
  }
}

export async function validateReservationPolicy(form: {
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
}): Promise<void> {
  const policy = await loadWawaBookingPolicy();

  // 0) 정책 로드 통신 오류 시 안전 차단 (Fail-Closed)
  if (policy.isError) {
    throw new Error(
      '예약 마감 상태를 확인하는 중 네트워크 통신 오류가 발생했습니다. 잠시 후 다시 시도하시거나 고객센터(010-5353-4781)로 문의해 주세요.'
    );
  }

  // 1) 전체 예약 마감 검사
  if (!policy.isOpen) {
    throw new Error('현재 전체 온라인 예약 접수가 마감된 상태입니다. 문의는 고객센터(010-5353-4781)로 연락 부탁드립니다.');
  }

  // 2) 당일 입고 차단 검사
  const todayKst = getKstToday();
  if (policy.sameDayBookingBlocked && form.departureDate === todayKst) {
    throw new Error(`선택하신 입고일(${form.departureDate})은 당일 예약이 마감되었습니다. 익일부터 예약 가능합니다.`);
  }

  // 3) 입고일 마감 검사 (입고일만 검사, 출고일은 상관없음)
  if (policy.blockedDates.includes(form.departureDate)) {
    throw new Error(`선택하신 입고일(${form.departureDate})은 마감되어 예약이 불가능합니다. 다른 날짜를 선택해 주세요.`);
  }

  // 4) 시간당 정원 마감 검사
  await assertHourlyCapacity(form.departureDate, form.departureTime, policy);
}

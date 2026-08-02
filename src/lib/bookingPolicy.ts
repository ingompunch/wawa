import { doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { db, auth } from './firebase';

export const COMPANY_ID = 'wawa';

export interface CompanyPricePolicy {
  indoorBasePrice: number;
  indoorBaseDays: number;
  indoorExtraPrice: number;
  outdoorBasePrice: number;
  outdoorBaseDays: number;
  outdoorExtraPrice: number;
  surchargePrice: number;
  surchargeStartTime: string; // e.g. "19:00"
  surchargeEndTime: string;   // e.g. "05:00"
  t2Surcharge?: number;
}

export interface BookingPolicy {
  isOpen: boolean;
  blockedDates: string[];
  sameDayBookingBlocked: boolean;
  hourlyCapEnabled: boolean;
  maxCarsPerHour: number;
  pricePolicy: CompanyPricePolicy;
}

export const DEFAULT_PRICE_POLICY: CompanyPricePolicy = {
  indoorBasePrice: 40000,
  indoorBaseDays: 2,
  indoorExtraPrice: 10000,
  outdoorBasePrice: 40000,
  outdoorBaseDays: 2,
  outdoorExtraPrice: 5000,
  surchargePrice: 20000,
  surchargeStartTime: '19:00',
  surchargeEndTime: '05:00',
  t2Surcharge: 10000,
};

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
        pricePolicy: DEFAULT_PRICE_POLICY,
      };
    }
    const data = snap.data() || {};
    
    const pricePolicy: CompanyPricePolicy = {
      indoorBasePrice: typeof data.indoorBasePrice === 'number' ? data.indoorBasePrice : DEFAULT_PRICE_POLICY.indoorBasePrice,
      indoorBaseDays: typeof data.indoorBaseDays === 'number' ? data.indoorBaseDays : DEFAULT_PRICE_POLICY.indoorBaseDays,
      indoorExtraPrice: typeof data.indoorExtraPrice === 'number' ? data.indoorExtraPrice : DEFAULT_PRICE_POLICY.indoorExtraPrice,
      outdoorBasePrice: typeof data.outdoorBasePrice === 'number' ? data.outdoorBasePrice : DEFAULT_PRICE_POLICY.outdoorBasePrice,
      outdoorBaseDays: typeof data.outdoorBaseDays === 'number' ? data.outdoorBaseDays : DEFAULT_PRICE_POLICY.outdoorBaseDays,
      outdoorExtraPrice: typeof data.outdoorExtraPrice === 'number' ? data.outdoorExtraPrice : DEFAULT_PRICE_POLICY.outdoorExtraPrice,
      surchargePrice: typeof data.surchargePrice === 'number' ? data.surchargePrice : (typeof data.surcharge === 'number' ? data.surcharge : DEFAULT_PRICE_POLICY.surchargePrice),
      surchargeStartTime: typeof data.surchargeStartTime === 'string' ? data.surchargeStartTime : (typeof data.surchargeStart === 'string' ? data.surchargeStart : DEFAULT_PRICE_POLICY.surchargeStartTime),
      surchargeEndTime: typeof data.surchargeEndTime === 'string' ? data.surchargeEndTime : (typeof data.surchargeEnd === 'string' ? data.surchargeEnd : DEFAULT_PRICE_POLICY.surchargeEndTime),
      t2Surcharge: typeof data.t2Surcharge === 'number' ? data.t2Surcharge : DEFAULT_PRICE_POLICY.t2Surcharge,
    };

    return {
      isOpen: data.isOpen !== false,
      blockedDates: Array.isArray(data.blockedDates) ? data.blockedDates : [],
      sameDayBookingBlocked: data.sameDayBookingBlocked === true,
      hourlyCapEnabled: data.hourlyCapEnabled === true,
      maxCarsPerHour: typeof data.maxCarsPerHour === 'number' ? data.maxCarsPerHour : 0,
      pricePolicy,
    };
  } catch (error) {
    console.error('Failed to load booking policy:', error);
    return {
      isOpen: true,
      blockedDates: [],
      sameDayBookingBlocked: false,
      hourlyCapEnabled: false,
      maxCarsPerHour: 0,
      pricePolicy: DEFAULT_PRICE_POLICY,
      isError: true,
    };
  }
}

function parseTimeToMinutes(timeStr: string): number | null {
  if (!timeStr) return null;
  const clean = timeStr.trim();
  const parts = clean.split(':').map(Number);
  if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return null;
}

export function isNightTime(timeStr: string, startTime = '19:00', endTime = '05:00'): boolean {
  const targetMin = parseTimeToMinutes(timeStr);
  const startMin = parseTimeToMinutes(startTime);
  const endMin = parseTimeToMinutes(endTime);

  if (targetMin === null || startMin === null || endMin === null) return false;

  if (startMin > endMin) {
    // Overnight, e.g., 19:00 (1140m) to 05:00 (300m)
    return targetMin >= startMin || targetMin < endMin;
  } else {
    // Same day, e.g., 22:00 to 24:00
    return targetMin >= startMin && targetMin < endMin;
  }
}

export function calculateFee(params: {
  parkingType: 'indoor' | 'outdoor';
  entryDate: string;
  exitDate: string;
  entryTime?: string; // HH:mm 24hr string
  exitTime?: string;  // HH:mm 24hr string
  terminal?: string;
  policy?: CompanyPricePolicy;
}): {
  diffDays: number;
  baseFee: number;
  extraFee: number;
  entrySurcharge: number;
  exitSurcharge: number;
  terminalSurcharge: number;
  totalPrice: number;
  isEntryNight: boolean;
  isExitNight: boolean;
} {
  const p = params.policy || DEFAULT_PRICE_POLICY;

  const startParts = params.entryDate.split('-').map(Number);
  const endParts = params.exitDate.split('-').map(Number);

  if (startParts.length !== 3 || endParts.length !== 3 || startParts.some(isNaN) || endParts.some(isNaN)) {
    return {
      diffDays: 0,
      baseFee: 0,
      extraFee: 0,
      entrySurcharge: 0,
      exitSurcharge: 0,
      terminalSurcharge: 0,
      totalPrice: 0,
      isEntryNight: false,
      isExitNight: false,
    };
  }

  const d1 = new Date(startParts[0], startParts[1] - 1, startParts[2]);
  const d2 = new Date(endParts[0], endParts[1] - 1, endParts[2]);
  const diffTime = d2.getTime() - d1.getTime();
  let diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)) + 1;
  if (diffDays < 1) diffDays = 1;

  const isIndoor = params.parkingType === 'indoor';
  const basePrice = isIndoor ? p.indoorBasePrice : p.outdoorBasePrice;
  const baseDays = isIndoor ? p.indoorBaseDays : p.outdoorBaseDays;
  const extraPrice = isIndoor ? p.indoorExtraPrice : p.outdoorExtraPrice;

  const extraDays = Math.max(0, diffDays - baseDays);
  const extraFee = extraDays * extraPrice;

  const isEntryNight = params.entryTime ? isNightTime(params.entryTime, p.surchargeStartTime, p.surchargeEndTime) : false;
  const isExitNight = params.exitTime ? isNightTime(params.exitTime, p.surchargeStartTime, p.surchargeEndTime) : false;

  const entrySurcharge = isEntryNight ? p.surchargePrice : 0;
  const exitSurcharge = isExitNight ? p.surchargePrice : 0;

  let terminalSurcharge = 0;
  if (params.terminal && (params.terminal.includes('T2') || params.terminal.includes('2')) && p.t2Surcharge) {
    terminalSurcharge = p.t2Surcharge;
  }

  const totalPrice = basePrice + extraFee + entrySurcharge + exitSurcharge + terminalSurcharge;

  return {
    diffDays,
    baseFee: basePrice,
    extraFee,
    entrySurcharge,
    exitSurcharge,
    terminalSurcharge,
    totalPrice,
    isEntryNight,
    isExitNight,
  };
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

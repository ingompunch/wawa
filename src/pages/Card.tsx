import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import QRCode from 'qrcode';

const AIRPICK_LOGO_DATA_URI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTUwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCI+CiAgPCEtLSBTdWl0Y2FzZSBUb3AgSGFuZGxlIC0tPgogIDxwYXRoIGQ9Ik0gNDggMjAgQyA0OCAxMy41IDUzLjUgOCA2MCA4IEMgNjYuNSA4IDcyIDEzLjUgNzIgMjAgTCA3MiAyNiBMIDQ4IDI2IFoiIGZpbGw9IiNlYTVhMWUiLz4KICA8cGF0aCBkPSJNIDU0IDIwIEMgNTQgMTYuNSA1Ni41IDE0IDYwIDE0IEMgNjMuNSAxNCA2NiAxNi41IDY2IDIwIEwgNjYgMjYgTCA1NCAyNiBaIiBmaWxsPSIjZmZmZmZmIi8+CgogIDwhLS0gQm90dG9tIFdoZWVscyAtLT4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjEyNCIgcj0iNS41IiBmaWxsPSIjZWE1YTFlIi8+CiAgPGNpcmNsZSBjeD0iODQiIGN5PSIxMjQiIHI9IjUuNSIgZmlsbD0iI2VhNWExZSIvPgoKICA8IS0tIExlZnQgQm90dG9tIDNEIENvbnRvdXIgQnVtcCAtLT4KICA8cGF0aCBkPSJNIDMyIDg0IEMgMjMgOTIgMjIgMTEwIDM3IDExOSBMIDMzIDExOSBDIDIxIDExMCAyMSA5MiAzMSA4NCBaIiBmaWxsPSIjZWE1YTFlIi8+CiAgPHBhdGggZD0iTSAzMSA4NiBDIDIyIDk0IDIyIDExMSAzNiAxMTkgQyAyNSAxMTYgMjMgOTcgMzEgODYgWiIgZmlsbD0iI2VhNWExZSIvPgoKICA8IS0tIE1haW4gU3VpdGNhc2UgQm9keSAtLT4KICA8cmVjdCB4PSIyNyIgeT0iMjQiIHdpZHRoPSI3MiIgaGVpZ2h0PSI5NiIgcng9IjE5IiBmaWxsPSIjZWE1YTFlIi8+CiAgPCEtLSBXaGl0ZSBDdXJ2ZWQgTW90aW9uIFRyYWlsIC8gU3dvb3NoIC0tPgogIDxwYXRoIGQ9Ik0gMjkgMTE1IEMgMjYgOTUgNDAgNjggNzAgNTggQyA1NiA2NCAzOCA4OCAzNyAxMTYgQyAzNCAxMTcgMzEgMTE3IDI5IDExNSBaIiBmaWxsPSIjZmZmZmZmIi8+CiAgPCEtLSBXaGl0ZSBBaXJwbGFuZSAoRmx5aW5nIHVwd2FyZHMtcmlnaHQg4oaXKSAtLT4KICA8cGF0aCBkPSJNIDg5IDUxIEMgODcgNDkuNSA4MiA1Mi41IDc3IDU1IEwgNjYgNDUgQyA2Mi41IDQyIDYwIDQ0IDYyLjUgNDYuNSBMIDcwIDU3LjUgTCA1OS41IDYzIEwgNTMuNSA1OC41IEMgNTEuNSA1NyA1MC41IDU4LjUgNTIgNjAuNSBMIDU2IDY3IEwgNTIuNSA2OSBDIDUwLjUgNzAuNSA1MS41IDcyLjUgNTQgNzIgTCA2MiA2OC41IEwgNzIuNSA3OSBDIDc1IDgxLjUgNzcgODAgNzUuNSA3Ni41IEwgNzQgNjYuNSBMIDg1IDU5LjUgQyA4OSA1Ni41IDkwLjUgNTIuNSA4OSA1MSBaIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==";

export const Card: React.FC = () => {
  const homepageUrl = "www.wawavalet.com";
  const reservationQrUrl = "https://airpick-reservation.web.app/h/wawa?src=business_card";
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    document.title = "와와주차대행 | 명함";
    QRCode.toDataURL(reservationQrUrl, {
      margin: 1,
      width: 400,
      color: {
        dark: '#2d4a3e',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'M'
    }).then(setQrDataUrl);
  }, []);

  return (
    <div className="min-h-screen bg-[#e8e6e1] flex flex-col items-center justify-center p-4 sm:p-8 font-sans selection:bg-[#2d4a3e]/20">
      
      {/* Business Card Container (Classic Elegant Ratio with balanced safe margins) */}
      <div className="w-full max-w-[580px] aspect-[1.75] bg-[#fbf5eb] border border-[#e5dcce] rounded-sm shadow-[0_20px_45px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] p-7 sm:p-10 md:p-11 relative flex flex-col justify-between overflow-hidden transition-transform hover:-translate-y-0.5">
        
        {/* ========================================================
            Corner Accent Framing Lines (Inspired by Le Monde Card)
           ======================================================== */}
        {/* Top-Right Corner Framing Line */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-24 sm:w-36 h-14 sm:h-20 border-t border-r border-[#8fa89b] pointer-events-none" />
        
        {/* Bottom-Left Corner Framing Line */}
        <div className="absolute bottom-4 left-4 sm:bottom-5 left-5 w-24 sm:w-36 h-14 sm:h-20 border-b border-l border-[#8fa89b] pointer-events-none" />

        {/* ========================================================
            TOP SECTION: Brand Logo & Partner Badge
           ======================================================== */}
        <div className="flex items-center justify-between z-10">
          <div>
            <h1 className="text-2xl sm:text-[32px] font-black text-[#2d4a3e] tracking-tight leading-none select-none">
              와와주차대행
            </h1>
          </div>

          {/* Airpick Official Partner Emblem */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#f5ede0]/90 border border-[#dfd2c0] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <img 
              src={AIRPICK_LOGO_DATA_URI} 
              alt="에어픽 로고" 
              className="w-3.5 h-3.5 object-contain"
            />
            <span className="text-[11px] font-bold text-[#3e5348]">
              에어픽 <strong className="text-[#ea5a1e] font-extrabold">공식 파트너</strong>
            </span>
          </div>
        </div>

        {/* ========================================================
            BOTTOM SECTION: Contact Information & QR Code
           ======================================================== */}
        <div className="flex items-end justify-between gap-4 z-10 pt-2">
          
          {/* Left Details List */}
          <div className="space-y-1.5 text-xs sm:text-sm text-[#424e48]">
            
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#2d4a3e] shrink-0" />
              <span className="text-[11px] text-[#6b7b73] font-medium w-14">예약/문의</span>
              <a 
                href="tel:010-5353-4781" 
                className="font-bold text-[#2d4a3e] hover:underline text-sm sm:text-base tracking-wide"
              >
                010-5353-4781
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#2d4a3e] shrink-0" />
              <span className="text-[11px] text-[#6b7b73] font-medium w-14">접수장소</span>
              <span className="font-semibold text-[#2d4a3e]">
                인천국제공항 T1 · T2 출국장
              </span>
            </div>

            {/* Website Link */}
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#2d4a3e] shrink-0" />
              <span className="text-[11px] text-[#6b7b73] font-medium w-14">온라인예약</span>
              <a 
                href="https://wawavalet.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-[#2d4a3e] hover:underline"
              >
                wawavalet.com
              </a>
            </div>

            {/* Insurance Badge */}
            <div className="flex items-center gap-2 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d4a3e] shrink-0" />
              <span className="text-[11px] font-bold text-[#2d4a3e] bg-[#ede3d1] px-2 py-0.5 rounded">
                책임보험 100% 가입
              </span>
            </div>

          </div>

          {/* Right QR Box - Clicking directly opens the requested Airpick URL */}
          <div className="shrink-0 flex flex-col items-center">
            <a 
              href={reservationQrUrl}
              target="_blank" 
              rel="noopener noreferrer"
              title="실시간 예약 바로가기"
              className="block p-1 bg-white border border-[#dfd2c0] rounded shadow-sm hover:border-[#2d4a3e] transition-all group"
            >
              {qrDataUrl ? (
                <img 
                  src={qrDataUrl} 
                  alt="와와주차대행 실시간 예약 QR" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-102 transition-transform"
                />
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#ede3d1] animate-pulse rounded" />
              )}
            </a>
            <span className="text-[10px] font-bold text-[#5a776b] mt-1 tracking-tight">
              실시간 예약 QR
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

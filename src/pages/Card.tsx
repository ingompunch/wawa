import React, { useEffect } from 'react';
import { Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';

const AIRPICK_LOGO_GREEN_DATA_URI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgMTUwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCI+CiAgPCEtLSBTdWl0Y2FzZSBUb3AgSGFuZGxlIC0tPgogIDxwYXRoIGQ9Ik0gNDggMjAgQyA0OCAxMy41IDUzLjUgOCA2MCA4IEMgNjYuNSA4IDcyIDEzLjUgNzIgMjAgTCA3MiAyNiBMIDQ4IDI2IFoiIGZpbGw9IiMyZDRhM2UiLz4KICA8cGF0aCBkPSJNIDU0IDIwIEMgNTQgMTYuNSA1Ni41IDE0IDYwIDE0IEMgNjMuNSAxNCA2NiAxNi41IDY2IDIwIEwgNjYgMjYgTCA1NCAyNiBaIiBmaWxsPSIjZmJmNWViIi8+CgogIDwhLS0gQm90dG9tIFdoZWVscyAtLT4KICA8Y2lyY2xlIGN4PSI0MiIgY3k9IjEyNCIgcj0iNS41IiBmaWxsPSIjMmQ0YTNlIi8+CiAgPGNpcmNsZSBjeD0iODQiIGN5PSIxMjQiIHI9IjUuNSIgZmlsbD0iIzJkNGEzZSIvPgoKICA8IS0tIExlZnQgQm90dG9tIDNEIENvbnRvdXIgQnVtcCAtLT4KICA8cGF0aCBkPSJNIDMyIDg0IEMgMjMgOTIgMjIgMTEwIDM3IDExOSBMIDMzIDExOSBDIDIxIDExMCAyMSA5MiAzMSA4NCBaIiBmaWxsPSIjMmQ0YTNlIi8+CiAgPHBhdGggZD0iTSAzMSA4NiBDIDIyIDk0IDIyIDExMSAzNiAxMTkgQyAyNSAxMTYgMjMgOTcgMzEgODYgWiIgZmlsbD0iIzJkNGEzZSIvPgoKICA8IS0tIE1haW4gU3VpdGNhc2UgQm9keSAtLT4KICA8cmVjdCB4PSIyNyIgeT0iMjQiIHdpZHRoPSI3MiIgaGVpZ2h0PSI5NiIgcng9IjE5IiBmaWxsPSIjMmQ0YTNlIi8+CiAgPCEtLSBDdXJ2ZWQgTW90aW9uIFRyYWlsIC8gU3dvb3NoIC0tPgogIDxwYXRoIGQ9Ik0gMjkgMTE1IEMgMjYgOTUgNDAgNjggNzAgNTggQyA1NiA2NCAzOCA4OCAzNyAxMTYgQyAzNCAxMTcgMzEgMTE3IDI5IDExNSBaIiBmaWxsPSIjZmJmNWViIi8+CiAgPCEtLSBBaXJwbGFuZSAoRmx5aW5nIHVwd2FyZHMtcmlnaHQg4oaXKSAtLT4KICA8cGF0aCBkPSJNIDg5IDUxIEMgODcgNDkuNSA4MiA1Mi41IDc3IDU1IEwgNjYgNDUgQyA2Mi41IDQyIDYwIDQ0IDYyLjUgNDYuNSBMIDcwIDU3LjUgTCA1OS41IDYzIEwgNTMuNSA1OC41IEMgNTEuNSA1NyA1MC41IDU4LjUgNTIgNjAuNSBMIDU2IDY3IEwgNTIuNSA2OSBDIDUwLjUgNzAuNSA1MS41IDcyLjUgNTQgNzIgTCA2MiA2OC41IEwgNzIuNSA3OSBDIDc1IDgxLjUgNzcgODAgNzUuNSA3Ni41IEwgNzQgNjYuNSBMIDg1IDU5LjUgQyA4OSA1Ni41IDkwLjUgNTIuNSA4OSA1MSBaIiBmaWxsPSIjZmJmNWViIiBzdHJva2U9IiNmYmY1ZWIiIHN0cm9rZS13aWR0aD0iMC42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==";

export const Card: React.FC = () => {
  const reservationQrUrl = "https://airpick-reservation.web.app/h/wawa?src=business_card";

  useEffect(() => {
    document.title = "와와주차대행 | 명함";
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

          {/* Airpick Official Partner Emblem (Option A - Refined Tone-on-Tone) */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#f1e9dc]/80 border border-[#d8cbba] rounded-full">
            <img 
              src={AIRPICK_LOGO_GREEN_DATA_URI} 
              alt="에어픽 로고" 
              className="w-3.5 h-3.5 object-contain"
            />
            <span className="text-[11px] font-bold text-[#2d4a3e] tracking-tight">
              에어픽 <span className="font-extrabold text-[#2d4a3e]">공식 파트너</span>
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
              {/* Crisp Vector QR Code SVG (Never breaks) */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 35 35" 
                shapeRendering="crispEdges"
                className="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-102 transition-transform"
              >
                <path fill="#ffffff" d="M0 0h35v35H0z"/>
                <path stroke="#2d4a3e" d="M1 1.5h7m2 0h5m2 0h1m2 0h3m1 0h1m2 0h7M1 2.5h1m5 0h1m2 0h3m1 0h4m9 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m2 0h3m2 0h1m2 0h1m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h2m1 0h1m4 0h2m2 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h2m2 0h1m2 0h1m3 0h3m1 0h1m2 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h3m3 0h2m1 0h1m8 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h1m1 0h3m1 0h3m1 0h7M1 9.5h1m1 0h5m4 0h1m1 0h5m1 0h2m1 0h1m1 0h1m1 0h5M1 10.5h2m1 0h3m1 0h2m2 0h2m3 0h1m1 0h4m1 0h1m2 0h2m1 0h4M1 11.5h7m3 0h2m3 0h1m1 0h2m1 0h1m3 0h2m2 0h1m1 0h2M1 12.5h2m1 0h3m1 0h4m1 0h1m1 0h1m1 0h1m3 0h3m1 0h3m1 0h4M1 13.5h2m1 0h2m1 0h1m2 0h1m1 0h2m4 0h1m7 0h1m2 0h2M3 14.5h4m1 0h1m4 0h1m1 0h1m1 0h1m2 0h2m1 0h2m2 0h1m3 0h3M2 15.5h1m2 0h1m1 0h1m2 0h1m2 0h1m1 0h2m2 0h1m1 0h1m4 0h2m1 0h1m1 0h2M1 16.5h1m3 0h1m2 0h3m2 0h1m8 0h3m1 0h2m1 0h3M1 17.5h2m4 0h2m1 0h2m2 0h3m1 0h1m1 0h1m3 0h1m1 0h1m1 0h3m2 0h1M1 18.5h2m2 0h2m1 0h1m1 0h2m1 0h1m1 0h1m4 0h2m2 0h1m2 0h2m1 0h2m1 0h1M1 19.5h2m4 0h2m2 0h1m4 0h1m1 0h2m1 0h3m1 0h1m2 0h2m1 0h2M2 20.5h1m3 0h1m1 0h1m1 0h1m1 0h3m2 0h1m2 0h1m1 0h5m1 0h4m1 0h1M2 21.5h2m2 0h3m1 0h1m2 0h1m3 0h1m5 0h1m2 0h1m1 0h3m1 0h2M1 22.5h1m1 0h4m1 0h6m3 0h1m2 0h2m2 0h5m2 0h1m1 0h1M1 23.5h1m3 0h1m1 0h1m1 0h4m2 0h3m3 0h3m4 0h1m2 0h2M1 24.5h1m1 0h1m1 0h1m7 0h1m1 0h2m2 0h2m1 0h2m1 0h2m1 0h2m1 0h1M1 25.5h1m1 0h3m1 0h3m2 0h2m1 0h2m1 0h1m2 0h1m1 0h1m1 0h5m2 0h2M9 26.5h2m1 0h2m3 0h9m3 0h1m1 0h1m1 0h1M1 27.5h7m5 0h6m2 0h1m2 0h2m1 0h1m1 0h1m1 0h1M1 28.5h1m5 0h1m1 0h1m1 0h2m4 0h1m3 0h2m1 0h2m3 0h3m1 0h1M1 29.5h1m1 0h3m1 0h1m1 0h1m2 0h1m1 0h1m3 0h1m2 0h1m1 0h1m1 0h6M1 30.5h1m1 0h3m1 0h1m1 0h1m4 0h2m1 0h10m2 0h2m1 0h2M1 31.5h1m1 0h3m1 0h1m1 0h1m1 0h3m1 0h3m1 0h1m1 0h1m5 0h2m1 0h1M1 32.5h1m5 0h1m3 0h2m1 0h1m6 0h2m3 0h1m2 0h3M1 33.5h7m1 0h2m3 0h1m1 0h1m1 0h1m4 0h6m3 0h1"/>
              </svg>
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

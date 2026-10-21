import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DividerFlourish, FloralCorner } from "./Ornaments";
import {
  weddingGiftConfig,
  type WeddingGiftQrConfig,
} from "@/config/weddingGift";

interface WeddingGiftProps {
  config?: WeddingGiftQrConfig;
}

/**
 * Luxury handcrafted SVG illustration of an elegant wedding gift box.
 * Colors: Ivory body, champagne gold ribbon, delicate heart seal and bow.
 */
const GiftBoxIllustration: React.FC<{ isOpening?: boolean }> = ({
  isOpening = false,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full drop-shadow-[0_12px_28px_rgba(73,54,43,0.14)] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Soft shadow under box */}
        <radialGradient id="giftShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#523F34" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#523F34" stopOpacity="0" />
        </radialGradient>

        {/* Box Body Gradient - Champagne Cream */}
        <linearGradient id="boxBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDFAF5" />
          <stop offset="50%" stopColor="#FCF8F2" />
          <stop offset="100%" stopColor="#F3EBE1" />
        </linearGradient>

        {/* Box Lid Gradient - Champagne Cream */}
        <linearGradient id="boxLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDFAF5" />
          <stop offset="50%" stopColor="#F6EFE6" />
          <stop offset="100%" stopColor="#E8DDCE" />
        </linearGradient>

        {/* Gold Ribbon Gradient - Antique Gold */}
        <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DBC4A2" />
          <stop offset="40%" stopColor="#B79265" />
          <stop offset="100%" stopColor="#99754B" />
        </linearGradient>

        {/* Ribbon Sheen */}
        <linearGradient id="ribbonSheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBF5" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#B79265" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="100" cy="184" rx="66" ry="10" fill="url(#giftShadow)" />

      {/* --- BOX BODY --- */}
      <g>
        {/* Main Box Shape */}
        <rect
          x="44"
          y="86"
          width="112"
          height="88"
          rx="10"
          fill="url(#boxBodyGrad)"
          stroke="#E0D3C1"
          strokeWidth="1.5"
        />

        {/* Vertical Ribbon */}
        <rect x="91" y="86" width="18" height="88" fill="url(#goldRibbon)" />
        <rect x="93" y="86" width="4" height="88" fill="url(#ribbonSheen)" />

        {/* Horizontal Ribbon */}
        <rect x="44" y="124" width="112" height="16" fill="url(#goldRibbon)" />
        <rect x="44" y="126" width="112" height="3" fill="url(#ribbonSheen)" />

        {/* Center Seal / Medallion */}
        <circle
          cx="100"
          cy="132"
          r="14"
          fill="#FDFAF5"
          stroke="#E0D3C1"
          strokeWidth="1.5"
        />
        <circle cx="100" cy="132" r="11" fill="#FCF8F2" />
        {/* Heart icon */}
        <path
          d="M100 136.5 C99.5 136 94 132 94 129 C94 127.3 95.3 126 97 126 C98.2 126 99.3 126.8 99.8 127.8 C100.2 126.8 101.3 126 102.5 126 C104.2 126 105.5 127.3 105.5 129 C105.5 132 100.5 136 100 136.5 Z"
          fill="#B79265"
        />

        {/* Decorative Gift Tag ("Một món quà nhỏ") */}
        <g transform="translate(108, 95) rotate(12)">
          <line
            x1="0"
            y1="0"
            x2="-8"
            y2="-8"
            stroke="#B79265"
            strokeWidth="1.2"
            strokeDasharray="1.5 1.5"
          />
          <rect
            x="0"
            y="-4"
            width="58"
            height="26"
            rx="5"
            fill="#FDFAF5"
            stroke="#E0D3C1"
            strokeWidth="1"
          />
          <circle
            cx="6"
            cy="9"
            r="2.5"
            fill="#F8F3EA"
            stroke="#E0D3C1"
            strokeWidth="1"
          />
          <text
            x="14"
            y="13"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="6.8"
            fontWeight="600"
            fill="#523F34"
          >
            Một món quà nhỏ
          </text>
        </g>
      </g>

      {/* --- BOX LID & BOW (Tilts up on click) --- */}
      <g
        className="transition-transform duration-500 ease-out origin-[40px_70px]"
        style={{
          transform: isOpening ? "translateY(-24px) rotate(-10deg)" : "none",
        }}
      >
        {/* Lid Shape */}
        <rect
          x="38"
          y="68"
          width="124"
          height="22"
          rx="6"
          fill="url(#boxLidGrad)"
          stroke="#E0D3C1"
          strokeWidth="1.5"
        />

        {/* Vertical Ribbon on Lid */}
        <rect x="91" y="68" width="18" height="22" fill="url(#goldRibbon)" />
        <rect x="93" y="68" width="4" height="22" fill="url(#ribbonSheen)" />

        {/* --- BOW --- */}
        {/* Left Bow Loop */}
        <path
          d="M100 68 C80 62 60 40 76 34 C92 28 98 56 100 68 Z"
          fill="url(#goldRibbon)"
          stroke="#99754B"
          strokeWidth="1"
        />
        <path
          d="M98 67 C83 60 70 44 80 39 C88 35 96 56 98 67 Z"
          fill="url(#ribbonSheen)"
          opacity="0.6"
        />

        {/* Right Bow Loop */}
        <path
          d="M100 68 C120 62 140 40 124 34 C108 28 102 56 100 68 Z"
          fill="url(#goldRibbon)"
          stroke="#99754B"
          strokeWidth="1"
        />
        <path
          d="M102 67 C117 60 130 44 120 39 C112 35 104 56 102 67 Z"
          fill="url(#ribbonSheen)"
          opacity="0.6"
        />

        {/* Left Ribbon Tail */}
        <path
          d="M95 70 C88 78 78 88 74 94 C77 92 84 92 88 95 C92 87 97 76 98 70 Z"
          fill="url(#goldRibbon)"
          stroke="#99754B"
          strokeWidth="0.8"
        />

        {/* Right Ribbon Tail */}
        <path
          d="M105 70 C112 78 122 88 126 94 C123 92 116 92 112 95 C108 87 103 76 102 70 Z"
          fill="url(#goldRibbon)"
          stroke="#99754B"
          strokeWidth="0.8"
        />

        {/* Bow Center Knot */}
        <ellipse
          cx="100"
          cy="68"
          rx="8"
          ry="7"
          fill="url(#goldRibbon)"
          stroke="#99754B"
          strokeWidth="1"
        />
        <ellipse
          cx="100"
          cy="67"
          rx="5"
          ry="4"
          fill="url(#ribbonSheen)"
          opacity="0.7"
        />
      </g>

      {/* Sparkling Stars */}
      <g>
        <path
          d="M30 45 L32 50 L37 52 L32 54 L30 59 L28 54 L23 52 L28 50 Z"
          fill="#B79265"
          opacity="0.8"
        />
        <path
          d="M168 52 L170 56 L174 58 L170 60 L168 64 L166 60 L162 58 L166 56 Z"
          fill="#B79265"
          opacity="0.8"
        />
        <path
          d="M158 140 L159.5 143 L163 144.5 L159.5 146 L158 149 L156.5 146 L153 144.5 L156.5 143 Z"
          fill="#DBC4A2"
          opacity="0.85"
        />
      </g>
    </svg>
  );
};

export const WeddingGift: React.FC<WeddingGiftProps> = ({
  config = weddingGiftConfig,
}) => {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGift = () => {
    if (isOpening || isGiftOpen) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsGiftOpen(true);
      setIsOpening(false);
    }, 380);
  };

  const handleCloseGift = () => {
    setIsGiftOpen(false);
    setIsOpening(false);
  };

  return (
    <section
      id="wedding-gift"
      className="relative overflow-hidden bg-[#F3EBE1] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Watermark Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "radial-gradient(#DBC4A2 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#B79265]">
            MÓN QUÀ YÊU THƯƠNG
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#523F34]">
            Gửi Quà Mừng Cưới
          </h2>
          <DividerFlourish className="mt-3" />
          <p className="mx-auto mt-4 max-w-xl font-serif text-base sm:text-lg italic leading-relaxed text-[#523F34]">
            “Sự hiện diện và lời chúc phúc của bạn là niềm vui của chúng mình.
            Nếu bạn muốn gửi một món quà mừng cưới, chúng mình xin chân thành
            cảm ơn tình cảm ấy.”
          </p>
        </motion.div>

        {/* Interactive Gift Experience: Closed Box <-> Opened QR Panel */}
        <AnimatePresence mode="wait">
          {!isGiftOpen ? (
            /* ================= 1. TRẠNG THÁI HỘP QUÀ ĐÓNG ================= */
            <motion.div
              key="closed-gift-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mx-auto mt-8 sm:mt-12 flex flex-col items-center"
            >
              <button
                type="button"
                onClick={handleOpenGift}
                aria-expanded={false}
                aria-label="Trao gửi yêu thương - Mở hộp quà mừng cưới"
                className="group relative flex flex-col items-center rounded-3xl p-3 sm:p-5 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#B79265]/40"
              >
                {/* Soft warm aura glow behind box */}
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(219,196,162,0.45)_0%,rgba(243,235,225,0)_70%)] blur-xl transition-all duration-300 group-hover:scale-110 opacity-70" />

                {/* Gift Box Illustration */}
                <div className="relative h-44 w-44 sm:h-52 sm:w-52 transition-transform duration-300 ease-out group-hover:scale-105 active:scale-95">
                  <GiftBoxIllustration isOpening={isOpening} />
                </div>

                {/* Instruction button badge: "Trao gửi yêu thương" */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E0D3C1] bg-[#FCF8F2] px-6 py-2.5 shadow-[0_4px_16px_rgba(82,63,52,0.06)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#B79265] group-hover:bg-[#F8F3EA] group-hover:shadow-[0_6px_22px_rgba(183,146,101,0.18)]">
                  <span className="text-[#B79265] text-xs" aria-hidden="true">
                    ✨
                  </span>
                  <span className="font-serif text-sm sm:text-base font-semibold tracking-wider text-[#523F34]">
                    Trao gửi yêu thương
                  </span>
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                      ease: "easeInOut",
                    }}
                    className="text-[#B79265] text-xs"
                    aria-hidden="true"
                  >
                    👆
                  </motion.span>
                </div>
              </button>
            </motion.div>
          ) : (
            /* ================= 2. TRẠNG THÁI HỘP QUÀ MỞ (QR PANEL) ================= */
            <motion.div
              key="opened-gift-panel"
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative mx-auto mt-8 sm:mt-10 max-w-sm sm:max-w-md"
            >
              <div className="relative rounded-[2rem] border border-[#E0D3C1] bg-[#FCF8F2] p-6 sm:p-9 text-center shadow-[0_16px_40px_-8px_rgba(82,63,52,0.08)]">
                {/* Floral Corner Ornaments */}
                <FloralCorner
                  position="top-left"
                  size={44}
                  className="opacity-70"
                />
                <FloralCorner
                  position="bottom-right"
                  size={44}
                  className="opacity-70"
                />

                {/* Close Button at Top-Right */}
                <button
                  type="button"
                  onClick={handleCloseGift}
                  aria-label="Đóng hộp quà"
                  className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#E0D3C1] bg-[#F8F3EA] text-[#796152] shadow-sm transition-all duration-200 hover:bg-[#6C4E3A] hover:text-[#FFFBF5] hover:border-[#6C4E3A] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B79265]/40"
                >
                  <span className="text-sm font-semibold leading-none">✕</span>
                </button>

                {/* Subtitle Badge & Title */}
                <div className="pt-2">
                  <span className="inline-block rounded-full bg-[#DBC4A2]/30 px-3.5 py-1 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#B79265]">
                    Gửi lời chúc mừng đến chúng mình
                  </span>
                  <h3 className="mt-2.5 font-serif text-2xl sm:text-3xl font-medium text-[#523F34]">
                    Món Quà Yêu Thương
                  </h3>
                  <p className="mt-1 font-sans text-xs sm:text-sm text-[#796152]">
                    Quét mã QR để gửi quà mừng cưới
                  </p>
                </div>

                {/*
                  =============================================================
                  MÃ QR MỪNG CƯỚI (WEDDING GIFT QR CODE):
                  - Tỉ lệ chuẩn đẹp nhất: Vuông 1:1
                  - Kích thước tối ưu: 600 x 600 px đến 800 x 800 px
                  - Cần có viền trắng (quiet zone) tối thiểu 20px để camera quét nhạy
                  - Cấu hình nguồn ảnh tại: src/config/weddingGift.ts (weddingGiftConfig)
                  =============================================================
                */}
                {/* QR Box with Adequate Quiet Zone */}
                <div className="mx-auto mt-6 flex aspect-square w-56 sm:w-64 items-center justify-center rounded-2xl border border-[#E0D3C1] bg-[#FDFAF5] p-3 sm:p-4 shadow-sm">
                  {config.imageSrc ? (
                    <img
                      src={config.imageSrc}
                      alt="Mã QR mừng cưới"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    /* Safe Elegant Vietnamese Placeholder */
                    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#E0D3C1] bg-gradient-to-br from-[#FDFAF5] via-[#FCF8F2] to-[#F3EBE1] p-4 text-center">
                      {/* Subtle inner corner guide markers */}
                      <div className="pointer-events-none absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-[#B79265]" />
                      <div className="pointer-events-none absolute right-2.5 top-2.5 h-3 w-3 border-r-2 border-t-2 border-[#B79265]" />
                      <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-[#B79265]" />
                      <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-[#B79265]" />

                      {/* Stylized QR Icon */}
                      <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-full border border-[#E0D3C1] bg-[#FDFAF5] shadow-[0_4px_12px_rgba(183,146,101,0.15)]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#B79265"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="3" y="3" width="7" height="7" rx="1" />
                          <rect x="14" y="3" width="7" height="7" rx="1" />
                          <rect x="3" y="14" width="7" height="7" rx="1" />
                          <path d="M14 14h3v3h-3z" />
                          <path d="M20 14v3h-3" />
                          <path d="M14 20h6" />
                        </svg>
                      </div>

                      <p className="font-serif text-sm sm:text-base font-semibold tracking-wide text-[#523F34] px-2 leading-snug">
                        {config.placeholderLabel}
                      </p>
                      <span className="mt-1.5 inline-block rounded-full bg-[#DBC4A2]/30 px-3 py-0.5 font-sans text-[0.65rem] uppercase tracking-widest text-[#796152]">
                        Vị trí chờ cập nhật
                      </span>
                    </div>
                  )}
                </div>

                {/* Optional recipient details if present in config */}
                {config.recipientName && (
                  <p className="mt-4 font-serif text-base font-semibold text-[#523F34]">
                    {config.recipientName}
                  </p>
                )}
                {config.bankName && config.accountNumber && (
                  <p className="mt-1 font-sans text-xs tracking-wider text-[#796152]">
                    {config.bankName} • {config.accountNumber}
                  </p>
                )}

                {/* Bottom Gratitude Note */}
                <p className="mt-5 font-serif text-xs sm:text-sm italic text-[#796152] leading-relaxed px-2">
                  “Cảm ơn bạn đã gửi tặng chúng mình một lời chúc yêu thương.”
                </p>

                {/* Action: Close Box Button */}
                <div className="mt-5 border-t border-[#E0D3C1]/40 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseGift}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E0D3C1] bg-[#F8F3EA] px-5 py-2 font-serif text-xs sm:text-sm text-[#523F34] shadow-sm transition-all duration-200 hover:bg-[#6C4E3A] hover:text-[#FFFBF5] hover:border-[#6C4E3A] hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B79265]/40"
                  >
                    <span>‹</span>
                    <span>Đóng hộp quà</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WeddingGift;

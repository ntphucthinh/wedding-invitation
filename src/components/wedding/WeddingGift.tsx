import React from 'react';
import { motion } from 'framer-motion';
import { DividerFlourish, FloralCorner } from './Ornaments';
import { weddingGiftConfig, type WeddingGiftQrConfig } from '@/config/weddingGift';

interface WeddingGiftProps {
  config?: WeddingGiftQrConfig;
}

export const WeddingGift: React.FC<WeddingGiftProps> = ({
  config = weddingGiftConfig,
}) => {
  return (
    <section id="wedding-gift" className="relative overflow-hidden bg-[#FAF7F0] py-20 sm:py-24 lg:py-28">
      {/* Background Subtle Watermark Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: 'radial-gradient(#DFCEAA 1px, transparent 1px)',
            backgroundSize: '28px 28px',
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
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A264]">
            A Little Gift of Love
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#59463D]">
            Gửi Mừng Cưới
          </h2>
          <DividerFlourish className="mt-3" />
          <p className="mx-auto mt-4 max-w-xl font-serif text-base sm:text-lg italic leading-relaxed text-[#59463D]">
            “Sự hiện diện và lời chúc phúc của bạn là niềm vui của chúng mình. Nếu bạn muốn gửi một món quà mừng cưới, chúng mình xin chân thành cảm ơn tình cảm của bạn.”
          </p>
        </motion.div>

        {/* QR Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 sm:mt-14 max-w-sm sm:max-w-md"
        >
          <div className="relative rounded-[2rem] border border-[#E8DED0] bg-[#FFFDF9] p-6 sm:p-10 text-center shadow-[0_12px_32px_-4px_rgba(89,70,61,0.08)]">
            <FloralCorner position="top-left" size={44} className="opacity-70" />
            <FloralCorner position="bottom-right" size={44} className="opacity-70" />

            {/* QR Box with Adequate White Quiet Zone */}
            <div className="mx-auto flex aspect-square w-56 sm:w-64 items-center justify-center rounded-2xl border border-[#DFCEAA] bg-[#FFFDF9] p-3 sm:p-4 shadow-sm">
              {config.imageSrc ? (
                <img
                  src={config.imageSrc}
                  alt="Mã QR mừng cưới"
                  className="h-full w-full object-contain"
                />
              ) : (
                /* Restrained Ivory Champagne QR Placeholder */
                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#DFCEAA] bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F0] to-[#F4ECE1] p-4 text-center">
                  {/* Subtle inner corner guide markers */}
                  <div className="pointer-events-none absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-[#C6A264]" />
                  <div className="pointer-events-none absolute right-2.5 top-2.5 h-3 w-3 border-r-2 border-t-2 border-[#C6A264]" />
                  <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-[#C6A264]" />
                  <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-[#C6A264]" />

                  {/* Stylized QR Icon */}
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#DFCEAA] bg-[#FFFDF9] shadow-[0_4px_12px_rgba(198,162,100,0.15)]">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C6A264"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <path d="M14 14h3v3h-3z" />
                      <path d="M20 14v3h-3" />
                      <path d="M14 20h6" />
                    </svg>
                  </div>

                  <p className="font-serif text-lg font-semibold tracking-wider text-[#59463D]">
                    {config.placeholderLabel}
                  </p>
                  <span className="mt-1 inline-block rounded-full bg-[#DFCEAA]/30 px-3 py-0.5 font-sans text-[0.65rem] uppercase tracking-widest text-[#75665D]">
                    Vị trí mã QR chuyển khoản
                  </span>
                </div>
              )}
            </div>

            {/* Optional details if configured in future */}
            {config.recipientName && (
              <p className="mt-4 font-serif text-base font-semibold text-[#59463D]">
                {config.recipientName}
              </p>
            )}
            {config.bankName && config.accountNumber && (
              <p className="mt-1 font-sans text-xs tracking-wider text-[#75665D]">
                {config.bankName} • {config.accountNumber}
              </p>
            )}

            {/* Gentle Closing Note */}
            <div className="mt-6 flex items-center justify-center gap-3 border-t border-[#DFCEAA]/40 pt-4">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#DFCEAA]" />
              <p className="font-serif text-sm italic text-[#75665D]">
                “Một món quà nhỏ, một lời chúc lớn.”
              </p>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#DFCEAA]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingGift;

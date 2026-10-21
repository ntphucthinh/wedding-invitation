import { useEffect, useState } from 'react';
import Countdown, { type CountdownRenderProps } from 'react-countdown';
import { motion } from 'framer-motion';
import { DividerFlourish, FloralCorner } from './Ornaments';

// Target date: September 14, 2026 at 10:00 AM
const targetDate = new Date('2026-09-14T10:00:00').getTime();

function WeddingCountdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="py-6 text-center">
          <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#523F34]">
            Lễ Thành Hôn Đã Diễn Ra Trọn Vẹn
          </p>
          <p className="mt-2 font-sans text-sm text-[#796152]">
            Cảm ơn tất cả mọi người đã đến chung vui và chúc phúc cho Văn Bách &amp; Khánh Ly!
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-4 gap-3 sm:gap-6 justify-items-center max-w-2xl mx-auto">
        {[
          { label: 'Ngày', value: days },
          { label: 'Giờ', value: hours },
          { label: 'Phút', value: minutes },
          { label: 'Giây', value: seconds },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex h-24 w-full max-w-[130px] sm:h-32 flex-col items-center justify-center rounded-[1.75rem] sm:rounded-[2rem] border border-[#E0D3C1] bg-gradient-to-b from-[#FDFAF5] to-[#F8F3EA] p-2 shadow-[0_8px_20px_rgba(82,63,52,0.05)] transition-all duration-300 hover:border-[#B79265] hover:shadow-[0_12px_28px_rgba(183,146,101,0.14)]"
          >
            {/* Inner subtle frame */}
            <div className="pointer-events-none absolute inset-1.5 rounded-[1.4rem] sm:rounded-[1.6rem] border border-dashed border-[#E0D3C1]/50" />

            {/* Number */}
            <span className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#523F34]">
              {String(item.value).padStart(2, '0')}
            </span>

            {/* Label */}
            <span className="mt-1 font-sans text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B79265]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="countdown" className="relative overflow-hidden bg-[#F3EBE1] py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        {/* Bespoke Invitation Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] sm:rounded-[3rem] border border-[#E0D3C1] bg-[#FCF8F2] p-8 sm:p-14 text-center shadow-[0_16px_45px_-8px_rgba(82,63,52,0.06)]"
        >
          <FloralCorner position="top-left" size={60} className="opacity-75" />
          <FloralCorner position="top-right" size={60} className="opacity-75" />
          <FloralCorner position="bottom-left" size={60} className="opacity-75" />
          <FloralCorner position="bottom-right" size={60} className="opacity-75" />

          {/* Card Header */}
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#B79265]">
            The Beginning of Forever
          </span>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#523F34]">
            Ngày Cưới Đang Đến Gần
          </h2>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#F8F3EA] border border-[#E0D3C1]/70 px-5 py-1.5">
            <span className="font-serif text-sm sm:text-base font-semibold text-[#523F34]">
              Thứ Hai, 14 tháng 09 năm 2026 • 10:00 Sáng
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-[#796152]">
            Mỗi khoảnh khắc đều rất đáng quý. Chúng tôi mong được chia sẻ niềm vui này cùng bạn.
          </p>

          <DividerFlourish className="my-6" />

          {/* Countdown Clock */}
          <div className="mt-8">
            {mounted ? <Countdown date={targetDate} renderer={renderer} /> : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WeddingCountdown;
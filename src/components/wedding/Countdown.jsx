import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const targetDate = new Date('2026-09-14T00:00:00').getTime();

function WeddingCountdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="grid grid-cols-4 gap-3 justify-items-center">
      {[
        { label: 'Ngày', value: days },
        { label: 'Giờ', value: hours },
        { label: 'Phút', value: minutes },
        { label: 'Giây', value: seconds },
      ].map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex h-20 w-20 flex-col items-center justify-center rounded-[1.75rem] border border-[#f5e9dc] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.05)]"
        >
          <p className="font-wedding text-2xl text-[#8b0000] sm:text-3xl">{String(item.value).padStart(2, '0')}</p>
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-[#8b0000]/70">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="bg-[#f7efe0] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-wedding text-5xl text-[#8b0000] sm:text-6xl">Ngày cưới đang đến gần</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#6a4c2a]">Mỗi khoảnh khắc đều rất đáng quý. Chúng tôi mong được chia sẻ niềm vui này cùng bạn.</p>
        <div className="mt-12 inline-block rounded-[2.5rem] border border-[#fff7ee] bg-[#f8f0e6] px-4 py-4 shadow-[0_10px_20px_rgba(0,0,0,0.04)] sm:px-6 sm:py-6">
          {mounted ? <Countdown date={targetDate} renderer={renderer} /> : null}
        </div>
      </div>
    </section>
  );
}

export default WeddingCountdown;

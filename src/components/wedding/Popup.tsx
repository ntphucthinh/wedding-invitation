import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DividerFlourish, FloralCorner } from './Ornaments';

type PopupProps = {
  name: string;
  onClose: () => void;
};

function Popup({ name, onClose }: PopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative w-full max-w-md rounded-[2.5rem] border-2 border-[#E0D3C1] bg-[#FCF8F2] p-8 text-center shadow-2xl"
        >
          <FloralCorner position="top-left" size={50} className="opacity-80" />
          <FloralCorner position="top-right" size={50} className="opacity-80" />
          <FloralCorner position="bottom-left" size={50} className="opacity-80" />
          <FloralCorner position="bottom-right" size={50} className="opacity-80" />

          {/* Wax Seal Monogram */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E0D3C1] bg-[#F8F3EA] shadow-inner">
            <span className="font-allura text-2xl text-[#B79265]">
              B &amp; L
            </span>
          </div>

          <span className="mt-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.35em] text-[#B79265]">
            Thiệp cưới trân quý
          </span>

          <h3 className="mt-2 font-serif text-3xl font-semibold text-[#523F34]">
            Chào Mừng Bạn Đến Chung Vui
          </h3>

          <DividerFlourish className="my-2" />

          <p className="font-serif text-base italic leading-relaxed text-[#523F34]">
            “Chúng tôi rất hạnh phúc và trân trọng khi được chia sẻ khoảnh khắc thiêng liêng này cùng bạn.”
          </p>

          {name && (
            <p className="mt-3 rounded-full bg-[#F8F3EA] py-1 px-4 font-sans text-xs font-medium text-[#B79265] inline-block border border-[#E0D3C1]/60">
              Khách mời danh dự: {name}
            </p>
          )}

          <div className="mt-7">
            <button
              onClick={() => {
                setOpen(false);
                onClose();
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#6C4E3A] px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest text-[#FFFBF5] shadow-[0_8px_20px_rgba(82,63,52,0.18)] transition-all duration-300 hover:bg-[#523F34] hover:scale-105"
            >
              Mở Thiệp Mời
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Popup;
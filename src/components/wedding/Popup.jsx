import { useEffect, useState } from 'react';

function Popup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 text-center shadow-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-[#9e8130]">Lời chào</p>
        <h3 className="mt-3 font-wedding text-3xl text-[#8b0000]">Cảm ơn bạn đã đến đây</h3>
        <p className="mt-4 text-gray-600">Chúng tôi rất vui khi được chia sẻ khoảnh khắc này cùng bạn.</p>
        <button onClick={() => setOpen(false)} className="mt-6 rounded-full bg-[#9e8130] px-5 py-3 text-white">
          Xem Thêm
        </button>
      </div>
    </div>
  );
}

export default Popup;

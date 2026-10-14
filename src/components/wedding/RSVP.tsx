import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { createRSVP } from '@/services/rsvp.service';
import { DividerFlourish, FloralCorner } from './Ornaments';

type RSVPFormValues = {
  name: string;
  message: string;
};

type RSVPProps = {
  onSubmitted?: (name: string) => void;
};

function RSVP({ onSubmitted }: RSVPProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<RSVPFormValues>();

  const currentMessage = watch('message') || '';

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true);

    try {
      await createRSVP({
        name: data.name,
        message: data.message,
      });

      reset();
      setToastMessage(`Cảm ơn ${data.name}! Lời chúc tốt đẹp của bạn đã được gửi thành công.`);
      setShowToast(true);
      onSubmitted?.(data.name);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Có lỗi xảy ra khi gửi, vui lòng thử lại.';

      setToastMessage(message);
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToastClose = () => {
    setShowToast(false);
    const wishesSection = document.getElementById('wishes');
    wishesSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="rsvp" className="relative overflow-hidden bg-[#FAF7F0] py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        {/* RSVP Card Styled Like Response Stationery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] sm:rounded-[3rem] border border-[#DFCEAA] bg-[#FFFDF9] p-8 sm:p-14 shadow-[0_16px_45px_-8px_rgba(89,70,61,0.08)]"
        >
          <FloralCorner position="top-left" size={60} className="opacity-75" />
          <FloralCorner position="top-right" size={60} className="opacity-75" />
          <FloralCorner position="bottom-left" size={60} className="opacity-75" />
          <FloralCorner position="bottom-right" size={60} className="opacity-75" />

          {/* Header */}
          <div className="text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A66B]">
              Xác nhận tham dự &amp; Lời chúc
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#59463D]">
              Gửi Lời Chúc Phúc
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-[#75665D]">
              Chia sẻ những lời chúc yêu thương và gửi gắm tâm tình tới hai bạn trẻ trong ngày trọng đại.
            </p>
            <DividerFlourish className="mt-3" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 sm:mt-12 space-y-6 max-w-2xl mx-auto">
            {/* Name Input */}
            <div>
              <label htmlFor="rsvp-name" className="mb-2 block font-serif text-base sm:text-lg font-semibold text-[#59463D]">
                Tên của bạn <span className="text-[#C6A66B]">*</span>
              </label>
              <input
                id="rsvp-name"
                {...register('name', { required: 'Vui lòng nhập họ tên của bạn' })}
                className="w-full rounded-[1.25rem] border border-[#E8DED0] bg-[#FAF7F0] px-5 py-3.5 font-sans text-sm sm:text-base text-[#59463D] placeholder-[#75665D]/50 transition-all focus:border-[#C6A66B] focus:bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#DFCEAA]/50"
                placeholder="Ví dụ: Nguyễn Văn A hoặc Gia đình anh Tuấn..."
              />
              {errors.name && (
                <p className="mt-2 font-sans text-xs sm:text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="rsvp-message" className="block font-serif text-base sm:text-lg font-semibold text-[#59463D]">
                  Lời chúc gửi đến cô dâu &amp; chú rể <span className="text-[#C6A66B]">*</span>
                </label>
                <span className="font-sans text-xs text-[#75665D]">
                  {currentMessage.length}/200 ký tự
                </span>
              </div>
              <textarea
                id="rsvp-message"
                {...register('message', {
                  required: 'Vui lòng nhập lời chúc',
                  maxLength: { value: 200, message: 'Lời chúc tối đa 200 ký tự' },
                })}
                rows={4}
                className="w-full rounded-[1.5rem] border border-[#E8DED0] bg-[#FAF7F0] px-5 py-4 font-sans text-sm sm:text-base text-[#59463D] placeholder-[#75665D]/50 transition-all focus:border-[#C6A66B] focus:bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#DFCEAA]/50"
                placeholder="Chúc hai bạn trăm năm hạnh phúc, răng long đầu bạc và luôn ngọt ngào như những ngày đầu..."
              />
              {errors.message && (
                <p className="mt-2 font-sans text-xs sm:text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#59463D] px-8 sm:px-10 py-4 font-sans text-sm sm:text-base font-semibold uppercase tracking-wider text-[#FFFDF9] shadow-[0_8px_20px_rgba(89,70,61,0.2)] transition-all duration-300 hover:bg-[#3D2F28] hover:shadow-[0_12px_28px_rgba(89,70,61,0.3)] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#DFCEAA] border-t-transparent" />
                    <span>Đang gửi lời chúc...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm text-[#DFCEAA] transition-transform group-hover:translate-x-1" />
                    <span>Gửi lời chúc mừng</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Toast Notification Modal */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md rounded-[2.5rem] border border-[#DFCEAA] bg-[#FFFDF9] p-8 text-center shadow-2xl"
            >
              <FloralCorner position="top-left" size={44} className="opacity-70" />
              <FloralCorner position="top-right" size={44} className="opacity-70" />

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF7F0] border border-[#DFCEAA] text-[#C6A66B]">
                <FaCheckCircle className="text-3xl" />
              </div>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-semibold text-[#59463D]">
                Gửi Lời Chúc Thành Công!
              </h3>

              <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-[#75665D]">
                {toastMessage}
              </p>

              <div className="mt-6">
                <button
                  onClick={handleToastClose}
                  className="inline-flex items-center gap-2 rounded-full bg-[#59463D] px-8 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-[#FFFDF9] transition-all hover:bg-[#3D2F28] hover:scale-105"
                >
                  <FaHeart className="text-xs text-[#DFCEAA]" /> Xem lời chúc đã gửi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default RSVP;
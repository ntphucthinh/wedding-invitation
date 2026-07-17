import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { createRSVP } from '@/services/rsvp.service';

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
    formState: { errors },
    reset,
  } = useForm<RSVPFormValues>();

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true);

    try {
      await createRSVP({
        name: data.name,
        message: data.message,
      });

      reset();
      setToastMessage(`Cảm ơn ${data.name}! Lời chúc của bạn đã được gửi.`);
      setShowToast(true);
      onSubmitted?.(data.name);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Có lỗi xảy ra, vui lòng thử lại.';

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
    <section id="rsvp" className="bg-[#f7efe0] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#e3d3a7] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:p-12">
        <div className="text-center">
          <h2 className="mt-3 font-wedding text-4xl text-[#8b0000] sm:text-5xl">Gửi lời chúc</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">Chia sẻ lời chúc yêu thương tới hai bạn trẻ bằng cách để lại tên và lời nhắn.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 grid gap-6"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Tên của bạn</label>
            <input
              {...register('name', { required: 'Vui lòng nhập họ tên' })}
              className="w-full rounded-full border border-[#e3d3a7] px-4 py-3 outline-none ring-0"
              placeholder="Nguyễn Văn A"
            />
            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">Lời chúc</label>
            <textarea
              {...register('message', {
                required: 'Vui lòng nhập lời chúc',
                maxLength: { value: 200, message: 'Tối đa 200 ký tự' },
              })}
              rows={5}
              className="w-full rounded-[1.25rem] border border-[#e3d3a7] px-4 py-3 outline-none ring-0"
              placeholder="Chúc hai bạn trăm năm hạnh phúc..."
            />
            {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-[#9e8130] px-6 py-3 font-semibold text-white transition hover:bg-[#846a24] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane /> {isSubmitting ? 'Đang gửi...' : 'Gửi lời chúc'}
            </button>
          </div>
        </motion.form>
      </div>
      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-md rounded-[1.5rem] bg-white p-8 shadow-2xl text-center">
            <h3 className="text-2xl font-semibold text-[#8b0000]">Thông báo</h3>
            <p className="mx-auto mt-4 max-w-[28rem] text-lg text-gray-700">{toastMessage}</p>
            <button
              onClick={handleToastClose}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#9e8130] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#846a24]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default RSVP;
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { getRSVPList } from '@/services/rsvp.service';
import type { RSVP } from '@/types/rsvp';
import { DividerFlourish, FloralCorner } from './Ornaments';

type WishesProps = {
  refreshSignal: number;
};

function Wishes({ refreshSignal }: WishesProps) {
  const [submissions, setSubmissions] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await getRSVPList();
        setSubmissions(data);
      } catch (error) {
        console.error(error);
        setSubmissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [refreshSignal]);

  return (
    <section id="wishes" className="relative overflow-hidden bg-[#FFFDF9] py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A66B]">
            Sổ lưu bút tình yêu
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#59463D]">
            Mỗi Lời Chúc Đều Là Điều Quý Giá
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-sm sm:text-base text-[#75665D]">
            Cảm ơn tất cả tình cảm ấm áp và những lời chúc phúc ngọt ngào mà mọi người đã gửi trao.
          </p>
          <DividerFlourish className="mt-4" />
        </motion.div>

        {/* Wishes List Container */}
        <div className="mt-12 max-h-[44rem] overflow-y-auto pr-2 scrollbar-thin">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="animate-pulse rounded-[2rem] border border-[#E8DED0] bg-[#FAF7F0] p-6 shadow-sm"
                >
                  <div className="h-4 w-12 rounded bg-[#DFCEAA]/50" />
                  <div className="mt-4 h-16 rounded bg-[#E8DED0]/60" />
                  <div className="mt-4 h-4 w-28 rounded bg-[#DFCEAA]/50" />
                </div>
              ))}
            </div>
          ) : submissions.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {submissions.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-[2rem] border border-[#E8DED0] bg-[#FAF7F0] p-6 sm:p-7 shadow-[0_6px_20px_rgba(89,70,61,0.04)] transition-all duration-300 hover:border-[#DFCEAA] hover:bg-[#FFFDF9] hover:shadow-[0_12px_30px_rgba(89,70,61,0.1)]"
                >
                  <FloralCorner position="top-right" size={36} className="opacity-40 group-hover:opacity-75 transition-opacity" />

                  {/* Message Content */}
                  <div>
                    <span className="font-serif text-3xl leading-none text-[#DFCEAA] select-none">
                      “
                    </span>
                    <p className="mt-1 break-words whitespace-pre-line font-serif text-base sm:text-lg leading-relaxed text-[#59463D] italic">
                      {entry.message ? entry.message : 'Gửi vạn lời chúc trăm năm hạnh phúc đến dâu rể!'}
                    </p>
                  </div>

                  {/* Author Signature */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#DFCEAA]/40 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DFCEAA]/30 text-[#C6A66B]">
                        <FaHeart className="text-xs" />
                      </div>
                      <span className="font-serif text-sm sm:text-base font-semibold text-[#59463D]">
                        {entry.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="mx-auto max-w-md rounded-[2.5rem] border border-dashed border-[#DFCEAA] bg-[#FAF7F0] p-10 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFDF9] border border-[#DFCEAA] text-[#C6A66B]">
                <FaCommentDots className="text-2xl" />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-[#59463D]">
                Chưa có lời chúc nào
              </h3>
              <p className="mt-2 font-sans text-sm text-[#75665D]">
                Hãy là người đầu tiên gửi những lời chúc tốt đẹp nhất tới Văn Bách &amp; Khánh Ly ở form bên trên nhé!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Wishes;
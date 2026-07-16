import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type WishEntry = {
  name: string;
  message?: string;
};

type WishesProps = {
  refreshSignal: number;
};

function Wishes({ refreshSignal }: WishesProps) {
  const [submissions, setSubmissions] = useState<WishEntry[]>([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/rsvp-list');
        if (!response.ok) throw new Error('Không thể tải danh sách xác nhận.');
        const data = await response.json();
        setSubmissions(data);
      } catch {
        setSubmissions([]);
      }
    };
    fetchSubmissions();
  }, [refreshSignal]);

  return (
    <section id="wishes" className="bg-[#fcfaf2] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mt-3 font-wedding text-4xl text-[#8b0000] sm:text-5xl">Mỗi lời chúc đều là điều quý giá</h2>
        </div>
        <div className="max-h-[40rem] overflow-y-auto pr-2">
          <div className="grid gap-6 md:grid-cols-3">
            {submissions.length > 0 ? (
              submissions.map((entry, index) => (
                <motion.div
                  key={`${entry.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-[#e3d3a7] bg-white/90 p-6 shadow-sm"
                >
                  <p className="text-gray-700 whitespace-pre-line break-words">{entry.message ? `“${entry.message}”` : 'Không có lời nhắn.'}</p>
                  <p className="mt-4 font-semibold text-[#9e8130]">— {entry.name}</p>
                </motion.div>
              ))
            ) : (
              <div className="rounded-[1.5rem] border border-[#e3d3a7] bg-white/90 p-6 shadow-sm">
                <p className="text-gray-700">Chưa có lời chúc nào cả.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishes;

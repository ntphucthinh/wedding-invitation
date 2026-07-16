import { motion } from 'framer-motion';
import { FaCalendarAlt, FaGlassCheers, FaRing, FaGift, FaCameraRetro, FaMusic, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const mapsUrl = 'https://maps.app.goo.gl/CvdkUeAhLYnDYzVB9';
const mapEmbedUrl = 'https://maps.google.com/maps?q=10.9428461,106.8735294&z=17&output=embed';

const timeline = [
  { time: '09:00', label: '\u0110\u00f3n kh\u00e1ch', Icon: FaCalendarAlt },
  { time: '09:00', label: 'Khai ti\u1ec7c', Icon: FaGlassCheers },
  { time: '10:00', label: 'L\u1ec5 Th\u00e0nh H\u00f4n', Icon: FaRing },
  { time: '10:15', label: 'Tung hoa c\u01b0\u1edbi', Icon: FaGift },
  { time: '10:30', label: 'Ch\u1ee5p \u1ea3nh c\u00f9ng d\u00e2u r\u1ec3', Icon: FaCameraRetro },
  { time: '11:00', label: 'Ca nh\u1ea1c', Icon: FaMusic },
];

function Event() {
  return (
    <section id="event" className="bg-[#fcfaf2] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#e3d3a7] bg-[#fcfaf2] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:p-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#9e8130]">Lễ cưới</p>
          <h2 className="mt-3 font-wedding text-4xl text-[#8b0000] sm:text-5xl">Vào lúc 10:00 sáng</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            <div className="flex items-start gap-4 rounded-[1.25rem] bg-white p-5 shadow-sm">
              <div className="rounded-full bg-[#f2d28b] p-3 text-[#8b0000]"><FaCalendarAlt /></div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#9e8130]">Thời gian</p>
                <p className="mt-1 font-semibold text-gray-700">14 tháng 09 năm 2026, lúc 10:00 sáng</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-[1.25rem] bg-white p-5 shadow-sm">
              <div className="rounded-full bg-[#f2d28b] p-3 text-[#8b0000]"><FaMapMarkerAlt /></div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#9e8130]">Địa điểm</p>
                <p className="mt-1 font-semibold text-gray-700">Tiệm Sửa Xe Út Hằng, quận 12, TP. Hồ Chí Minh</p>
              </div>
            </div>

            <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#9e8130] px-5 py-3 text-white transition hover:bg-[#846a24]">
              <FaDirections /> Chỉ đường
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-[#e3d3a7] bg-white p-4 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-[#f2d28b] p-4">
              <iframe
                title="Google Maps location"
                src={mapEmbedUrl}
                className="h-full w-full rounded-[1.2rem] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-sm text-[#9e8130]">Nếu bản đồ không hiện đầy đủ, hãy bấm “Chỉ đường” để mở Google Maps.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mt-12 w-full max-w-md lg:col-span-2">
          <h3 className="mb-5 text-center font-allura text-5xl text-[#9e8130] sm:text-6xl">Timeline</h3>
          <div className="relative border-l-2 border-[#b58a1e] pl-7 sm:pl-10">
            <div className="space-y-7 sm:space-y-8">
              {timeline.map(({ time, label, Icon }, index) => (
                <motion.div key={`${time}-${label}`} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative min-h-12 pl-16 sm:pl-20">
                  <div className="absolute -left-[3.2rem] top-1 flex h-12 w-12 items-center justify-center bg-[#fcfaf2] text-4xl text-[#b58a1e] sm:-left-[3.9rem] sm:h-14 sm:w-14 sm:text-5xl"><Icon aria-hidden="true" /></div>
                  <span className="absolute -left-[1px] top-6 h-px w-6 bg-[#b58a1e] sm:w-8" aria-hidden="true" />
                  <div className="border-b border-[#e3d3a7] pb-3">
                    <p className="font-serif text-lg font-bold text-[#80621d]">{time}</p>
                    <p className="font-serif text-base text-[#9e8130] sm:text-lg">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Event;

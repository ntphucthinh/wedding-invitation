import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaGlassCheers,
  FaRing,
  FaGift,
  FaCameraRetro,
  FaMusic,
  FaMapMarkerAlt,
  FaDirections,
} from 'react-icons/fa';
import { DividerFlourish, FloralCorner } from './Ornaments';

const mapsUrl = 'https://maps.app.goo.gl/CvdkUeAhLYnDYzVB9';
const mapEmbedUrl =
  'https://maps.google.com/maps?q=10.9428461,106.8735294&z=17&output=embed';

const timeline = [
  {
    time: '09:00',
    label: 'Đón khách',
    desc: 'Chào đón những vị khách quý đầu tiên trong ngày trọng đại',
    Icon: FaCalendarAlt,
    isHighlight: false,
  },
  {
    time: '09:00',
    label: 'Khai tiệc',
    desc: 'Bắt đầu khai tiệc thân mật cùng gia đình và bạn bè',
    Icon: FaGlassCheers,
    isHighlight: false,
  },
  {
    time: '10:00',
    label: 'Lễ Thành Hôn',
    desc: 'Khoảnh khắc thiêng liêng nhất khi cô dâu và chú rể chính thức thành đôi',
    Icon: FaRing,
    isHighlight: true,
  },
  {
    time: '10:15',
    label: 'Tung hoa cưới',
    desc: 'Gửi trao may mắn và niềm vui tình yêu tới các bạn trẻ',
    Icon: FaGift,
    isHighlight: false,
  },
  {
    time: '10:30',
    label: 'Chụp ảnh cùng dâu rể',
    desc: 'Lưu giữ những kỷ niệm đẹp và nụ cười rạng rỡ bên nhau',
    Icon: FaCameraRetro,
    isHighlight: false,
  },
  {
    time: '11:00',
    label: 'Ca nhạc & Giao lưu',
    desc: 'Những tiết mục âm nhạc ấm áp cùng lời chúc mừng',
    Icon: FaMusic,
    isHighlight: false,
  },
];

function Event() {
  return (
    <section id="event" className="relative overflow-hidden bg-[#F8F3EA] py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 space-y-20 lg:space-y-28">
        {/* ================= SECTION E: VENUE / ĐỊA ĐIỂM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] sm:rounded-[3rem] border border-[#E0D3C1] bg-[#FCF8F2] p-8 sm:p-12 lg:p-16 shadow-[0_16px_45px_-8px_rgba(82,63,52,0.06)]"
        >
          <FloralCorner position="top-left" size={60} className="opacity-75" />
          <FloralCorner position="top-right" size={60} className="opacity-75" />

          {/* Venue Section Header */}
          <div className="text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#B79265]">
              Địa điểm tổ chức
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#523F34]">
              Lễ Thành Hôn &amp; Tiệc Cưới
            </h2>
            <DividerFlourish className="mt-3" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* Venue Info Cards */}
            <div className="space-y-5">
              {/* Time Card */}
              <div className="flex items-start gap-4 rounded-[1.75rem] border border-[#E0D3C1] bg-[#F8F3EA] p-6 shadow-sm transition-all hover:border-[#B79265]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6C4E3A] text-[#DBC4A2]">
                  <FaCalendarAlt className="text-lg" />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#B79265]">
                    Thời gian
                  </span>
                  <p className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-[#523F34]">
                    10:00 Sáng • 14 tháng 09 năm 2026
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-[#796152]">
                    Thứ Hai (nhằm ngày cưới đẹp)
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 rounded-[1.75rem] border border-[#E0D3C1] bg-[#F8F3EA] p-6 shadow-sm transition-all hover:border-[#B79265]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6C4E3A] text-[#DBC4A2]">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#B79265]">
                    Địa điểm
                  </span>
                  <p className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-[#523F34]">
                    Tiệm Sửa Xe Út Hằng
                  </p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-[#796152]">
                    Quận 12, Thành phố Hồ Chí Minh
                  </p>
                </div>
              </div>

              {/* Action Button: Directions */}
              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#6C4E3A] px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-[#FFFBF5] shadow-[0_8px_20px_rgba(82,63,52,0.18)] transition-all duration-300 hover:bg-[#523F34] hover:shadow-[0_12px_28px_rgba(82,63,52,0.26)] hover:scale-[1.02]"
                >
                  <FaDirections className="text-base text-[#DBC4A2] transition-transform group-hover:rotate-12" />
                  <span>Chỉ đường trên Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps with Luxury Frame */}
            <div className="overflow-hidden rounded-[2.2rem] border-2 border-[#E0D3C1] bg-[#F8F3EA] p-2 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem]">
                <iframe
                  title="Vị trí tổ chức đám cưới trên Google Maps"
                  src={mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-center font-sans text-xs text-[#796152]">
                Bấm vào nút &ldquo;Chỉ đường&rdquo; để mở ứng dụng bản đồ dẫn đường trực tiếp.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= SECTION F: TIMELINE / LỊCH TRÌNH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          {/* Timeline Header */}
          <div className="text-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#B79265]">
              Lịch trình sự kiện
            </span>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#523F34]">
              Chương Trình Lễ Cưới
            </h3>
            <p className="mt-2 font-sans text-sm text-[#796152]">
              Các mốc thời gian quan trọng trong ngày chung đôi
            </p>
            <DividerFlourish className="mt-3" />
          </div>

          {/* Vertical Timeline */}
          <div className="relative mt-14 border-l-2 border-[#DBC4A2] pl-6 sm:pl-10 space-y-8 sm:space-y-10 ml-4 sm:ml-8">
            {timeline.map(({ time, label, desc, Icon, isHighlight }, index) => (
              <motion.div
                key={`${time}-${label}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative"
              >
                {/* Node Marker on Spine */}
                <div
                  className={`absolute -left-[2.15rem] sm:-left-[3.15rem] top-1.5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 shadow-sm transition-transform hover:scale-110 ${
                    isHighlight
                      ? 'border-[#B79265] bg-[#6C4E3A] text-[#DBC4A2] ring-4 ring-[#DBC4A2]/40'
                      : 'border-[#E0D3C1] bg-[#FCF8F2] text-[#B79265]'
                  }`}
                >
                  <Icon className="text-sm sm:text-base" aria-hidden="true" />
                </div>

                {/* Milestone Content Card */}
                <div
                  className={`rounded-[1.75rem] border p-5 sm:p-6 transition-all duration-300 ${
                    isHighlight
                      ? 'border-[#B79265] bg-gradient-to-r from-[#FDFAF5] to-[#FCF8F2] shadow-[0_10px_28px_rgba(183,146,101,0.14)]'
                      : 'border-[#E0D3C1] bg-[#FCF8F2] shadow-[0_4px_16px_rgba(82,63,52,0.04)] hover:border-[#DBC4A2]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#523F34]">
                      {time}
                    </span>
                    {isHighlight && (
                      <span className="rounded-full bg-[#B79265] px-3 py-1 font-sans text-[0.65rem] uppercase tracking-wider font-semibold text-[#FFFBF5]">
                        Khoảnh khắc thiêng liêng
                      </span>
                    )}
                  </div>

                  <h4 className="mt-2 font-serif text-xl sm:text-2xl font-semibold text-[#523F34]">
                    {label}
                  </h4>

                  <p className="mt-1 font-sans text-sm text-[#796152] leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Event;
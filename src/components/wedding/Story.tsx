import { motion } from 'framer-motion';
import storyImage from '@/assets/images/tai-xuong-1-20250809012834-bywlo.jpg';
import { DividerFlourish, FloralCorner } from './Ornaments';
import WeddingImage from './WeddingImage';
import { storyAccentItem } from '@/config/weddingGallery';

const milestones = [
  {
    year: '2019',
    title: 'Gặp gỡ tình cờ',
    desc: 'Bắt đầu từ những tin nhắn vu vơ và những buổi hẹn hò giản dị đầu tiên.',
  },
  {
    year: '2021',
    title: 'Đồng hành & sẻ chia',
    desc: 'Cùng nhau vượt qua mọi thử thách, tình cảm lớn lên qua từng ngày tháng.',
  },
  {
    year: '2026',
    title: 'Ngày chung đôi',
    desc: 'Quyết định cùng nhau viết tiếp câu chuyện tình yêu bằng một đám cưới trọn vẹn.',
  },
];

function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#FFFDF9] py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A66B]">
            Câu chuyện của chúng tôi
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#59463D]">
            Tình Yêu Lớn Lên Từng Ngày
          </h2>
          <DividerFlourish className="mt-3" />
        </motion.div>

        {/* 2-Column Editorial Story Grid */}
        <div className="mt-14 sm:mt-18 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Photos Column: Main Story Photo + Accent Placeholder Slot (Image 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Story Image */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8DED0] bg-[#FAF7F0] p-2 shadow-[0_16px_40px_-8px_rgba(89,70,61,0.12)]">
              <img
                src={storyImage}
                alt="Câu chuyện tình yêu Văn Bách & Khánh Ly"
                className="h-[380px] sm:h-[460px] w-full rounded-[2rem] object-cover"
              />
            </div>

            {/* Overlapping Accent Photo Frame (Using Image 5 Placeholder) */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 sm:w-56 overflow-hidden rounded-[1.75rem] border-2 border-[#FFFDF9] bg-[#FFFDF9] p-1.5 shadow-[0_14px_35px_rgba(89,70,61,0.18)]">
              <WeddingImage
                src={storyAccentItem.src}
                alt={storyAccentItem.alt}
                placeholderLabel={storyAccentItem.placeholderLabel}
                caption={storyAccentItem.caption}
                aspectRatio="aspect-square"
                className="rounded-[1.4rem]"
              />
            </div>
          </motion.div>

          {/* Letter / Story Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Stationery Letter Box */}
            <div className="relative rounded-[2rem] border border-[#E8DED0] bg-[#FAF7F0]/80 p-8 sm:p-10 shadow-[0_8px_24px_rgba(89,70,61,0.05)]">
              <FloralCorner position="top-right" size={44} className="opacity-60" />

              {/* Decorative quotation mark */}
              <span className="font-serif text-6xl leading-none text-[#DFCEAA] select-none">
                “
              </span>

              <p className="-mt-4 font-serif text-lg sm:text-xl leading-relaxed text-[#59463D] italic">
                Chúng tôi gặp nhau như một sự tình cờ, nhưng lại ở bên nhau như một điều đã được định sẵn. Từ những tin nhắn vu vơ, những buổi hẹn hò giản dị, tình cảm lớn lên từng ngày. Và giờ đây, chúng tôi quyết định cùng nhau viết tiếp câu chuyện ấy, bằng một đám cưới trọn vẹn yêu thương.
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#DFCEAA]/50 pt-4">
                <span className="font-allura text-2xl sm:text-3xl text-[#C6A66B]">
                  Văn Bách &amp; Khánh Ly
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#75665D]">
                  Forever &amp; Always
                </span>
              </div>
            </div>

            {/* Milestones timeline badges */}
            <div className="grid grid-cols-3 gap-3">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="rounded-[1.25rem] border border-[#E8DED0] bg-[#FAF7F0]/50 p-4 text-center transition-all duration-300 hover:bg-[#FAF7F0] hover:border-[#DFCEAA]"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#C6A66B]">
                    {item.year}
                  </span>
                  <p className="mt-1 font-serif text-xs sm:text-sm font-semibold text-[#59463D] line-clamp-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Story;
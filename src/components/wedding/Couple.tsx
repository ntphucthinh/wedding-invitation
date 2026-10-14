import { motion } from 'framer-motion';
import brideImage from '@/assets/images/snapedit_1754669957636-20250809012839-8oehf.jpeg';
import groomImage from '@/assets/images/z6888086390153_6ad418f0bd3ef4e64e5141b55a7f606c-20250809012838-3nxjw.jpg';
import { DividerFlourish, FloralCorner } from './Ornaments';

type CoupleProps = {
  guestName?: string;
};

function Couple({ guestName = 'Quý khách' }: CoupleProps) {
  return (
    <section id="couple" className="relative overflow-hidden bg-[#FAF7F0] py-20 sm:py-24 lg:py-28">
      {/* Background Subtle Watermark Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "radial-gradient(#DFCEAA 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        {/* Invitation Greeting Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A66B]">
            Trân trọng kính mời
          </span>

          <p className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#59463D]">
            « {guestName} »
          </p>

          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#59463D]">
            Đến dự buổi lễ cưới của
          </h2>

          <DividerFlourish className="mt-4" />
        </motion.div>

        {/* Couple Showcase Cards */}
        <div className="mt-14 sm:mt-18 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2rem] border border-[#E8DED0] bg-[#FFFDF9] p-6 sm:p-8 shadow-[0_12px_32px_-4px_rgba(89,70,61,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(89,70,61,0.14)]"
          >
            <FloralCorner position="top-left" size={48} className="opacity-70" />

            {/* Arch Photo Frame */}
            <div className="relative mx-auto overflow-hidden rounded-t-[7rem] rounded-b-[1.5rem] border-2 border-[#DFCEAA] p-1.5 bg-[#FAF7F0]">
              <div className="overflow-hidden rounded-t-[6.5rem] rounded-b-[1.2rem] h-[340px] sm:h-[380px]">
                <img
                  src={groomImage}
                  alt="Chú rể Văn Bách"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Groom Info */}
            <div className="mt-6 text-center">
              <span className="inline-block rounded-full bg-[#DFCEAA]/30 px-3.5 py-1 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-[#C6A66B]">
                Chú rể
              </span>

              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#59463D]">
                Văn Bách
              </h3>

              <p className="mt-3 font-sans text-sm leading-relaxed text-[#75665D]">
                Một người con trai trân trọng những điều nhỏ bé và luôn giữ trái tim ấm áp cho gia đình.
              </p>
            </div>
          </motion.div>

          {/* Center Connector / Intertwined Ampersand on Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center my-2 md:my-0"
          >
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#DFCEAA] bg-[#FAF7F0] shadow-sm">
              <span className="font-allura text-3xl sm:text-4xl text-[#C6A66B]">
                &amp;
              </span>
            </div>
            <div className="hidden md:block my-2 h-16 w-px bg-gradient-to-b from-[#DFCEAA] to-transparent" />
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2rem] border border-[#E8DED0] bg-[#FFFDF9] p-6 sm:p-8 shadow-[0_12px_32px_-4px_rgba(89,70,61,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(89,70,61,0.14)]"
          >
            <FloralCorner position="top-right" size={48} className="opacity-70" />

            {/* Arch Photo Frame */}
            <div className="relative mx-auto overflow-hidden rounded-t-[7rem] rounded-b-[1.5rem] border-2 border-[#DFCEAA] p-1.5 bg-[#FAF7F0]">
              <div className="overflow-hidden rounded-t-[6.5rem] rounded-b-[1.2rem] h-[340px] sm:h-[380px]">
                <img
                  src={brideImage}
                  alt="Cô dâu Khánh Ly"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bride Info */}
            <div className="mt-6 text-center">
              <span className="inline-block rounded-full bg-[#DFCEAA]/30 px-3.5 py-1 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-[#C6A66B]">
                Cô dâu
              </span>

              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#59463D]">
                Khánh Ly
              </h3>

              <p className="mt-3 font-sans text-sm leading-relaxed text-[#75665D]">
                Dịu dàng, tử tế và luôn biến những khoảnh khắc bình thường thành điều đặc biệt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
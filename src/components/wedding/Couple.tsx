import { motion } from 'framer-motion';
import { groomPhotoConfig, bridePhotoConfig } from '@/config/weddingPhotos';
import WeddingImage from './WeddingImage';
import { DividerFlourish, FloralCorner } from './Ornaments';

type CoupleProps = {
  guestName?: string;
};

function Couple({ guestName = 'Quý khách' }: CoupleProps) {
  return (
    <section id="couple" className="relative overflow-hidden bg-[#F3EBE1] py-20 sm:py-24 lg:py-28">
      {/* Background Subtle Watermark Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "radial-gradient(#DBC4A2 1px, transparent 1px)",
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
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#B79265]">
            Trân trọng kính mời
          </span>

          <p className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#523F34]">
            « {guestName} »
          </p>

          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#523F34]">
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
            className="group relative rounded-[2rem] border border-[#E0D3C1] bg-[#FCF8F2] p-6 sm:p-8 shadow-[0_12px_32px_-4px_rgba(82,63,52,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(82,63,52,0.1)] hover:border-[#DBC4A2]"
          >
            <FloralCorner position="top-left" size={48} className="opacity-70" />

            {/*
              ===================================================================
              ẢNH CHÂN DUNG CHÚ RỂ (GROOM PHOTO - Image 2):
              - Tỉ lệ chuẩn đẹp nhất: Dọc 2:3 hoặc 3:4
              - Kích thước tối ưu: 900 x 1350 px (2:3) hoặc 900 x 1200 px (3:4)
              - Bố cục: Chân dung bán thân từ ngực trở lên, gương mặt ở nửa trên
              - Cấu hình nguồn ảnh tại: src/config/weddingPhotos.ts (groomPhotoConfig)
              ===================================================================
            */}
            {/* Arch Photo Frame */}
            <div className="relative mx-auto overflow-hidden rounded-t-[7rem] rounded-b-[1.5rem] border-2 border-[#DBC4A2] p-1.5 bg-[#F8F3EA]">
              <div className="overflow-hidden rounded-t-[6.5rem] rounded-b-[1.2rem] h-[340px] sm:h-[380px]">
                {groomPhotoConfig.src ? (
                  <img
                    src={groomPhotoConfig.src}
                    alt={groomPhotoConfig.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <WeddingImage
                    src={null}
                    alt={groomPhotoConfig.alt}
                    placeholderLabel={groomPhotoConfig.placeholderLabel}
                    caption="Vị trí ảnh chú rể"
                    aspectRatio=""
                    className="h-full w-full rounded-t-[6.5rem] rounded-b-[1.2rem]"
                  />
                )}
              </div>
            </div>

            {/* Groom Info */}
            <div className="mt-6 text-center">
              <span className="inline-block rounded-full bg-[#DBC4A2]/30 px-3.5 py-1 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-[#B79265]">
                Chú rể
              </span>

              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#523F34]">
                Văn Bách
              </h3>

              <p className="mt-3 font-sans text-sm leading-relaxed text-[#796152]">
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
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#DBC4A2] bg-[#FCF8F2] shadow-sm">
              <span className="font-allura text-3xl sm:text-4xl text-[#B79265]">
                &amp;
              </span>
            </div>
            <div className="hidden md:block my-2 h-16 w-px bg-gradient-to-b from-[#DBC4A2] to-transparent" />
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2rem] border border-[#E0D3C1] bg-[#FCF8F2] p-6 sm:p-8 shadow-[0_12px_32px_-4px_rgba(82,63,52,0.06)] transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(82,63,52,0.1)] hover:border-[#DBC4A2]"
          >
            <FloralCorner position="top-right" size={48} className="opacity-70" />

            {/*
              ===================================================================
              ẢNH CHÂN DUNG CÔ DÂU (BRIDE PHOTO - Image 3):
              - Tỉ lệ chuẩn đẹp nhất: Dọc 2:3 hoặc 3:4
              - Kích thước tối ưu: 900 x 1350 px (2:3) hoặc 900 x 1200 px (3:4)
              - Bố cục: Chân dung bán thân từ ngực trở lên, gương mặt ở nửa trên
              - Cấu hình nguồn ảnh tại: src/config/weddingPhotos.ts (bridePhotoConfig)
              ===================================================================
            */}
            {/* Arch Photo Frame */}
            <div className="relative mx-auto overflow-hidden rounded-t-[7rem] rounded-b-[1.5rem] border-2 border-[#DBC4A2] p-1.5 bg-[#F8F3EA]">
              <div className="overflow-hidden rounded-t-[6.5rem] rounded-b-[1.2rem] h-[340px] sm:h-[380px]">
                {bridePhotoConfig.src ? (
                  <img
                    src={bridePhotoConfig.src}
                    alt={bridePhotoConfig.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <WeddingImage
                    src={null}
                    alt={bridePhotoConfig.alt}
                    placeholderLabel={bridePhotoConfig.placeholderLabel}
                    caption="Vị trí ảnh cô dâu"
                    aspectRatio=""
                    className="h-full w-full rounded-t-[6.5rem] rounded-b-[1.2rem]"
                  />
                )}
              </div>
            </div>

            {/* Bride Info */}
            <div className="mt-6 text-center">
              <span className="inline-block rounded-full bg-[#DBC4A2]/30 px-3.5 py-1 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-[#B79265]">
                Cô dâu
              </span>

              <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#523F34]">
                Khánh Ly
              </h3>

              <p className="mt-3 font-sans text-sm leading-relaxed text-[#796152]">
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
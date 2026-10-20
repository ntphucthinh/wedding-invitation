import { motion } from 'framer-motion';
import { heroPhotoConfig } from '@/config/weddingPhotos';
import { FloralCorner } from './Ornaments';

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FAF7F0] text-[#654B36] flex items-center justify-center md:py-6 lg:py-0 lg:h-screen lg:h-[100dvh] lg:max-h-[100dvh]">
      {/* Ambient Desktop Backdrop Pattern & Lighting */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: 'radial-gradient(#DFCEAA 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Soft romantic radial warm light behind center card on PC */}
      <div className="pointer-events-none hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,206,170,0.32)_0%,rgba(250,247,240,0.85)_60%,#FAF7F0_100%)]" />

      {/* Ambient softly blurred reflection of photo on desktop for rich luxury atmosphere */}
      {heroPhotoConfig.src && (
        <div className="pointer-events-none hidden md:block absolute inset-0 -z-0 opacity-15 blur-3xl scale-110 overflow-hidden">
          <img
            src={heroPhotoConfig.src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      {/* Main Wedding Invitation Card
          - Mobile (< md): Full screen edge-to-edge invitation cover
          - Tablet (md): Comfortable card with rounded corners and border
          - Desktop (lg+): Full viewport height (100dvh), width automatically scaled by 2:3 aspect ratio,
            crisp 1:1 image rendering where 100% of the photo is uncropped and couple's smiling faces are visible!
      */}
      <div className="wedding-cover-desktop relative w-full min-h-screen md:min-h-0 md:h-[94vh] md:max-h-[880px] md:w-auto md:aspect-[2/3] lg:h-screen lg:h-[100dvh] lg:max-h-[100dvh] lg:w-auto lg:aspect-[2/3] lg:max-w-full md:rounded-[2.25rem] lg:rounded-none md:border md:border-[#D5BC91] lg:border-x lg:border-y-0 lg:border-[#D5BC91]/70 md:shadow-[0_24px_55px_-12px_rgba(89,70,61,0.18)] lg:shadow-[0_0_55px_rgba(89,70,61,0.18)] overflow-hidden flex flex-col justify-between">
        {/*
          =======================================================================
          ẢNH BÌA THIỆP CƯỚI (HERO COVER - Image 1):
          - Tỉ lệ chuẩn đẹp nhất: Dọc 2:3 (Portrait)
          - Kích thước tối ưu: 1200 x 1800 px (hoặc 1080 x 1620 px)
          - Bố cục: Gương mặt dâu rể ở khoảng 15% - 40% tính từ đỉnh ảnh xuống
          - Cấu hình nguồn ảnh tại: src/config/weddingPhotos.ts (heroPhotoConfig)
          =======================================================================
        */}
        {heroPhotoConfig.src ? (
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroPhotoConfig.src}
              alt={heroPhotoConfig.alt}
              className="h-full w-full object-cover object-[center_16%] sm:object-[center_18%] lg:object-center"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#F5ECE0]">
            {/* Subtle romantic paper texture and radial aura */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,206,170,0.35)_0%,rgba(250,247,240,0.6)_50%,#FAF7F0_100%)]" />

            {/* Subtle watermark pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#C6A264 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Elegant placeholder badge in upper photo zone */}
            <div className="absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none opacity-85">
              <div className="flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#DFCEAA] bg-[#FFFDF9] shadow-[0_4px_16px_rgba(198,162,100,0.15)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C6A264"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <span className="mt-2 font-serif text-base sm:text-lg font-semibold tracking-[0.2em] text-[#59463D]">
                {heroPhotoConfig.placeholderLabel}
              </span>
              <span className="mt-0.5 rounded-full bg-[#DFCEAA]/35 px-2.5 py-0.5 font-sans text-[0.62rem] uppercase tracking-widest text-[#75665D]">
                Vị trí ảnh bìa thiệp cưới
              </span>
            </div>
          </div>
        )}

        {/* Balanced Ivory Champagne Overlay:
            A subtle, gentle warm ivory gradient that protects text readability
            while leaving the center completely natural and unbleached.
            - Top (35%): soft warm light behind header texts
            - Center (transparent): 100% natural photo clarity, rich contrast on hair, suit, glasses, skin & dress
            - Bottom (50%): gentle warm blend for wedding date and scroll indicator
        */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F7F0E5]/35 via-transparent to-[#F7F0E5]/50" />

        {/* Editorial Frame Line with Floral Corners */}
        <div className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-4 lg:inset-6 rounded-[1.25rem] sm:rounded-[1.75rem] md:rounded-[1.85rem] lg:rounded-[2rem] border border-[#D5BC91]/75 shadow-[inset_0_0_20px_rgba(198,162,100,0.06)]">
          <FloralCorner position="top-left" size={52} className="opacity-80" />
          <FloralCorner position="top-right" size={52} className="opacity-80" />
          <FloralCorner position="bottom-left" size={52} className="opacity-80" />
          <FloralCorner position="bottom-right" size={52} className="opacity-80" />
        </div>

        {/* Main Content inside the card */}
        <div className="relative z-10 flex h-full min-h-screen md:min-h-0 flex-1 flex-col items-center justify-between px-6 py-9 sm:py-11 md:py-8 lg:py-10 text-center">
          {/* Top Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center pt-2 sm:pt-3 lg:pt-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 sm:w-14 lg:w-16 bg-gradient-to-r from-transparent to-[#D5BC91]" />
              <span className="font-sans text-[0.7rem] sm:text-xs lg:text-[0.8rem] font-semibold uppercase tracking-[0.4em] text-[#C6A264]">
                Save The Date
              </span>
              <span className="h-px w-8 sm:w-14 lg:w-16 bg-gradient-to-l from-transparent to-[#D5BC91]" />
            </div>
            <p className="mt-1.5 font-serif text-sm sm:text-base lg:text-lg italic tracking-widest text-[#806B56]">
              We are getting married
            </p>
          </motion.div>

          {/* Center: Couple Names & Monogram */}
          <div className="my-auto py-4 sm:py-6 md:py-4 lg:py-6">
            {/* Subtle Laurel Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative mx-auto mb-3 lg:mb-4 flex h-16 w-16 sm:h-18 sm:w-18 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-[#D5BC91] bg-[#F9F4EA]/85 shadow-[0_4px_16px_rgba(101,75,54,0.06)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-1.5 rounded-full border border-dashed border-[#C6A264]/35" />
              <span className="font-allura text-[1.15rem] sm:text-[1.3rem] lg:text-[1.5rem] leading-none text-[#654B36] tracking-normal inline-flex items-center justify-center select-none whitespace-nowrap">
                <span>B</span>
                <span className="mx-1 text-[0.8em] text-[#C6A264]">&amp;</span>
                <span>L</span>
              </span>
            </motion.div>

            {/* Bride & Groom Grand Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative space-y-1"
            >
              {/* Subtle feather-soft local ivory halo to soften complex dress lace texture */}
              <div className="pointer-events-none absolute -inset-x-6 -inset-y-3 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,244,234,0.55)_0%,rgba(249,244,234,0.2)_45%,transparent_75%)] blur-sm" />

              <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[clamp(2.75rem,5.2dvh,4rem)] font-semibold tracking-wide text-[#4B3527] drop-shadow-[0_1px_2px_rgba(255,253,247,0.8)] leading-tight">
                Văn Bách
              </h1>
              <div className="my-1 flex items-center justify-center sm:my-1.5 lg:my-2">
                <span className="h-px w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-transparent to-[#D5BC91]" />
                <span className="font-allura mx-3 sm:mx-4 lg:mx-5 text-3xl sm:text-4xl lg:text-[clamp(2.25rem,4.2dvh,3.25rem)] text-[#C6A264] drop-shadow-[0_1px_2px_rgba(255,253,247,0.7)]">
                  &amp;
                </span>
                <span className="h-px w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-transparent to-[#D5BC91]" />
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-[clamp(2.75rem,5.2dvh,4rem)] font-semibold tracking-wide text-[#4B3527] drop-shadow-[0_1px_2px_rgba(255,253,247,0.8)] leading-tight">
                Khánh Ly
              </h1>
            </motion.div>

            {/* Wedding Date Capsule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-7 md:mt-5 lg:mt-6 inline-flex flex-col items-center"
            >
              <div className="rounded-full border border-[#D5BC91] bg-[#F9F4EA]/90 px-6 py-2 sm:px-7 sm:py-2.5 lg:px-8 lg:py-2.5 shadow-[0_4px_18px_rgba(101,75,54,0.08)] backdrop-blur-md">
                <span className="font-serif text-sm sm:text-base lg:text-lg tracking-[0.25em] font-semibold text-[#654B36]">
                  14 • 09 • 2026
                </span>
              </div>
              <p className="mt-2 font-sans text-xs lg:text-sm tracking-[0.2em] uppercase text-[#806B56] font-medium">
                Thứ Hai • 10:00 Sáng
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col items-center pb-2 sm:pb-3 lg:pb-4"
          >
            <span className="font-sans text-[0.68rem] sm:text-xs lg:text-[0.75rem] uppercase tracking-[0.25em] text-[#806B56] font-medium">
              Cuộn xuống để mở thiệp
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="mt-1.5 flex h-7 w-4.5 sm:h-8 sm:w-5 lg:h-9 lg:w-5.5 justify-center rounded-full border border-[#D5BC91] bg-[#F9F4EA]/60 backdrop-blur-sm pt-1"
            >
              <span className="h-1.5 w-1 rounded-full bg-[#C6A264]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
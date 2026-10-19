import { motion } from 'framer-motion';
import heroBackground from '@/assets/images/tai-xuong-20250809012834-nl0rs.jpg';
import { FloralCorner } from './Ornaments';

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F7F0E5] text-[#654B36]">
      {/* Background Image with Slow Subtle Zoom Effect - Natural contrast & texture preserved */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={heroBackground}
          alt="Ảnh cưới Văn Bách & Khánh Ly"
          className="h-full w-full object-cover object-[center_28%] sm:object-[center_25%] md:object-center"
        />
      </motion.div>

      {/* Balanced Ivory Champagne Overlay:
          A subtle, gentle warm ivory gradient that protects text readability
          while leaving the center completely natural and unbleached.
          - Top (30%): soft warm light behind header texts
          - Center (transparent): 100% natural photo clarity, rich contrast on hair, suit, glasses, skin & dress
          - Bottom (45%): gentle warm blend for wedding date and scroll indicator
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F0E5]/30 via-transparent to-[#F7F0E5]/45" />

      {/* Editorial Outer Frame Line */}
      <div className="pointer-events-none absolute inset-3 sm:inset-6 lg:inset-8 rounded-[1.25rem] sm:rounded-[2rem] border border-[#D5BC91]/75 shadow-[inset_0_0_20px_rgba(198,162,100,0.05)]">
        <FloralCorner position="top-left" size={56} className="opacity-80" />
        <FloralCorner position="top-right" size={56} className="opacity-80" />
        <FloralCorner position="bottom-left" size={56} className="opacity-80" />
        <FloralCorner position="bottom-right" size={56} className="opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-between px-6 py-14 text-center sm:px-8 sm:py-18 lg:py-22">
        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center pt-2 sm:pt-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D5BC91]" />
            <span className="font-sans text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A264]">
              Save The Date
            </span>
            <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D5BC91]" />
          </div>
          <p className="mt-2 font-serif text-sm sm:text-base italic tracking-widest text-[#806B56]">
            We are getting married
          </p>
        </motion.div>

        {/* Center: Couple Names & Monogram */}
        <div className="my-auto py-6 sm:py-8">
          {/* Subtle Laurel Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#D5BC91] bg-[#F9F4EA]/85 shadow-[0_4px_16px_rgba(101,75,54,0.06)] backdrop-blur-md sm:h-20 sm:w-20"
          >
            <div className="pointer-events-none absolute inset-1 rounded-full border border-dashed border-[#C6A264]/35" />
            <span className="font-allura text-2xl sm:text-3xl text-[#654B36]">
              B &amp; L
            </span>
          </motion.div>

          {/* Bride & Groom Grand Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative space-y-1"
          >
            {/* Subtle feather-soft local ivory halo to soften complex dress lace texture without creating a card/box */}
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-4 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,244,234,0.55)_0%,rgba(249,244,234,0.2)_45%,transparent_75%)] blur-sm" />

            <h1 className="font-serif text-5xl font-semibold tracking-wide text-[#4B3527] drop-shadow-[0_1px_2px_rgba(255,253,247,0.8)] sm:text-6xl md:text-7xl lg:text-8xl">
              Văn Bách
            </h1>
            <div className="my-1 flex items-center justify-center sm:my-2">
              <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D5BC91]" />
              <span className="font-allura mx-4 text-3xl text-[#C6A264] drop-shadow-[0_1px_2px_rgba(255,253,247,0.7)] sm:text-4xl md:text-5xl">
                &amp;
              </span>
              <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D5BC91]" />
            </div>
            <h1 className="font-serif text-5xl font-semibold tracking-wide text-[#4B3527] drop-shadow-[0_1px_2px_rgba(255,253,247,0.8)] sm:text-6xl md:text-7xl lg:text-8xl">
              Khánh Ly
            </h1>
          </motion.div>

          {/* Wedding Date Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 inline-flex flex-col items-center"
          >
            <div className="rounded-full border border-[#D5BC91] bg-[#F9F4EA]/90 px-6 py-2.5 sm:px-8 sm:py-3 shadow-[0_4px_18px_rgba(101,75,54,0.08)] backdrop-blur-md">
              <span className="font-serif text-base sm:text-lg tracking-[0.3em] font-semibold text-[#654B36]">
                14 • 09 • 2026
              </span>
            </div>
            <p className="mt-2.5 font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-[#806B56] font-medium">
              Thứ Hai • 10:00 Sáng
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center pb-3"
        >
          <span className="font-sans text-[0.68rem] sm:text-xs uppercase tracking-[0.3em] text-[#806B56] font-medium">
            Cuộn xuống để mở thiệp
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="mt-2 flex h-8 w-5 justify-center rounded-full border border-[#D5BC91] bg-[#F9F4EA]/60 backdrop-blur-sm pt-1"
          >
            <span className="h-1.5 w-1 rounded-full bg-[#C6A264]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
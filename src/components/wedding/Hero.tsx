import { motion } from 'framer-motion';
import heroBackground from '@/assets/images/tai-xuong-20250809012834-nl0rs.jpg';
import { FloralCorner } from './Ornaments';

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1D140D] text-white">
      {/* Background Image with Slow Subtle Zoom Effect */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={heroBackground}
          alt="Ảnh cưới Văn Bách & Khánh Ly"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Luxury Romantic Gradients & Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18110D]/70 via-[#2A1E16]/45 to-[#150F0B]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(21,15,11,0.6)_100%)]" />

      {/* Editorial Outer Frame Line */}
      <div className="pointer-events-none absolute inset-4 sm:inset-6 lg:inset-8 rounded-[1.5rem] sm:rounded-[2rem] border border-[#DFCEAA]/30">
        <FloralCorner position="top-left" size={64} className="opacity-80" />
        <FloralCorner position="top-right" size={64} className="opacity-80" />
        <FloralCorner position="bottom-left" size={64} className="opacity-80" />
        <FloralCorner position="bottom-right" size={64} className="opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-between px-6 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        {/* Top Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center pt-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#DFCEAA]" />
            <span className="font-sans text-[0.7rem] sm:text-xs font-medium uppercase tracking-[0.4em] text-[#DFCEAA]">
              Save The Date
            </span>
            <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#DFCEAA]" />
          </div>
          <p className="mt-2 font-serif text-sm sm:text-base italic tracking-widest text-[#FFFDF9]/85">
            We are getting married
          </p>
        </motion.div>

        {/* Center: Couple Names & Monogram */}
        <div className="my-auto py-8">
          {/* Subtle Laurel Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#DFCEAA]/40 bg-[#FFFDF9]/10 backdrop-blur-sm sm:h-20 sm:w-20"
          >
            <span className="font-allura text-2xl sm:text-3xl text-[#DFCEAA]">
              B &amp; L
            </span>
          </motion.div>

          {/* Bride & Groom Grand Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-1"
          >
            <h1 className="font-serif text-5xl font-medium tracking-wide text-[#FFFDF9] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md">
              Văn Bách
            </h1>
            <div className="flex items-center justify-center my-1 sm:my-2">
              <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#DFCEAA]/60" />
              <span className="font-allura mx-4 text-3xl sm:text-4xl md:text-5xl text-[#DFCEAA]">
                &amp;
              </span>
              <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#DFCEAA]/60" />
            </div>
            <h1 className="font-serif text-5xl font-medium tracking-wide text-[#FFFDF9] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-md">
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
            <div className="rounded-full border border-[#DFCEAA]/50 bg-[#1D140D]/60 px-6 py-2.5 sm:px-8 sm:py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <span className="font-serif text-base sm:text-lg tracking-[0.3em] font-semibold text-[#DFCEAA]">
                14 • 09 • 2026
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#FFFDF9]/80 font-sans">
              Thứ Hai • 10:00 Sáng
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center pb-2"
        >
          <span className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] text-[#DFCEAA]/80 font-sans">
            Cuộn xuống để mở thiệp
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="mt-2 flex h-8 w-5 justify-center rounded-full border border-[#DFCEAA]/40 pt-1"
          >
            <span className="h-1.5 w-1 rounded-full bg-[#DFCEAA]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
import { motion } from "framer-motion";
import { FaHeart, FaChevronDown } from "react-icons/fa";
import heroBackground from "@/assets/images/tai-xuong-20250809012834-nl0rs.jpg";
import logo from "@/assets/images/wedding-heart-logo.png";


function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1d140d] text-white">
      <img
        src={heroBackground}
        alt="Wedding background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#130d08]/80 via-[#2f1f14]/70 to-[#0f0b08]/90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="font-playfair text-[50px] font-wedding uppercase leading-[1.05] text-[#fff6d3]">
            We Get
          </h2>

          <h1
            className="text-[90px] tracking-[2px] text-[#fff6d3]">
            Married
          </h1>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-semibold text-4xl leading-tight sm:text-5xl lg:text-7xl"
        >
          Văn Bách <span className="mx-3 text-[#f2d28b]">&</span> Khánh Ly
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 rounded-full border border-[#f2d28b]/40 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#f2d28b] backdrop-blur"
        >
          14 • 09 • 2026
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;

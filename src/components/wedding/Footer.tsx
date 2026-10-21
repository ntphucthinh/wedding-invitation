import { motion } from 'framer-motion';
import { DividerFlourish, BotanicalBranch } from './Ornaments';

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2B1F18] px-6 py-16 text-center text-[#DBC4A2] sm:px-8 sm:py-20">
      {/* Subtle top border line with gold glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B79265]/50 to-transparent" />

      <div className="relative mx-auto max-w-2xl space-y-5">
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#DBC4A2]/30 bg-[#FFFBF5]/5 backdrop-blur-sm"
        >
          <span className="font-allura text-2xl text-[#DBC4A2]">
            B &amp; L
          </span>
        </motion.div>

        {/* Couple Names */}
        <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-[#FFFBF5]">
          Văn Bách &amp; Khánh Ly
        </h3>

        {/* Wedding Date */}
        <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[#DBC4A2]">
          14 • 09 • 2026
        </p>

        <DividerFlourish color="#DBC4A2" className="opacity-60 my-3" />

        {/* Thank You Note */}
        <p className="mx-auto max-w-xl font-serif text-sm sm:text-base italic leading-relaxed text-[#FFFBF5]/85">
          “Chúng tôi chân thành cảm ơn gia đình, bạn bè và những người thân yêu đã đồng hành và gửi lời chúc tốt đẹp. Sự hiện diện của bạn là niềm hạnh phúc lớn nhất với chúng tôi.”
        </p>

        {/* Gratitude Sign-off */}
        <div className="pt-2">
          <p className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#DBC4A2]">
            Thank You!
          </p>
          <div className="mt-3 flex justify-center">
            <BotanicalBranch className="opacity-70" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
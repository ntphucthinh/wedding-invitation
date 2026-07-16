import { motion } from "framer-motion";
import brideImage from "@/assets/images/snapedit_1754669957636-20250809012839-8oehf.jpeg";
import groomImage from "@/assets/images/z6888086390153_6ad418f0bd3ef4e64e5141b55a7f606c-20250809012838-3nxjw.jpg";

function Couple() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-[#fcfaf2] py-16"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/pattern.png')", // đổi sang background của bạn nếu có
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[420px] px-2">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#9e8130]">
            Trân trọng kính mời
          </p>

          <p className="mt-2 text-xl italic text-[#8b0000]">Quý khách</p>

          <h2 className="mt-3 font-wedding text-4xl text-[#8b0000] sm:text-5xl">
            Đến dự buổi lễ cưới của
          </h2>
        </div>

        {/* Couple Layout */}
        <div className="relative mt-10 h-[600px]">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-14 w-[48%]"
          >
            <div className="mb-4">
              <p className="font-wedding text-[38px] text-[#b58b35] leading-none">
                Chú rể
              </p>

              <h3 className="text-[32px] font-semibold text-[#9e8130]">
                Văn Bách
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6a4c2a]">
                Một người con trai trân trọng những điều nhỏ bé và luôn giữ trái
                tim ấm áp cho gia đình.
              </p>
            </div>

            <img
              src={groomImage}
              alt="Chú rể"
              className="h-[320px] w-full object-cover shadow-xl rounded-[1.2rem]"
            />
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute right-0 top-0 w-[48%]"
          >
            <img
              src={brideImage}
              alt="Cô dâu"
              className="h-[320px] w-full object-cover shadow-xl rounded-[1.2rem]"
            />

            <div className="mt-4 text-center">
              <p className="font-wedding text-[38px] text-[#b58b35] leading-none">
                Cô dâu
              </p>

              <h3 className="text-[32px] font-semibold text-[#9e8130]">
                Khánh Ly
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6a4c2a]">
                Dịu dàng, tử tế và luôn biến những khoảnh khắc bình thường thành
                điều đặc biệt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Couple;

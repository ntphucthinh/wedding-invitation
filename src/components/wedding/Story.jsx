import { motion } from 'framer-motion';
import storyImage from '@/assets/images/tai-xuong-1-20250809012834-bywlo.jpg';

// const timeline = [
//   { date: '2019', title: 'Gặp nhau', description: 'Chúng tôi bắt đầu quen nhau từ những tin nhắn vu vơ và những buổi hẹn hò giản dị.' },
//   { date: '2021', title: 'Đồng hành', description: 'Tình cảm lớn lên từng ngày, cùng nhau chia sẻ niềm vui, nỗi buồn và những điều nhỏ bé.' },
//   { date: '2026', title: 'Đăng ký hôn nhân', description: 'Ngày hôm nay là kết quả của một hành trình dài, đầy yêu thương và sự tin tưởng.' },
// ];

function Story() {
  return (
    <section className="bg-[#f7efe0] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#9e8130]">Câu chuyện của chúng tôi</p>
          <h2 className="mt-3 font-wedding text-4xl text-[#8b0000] sm:text-5xl">Tình yêu lớn lên từng ngày</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={storyImage}
            alt="Câu chuyện tình yêu"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          />

          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-[#e3d3a7] bg-white/80 p-6 shadow-sm">
              <p className="text-lg leading-8 text-gray-700">
                “Chúng tôi gặp nhau như một sự tình cờ, nhưng lại ở bên nhau như một điều đã được định sẵn. Từ những tin nhắn vu vơ, những buổi hẹn hò giản dị, tình cảm lớn lên từng ngày. Và giờ đây, chúng tôi quyết định cùng nhau viết tiếp câu chuyện ấy, bằng một đám cưới trọn vẹn yêu thương.”
              </p>
            </div>
            {/* {timeline.map((item, index) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[1.5rem] border border-[#e3d3a7] bg-white/80 p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9e8130]">{item.date}</p>
                <h3 className="mt-2 font-wedding text-2xl text-[#8b0000]">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </motion.div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;

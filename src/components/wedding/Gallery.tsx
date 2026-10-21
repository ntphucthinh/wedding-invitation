import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';

import { DividerFlourish } from './Ornaments';
import WeddingImage from './WeddingImage';
import { weddingGalleryItems } from '@/config/weddingGallery';

function Gallery() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItem = weddingGalleryItems[activeIndex] ?? weddingGalleryItems[0];

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#F8F3EA] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#B79265]">
            Khoảnh khắc yêu thương
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#523F34]">
            Những Khoảnh Khắc Đáng Nhớ
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-sm sm:text-base text-[#796152]">
            Từng ánh mắt, nụ cười và khoảnh khắc thiêng liêng nhất trên hành trình của chúng tôi.
          </p>
          <DividerFlourish className="mt-4" />
        </motion.div>

        {/* Slideshow Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 sm:mt-10 max-w-4xl"
        >
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#E0D3C1] bg-[#FCF8F2] p-2.5 sm:p-3.5 shadow-[0_12px_32px_-4px_rgba(82,63,52,0.06)] transition-all duration-300 hover:shadow-[0_18px_40px_-6px_rgba(82,63,52,0.1)]">
            {/* 1. Image Viewport (Hiển thị ảnh trọn vẹn 100% không cắt xén, có nền ambient blur mềm mại)
                * Ghi chú tỉ lệ ảnh thực tế:
                * - Các ảnh đang có trong weddingGalleryItems đều là ảnh dọc tỉ lệ 2:3 (450x675px, 1066x1600px).
                * - Tỉ lệ đẹp nhất khuyên dùng khi up ảnh mới: 2:3 (tối ưu: 1200x1800px) hoặc 3:4 (1200x1600px).
            */}
            <div className="gallery-image-wrapper relative overflow-hidden rounded-[1.6rem] bg-[#F3EBE1]">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={1}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full w-full select-none"
              >
                {weddingGalleryItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] w-full overflow-hidden flex items-center justify-center bg-[#F3EBE1]">
                      {/* Ambient diffused background using the photo's own colors for soft, luxury border fill */}
                      {item.src && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            src={item.src}
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-cover blur-2xl opacity-35 scale-110"
                          />
                          <div className="absolute inset-0 bg-[#F8F3EA]/40 backdrop-blur-[2px]" />
                        </div>
                      )}

                      {/*
                        =============================================================
                        ẢNH ALBUM KHOẢNH KHẮC CƯỚI (GALLERY SLIDES - Image 4 đến Image 7):
                        - Tỉ lệ chuẩn đẹp nhất: Đồng bộ dọc 2:3 (Portrait)
                        - Kích thước tối ưu: 1200 x 1800 px (hoặc 1000 x 1500 px)
                        - Cấu hình nguồn ảnh tại: src/config/weddingPhotos.ts (galleryPhotoConfigs)
                        =============================================================
                      */}
                      {/* Foreground full uncropped photo or placeholder */}
                      <div className="relative z-10 flex h-full w-full items-center justify-center p-2.5 sm:p-4">
                        {item.src ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="max-h-full max-w-full h-auto w-auto object-contain rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgba(82,63,52,0.1)] border border-[#E0D3C1]/80 select-none pointer-events-none"
                          />
                        ) : (
                          <WeddingImage
                            src={null}
                            alt={item.alt}
                            placeholderLabel={item.placeholderLabel}
                            caption={item.caption}
                            aspectRatio="aspect-[2/3]"
                            className="h-full max-w-sm w-full rounded-xl sm:rounded-2xl shadow-sm"
                          />
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Button: Prev */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperInstance?.slidePrev();
                }}
                aria-label="Ảnh trước"
                className="gallery-navigation-button gallery-nav-prev absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-[#DBC4A2] bg-[#FCF8F2]/90 text-[#523F34] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#6C4E3A] hover:text-[#FFFBF5] hover:border-[#6C4E3A] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B79265]/40"
              >
                <FaChevronLeft className="text-xs sm:text-sm -translate-x-[1px]" />
              </button>

              {/* Navigation Button: Next */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperInstance?.slideNext();
                }}
                aria-label="Ảnh tiếp theo"
                className="gallery-navigation-button gallery-nav-next absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-[#DBC4A2] bg-[#FCF8F2]/90 text-[#523F34] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#6C4E3A] hover:text-[#FFFBF5] hover:border-[#6C4E3A] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B79265]/40"
              >
                <FaChevronRight className="text-xs sm:text-sm translate-x-[1px]" />
              </button>
            </div>

            {/* 2. Caption Area (Positioned below image wrapper, height reserved to prevent layout shifts) */}
            <div className="flex min-h-[68px] sm:min-h-[76px] flex-col justify-center px-4 pt-3.5 pb-2 text-center">
              <p className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[#523F34] transition-opacity duration-300">
                {currentItem?.alt}
              </p>
              {currentItem?.caption && (
                <p className="mt-1 font-sans text-xs sm:text-sm text-[#796152]/85 line-clamp-2 transition-opacity duration-300">
                  {currentItem.caption}
                </p>
              )}
            </div>

            {/* 3. Indicators (Minimalist dots, Antique gold / Muted beige, synchronized with active slide) */}
            <div
              role="tablist"
              aria-label="Danh sách các ảnh trình chiếu"
              className="flex items-center justify-center gap-2 pb-1.5 pt-1"
            >
              {weddingGalleryItems.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Chuyển đến ảnh ${idx + 1}: ${item.alt}`}
                    onClick={() => swiperInstance?.slideToLoop(idx)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B79265]/40 ${
                      isActive
                        ? 'w-6 bg-[#B79265] shadow-sm'
                        : 'w-2 bg-[#E0D3C1] hover:bg-[#B79265]/70'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
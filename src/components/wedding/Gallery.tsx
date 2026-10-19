import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';

import { DividerFlourish } from './Ornaments';
import WeddingImage from './WeddingImage';
import { weddingGalleryItems, type WeddingPhotoItem } from '@/config/weddingGallery';

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<WeddingPhotoItem | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItem = weddingGalleryItems[activeIndex] ?? weddingGalleryItems[0];

  // Close lightbox modal on Escape key
  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#FFFDF9] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.4em] text-[#C6A66B]">
            Khoảnh khắc yêu thương
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#59463D]">
            Những Khoảnh Khắc Đáng Nhớ
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-sm sm:text-base text-[#75665D]">
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
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#E8DED0] bg-[#FAF7F0] p-2.5 sm:p-3.5 shadow-[0_12px_32px_-4px_rgba(89,70,61,0.06)] transition-all duration-300 hover:shadow-[0_18px_40px_-6px_rgba(89,70,61,0.1)]">
            {/* 1. Image Viewport (Relative wrapper, hosts the navigation buttons centered on the image) */}
            <div className="gallery-image-wrapper relative overflow-hidden rounded-[1.6rem] bg-[#F5EFEB]">
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
                    <div
                      onClick={() => setSelectedPhoto(item)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Xem ảnh lớn: ${item.alt}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedPhoto(item);
                        }
                      }}
                      className="group/img relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full cursor-pointer overflow-hidden"
                    >
                      <WeddingImage
                        src={item.src}
                        alt={item.alt}
                        placeholderLabel={item.placeholderLabel}
                        aspectRatio="h-full w-full"
                        className="h-full w-full"
                        imgClassName="transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
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
                className="gallery-navigation-button gallery-nav-prev absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-[#D9C49B] bg-[#FAF7F0]/90 text-[#59463D] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#FAF7F0] hover:text-[#C6A264] hover:border-[#C6A264] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C6A264]/40"
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
                className="gallery-navigation-button gallery-nav-next absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-[#D9C49B] bg-[#FAF7F0]/90 text-[#59463D] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#FAF7F0] hover:text-[#C6A264] hover:border-[#C6A264] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C6A264]/40"
              >
                <FaChevronRight className="text-xs sm:text-sm translate-x-[1px]" />
              </button>
            </div>

            {/* 2. Caption Area (Positioned below image wrapper, height reserved to prevent layout shifts) */}
            <div className="flex min-h-[68px] sm:min-h-[76px] flex-col justify-center px-4 pt-3.5 pb-2 text-center">
              <p className="font-serif text-base sm:text-lg md:text-xl font-semibold text-[#59463D] transition-opacity duration-300">
                {currentItem?.alt}
              </p>
              {currentItem?.caption && (
                <p className="mt-1 font-sans text-xs sm:text-sm text-[#75665D]/85 line-clamp-2 transition-opacity duration-300">
                  {currentItem.caption}
                </p>
              )}
            </div>

            {/* 3. Indicators (Minimalist dots, Champagne gold / Warm brown, synchronized with active slide) */}
            <div
              role="tablist"
              aria-label="Danh sách các ảnh trình chiếu"
              className="flex items-center justify-center gap-2 pb-2.5 pt-1"
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
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A264]/40 ${
                      isActive
                        ? 'w-6 bg-[#9C7540] shadow-sm'
                        : 'w-2 bg-[#D9C9AC] hover:bg-[#C6A264]/70'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-[2rem] border border-[#DFCEAA]/50 bg-[#FFFDF9] p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Đóng ảnh"
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3D2F28]/80 text-[#FFFDF9] backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C6A264]"
              >
                <FaTimes />
              </button>

              <div className="max-h-[75vh] overflow-hidden rounded-[1.5rem]">
                <WeddingImage
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  placeholderLabel={selectedPhoto.placeholderLabel}
                  aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                  className="max-h-[75vh] w-full"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#59463D]">
                  {selectedPhoto.alt}
                </h3>
                {selectedPhoto.caption && (
                  <p className="mt-1 font-sans text-xs sm:text-sm text-[#75665D]">
                    {selectedPhoto.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
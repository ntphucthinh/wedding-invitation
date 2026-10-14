import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaTimes, FaThLarge, FaFilm } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DividerFlourish } from './Ornaments';
import WeddingImage from './WeddingImage';
import { weddingGalleryItems, type WeddingPhotoItem } from '@/config/weddingGallery';

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<WeddingPhotoItem | null>(null);
  const [viewMode, setViewMode] = useState<'mosaic' | 'slider'>('mosaic');

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#FFFDF9] py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
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

          {/* View Mode Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full border border-[#DFCEAA] bg-[#FAF7F0] p-1 shadow-sm">
            <button
              onClick={() => setViewMode('mosaic')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                viewMode === 'mosaic'
                  ? 'bg-[#59463D] text-[#FFFDF9] shadow-sm'
                  : 'text-[#75665D] hover:text-[#59463D]'
              }`}
            >
              <FaThLarge className="text-xs" /> Tạp chí ảnh
            </button>
            <button
              onClick={() => setViewMode('slider')}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                viewMode === 'slider'
                  ? 'bg-[#59463D] text-[#FFFDF9] shadow-sm'
                  : 'text-[#75665D] hover:text-[#59463D]'
              }`}
            >
              <FaFilm className="text-xs" /> Trình chiếu
            </button>
          </div>
        </motion.div>

        {/* View Mode 1: Editorial Magazine Mosaic */}
        {viewMode === 'mosaic' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 space-y-6"
          >
            {/* Top Featured Row: 1 Grand Feature (Left) + 2 Secondary (Right) */}
            <div className="grid gap-6 md:grid-cols-12 md:items-stretch">
              {/* Grand Feature Card */}
              <div
                onClick={() => setSelectedPhoto(weddingGalleryItems[0])}
                className="group relative cursor-pointer md:col-span-7 overflow-hidden rounded-[2.2rem] border border-[#E8DED0] bg-[#FAF7F0] p-2 shadow-[0_12px_32px_-4px_rgba(89,70,61,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_-8px_rgba(89,70,61,0.14)]"
              >
                <div className="relative h-full min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-[1.8rem]">
                  <WeddingImage
                    src={weddingGalleryItems[0].src}
                    alt={weddingGalleryItems[0].alt}
                    placeholderLabel={weddingGalleryItems[0].placeholderLabel}
                    aspectRatio="h-full w-full"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E16]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                    <div className="text-white">
                      <p className="font-serif text-xl sm:text-2xl font-semibold">
                        {weddingGalleryItems[0].alt}
                      </p>
                      <p className="mt-1 text-xs text-[#DFCEAA] font-sans">
                        {weddingGalleryItems[0].caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Stacked Cards on Right */}
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 md:col-span-5">
                {[weddingGalleryItems[1], weddingGalleryItems[2]].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPhoto(item)}
                    className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#E8DED0] bg-[#FAF7F0] p-2 shadow-[0_10px_24px_rgba(89,70,61,0.06)] transition-all duration-300 hover:shadow-[0_16px_35px_rgba(89,70,61,0.12)]"
                  >
                    <div className="relative h-[220px] sm:h-[240px] overflow-hidden rounded-[1.5rem]">
                      <WeddingImage
                        src={item.src}
                        alt={item.alt}
                        placeholderLabel={item.placeholderLabel}
                        aspectRatio="h-full w-full"
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E16]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                        <p className="font-serif text-sm font-medium text-white">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: 4 Balanced Editorial Cards (Including Placeholders Image 1, Image 2, Image 3) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
              {weddingGalleryItems.slice(3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedPhoto(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] border border-[#E8DED0] bg-[#FAF7F0] p-2 shadow-[0_8px_20px_rgba(89,70,61,0.05)] transition-all duration-300 hover:shadow-[0_14px_30px_rgba(89,70,61,0.1)] hover:border-[#DFCEAA]"
                >
                  <div className="relative h-[240px] sm:h-[280px] overflow-hidden rounded-[1.3rem]">
                    <WeddingImage
                      src={item.src}
                      alt={item.alt}
                      placeholderLabel={item.placeholderLabel}
                      aspectRatio="h-full w-full"
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E16]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                      <p className="font-serif text-xs sm:text-sm font-medium text-white line-clamp-1">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* View Mode 2: Swiper Slider Carousel */}
        {viewMode === 'slider' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14 wedding-swiper"
            >
              {weddingGalleryItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    onClick={() => setSelectedPhoto(item)}
                    className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#E8DED0] bg-[#FAF7F0] p-2 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="relative h-[340px] overflow-hidden rounded-[1.6rem]">
                      <WeddingImage
                        src={item.src}
                        alt={item.alt}
                        placeholderLabel={item.placeholderLabel}
                        aspectRatio="h-full w-full"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-serif text-base font-semibold text-[#59463D] truncate">
                        {item.alt}
                      </p>
                      {item.caption && (
                        <p className="font-sans text-xs text-[#75665D]/80 truncate">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
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
                onClick={() => setSelectedPhoto(null)}
                aria-label="Đóng ảnh"
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3D2F28]/80 text-[#FFFDF9] backdrop-blur-sm transition-transform hover:scale-110"
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
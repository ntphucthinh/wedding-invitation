import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import galleryOne from '@/assets/images/betterimage_1754671494992-20250809012834-m-edg.jpeg';
import galleryTwo from '@/assets/images/betterimage_1754671511212-20250809012834-ygz08.jpeg';
import galleryThree from '@/assets/images/snapedit_1754670036384-20250809012838-xbxki.jpeg';
import galleryFour from '@/assets/images/z6888117023198_c24fe7d0cb4f28c899222a499b237729-20250809012834-9fkoy.jpg';

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  { src: galleryOne, alt: 'Ảnh cưới 1' },
  { src: galleryTwo, alt: 'Ảnh cưới 2' },
  { src: galleryThree, alt: 'Ảnh cưới 3' },
  { src: galleryFour, alt: 'Ảnh cưới 4' },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="bg-[#fcfaf2] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-wedding text-4xl text-[#8b0000] sm:text-5xl">Những khoảnh khắc đáng nhớ</h2>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
                className="w-full overflow-hidden rounded-[1.5rem] border border-[#e3d3a7] bg-white p-2 shadow-sm"
              >
                <img src={image.src} alt={image.alt} className="h-80 w-full rounded-[1.2rem] object-cover" />
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8" onClick={() => setSelectedImage(null)}>
          <div className="max-h-full max-w-4xl rounded-[2rem] bg-white p-3" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] w-full rounded-[1.5rem] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

import galleryOne from '@/assets/images/betterimage_1754671494992-20250809012834-m-edg.jpeg';
import galleryTwo from '@/assets/images/betterimage_1754671511212-20250809012834-ygz08.jpeg';
import galleryThree from '@/assets/images/snapedit_1754670036384-20250809012838-xbxki.jpeg';
import galleryFour from '@/assets/images/z6888117023198_c24fe7d0cb4f28c899222a499b237729-20250809012834-9fkoy.jpg';

export interface WeddingPhotoItem {
  id: string;
  src: string | null;
  placeholderLabel?: string;
  alt: string;
  caption?: string;
  ratio?: 'portrait' | 'landscape' | 'square';
}

/**
 * Centralized Wedding Gallery & Image configuration.
 * When real photos are available for placeholders, simply assign `src` to the imported image asset or URL.
 */
export const weddingGalleryItems: WeddingPhotoItem[] = [
  {
    id: 'gallery-1',
    src: galleryOne,
    placeholderLabel: 'Image 1',
    alt: 'Khoảnh khắc cô dâu chú rể trao nụ cười',
    caption: 'Tình yêu khởi đầu từ những điều bình dị nhất',
    ratio: 'portrait',
  },
  {
    id: 'gallery-2',
    src: galleryTwo,
    placeholderLabel: 'Image 2',
    alt: 'Ảnh cưới nắm tay hạnh phúc',
    caption: 'Cùng nhau bước đi trên con đường tương lai',
    ratio: 'portrait',
  },
  {
    id: 'gallery-3',
    src: galleryThree,
    placeholderLabel: 'Image 3',
    alt: 'Khoảnh khắc lãng mạn của cặp đôi',
    caption: 'Mỗi ánh nhìn đều chan chứa yêu thương',
    ratio: 'portrait',
  },
  {
    id: 'gallery-4',
    src: galleryFour,
    placeholderLabel: 'Image 4',
    alt: 'Khoảnh khắc ngọt ngào bên nhau',
    caption: 'Hạnh phúc trọn vẹn trong từng giây phút',
    ratio: 'portrait',
  },
  {
    id: 'gallery-placeholder-1',
    src: null,
    placeholderLabel: 'Image 1',
    alt: 'Ảnh cưới nghệ thuật mới — Image 1',
    caption: 'Khoảnh khắc trao nhẫn thiêng liêng',
    ratio: 'portrait',
  },
  {
    id: 'gallery-placeholder-2',
    src: null,
    placeholderLabel: 'Image 2',
    alt: 'Ảnh cưới phong cách editorial — Image 2',
    caption: 'Ánh mắt hạnh phúc trao nhau',
    ratio: 'portrait',
  },
  {
    id: 'gallery-placeholder-3',
    src: null,
    placeholderLabel: 'Image 3',
    alt: 'Ảnh cưới ngoài trời lãng mạn — Image 3',
    caption: 'Dưới ánh hoàng hôn rạng ngời',
    ratio: 'portrait',
  },
];

export const venuePhotoItem: WeddingPhotoItem = {
  id: 'venue-image',
  src: null,
  placeholderLabel: 'Image 4',
  alt: 'Không gian sảnh tiệc lễ cưới — Image 4',
  caption: 'Không gian ấm cúng đón tiếp khách quý',
  ratio: 'landscape',
};

export const storyAccentItem: WeddingPhotoItem = {
  id: 'story-accent',
  src: null,
  placeholderLabel: 'Image 5',
  alt: 'Khoảnh khắc hẹn hò kỷ niệm — Image 5',
  caption: 'Hành trình từ ngày đầu gặp gỡ',
  ratio: 'square',
};
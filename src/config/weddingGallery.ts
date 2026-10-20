import { galleryPhotoConfigs, type WeddingPhotoSlot } from './weddingPhotos';

/**
 * =========================================================================
 * HƯỚNG DẪN TỈ LỆ ẢNH CƯỚI ĐẸP NHẤT (OPTIMAL WEDDING PHOTO ASPECT RATIO GUIDE)
 * =========================================================================
 * 1. TỈ LỆ ĐẸP NHẤT CHO ALBUM KHOẢNH KHẮC:
 *    - Ảnh dọc 2:3 (Khuyên dùng chuẩn nhất cho toàn bộ album):
 *      + Kích thước tối ưu: 1200 x 1800 px (hoặc 1000 x 1500 px, 1066 x 1600 px).
 *      + Tỉ lệ 2:3 là tỉ lệ chụp ảnh cưới studio tiêu chuẩn tại Việt Nam và quốc tế.
 *      + Hiển thị trọn vẹn toàn thân, váy cưới và khuôn mặt rạng rỡ của dâu rể
 *        mà không bị crop hay thừa viền trên cả Mobile và PC.
 *    - Ảnh dọc 3:4 (Chuẩn chân dung nghệ thuật):
 *      + Kích thước tối ưu: 1200 x 1600 px (hoặc 900 x 1200 px).
 *
 * 2. ẢNH NGANG (LANDSCAPE - NẾU CÓ):
 *    - Tỉ lệ 3:2 (1800 x 1200 px) hoặc 16:9 (1920 x 1080 px).
 *
 * 3. LƯU Ý VỀ ĐỒNG BỘ:
 *    - Nên chuẩn bị toàn bộ ảnh trong album theo cùng 1 tỉ lệ 2:3 để slideshow
 *      chuyển cảnh mượt mà, đồng đều và mang lại trải nghiệm thị giác cao cấp nhất.
 * =========================================================================
 */

export type WeddingPhotoItem = WeddingPhotoSlot;

/**
 * Centralized Wedding Gallery & Image configuration.
 * All items default to elegant placeholders (Image 4, Image 5, Image 6, Image 7)
 * while awaiting official wedding photos.
 */
export const weddingGalleryItems: WeddingPhotoItem[] = galleryPhotoConfigs;

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
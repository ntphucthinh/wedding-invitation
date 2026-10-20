export interface WeddingPhotoSlot {
  id: string;
  src: string | null;
  placeholderLabel: string;
  alt: string;
  caption?: string;
  ratio?: 'portrait' | 'landscape' | 'square';
  recommendedRatio?: string;
  recommendedDimensions?: string;
  compositionNotes?: string;
}

/**
 * =========================================================================================
 * BẢNG TỔNG HỢP TỈ LỆ & KÍCH THƯỚC HÌNH ẢNH CHUẨN ĐẸP NHẤT CHO TOÀN BỘ WEBSITE CƯỚI:
 * =========================================================================================
 *
 * 1. ẢNH BÌA THIỆP CƯỚI (HERO WEDDING COVER - Image 1):
 *    - Tỉ lệ hiển thị chuẩn đẹp nhất: DỌC 2:3 (Portrait - Width 2, Height 3).
 *    - Kích thước khuyên dùng: 1200 × 1800 px (hoặc tối thiểu 1080 × 1620 px, tối đa 2000 × 3000 px).
 *    - Bố cục khuôn mặt dâu rể:
 *      + Gương mặt cô dâu & chú rể nên nằm ở khoảng 15% - 40% tính từ mép trên ảnh xuống.
 *      + Vùng từ 40% trở xuống là váy cưới/vest/hoa cầm tay, làm nền trang nhã cho tên dâu rể và ngày cưới.
 *    - Lý do: Trên PC, thiệp cưới hiển thị tỷ lệ 2:3 chiếm trọn 100% chiều cao màn hình (100dvh).
 *      Ảnh chuẩn 2:3 sẽ khớp khít 100% không bị crop hay méo hình.
 *
 * 2. ẢNH CHÂN DUNG CHÚ RỂ (GROOM PHOTO - Image 2):
 *    - Tỉ lệ hiển thị chuẩn đẹp nhất: DỌC 2:3 hoặc 3:4.
 *    - Kích thước khuyên dùng: 900 × 1350 px (tỉ lệ 2:3) hoặc 900 × 1200 px (tỉ lệ 3:4).
 *    - Bố cục khuôn mặt: Chụp bán thân (từ ngực trở lên), mặt chú rể ở nửa trên khung hình
 *      để khớp hoàn hảo với khung vòm uốn cong cổ điển (Arch Frame).
 *
 * 3. ẢNH CHÂN DUNG CÔ DÂU (BRIDE PHOTO - Image 3):
 *    - Tỉ lệ hiển thị chuẩn đẹp nhất: DỌC 2:3 hoặc 3:4.
 *    - Kích thước khuyên dùng: 900 × 1350 px (tỉ lệ 2:3) hoặc 900 × 1200 px (tỉ lệ 3:4).
 *    - Bố cục khuôn mặt: Chụp bán thân (từ ngực trở lên), mặt cô dâu ở nửa trên khung hình
 *      để đồng bộ hoàn hảo với khung chân dung chú rể bên cạnh.
 *
 * 4. ALBUM ẢNH KHOẢNH KHẮC CƯỚI (GALLERY SLIDESHOW - Image 4 đến Image 7):
 *    - Tỉ lệ hiển thị chuẩn đẹp nhất: ĐỒNG NHẤT DỌC 2:3 cho tất cả các slide.
 *    - Kích thước khuyên dùng: 1200 × 1800 px (hoặc 1000 × 1500 px, 1066 × 1600 px).
 *    - Lý do: Slideshow hiển thị ảnh nguyên vẹn 100% không cắt xén (object-contain).
 *      Khi tất cả ảnh cùng một tỉ lệ 2:3, chuyển slide sẽ cực kỳ mượt mà, khung hình
 *      không bị giật hay co giãn kích thước, tạo cảm giác sang trọng như xem lookbook studio.
 *
 * 5. MÃ QR MỪNG CƯỚI (WEDDING GIFT QR CODE):
 *    - Tỉ lệ chuẩn: VUÔNG 1:1.
 *    - Kích thước khuyên dùng: 600 × 600 px đến 800 × 800 px.
 *    - Lưu ý: Giữ viền trắng (quiet zone) xung quanh mã QR tối thiểu 20px để thiết bị quét nhanh và nhạy.
 * =========================================================================================
 */

/**
 * 1. Hero Wedding Cover (Ảnh bìa thiệp cưới)
 * - Tỉ lệ chuẩn: Dọc 2:3
 * - Kích thước tối ưu: 1200 × 1800 px
 */
export const heroPhotoConfig: WeddingPhotoSlot = {
  id: 'hero-cover',
  src: null, // Vị trí chờ ảnh cưới chính thức (Image 1)
  placeholderLabel: 'Image 1',
  alt: 'Ảnh bìa thiệp cưới — Image 1',
  caption: 'Văn Bách & Khánh Ly',
  ratio: 'portrait',
  recommendedRatio: '2:3 (Dọc / Portrait)',
  recommendedDimensions: '1200 x 1800 px (hoặc 1080 x 1620 px)',
  compositionNotes: 'Mặt dâu rể nằm ở vùng 15% - 40% từ đỉnh ảnh xuống, nửa dưới là thân áo váy làm nền cho thông tin thiệp.',
};

/**
 * 2. Couple Photos (Chân dung Chú rể & Cô dâu)
 * - Tỉ lệ chuẩn: Dọc 2:3 hoặc 3:4
 * - Kích thước tối ưu: 900 × 1350 px (2:3) hoặc 900 × 1200 px (3:4)
 */
export const groomPhotoConfig: WeddingPhotoSlot = {
  id: 'groom-photo',
  src: null, // Vị trí chờ ảnh chú rể (Image 2)
  placeholderLabel: 'Image 2',
  alt: 'Ảnh chân dung chú rể Văn Bách — Image 2',
  caption: 'Chú rể Văn Bách',
  ratio: 'portrait',
  recommendedRatio: '2:3 hoặc 3:4 (Dọc / Portrait)',
  recommendedDimensions: '900 x 1350 px (tỉ lệ 2:3) hoặc 900 x 1200 px (tỉ lệ 3:4)',
  compositionNotes: 'Chân dung bán thân từ ngực trở lên, gương mặt ở nửa trên để hiển thị trọn vẹn trong vòm cong cổ điển.',
};

export const bridePhotoConfig: WeddingPhotoSlot = {
  id: 'bride-photo',
  src: null, // Vị trí chờ ảnh cô dâu (Image 3)
  placeholderLabel: 'Image 3',
  alt: 'Ảnh chân dung cô dâu Khánh Ly — Image 3',
  caption: 'Cô dâu Khánh Ly',
  ratio: 'portrait',
  recommendedRatio: '2:3 hoặc 3:4 (Dọc / Portrait)',
  recommendedDimensions: '900 x 1350 px (tỉ lệ 2:3) hoặc 900 x 1200 px (tỉ lệ 3:4)',
  compositionNotes: 'Chân dung bán thân từ ngực trở lên, gương mặt ở nửa trên, đồng bộ phong cách với ảnh chú rể.',
};

/**
 * 3. Gallery Album (Những khoảnh khắc cưới)
 * - Tỉ lệ chuẩn: ĐỒNG BỘ DỌC 2:3 cho cả 4 ảnh
 * - Kích thước tối ưu: 1200 × 1800 px (hoặc 1000 × 1500 px)
 */
export const galleryPhotoConfigs: WeddingPhotoSlot[] = [
  {
    id: 'gallery-1',
    src: null, // Vị trí chờ ảnh khoảnh khắc 1 (Image 4)
    placeholderLabel: 'Image 4',
    alt: 'Khoảnh khắc cưới — Image 4',
    caption: 'Tình yêu khởi đầu từ những điều bình dị nhất',
    ratio: 'portrait',
    recommendedRatio: '2:3 (Dọc / Portrait)',
    recommendedDimensions: '1200 x 1800 px (hoặc 1000 x 1500 px)',
    compositionNotes: 'Ảnh dọc toàn thân hoặc cận cảnh cảm xúc, tỉ lệ chuẩn 2:3 studio.',
  },
  {
    id: 'gallery-2',
    src: null, // Vị trí chờ ảnh khoảnh khắc 2 (Image 5)
    placeholderLabel: 'Image 5',
    alt: 'Khoảnh khắc cưới — Image 5',
    caption: 'Cùng nhau bước đi trên con đường tương lai',
    ratio: 'portrait',
    recommendedRatio: '2:3 (Dọc / Portrait)',
    recommendedDimensions: '1200 x 1800 px (hoặc 1000 x 1500 px)',
    compositionNotes: 'Ảnh dọc nắm tay/bước đi ngoài trời hoặc trong sảnh cưới.',
  },
  {
    id: 'gallery-3',
    src: null, // Vị trí chờ ảnh khoảnh khắc 3 (Image 6)
    placeholderLabel: 'Image 6',
    alt: 'Khoảnh khắc cưới — Image 6',
    caption: 'Mỗi ánh nhìn đều chan chứa yêu thương',
    ratio: 'portrait',
    recommendedRatio: '2:3 (Dọc / Portrait)',
    recommendedDimensions: '1200 x 1800 px (hoặc 1000 x 1500 px)',
    compositionNotes: 'Ảnh góc nghiêng lãng mạn dâu rể nhìn nhau, phong cách nghệ thuật.',
  },
  {
    id: 'gallery-4',
    src: null, // Vị trí chờ ảnh khoảnh khắc 4 (Image 7)
    placeholderLabel: 'Image 7',
    alt: 'Khoảnh khắc cưới — Image 7',
    caption: 'Hạnh phúc trọn vẹn trong từng giây phút',
    ratio: 'portrait',
    recommendedRatio: '2:3 (Dọc / Portrait)',
    recommendedDimensions: '1200 x 1800 px (hoặc 1000 x 1500 px)',
    compositionNotes: 'Ảnh nụ cười rạng rỡ của cặp đôi, váy cưới bồng bềnh tự nhiên.',
  },
];

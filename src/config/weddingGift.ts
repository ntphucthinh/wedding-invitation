export interface WeddingGiftQrConfig {
  imageSrc: string | null;
  placeholderLabel: string;
  recipientName?: string;
  bankName?: string;
  accountNumber?: string;
  recommendedRatio?: string;
  recommendedDimensions?: string;
  notes?: string;
}

/**
 * =========================================================================
 * CẤU HÌNH MÃ QR MỪNG CƯỚI (WEDDING GIFT QR CODE CONFIG)
 * =========================================================================
 * - Tỉ lệ hiển thị chuẩn đẹp nhất: VUÔNG 1:1.
 * - Kích thước khuyên dùng: 600 × 600 px đến 800 × 800 px.
 * - Lưu ý kỹ thuật quan trọng:
 *   + Giữ viền trắng (quiet zone) xung quanh mã QR tối thiểu 20px để thiết bị khác
 *     quét nhạy và nhận diện mã chuyển khoản chính xác nhất.
 *   + Không sử dụng ảnh bị méo tỷ lệ chữ nhật (4:3 hoặc 16:9).
 *   + Khi có ảnh mã QR ngân hàng thật, gán đường dẫn vào `imageSrc`.
 * =========================================================================
 */
export const weddingGiftConfig: WeddingGiftQrConfig = {
  imageSrc: null, // Khi có mã QR chính thức, gán: import qrImg from '@/assets/...'; imageSrc: qrImg
  placeholderLabel: 'Mã QR mừng cưới sẽ được cập nhật tại đây',
  recommendedRatio: '1:1 (Vuông / Square)',
  recommendedDimensions: '600 x 600 px đến 800 x 800 px',
  notes: 'Mã QR cần có viền trắng (quiet zone) tối thiểu 20px xung quanh để camera điện thoại dễ quét.',
};

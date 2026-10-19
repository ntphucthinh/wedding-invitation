export interface WeddingGiftQrConfig {
  imageSrc: string | null;
  placeholderLabel: string;
  recipientName?: string;
  bankName?: string;
  accountNumber?: string;
}

export const weddingGiftConfig: WeddingGiftQrConfig = {
  imageSrc: null,
  placeholderLabel: 'QR mừng cưới',
};

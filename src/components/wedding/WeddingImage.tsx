import React from 'react';

interface WeddingImageProps {
  src?: string | null;
  alt: string;
  placeholderLabel?: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

export const WeddingImage: React.FC<WeddingImageProps> = ({
  src,
  alt,
  placeholderLabel = 'Image',
  caption,
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/5]',
  onClick,
}) => {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden ${aspectRatio} ${className}`}
        onClick={onClick}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 hover:scale-105 ${imgClassName}`}
        />
        {caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3D2F28]/80 via-[#3D2F28]/40 to-transparent p-3 text-center text-xs text-[#FFFDF9] opacity-0 transition-opacity duration-300 hover:opacity-100">
            {caption}
          </div>
        )}
      </div>
    );
  }

  // Elegant Luxury SVG/CSS Placeholder
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center overflow-hidden border border-[#DFCEAA] bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F0] to-[#F4ECE1] p-4 text-center select-none ${aspectRatio} ${className} ${
        onClick ? 'cursor-pointer hover:border-[#C6A66B]' : ''
      }`}
      aria-label={alt}
    >
      {/* Decorative inner frame */}
      <div className="pointer-events-none absolute inset-2.5 rounded-[1rem] border border-dashed border-[#DFCEAA]/60" />

      {/* Decorative corner leaves */}
      <svg
        className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-[#C6A66B]/50"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" opacity="0" />
        <path d="M4 4C8 4 10 6 10 10C6 10 4 8 4 4Z" />
      </svg>
      <svg
        className="pointer-events-none absolute right-3 bottom-3 h-5 w-5 text-[#C6A66B]/50 rotate-180"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4 4C8 4 10 6 10 10C6 10 4 8 4 4Z" />
      </svg>

      {/* Botanical Camera / Editorial Icon */}
      <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#DFCEAA] bg-[#FFFDF9] shadow-[0_4px_12px_rgba(198,166,107,0.15)]">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C6A66B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      </div>

      {/* Label: Image 1, Image 2, Image 3... */}
      <p className="font-serif text-lg font-semibold tracking-[0.2em] text-[#59463D] sm:text-xl">
        {placeholderLabel}
      </p>

      <span className="mt-1 inline-block rounded-full bg-[#DFCEAA]/30 px-3 py-0.5 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-[#75665D]">
        Vị trí ảnh cưới
      </span>

      {caption && (
        <p className="mt-2 line-clamp-2 max-w-[85%] font-sans text-xs italic text-[#75665D]/80">
          {caption}
        </p>
      )}
    </div>
  );
};

export default WeddingImage;
import React from 'react';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FloralCornerProps {
  position?: CornerPosition;
  className?: string;
  size?: number;
}

export const FloralCorner: React.FC<FloralCornerProps> = ({
  position = 'top-left',
  className = '',
  size = 56,
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      default:
        return 'none';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-2 right-2';
      case 'bottom-left':
        return 'bottom-2 left-2';
      case 'bottom-right':
        return 'bottom-2 right-2';
      default:
        return 'top-2 left-2';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute ${getPositionClasses()} ${className}`}
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <path
        d="M6 74 C6 30 30 6 74 6"
        stroke="#B79265"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 2"
        opacity="0.55"
      />
      <path
        d="M10 70 C10 34 34 10 70 10"
        stroke="#B79265"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* Botanical leaves */}
      <path
        d="M24 38 C20 30 14 30 12 34 C16 38 20 40 24 38 Z"
        fill="#9EAA8A"
        opacity="0.8"
      />
      <path
        d="M38 24 C30 20 30 14 34 12 C38 16 40 20 38 24 Z"
        fill="#9EAA8A"
        opacity="0.8"
      />
      <path
        d="M28 28 C22 22 18 24 16 26 C20 30 24 30 28 28 Z"
        fill="#DBC4A2"
        opacity="0.9"
      />
      {/* Little flower bud */}
      <circle cx="28" cy="28" r="2.5" fill="#B79265" />
      <circle cx="15" cy="50" r="1.5" fill="#DBC4A2" />
      <circle cx="50" cy="15" r="1.5" fill="#DBC4A2" />
    </svg>
  );
};

export const DividerFlourish: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#B79265',
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 ${className}`}>
      <span className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(90deg, transparent, ${color})` }} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path
          d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z"
          fill={color}
          opacity="0.85"
        />
        <circle cx="12" cy="12" r="1.5" fill="#FFFBF5" />
      </svg>
      <span className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  );
};

export const MonogramBadge: React.FC<{ initials?: string; subtitle?: string; className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  initials = 'B & L',
  subtitle = '14 . 09 . 2026',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24 text-base',
    md: 'w-32 h-32 text-xl',
    lg: 'w-40 h-40 text-2xl',
  }[size];

  return (
    <div className={`relative flex flex-col items-center justify-center rounded-full border border-[#E0D3C1] bg-[#FCF8F2]/90 shadow-[0_8px_24px_rgba(82,63,52,0.08)] backdrop-blur-sm ${sizeClasses} ${className}`}>
      {/* Inner ornamental ring */}
      <div className="absolute inset-1.5 rounded-full border border-dashed border-[#B79265]/50" />
      <span className="font-allura text-[#B79265] font-normal leading-none tracking-wide text-2xl sm:text-3xl">
        {initials}
      </span>
      {subtitle && (
        <span className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.25em] text-[#968070]">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="44"
      height="18"
      viewBox="0 0 44 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 9C12 9 32 9 42 9"
        stroke="#B79265"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M10 9C9 5 5 4 4 6C5 8 8 9 10 9Z"
        fill="#9EAA8A"
        opacity="0.8"
      />
      <path
        d="M18 9C19 13 23 14 24 12C23 10 20 9 18 9Z"
        fill="#9EAA8A"
        opacity="0.8"
      />
      <path
        d="M28 9C27 5 23 4 22 6C23 8 26 9 28 9Z"
        fill="#B79265"
        opacity="0.8"
      />
      <path
        d="M36 9C37 13 41 14 42 12C41 10 38 9 36 9Z"
        fill="#DBC4A2"
      />
    </svg>
  );
};
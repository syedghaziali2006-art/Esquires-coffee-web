import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

const baseSvg = (size: number | string = 24, className = '') => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
});

export const Coffee: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M10 2v2" />
    <path d="M14 2v2" />
    <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
    <path d="M6 2v2" />
  </svg>
);

export const Compass: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const Star: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export const Clock: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const ShieldCheck: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const Sparkles: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Phone: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ArrowUpRight: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const ArrowUp: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

export const Navigation: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export const AlertCircle: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const Utensils: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export const Cake: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" />
    <path d="M12 8v3" />
    <path d="M17 8v3" />
    <path d="M7 4h.01" />
    <path d="M12 4h.01" />
    <path d="M17 4h.01" />
  </svg>
);

export const Eye: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const MessageSquareQuote: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 12a2 2 0 0 0 2-2V8H8" />
    <path d="M14 12a2 2 0 0 0 2-2V8h-2" />
  </svg>
);

export const CheckCircle2: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChevronLeft: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Info: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const Check: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const X: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg {...baseSvg(size, className)} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

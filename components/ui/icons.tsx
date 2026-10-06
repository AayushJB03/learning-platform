import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { filled?: boolean };

// 24x24 grid, 2px stroke, round caps. `filled` fills the shape and knocks details out in white.
function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

const fill = (f?: boolean) => (f ? "currentColor" : "none");
const knock = (f?: boolean) => (f ? "stroke-white" : undefined);

export const Bell = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" fill={fill(filled)} />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </Svg>
);

export const Search = ({ filled, ...p }: IconProps) => (
  <Svg {...p} strokeWidth={filled ? 3 : 2}>
    <circle cx="11" cy="11" r="7" fill={fill(filled)} />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

export const PlayCircle = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" fill={fill(filled)} />
    <path d="m10 8 6 4-6 4z" fill={filled ? "white" : "none"} className={knock(filled)} />
  </Svg>
);

export const Document = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill={fill(filled)} />
    <path d="M14 2v6h6M8 13h8M8 17h8" className={knock(filled)} />
  </Svg>
);

export const Bookmark = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill={fill(filled)} />
  </Svg>
);

export const BarChart = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="14" width="4" height="6" rx="1" fill={fill(filled)} />
    <rect x="10" y="9" width="4" height="11" rx="1" fill={fill(filled)} />
    <rect x="16" y="4" width="4" height="16" rx="1" fill={fill(filled)} />
  </Svg>
);

export const Clock = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" fill={fill(filled)} />
    <path d="M12 6v6l4 2" className={knock(filled)} />
  </Svg>
);

export const User = ({ filled, ...p }: IconProps) => (
  <Svg {...p}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill={fill(filled)} />
    <circle cx="12" cy="7" r="4" fill={fill(filled)} />
  </Svg>
);

export const ChevronRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 18 6-6-6-6" />
  </Svg>
);

export const ChevronLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="m15 18-6-6 6-6" />
  </Svg>
);

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const ExternalLink = (p: IconProps) => (
  <Svg {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </Svg>
);

export const CheckCircle = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12 3 3 5-6" />
  </Svg>
);

export const Lock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Svg>
);

export const ProgressRing = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" className="stroke-neutral-200" />
    <path d="M12 3a9 9 0 0 1 9 9" className="stroke-primary-500" />
  </Svg>
);

export const Eye = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const Grid = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </Svg>
);

export const Target = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Svg>
);

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const Star = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.7 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </Svg>
);

export const Accessibility =(p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="4" r="2" />
    <path d="m5 8 7 1 7-1M12 9v5M9 21l3-7 3 7" />
  </Svg>
);

// Course brand tiles. Placeholder art until course icons come from Sanity.
const tile = "flex size-18 items-center justify-center rounded-md";

export const courseIcons = {
  nextjs: (
    <span className={`${tile} bg-neutral-900 text-[44px] leading-none font-semibold text-white`} aria-hidden="true">
      N
    </span>
  ),
  docker: (
    <svg viewBox="0 0 80 56" className="h-14 w-20" aria-hidden="true">
      <g fill="#2496ed">
        <path d="M2 24h66c3-1 6-4 6-8 3 1 5 3 5 3-1-4-4-6-4-6-1-3-5-4-5-4-2 2-2 5-1 7H2z" />
        <path d="M2 24c0 14 12 26 32 26 20 0 32-9 36-26z" />
      </g>
      <g fill="#2496ed" stroke="#fff" strokeWidth="1.5">
        <rect x="16" y="14" width="8" height="8" />
        <rect x="26" y="14" width="8" height="8" />
        <rect x="36" y="14" width="8" height="8" />
        <rect x="26" y="4" width="8" height="8" />
        <rect x="46" y="14" width="8" height="8" />
      </g>
    </svg>
  ),
  typescript: (
    <span className={`${tile} bg-[#3178c6] text-[34px] leading-none font-bold text-white`} aria-hidden="true">
      TS
    </span>
  ),
};

export type CourseIconKey = keyof typeof courseIcons;

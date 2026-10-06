export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width={32} height={32} viewBox="0 0 32 32" aria-hidden="true" className="text-primary-500">
        <path d="M3 4h26L16 29z" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
        <path d="M10 9h12l-6 10z" className="fill-white" />
      </svg>
      <span className="font-display text-[28px] leading-none font-bold text-neutral-900">Vertex</span>
    </span>
  );
}

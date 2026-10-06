const variants = {
  video: "bg-primary-100 text-primary-500",
  lesson: "bg-lesson-bg text-lesson-fg",
  popular: "bg-primary-200 text-primary-500",
};

export function Badge({ variant }: { variant: keyof typeof variants }) {
  return (
    <span
      className={`inline-block rounded-xs px-2 py-1 text-[10px] leading-none font-semibold tracking-wider uppercase ${variants[variant]}`}
    >
      {variant}
    </span>
  );
}

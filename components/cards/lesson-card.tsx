import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PlayCircle } from "@/components/ui/icons";

export function LessonCard({
  variant,
  title,
  description,
  meta,
  actionLabel,
  href,
}: {
  variant: "video" | "lesson";
  title: string;
  description: string;
  meta: string;
  actionLabel: string;
  href: string;
}) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <Badge variant={variant} />
      <h3 className="text-body-lg font-semibold">{title}</h3>
      <p className="text-small text-neutral-500">{description}</p>
      <div className="mt-2 flex items-center justify-between gap-3 text-small text-neutral-500">
        <span>{meta}</span>
        <Link href={href} className="flex items-center gap-1.5 font-medium text-primary-500 hover:underline">
          {variant === "video" ? <PlayCircle className="size-4" /> : null}
          {actionLabel}
          {variant === "lesson" ? <ExternalLink className="size-4" /> : null}
        </Link>
      </div>
    </article>
  );
}

import { Document, ExternalLink } from "@/components/ui/icons";

export function ResourceCard({
  title,
  description,
  meta,
  href,
}: {
  title: string;
  description: string;
  meta: string;
  href: string;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <Document className="size-7 shrink-0 text-neutral-700" />
        <div>
          <h3 className="text-body font-semibold">{title}</h3>
          <p className="mt-1 text-small text-neutral-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-small text-neutral-500">
        <span>{meta}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="text-primary-500"
        >
          <ExternalLink className="size-4" />
        </a>
      </div>
    </article>
  );
}

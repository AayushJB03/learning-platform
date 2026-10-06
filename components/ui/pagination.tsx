import Link from "next/link";
import { ChevronLeft, ChevronRight } from "./icons";

const box =
  "flex size-8 items-center justify-center rounded-sm text-body text-neutral-700 hover:bg-neutral-100";

export function Pagination({
  page,
  pageCount,
  hrefFor,
}: {
  page: number;
  pageCount: number;
  hrefFor: (page: number) => string;
}) {
  // First three, the current neighbourhood and the last page; gaps become an ellipsis.
  const shown = [...new Set([1, 2, 3, page - 1, page, page + 1, pageCount])]
    .filter((p) => p >= 1 && p <= pageCount)
    .sort((a, b) => a - b);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} aria-label="Previous page" className={box}>
          <ChevronLeft className="size-4" />
        </Link>
      ) : (
        <span className={`${box} opacity-40`}>
          <ChevronLeft className="size-4" />
        </span>
      )}
      {shown.map((p, i) => (
        <span key={p} className="flex items-center gap-1">
          {i > 0 && p - shown[i - 1] > 1 && <span className="px-1 text-neutral-500">…</span>}
          <Link
            href={hrefFor(p)}
            aria-current={p === page ? "page" : undefined}
            className={p === page ? `${box} border border-primary-500 text-primary-500` : box}
          >
            {p}
          </Link>
        </span>
      ))}
      {page < pageCount ? (
        <Link href={hrefFor(page + 1)} aria-label="Next page" className={box}>
          <ChevronRight className="size-4" />
        </Link>
      ) : (
        <span className={`${box} opacity-40`}>
          <ChevronRight className="size-4" />
        </span>
      )}
    </nav>
  );
}

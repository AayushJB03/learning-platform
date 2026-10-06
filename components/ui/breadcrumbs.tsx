import Link from "next/link";
import { ChevronRight } from "./icons";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-body text-neutral-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-neutral-900">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-neutral-700" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="size-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

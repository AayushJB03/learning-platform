import Link from "next/link";
import type { ReactNode } from "react";
import { BarChart, Clock, Document } from "@/components/ui/icons";

export function CourseTile({
  href,
  icon,
  title,
  description,
  level,
  duration,
  modules,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: string;
}) {
  const meta = [
    { Icon: BarChart, text: level },
    { Icon: Clock, text: duration },
    { Icon: Document, text: modules },
  ];
  return (
    <article className="relative flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-18 items-center">{icon}</div>
      <h3 className="mt-6 font-display text-[22px] leading-7 font-normal">
        <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-primary-400">
          {title}
        </Link>
      </h3>
      <p className="mt-4 mb-8 flex-1 text-body text-neutral-500">{description}</p>
      <ul className="flex items-center justify-between gap-2 whitespace-nowrap border-t border-neutral-200 pt-5 text-[11px] text-neutral-500">
        {meta.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-1.5">
            <Icon className="size-3.5" />
            {text}
          </li>
        ))}
      </ul>
    </article>
  );
}

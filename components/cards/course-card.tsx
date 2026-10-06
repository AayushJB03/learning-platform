import type { ReactNode } from "react";
import { BarChart, Clock, Document } from "@/components/ui/icons";

export function CourseCard({
  icon,
  title,
  description,
  level,
  duration,
  modules,
}: {
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
    <article className="flex flex-col gap-5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-neutral-900 text-heading-3 font-semibold text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-body-lg font-semibold">{title}</h3>
          <p className="mt-1 text-small text-neutral-500">{description}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-small text-neutral-500">
        {meta.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-1.5">
            <Icon className="size-4" />
            {text}
          </li>
        ))}
      </ul>
    </article>
  );
}

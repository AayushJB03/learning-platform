import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "./icons";

export function Select({
  options,
  className = "",
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { options: string[] }) {
  return (
    <div className={`relative ${className}`}>
      <select
        className="h-11 w-full appearance-none rounded-md border border-neutral-200 bg-white px-4 pr-10 text-body outline-none focus:border-primary-400"
        {...props}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-neutral-700" />
    </div>
  );
}

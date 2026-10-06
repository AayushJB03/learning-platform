import type { ComponentProps } from "react";
import { Search } from "./icons";

export function SearchInput({
  hint,
  className = "",
  ...props
}: ComponentProps<"input"> & { hint?: string }) {
  return (
    <div
      className={`flex h-11 items-center gap-3 rounded-md border border-neutral-200 bg-white px-4 text-body focus-within:border-primary-400 ${className}`}
    >
      <Search className="size-5 shrink-0 text-neutral-500" />
      <input
        type="search"
        className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-neutral-500"
        {...props}
      />
      {hint && (
        <kbd className="hidden rounded-xs border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-sans text-small text-neutral-500 sm:block">
          {hint}
        </kbd>
      )}
    </div>
  );
}

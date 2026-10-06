"use client";

import { useEffect, useRef } from "react";
import { SearchInput } from "@/components/ui/input";

export function SearchForm() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <form action="/search" role="search" className="w-full">
      <SearchInput
        ref={ref}
        name="q"
        aria-label="Search your learning"
        placeholder="Ask anything about your learning…"
        hint="⌘ K"
        className="h-16! rounded-lg! px-6! text-body-lg! shadow-md sm:h-20! sm:text-xl!"
      />
    </form>
  );
}

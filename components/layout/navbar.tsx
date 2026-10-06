import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./logo";

const links = [
  { key: "courses", label: "Courses", href: "/courses" },
  { key: "my-learning", label: "My Learning", href: "/my-learning" },
] as const;

export function Navbar({
  active,
  actions,
}: {
  active?: (typeof links)[number]["key"];
  actions?: ReactNode;
}) {
  return (
    <nav aria-label="Main" className="flex h-16 items-center justify-between gap-3 px-2 sm:gap-6">
      <Link href="/" aria-label="Vertex home">
        <Logo />
      </Link>
      <ul className={`flex items-center gap-3 sm:gap-10 ${actions ? "mr-auto sm:ml-4" : ""}`}>
        {links.map((l) => (
          <li key={l.key}>
            <Link
              href={l.href}
              aria-current={active === l.key ? "page" : undefined}
              className={`text-body font-medium whitespace-nowrap ${active === l.key ? "text-primary-500" : "text-neutral-700 hover:text-neutral-900"}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {actions}
    </nav>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CourseCard } from "@/components/cards/course-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Logo } from "@/components/layout/logo";
import { Navbar } from "@/components/layout/navbar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import * as I from "@/components/ui/icons";
import { SearchInput } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Select } from "@/components/ui/select";
import { StatusIndicator } from "@/components/ui/status-indicator";

// Internal reference page for comparing the build against design/vertex-designsystem.png.
export const metadata: Metadata = { title: "Design System · Vertex", robots: { index: false } };

const primary = [
  ["Primary 500", "#F97316", "bg-primary-500"],
  ["Primary 400", "#FB923C", "bg-primary-400"],
  ["Primary 300", "#FDBA74", "bg-primary-300"],
  ["Primary 200", "#FED7AA", "bg-primary-200"],
  ["Primary 100", "#FFEEE5", "bg-primary-100"],
];
const neutral = [
  ["Neutral 900", "#0F172A", "bg-neutral-900"],
  ["Neutral 700", "#334155", "bg-neutral-700"],
  ["Neutral 500", "#64748B", "bg-neutral-500"],
  ["Neutral 300", "#CBD5E1", "bg-neutral-300"],
  ["Neutral 200", "#E2E8F0", "bg-neutral-200"],
  ["Neutral 100", "#F1F5F9", "bg-neutral-100"],
  ["Neutral 50", "#FAFAFC", "bg-neutral-50 border border-neutral-200"],
  ["White", "#FFFFFF", "bg-white border border-neutral-200"],
];
const typeScale = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"],
];
const spacing = [
  [4, "0.25rem", "size-1"],
  [8, "0.5rem", "size-2"],
  [12, "0.75rem", "size-3"],
  [16, "1rem", "size-4"],
  [24, "1.5rem", "size-6"],
  [32, "2rem", "size-8"],
  [40, "2.5rem", "size-10"],
  [48, "3rem", "size-12"],
  [64, "4rem", "size-16"],
] as const;
const radii = [
  ["4px", "xs", "rounded-xs"],
  ["8px", "sm", "rounded-sm"],
  ["12px", "md", "rounded-md"],
  ["16px", "lg", "rounded-lg"],
  ["24px", "xl", "rounded-xl"],
  ["Full", "circle", "rounded-full"],
];
const shadows = [
  ["Sm", "0 1px 2px 0", "0.05", "shadow-sm"],
  ["Md", "0 4px 12px -2px", "0.08", "shadow-md"],
  ["Lg", "0 12px 24px -4px", "0.10", "shadow-lg"],
  ["Xl", "0 20px 40px -8px", "0.12", "shadow-xl"],
];
const outline = [I.Bell, I.Search, I.PlayCircle, I.Document, I.Bookmark, I.BarChart, I.Clock, I.User, I.ChevronRight];
const principles = [
  [I.Eye, "Clarity First", "Every element should communicate clearly."],
  [I.Grid, "Consistency", "Use components and patterns consistently across the platform."],
  [I.Target, "Focus & Calm", "Remove noise and help learners focus on what matters."],
  [I.Accessibility, "Accessible", "Design with accessibility and inclusivity in mind."],
] as const;

function Section({ n, title, className = "", children }: { n: string; title: string; className?: string; children: ReactNode }) {
  return (
    <section className={`min-w-0 rounded-lg border border-neutral-100 bg-white p-6 ${className}`}>
      <h2 className="mb-5 flex items-center gap-3 text-small font-semibold tracking-widest text-neutral-900 uppercase">
        <span className="text-primary-500">{n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const Sub = ({ children }: { children: ReactNode }) => (
  <p className="mb-3 text-body text-neutral-700">{children}</p>
);

const Specs = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mt-6">
    <p className="mb-2 text-small font-semibold text-neutral-700">{title}</p>
    <ul className="space-y-1 text-small text-neutral-500">
      {items.map((s) => (
        <li key={s} className="flex gap-2">
          <span className="text-primary-500">•</span>
          {s}
        </li>
      ))}
    </ul>
  </div>
);

const ButtonRow = ({ state, disabled }: { state: string; disabled?: boolean }) => (
  <>
    <span className="self-center text-small text-neutral-700">{state}</span>
    <Button disabled={disabled} size="md">Get Started</Button>
    <Button variant="secondary" disabled={disabled} size="md">Explore Courses</Button>
    <Button variant="tertiary" disabled={disabled} size="md">
      View Lesson <I.ExternalLink className="size-4" />
    </Button>
    <Button variant="text" disabled={disabled} size="md">
      Watch Video <I.PlayCircle className="size-4" />
    </Button>
  </>
);

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 bg-neutral-50 p-4 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
        <section className="rounded-lg border border-neutral-100 bg-white p-6 sm:p-8">
          <Logo />
          <h1 className="mt-12 text-display-1">Design System</h1>
          <p className="mt-6 text-body-lg text-neutral-700">
            A unified design language for Vertex learning platform. Clean, modern and focused on clarity,
            consistency and intuitive learning experiences.
          </p>
          <p className="mt-12 text-small tracking-widest text-neutral-700 uppercase">Version 1.0 · May 2025</p>
        </section>

        <Section n="01" title="Colors">
          <Sub>Primary</Sub>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
            {primary.map(([name, hex, cls]) => (
              <div key={name}>
                <div className={`h-12 rounded-sm sm:h-14 ${cls}`} />
                <p className="mt-2 text-small text-neutral-700">{name}</p>
                <p className="text-small text-neutral-500">{hex}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 mb-3 text-body text-neutral-700">Neutral</p>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
            {neutral.map(([name, hex, cls]) => (
              <div key={name}>
                <div className={`h-12 rounded-sm sm:h-14 ${cls}`} />
                <p className="mt-2 text-small text-neutral-700">{name}</p>
                <p className="text-small text-neutral-500">{hex}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[2fr_3fr]">
        <Section n="02" title="Typography">
          <div className="space-y-8">
            <div className="flex items-center gap-8">
              <span className="font-display text-7xl font-bold">Ag</span>
              <div>
                <p className="font-display text-heading-2">Playfair Display</p>
                <p className="mt-1 text-small text-neutral-500">Elegant · Readable · Timeless</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-7xl font-semibold">Ag</span>
              <div>
                <p className="text-heading-2 font-medium">Inter</p>
                <p className="mt-1 text-small text-neutral-500">Clean · Modern · Highly legible</p>
              </div>
            </div>
          </div>
        </Section>
        <Section n="03" title="Type Scale">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-small">
              <thead className="text-neutral-500">
                <tr>
                  {["Style", "Font", "Size / Line Height", "Weight", "Use"].map((h) => (
                    <th key={h} className="pb-3 font-normal">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-neutral-500">
                {typeScale.map(([style, font, size, weight, use]) => (
                  <tr key={style}>
                    <td className={`py-1.5 pr-4 whitespace-nowrap text-neutral-900 text-body-lg`}>
                      {style}
                    </td>
                    <td className="pr-4">{font}</td>
                    <td className="pr-4">{size}</td>
                    <td className="pr-4">{weight}</td>
                    <td>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[5fr_6fr]">
        <Section n="04" title="Spacing System">
          <Sub>Base unit: 4px</Sub>
          <div className="flex flex-wrap items-end gap-x-4 gap-y-6">
            {spacing.map(([px, rem, cls]) => (
              <div key={px} className="text-center">
                <div className={`mx-auto rounded-xs bg-primary-200 ${cls}`} />
                <p className="mt-3 text-small text-neutral-700">{px}</p>
                <p className="text-small text-neutral-500">({rem})</p>
              </div>
            ))}
          </div>
        </Section>
        <Section n="05" title="Radius & Shadows">
          <Sub>Radius</Sub>
          <div className="flex flex-wrap gap-4">
            {radii.map(([px, name, cls]) => (
              <div key={name} className="text-center">
                <div className={`size-14 border border-neutral-200 bg-white ${cls}`} />
                <p className="mt-2 text-small text-neutral-700">{px}</p>
                <p className="text-small text-neutral-500">({name})</p>
              </div>
            ))}
          </div>
          <p className="mt-6 mb-3 text-body text-neutral-700">Shadows</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {shadows.map(([name, offset, alpha, cls]) => (
              <div key={name} className={`rounded-sm bg-white p-3 ${cls}`}>
                <p className="text-body font-semibold">{name}</p>
                <p className="mt-2 text-[10px] leading-4 text-neutral-500">
                  {offset} rgba(15, 23, 42, {alpha})
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2.6fr)_minmax(0,7.4fr)_minmax(0,3.2fr)]">
        <Section n="06" title="Icons">
          <Sub>Outline Style</Sub>
          <div className="flex flex-wrap gap-3 text-neutral-900">
            {outline.map((Icon, i) => <Icon key={i} className="size-5" />)}
          </div>
          <p className="mt-6 mb-3 text-body text-neutral-700">Filled Style</p>
          <div className="flex flex-wrap gap-3 text-neutral-900">
            {outline.map((Icon, i) => <Icon key={i} filled className="size-5" />)}
          </div>
          <Specs title="Icon Specs" items={["24x24px grid", "2px stroke width (outline)", "Rounded line caps", "Consistent optical balance"]} />
        </Section>

        <Section n="07" title="Buttons">
          <div className="grid grid-cols-[auto_repeat(4,max-content)] justify-start gap-x-3 gap-y-3 overflow-x-auto">
            <span />
            {["Primary", "Secondary", "Tertiary", "Text"].map((h) => (
              <span key={h} className="text-small text-neutral-700">{h}</span>
            ))}
            <ButtonRow state="Default" />
            <ButtonRow state="Hover" />
            <ButtonRow state="Disabled" disabled />
          </div>
          <Specs
            title="Button Specs"
            items={["Height: 44px (default)", "Padding: 0 16px (lg), 0 12px (md)", "Radius: 12px", "Font: Inter Medium (14–16px)"]}
          />
        </Section>

        <Section n="08" title="Inputs">
          <Sub>Search / Text Input</Sub>
          <SearchInput aria-label="Search" placeholder="Search anything..." hint="⌘ K" />
          <p className="mt-5 mb-3 text-body text-neutral-700">Select</p>
          <Select aria-label="Sort" options={["Most Relevant", "Newest", "Shortest"]} />
          <Specs
            title="Field Specs"
            items={["Height: 44px", "Radius: 12px", "Border: 1px solid #E2E8F0", "Padding: 0 16px", "Focus: Border color #FB923C"]}
          />
        </Section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2.6fr)_minmax(0,7.4fr)_minmax(0,3.2fr)]">
        <Section n="09" title="Badges / Tags">
          <div className="flex gap-8">
            {(["video", "lesson", "popular"] as const).map((v) => (
              <div key={v}>
                <p className="mb-3 text-small text-neutral-700 capitalize">{v}</p>
                <Badge variant={v} />
              </div>
            ))}
          </div>
        </Section>
        <Section n="10" title="Status / Indicators">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <StatusIndicator status="in-progress" />
            <StatusIndicator status="completed" />
            <StatusIndicator status="now-playing" />
            <StatusIndicator status="locked" />
          </div>
        </Section>
        <Section n="11" title="Progress Bar">
          <ProgressBar value={35} />
        </Section>
      </div>

      <Section n="12" title="Cards">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Sub>Course Card</Sub>
            <CourseCard
              icon="N"
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modules="12 modules"
            />
          </div>
          <div>
            <Sub>Lesson Card (Video)</Sub>
            <LessonCard
              variant="video"
              title="Data Fetching in Server Components"
              description="Learn how to fetch data on the server using async/await and Next.js best practices."
              meta="Lesson 5.1 · 12:45"
              actionLabel="Watch from 12:45"
              href="#"
            />
          </div>
          <div>
            <Sub>Lesson Card (Lesson)</Sub>
            <LessonCard
              variant="lesson"
              title="Data Fetching & Caching"
              description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              meta="Module 5"
              actionLabel="View lesson"
              href="#"
            />
          </div>
          <div>
            <Sub>Resource Card</Sub>
            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              meta="PDF · 1.2 MB"
              href="#"
            />
          </div>
        </div>
      </Section>

      <Section n="13" title="Navigation">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <Navbar active="courses" />
          <div>
            <Sub>Breadcrumbs</Sub>
            <Breadcrumbs
              items={[
                { label: "All Courses", href: "#" },
                { label: "Next.js for Production", href: "#" },
                { label: "Data Fetching & Caching" },
              ]}
            />
          </div>
          <div>
            <Sub>Pagination</Sub>
            <Pagination page={1} pageCount={8} hrefFor={(p) => `#page-${p}`} />
          </div>
        </div>
      </Section>

      <Section n="14" title="Principles">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([Icon, title, text]) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="size-8 shrink-0 text-neutral-700" />
              <div>
                <p className="text-body font-medium">{title}</p>
                <p className="mt-1 text-small text-neutral-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

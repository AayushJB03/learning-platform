import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Bars } from "@/components/home/bars";
import { SearchForm } from "@/components/home/search-form";
import { CourseTile } from "@/components/cards/course-tile";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { courseIcons, type CourseIconKey } from "@/components/ui/course-icons";
import { ArrowRight, Bell, Star } from "@/components/ui/icons";

// ponytail: static until Sanity is wired; replace with a GROQ fetch.
const courses: {
  slug: string;
  icon: CourseIconKey;
  title: string;
  description: string;
  level: string;
  duration: string;
  modules: string;
}[] = [
  {
    slug: "nextjs-for-production",
    icon: "nextjs",
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
  },
  {
    slug: "docker-essentials",
    icon: "docker",
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
  },
  {
    slug: "typescript-deep-dive",
    icon: "typescript",
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
  },
];

const navActions = (
  <div className="flex items-center gap-2 sm:gap-5">
    <button type="button" aria-label="Notifications" className="hidden text-neutral-900 hover:text-primary-500 sm:block">
      <Bell className="size-6" />
    </button>
    <Show when="signed-out">
      <SignInButton mode="modal">
        <Button variant="text" className="px-2">Sign in</Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button size="md">Sign up</Button>
      </SignUpButton>
    </Show>
    <Show when="signed-in">
      <UserButton />
    </Show>
  </div>
);

export default function Home() {
  return (
    <div className="bg-canvas bg-hatch min-h-screen">
      <div className="relative mx-auto flex min-h-screen max-w-300 flex-col overflow-hidden border-x border-neutral-200 bg-canvas">
        <header className="border-b border-neutral-200 px-4 sm:px-8">
          <Navbar actions={navActions} />
        </header>

        <main className="flex-1 pb-52 sm:pb-64">
          <section className="flex flex-col items-center px-4 pt-14 text-center sm:pt-16">
            <span className="rounded-sm border border-neutral-200 bg-primary-100/40 px-3.5 py-2 text-[11px] font-semibold tracking-[0.2em] text-primary-500">
              INTELLIGENT LEARNING
            </span>
            <h1 className="mt-10 font-display text-5xl leading-[1.15] font-normal text-neutral-900 sm:text-[64px]">
              Search your learning
              <br />
              in plain English.
            </h1>
            <p className="mt-8 max-w-md text-body-lg text-neutral-500 sm:text-xl sm:leading-8">
              Vertex understands what you want to learn and finds the exact lessons across all your courses.
            </p>
            <Link
              href="/courses"
              className="mt-10 inline-flex h-15 items-center gap-3 rounded-md bg-primary-500 px-6 text-lg font-medium text-white shadow-lg transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              Explore Courses
              <ArrowRight className="size-6" />
            </Link>
            <div className="mt-12 w-full max-w-190">
              <SearchForm />
            </div>
          </section>

          <section aria-labelledby="all-courses" className="mt-16 border-t border-neutral-200 px-4 pt-16 sm:px-12">
            <div className="flex items-center justify-between">
              <h2 id="all-courses" className="font-display text-[28px] leading-9 font-normal">
                All Courses
              </h2>
              <Link href="/courses" className="inline-flex items-center gap-2 text-body font-medium text-primary-500 hover:underline">
                View all courses
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c) => (
                <li key={c.slug}>
                  <CourseTile
                    href={`/courses/${c.slug}`}
                    icon={courseIcons[c.icon]}
                    title={c.title}
                    description={c.description}
                    level={c.level}
                    duration={c.duration}
                    modules={c.modules}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-14 flex items-center gap-6 text-body-lg text-neutral-700">
              <span className="h-px flex-1 bg-neutral-200" />
              <p className="flex items-center gap-3">
                <Star className="size-6 text-primary-500" />
                New courses and lessons added every week.
              </p>
              <span className="hidden h-px flex-1 bg-neutral-200 sm:block" />
            </div>
          </section>
        </main>

        <Bars />
      </div>
    </div>
  );
}

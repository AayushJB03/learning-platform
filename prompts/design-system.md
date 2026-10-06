# Implementation prompt: Vertex Design System

## Goal
Turn `design/vertex-designsystem.png` into code: Tailwind theme tokens, fonts, and the small set of reusable UI primitives every later page (catalog, course, lesson, search) will reuse. Plus one internal showcase page to verify it against the reference.

## Skills read
- AGENTS.md (sections 2, 3, 14)
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` and `11-css.md` (Next 16.3.2, Tailwind v4)
- No Sanity/Clerk/PostHog skill needed: this is presentational only.

## Code inspected
- Fresh `create-next-app` scaffold: `app/layout.tsx` (Geist fonts), `app/globals.css` (default tokens, dark-mode block, Arial body), `app/page.tsx` (starter page).
- Tailwind v4 via `@tailwindcss/postcss`, no `tailwind.config`: tokens go in `@theme` in `globals.css`.
- No icon library, no `clsx`, no typography plugin installed. No `components/` folder yet.

## Decisions and assumptions
- **Tokens in `@theme`** (so utilities like `bg-primary-500`, `text-neutral-700`, `rounded-md`, `shadow-lg` exist):
  - Primary: 500 `#F97316`, 400 `#FB923C`, 300 `#FDBA74`, 200 `#FED7AA`, 100 `#FFEEE5`.
  - Neutral: 900 `#0F172A`, 700 `#334155`, 500 `#64748B`, 300 `#CBD5E1`, 200 `#E2E8F0`, 100 `#F1F5F9`, 50 `#FAFAFC`, white `#FFFFFF`.
  - Radius: xs 4, sm 8, md 12, lg 16, xl 24 px (`full` is Tailwind's built-in).
  - Shadows: sm `0 1px 2px 0 rgba(15,23,42,.05)`, md `0 4px 12px -2px .08`, lg `0 12px 24px -4px .10`, xl `0 20px 40px -8px .12`.
  - Spacing: base unit 4px, which is Tailwind's default (`--spacing: 0.25rem`), so no override.
- **Fonts**: Playfair Display (Display) and Inter (everything else) via `next/font/google`, replacing Geist. Weights: Playfair 700, Inter 400/500/600.
- **Type scale** as `@utility` classes: `text-display-1` (48/56, Playfair bold), `display-2` (36/44), `heading-1` (28/36 Inter semibold), `heading-2` (22/30 semibold), `heading-3` (18/26 medium), `body-lg` (16/24), `body` (14/20), `small` (12/16).
- **Dark mode removed**: the reference has a single light theme. The starter dark-mode block is deleted.
- **Icons**: the 8 icons in the reference (bell, search, play-circle, document, bookmark, bar-chart, clock, user) plus chevron, external-link, check-circle, lock, in-progress ring, as small inline SVG components in one file. Outline and filled variants, 24x24 grid, 2px stroke, round caps. No new dependency.
- **Primitives** (only those the reference shows; server components unless they need state):
  `Button` (primary / secondary / tertiary / text; default, hover, disabled; 44px height; radius 12), `Input` (search with leading icon and optional `⌘ K` hint), `Select`, `Badge` (video / lesson / popular), `StatusIndicator` (in progress / completed / now playing / locked), `ProgressBar`, `CourseCard`, `LessonCard` (video and lesson variants), `ResourceCard`, `Breadcrumbs`, `Pagination`, `Navbar` (logo, Courses, My Learning).
  Cards are presentational with props. They carry no data fetching and no links to data yet.
- **Logo**: inline SVG mark (orange chevron-V) plus "Vertex" wordmark in Playfair, as a `Logo` component. I will approximate the mark from the image. If you have the SVG, drop it in `public/` and I will swap it.
- **Showcase route** `app/design-system/page.tsx`: renders every primitive and token in the reference's layout for side-by-side comparison. It is dev-only reference, linked from nowhere, and can be deleted before launch. `noindex` metadata.
- Replace the starter `app/page.tsx` with a minimal placeholder (Vertex heading) so the scaffold content is gone. Real home page is a later task.
- Responsive: showcase grids stack on small screens. Primitives are fluid (cards fill their container, Navbar collapses the link gap).
- Skipped on purpose: `clsx`/`cva` (a tiny local `cn` is not needed, I use template strings), Storybook, tests for presentational markup, dark mode, a mobile nav drawer (later with the real nav).

## Files I expect to touch
- `app/globals.css` (tokens, type utilities, body defaults)
- `app/layout.tsx` (fonts, metadata title "Vertex")
- `app/page.tsx` (placeholder)
- `app/design-system/page.tsx` (new)
- `components/ui/icons.tsx`, `button.tsx`, `input.tsx`, `select.tsx`, `badge.tsx`, `status-indicator.tsx`, `progress-bar.tsx`, `breadcrumbs.tsx`, `pagination.tsx` (new)
- `components/cards/course-card.tsx`, `lesson-card.tsx`, `resource-card.tsx` (new)
- `components/layout/logo.tsx`, `navbar.tsx` (new)

## Requirements
1. Every color, size, radius, shadow, and weight in the reference matches exactly (values above).
2. Button specs: 44px default height, 12px radius, Inter Medium 14-16px, padding 0 16 (lg) / 0 12 (md). Hover and disabled states as shown.
3. Input specs: 44px height, 12px radius, 1px `#E2E8F0` border, 0 16px padding, focus border `#FB923C`.
4. Progress bar: orange fill on a light track with a "35% complete" label example.
5. Interactive primitives are keyboard accessible with visible focus, correct roles, and `aria-*` where needed (`aria-current` on breadcrumbs and pagination, `role="progressbar"` with values).
6. Pagination and Select need client state only if they are interactive. Keep them controlled via props, so they stay server-safe.

## Security considerations
- None of the integration boundaries are touched. No tokens, env vars, fetching, or writes.
- No `dangerouslySetInnerHTML`. Icons are static JSX.
- Showcase route has `robots: noindex`.

## Acceptance criteria
- `/design-system` visually matches the reference section by section (01 to 14).
- Tailwind utilities for every token exist and are used by the components (no hardcoded hex in components).
- Starter content and Geist are gone. Lint, type check, and build are clean.
- Layout does not break at 375px width.

## Checks to run (web = repo root)
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. `npm run dev`, open `/design-system` and compare against `design/vertex-designsystem.png`.

## Manual test steps
1. Run `npm run dev` and open `http://localhost:3000/design-system`.
2. Compare each numbered section with the reference image (colors, type scale, spacing, radius and shadows, icons, buttons, inputs, badges, status, progress, cards, navigation, principles).
3. Hover the buttons and tab through them to confirm hover and focus states. Focus the search input to see the `#FB923C` border.
4. Resize the browser to about 375px and confirm no horizontal scroll.
5. Open `/` and confirm the placeholder renders with Playfair heading and Inter body.

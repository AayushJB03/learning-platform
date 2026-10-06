# Implementation prompt: Home page

## Goal
Build `/` to match `design/vertex-home.png`: navbar, hero with search, "All Courses" grid, footer note, decorative orange bars. Responsive down to mobile.

## Skills read
- AGENTS.md (sections 2, 3, 5, 14)
- `prompts/design-system.md` (existing tokens and primitives)
- No Sanity/Clerk/PostHog skill: none of those are wired yet (see assumptions).

## Code inspected
- `app/page.tsx` (placeholder), `app/layout.tsx` (Playfair 700 + Inter), `app/globals.css` (tokens, type utilities, white body)
- `components/layout/navbar.tsx` (logo + Courses / My Learning only), `logo.tsx`
- `components/ui/button.tsx` (`<button>` only, no link variant), `input.tsx` (`SearchInput` with `hint`), `icons.tsx` (has Bell, Search, BarChart, Clock, Document; no Arrow or Star)
- `components/cards/course-card.tsx` (compact horizontal card, does not match the home card)

## Decisions and assumptions
- **Static data for now.** Sanity, Clerk, and PostHog are not installed. The 3 courses (Next.js for Production, Docker Essentials, TypeScript Deep Dive) are a typed constant in `app/page.tsx`. Swapping to a GROQ fetch later only changes that constant. No fake backend.
- **Page chrome.** The reference shows a centered frame with hairline side borders and faint diagonal stripes in the outer gutters, on a warm off-white (`~#FBF8F5`). I add one token `--color-canvas` for that and apply the frame in `app/page.tsx` (not the global layout, so other pages are unaffected).
- **Navbar.** Extend the existing `Navbar` with a right side: bell icon button and a circular avatar (40px). The avatar is a placeholder (initials circle) because there is no auth or photo yet. Clerk's `UserButton` replaces it later. Bell is presentational, per AGENTS.md. "Courses" and "My Learning" use no active state on home, as in the reference.
- **Hero.** Pill label "INTELLIGENT LEARNING" (primary-500 text, tracked caps, bordered), two-line `text-display-1`-style headline (larger at desktop, ~64px, scaling down on mobile), subtext in neutral-500, "Explore Courses →" primary link-button to `/courses`.
- **Search bar.** Wide white card with search icon, placeholder "Ask anything about your learning…", `⌘ K` hint. It is a `<form action="/search">` with `name="q"`, so it already works with the search page later (404 until then). A small client component focuses it on Cmd/Ctrl+K. Reuses `SearchInput`, with a `size`-style className override for the taller 80px reference height. No search logic here.
- **Course cards.** New `CourseTile` variant is not needed: I add a `variant="tile"` path... simplest is a new `components/cards/course-tile.tsx` (vertical card: 72px icon tile, serif title, 2-3 line description, divider, meta row level / duration / modules with existing icons). Whole card is a `<Link>` to `/courses/[slug]`. Icons: Next.js "N" on black, Docker whale, TS on blue, as small inline SVG or text tiles in `components/ui/course-icons.tsx`. Docker whale approximated in SVG.
- **View all courses →** text link to `/courses`.
- **Footer note.** Star outline icon + "New courses and lessons added every week." between hairlines.
- **Decorative bars.** Bottom-left and bottom-right clusters of vertical bars with an orange gradient fading upward. Pure CSS/inline SVG, `aria-hidden`, non-interactive, clipped inside the frame.
- **New icons** added to `icons.tsx`: `ArrowRight`, `Star`.
- Serif is the existing Playfair 700 (design system font). Reference weight looks lighter, but I keep the system font per section 3 and "reuse before adding".
- Skipped: course data fetching, progress badges on cards (not in reference), nav drawer for mobile (links stay inline and fit at 375px), analytics events (PostHog task).
- Responsive: cards 3 columns at lg, 2 at sm, 1 on mobile; hero text scales; search bar full width; bars shrink.

## Files I expect to touch
- `app/page.tsx` (rewrite)
- `app/globals.css` (add `--color-canvas`, stripe utility)
- `components/layout/navbar.tsx` (bell + avatar)
- `components/ui/icons.tsx` (ArrowRight, Star)
- `components/ui/course-icons.tsx` (new)
- `components/cards/course-tile.tsx` (new)
- `components/home/search-form.tsx` (new, client: form + Cmd/Ctrl+K)
- `components/home/bars.tsx` (new, decorative)

## Requirements
1. Layout, spacing, type, and color match the reference at desktop (~1024 design width).
2. No hardcoded hex in components, use tokens.
3. Cards, links, and form are keyboard accessible with visible focus. Decorative elements are `aria-hidden`. One `<h1>`.
4. Cmd/Ctrl+K focuses the search input and prevents the browser default.

## Security considerations
- No env, tokens, fetching, or writes. No `dangerouslySetInnerHTML`.
- Search form is a GET to an internal route. Query is not interpreted on this page.

## Acceptance criteria
- `/` visually matches `design/vertex-home.png` section by section (nav, hero, search, courses, note, bars).
- Works at 375px with no horizontal scroll.
- Typecheck, lint, and build pass.

## Checks to run
- `npx tsc --noEmit`, `npm run lint`, `npm run build`
- Dev server, screenshot at 1024 and 375 widths, compare against reference.

## Manual test steps
1. `npm run dev`, open `http://localhost:3000`.
2. Compare against `design/vertex-home.png`.
3. Press Ctrl+K: search input focuses. Type a query and press Enter: goes to `/search?q=...` (404 until the search page exists).
4. Click a course card and "Explore Courses": routes to `/courses/...` and `/courses` (404 until built).
5. Resize to mobile: cards stack, no horizontal scroll.

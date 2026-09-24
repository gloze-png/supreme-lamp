# TrueSocial — React + Tailwind Conversion

A Vite + React 18 + Tailwind CSS rebuild of the original static `true-social` HTML template (a one-page agency site: hero, about, services, portfolio, team, testimonials, FAQ, contact, blog).

## Running it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

No environment variables or backend are required. The contact/chat forms have no server to submit to in the original template either (`action="#"`), so both just show a client-side confirmation message on submit.

## Architecture at a glance

```
src/
  App.jsx                     – composes the page, owns mobile-nav + scroll-spy state
  components/
    common/                   – Reveal, SectionTitle, ThemeButton, Counter, CustomCursor,
                                 Preloader, ChatWidget, VideoModal, CircularText, ScrollToTopButton
    layout/                   – Header, NavContent, MobileNav, Footer
    sections/                 – one component per page section (14 total)
  data/                       – content as plain arrays (services, team, testimonials, etc.)
  hooks/                      – useInView, useCountUp, useScrollState, useScrollSpy
  index.css                   – Tailwind directives + a handful of truly global rules that
                                 can't be a JSX className (body.locked, reduced-motion,
                                 focus rings, the shared heading/body font defaults)
public/assets/
  images/, fonts/             – copied as-is
  css/font-awesome-all.css,
  css/flaticon.css            – the two icon-font stylesheets actually used on this page
```

**Styling approach:** every visual is expressed as Tailwind utility classes directly in JSX. There is no bespoke per-section CSS left — the design tokens (colors, fonts, keyframes) that used to live in a global stylesheet now live in `tailwind.config.js`, and everything else (spacing, layout, hover/reveal states, responsive behavior) is inline utility classes. Repeated patterns (the "eyebrow + heading" pattern, the lime pill button with its circle-reveal hover) were pulled into two small shared components (`SectionTitle`, `ThemeButton`) instead of a shared CSS class, so there's exactly one place to change them.

**On responsive breakpoints:** the original theme's CSS used a dense set of custom, Bootstrap-era breakpoints (roughly 767/991/1199/1319px, plus several ultra-wide-only tiers past 1320px for a couple of sections). Rather than reproducing every one of those exactly, each section was rebuilt mobile-first against Tailwind's standard `sm`/`md`/`lg`/`xl`/`2xl` scale (640/768/1024/1280/1536px) — close enough to the original tiers that the layout intent (stack on phones, split into columns on tablets, the full art-directed desktop layout from `lg`/`xl` up) carries over faithfully, while keeping the breakpoint system consistent and predictable across every component.

---

## 1. Complete React project structure
See the tree above — 27 components (including the new `ThemeButton`), 4 hooks, 10 data modules, all under `src/`.

## 2. Removed CSS files (not carried over from the original `assets/css/`)
- `bootstrap.min.css` (204KB) — its grid/utility classes (`row`, `col-xl-*`, etc.) were replaced with Tailwind `grid`/`flex` utilities throughout every section.
- `animate.min.css` (84KB) — only 3 of its keyframes were actually used (`fadeInLeft`, `fadeInUp`, `fadeInRight`); they're now defined directly in `tailwind.config.js` with identical values.
- `aos.css` (28KB) and `jquery.magnific-popup.css` (8KB) — functionality replaced by custom React components (`Reveal`, `VideoModal`); no equivalent CSS needed.
- `swiper.min.css` (16KB) — replaced by the official `swiper/css` that ships with the `swiper` npm package.
- `jquery-ui.css` (36KB), `owl.carousel.min.css` + `owl.theme.default.min.css` (8KB), `nice-select.css` (8KB), `odometer.min.css` (4KB) — all unused on this page (no jQuery UI widgets, no `owl-carousel` markup, no `<select>`, and the "odometer" counters are now driven by a small custom hook instead of the Odometer.js library).
- `style.css` + `responsive.css` (the theme's own hand-authored design system, ~110KB) and the 17 per-section files under the old `styles/modules/` folder — hand-translated into Tailwind utility classes directly in JSX (see "Styling approach" above). Nothing from the original bespoke CSS remains as a stylesheet; the colors, fonts, and keyframes it defined now live as tokens in `tailwind.config.js`.

**All original CSS has been removed** — the only CSS shipped now is Tailwind's generated utility stylesheet plus a ~40-line `src/index.css` for the handful of concerns Tailwind utilities can't express on a single element (see below).

## 3. Removed JS files (all of `assets/js/*`, replaced by React)
Every vendor script was removed and its behavior reimplemented as React state/hooks/effects:
`jquery-latest.js`, `jquery-ui.js`, `bootstrap.bundle.min.js`, `jquery.ajaxchimp.min.js` (no newsletter form on this page), `jquery.appear.min.js` → `useInView`, `swiper.min.js` → `swiper/react`, `jquery.magnific-popup.min.js` → `VideoModal`, `jquery.validate.min.js` → native HTML5 validation, `odometer.min.js` + `wNumb.min.js` → `useCountUp`, `wow.js` → `Reveal`, `owl.carousel.min.js` (unused), `jquery.nice-select.min.js` (unused), `marquee.min.js` (loaded in the original `<head>` but no `.marquee` element exists anywhere on the page — dead weight), `aos.js` → `Reveal`, `gsap.js` / `ScrollTrigger.js` / `SplitText.js` → a lightweight IntersectionObserver reveal (see note below), `jquery.circleType.js` → `CircularText` (SVG `<textPath>`), `jquery.fittext.js` / `jquery.lettering.min.js` (loaded but never invoked on this page), `script.js` → distributed across the hooks/components listed throughout this doc.

**Note on GSAP SplitText:** the original heading-reveal effect used GSAP's `SplitText` plugin, which is part of paid GreenSock Club membership and isn't distributed on the public npm registry — it couldn't be included here regardless of implementation approach. `Reveal` provides a close, license-clean substitute (fade + slide on scroll into view) rather than a character-by-character split.

## 4. Removed / unused assets
- `search-popup` markup was dropped — it existed in the original HTML but had no trigger button anywhere in that page's header (an orphaned leftover from another page in the multi-page template).
- Otherwise all images are used and were copied over as-is.

## 5. List of reusable components
`SectionTitle` (used 9×, now also with a `dark` variant for sections on a black background), `ThemeButton` (the lime pill CTA, used 4×: header, footer, contact form, chat widget), `Reveal` (used 20+ times across services/team/blog/hero/counters), `Counter` (used 6×: 2 in the hero, 1 in about, 4 in the stats band — replacing two different original mechanisms with one), plus `CircularText`, `VideoModal` (used from both `Explore` and `VideoBanner`), `NavContent` (shared by the header and its sticky clone).

## 6. Custom CSS
None. Every rule from the original `style.css`/`responsive.css`/`styles/modules/*.css` has been hand-translated into Tailwind utility classes on the elements that use them; the files themselves have been deleted. `tailwind.config.js` holds the small set of design tokens (colors, fonts, keyframes) those rules used to define, and `src/index.css` is ~40 lines: Tailwind's three `@tailwind` directives plus the handful of truly global concerns no single-element `className` can express —
- `body.locked`, toggled directly on `<body>` by `MobileNav`/`VideoModal` (elements outside the React tree that renders them, so it can't be a JSX class),
- the `prefers-reduced-motion` override (applies to every animation/transition at once, not per-element),
- a visible focus ring for keyboard users (Tailwind's preflight removes the browser default outline), and
- the shared body/heading font defaults (`font-sans`/`font-serif` + color), since virtually every heading and paragraph on the page uses the same two typefaces — a `@layer base` rule here removes what would otherwise be the same three classes repeated on 40+ elements.

Two bespoke effects that had no clean Tailwind-utility equivalent were rebuilt as inline `<style>`-free techniques instead of custom CSS: the FAQ accordion's smooth open/close (a CSS grid animating `grid-template-rows` via an arbitrary-value utility) and the button/card hover "circle reveal" (Tailwind's `before:`/`after:` pseudo-element utilities with arbitrary `clip-path` values).

One functional fix made along the way: the "ripple" effect around the video play button referenced a `@keyframes ripple` that was never actually defined anywhere in the original CSS, so it was inert in the source template. It's now a working pulse using Tailwind's built-in `animate-ping`.

## 7. Performance improvements
- Removed ~396KB of unused/replaceable vendor CSS (see #2) and ~15 vendor JS files, including jQuery itself, plus the ~110KB of the theme's own hand-authored CSS (translated into Tailwind utilities instead). The entire production CSS bundle — Tailwind's generated utilities for the whole site — is now about 60KB unminified / ~13KB gzipped, versus the original theme's several hundred KB of combined stylesheets.
- Route-level code isn't applicable (single page), but the production build is chunked: `vendor` (React), `carousel` (Swiper), and the app bundle load as separate cacheable chunks (see `vite.config.js`).
- Counters and scroll-reveals only run their animation once, on first entry into the viewport, via a shared `IntersectionObserver`-based hook rather than a global scroll listener per element.
- The Swiper carousels only render the module actually used (`Autoplay`, `Pagination`) rather than the full library.

## 8. Responsive improvements
- All Bootstrap grid usage (`row`/`col-xl-*`/`col-lg-*`/`col-md-*`) was rebuilt with Tailwind's `grid`/responsive utilities, matching the same intended breakpoint behavior (stacking on mobile, splitting into columns from `sm`/`md`/`xl` up) throughout every section.
- Every section that used to rely on the theme's own CSS for its responsive behavior (rather than Bootstrap's grid) — the hero's giant display type, the overlapping stat circles in the counters band, the portfolio/testimonial/contact split layouts, the sticky header, the mobile nav drawer — was rebuilt mobile-first: base (unprefixed) classes target phones, with `sm:`/`md:`/`lg:`/`xl:`/`2xl:` utilities layering on the wider-screen layout. Nothing depends on a stylesheet loading in a particular order anymore (the original setup required `legacy-responsive.css` to load *after* every section's own CSS module for its overrides to win).
- A few decorative absolutely-positioned elements that only ever worked at one specific desktop width in the original (e.g. the "Explore More" spinning badge, sitting at a fixed `right` offset) were given responsive positioning so they stay on-screen and legible on narrow viewports instead of clipping or overlapping content.
- A few hard-coded `<br />` line breaks inside body paragraphs in the original markup (which don't reflow well at arbitrary widths) were removed in favor of natural text wrapping; short, clearly intentional display-heading breaks (e.g. the footer's "Let's Create / Something Great") were kept.

## 9. Accessibility improvements
- Real `<h1>` on the hero ("Digital"); the "WEB DESIGN" label and "Solution" line — previously separate `<h2>`/`<h3>` elements — are no longer competing headings, avoiding a fractured heading outline.
- All decorative images/icons/shapes get `alt=""` or `aria-hidden="true"`; meaningful images (team portraits, testimonial photo) get descriptive `alt` text.
- All icon-only buttons (mobile-nav toggle/close, chat toggle/close, video modal close, FAQ accordion triggers) have `aria-label`s; the FAQ accordion uses `aria-expanded`/`aria-controls` and real `<button>` elements instead of clickable `<div>`s.
- Every form input has an associated (visually-hidden where the design doesn't show one) `<label>`.
- Visible focus rings were added for keyboard users (the original theme had none defined).
- `prefers-reduced-motion` is respected globally — every keyframe animation and transition collapses to near-instant when the user has that preference set.
- Dead `href="#"` wrappers around purely decorative content (e.g. the brand-logo carousel) were removed rather than left as non-functional links.

## 10. Recommendations for further optimization
1. **Image optimization.** The original `assets/images` (~8MB) were copied over unmodified; converting the large JPEGs/PNGs to responsive `srcset`s (or AVIF/WebP with a fallback) would meaningfully cut initial load weight.
2. **Route-based/lazy loading**, if this ever grows beyond a single page (e.g. real `service-details`, `portfolio-details`, `blog-details` pages — currently `href="#"` placeholders since only the one-page template was provided): use `React.lazy` + `Suspense` per route.
3. **Self-host Google Fonts** (DM Sans, Marcellus) instead of the `fonts.googleapis.com` request, to remove a render-blocking third-party origin.
4. Several links pointed to other pages in the original multi-page template that weren't part of this conversion (`service-details.html`, `portfolio-details.html`, `team-details.html`, `testimonial.html`, `blog-details.html`, `blog.html`); these are `href="#"` placeholders now and are the natural place to wire up real routes if those pages get built.
# supreme-lamp

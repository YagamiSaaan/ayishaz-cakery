
# Refactoring & Optimization Plan — Ayishaz Cakery

The site currently lives almost entirely in a single 976-line `src/routes/index.tsx`. It works, but it is hard to maintain, ships more JS than needed, and leaves easy performance/SEO/a11y wins on the table. This plan splits the work into small, independently shippable steps so nothing regresses.

---

## Step 1 — Establish shared foundation (no visual change)

Goal: create the primitives everything else will lean on.

- Create `src/lib/site.ts` for constants: `SITE_URL`, `PHONE_TEL`, `WHATSAPP_URL`, `EMAIL_URL`, `INSTAGRAM_URL`, `FACEBOOK_URL`, `MAPS_URL`, `NAV`, brand strings, address.
- Create `src/lib/cakes.ts` for the collections/pricing data (single source of truth, typed).
- Create `src/lib/seo.ts` with a `buildMeta({ title, description, path, image })` helper + JSON-LD builder for `Bakery`.
- Create `src/hooks/useScrolled.ts` (extract the scroll listener currently in the route).
- Keep behavior identical; only imports move.

## Step 2 — Break the monolith into section components

Goal: `src/routes/index.tsx` becomes a thin composition file (~80 lines).

New files under `src/components/sections/`:
- `Nav.tsx`, `Hero.tsx`, `About.tsx`, `Collections.tsx`, `Process.tsx`, `Gallery.tsx` (+ `Lightbox.tsx`), `Testimonials.tsx`, `Faq.tsx`, `Contact.tsx`, `Footer.tsx`, `FloatingActions.tsx`.
- Shared primitives in `src/components/ui-luxe/`: `Field.tsx`, `Reveal.tsx` (fade-up wrapper), `SectionHeading.tsx`, `LuxeButton.tsx`.
- Each component owns its own props and imports its own icons — enables tree-shaking and future code-splitting.

## Step 3 — Type safety & data hygiene

- Add explicit types for cake, testimonial, process-step, faq, gallery-item.
- Replace `any`/inferred string unions with `as const` arrays.
- Ensure every `<img>` has meaningful `alt` (currently many are `alt=""`).
- Validate the contact form with `zod` before building the mailto (name required, email regex, phone optional, message min length).

## Step 4 — Performance

- **Image pipeline**: install `vite-imagetools`; import hero/gallery as `?format=avif&w=1600;1200;800&as=srcset` and render `<img srcset sizes>` with `loading="lazy"` (except hero: `fetchpriority="high"`, `loading="eager"`). Convert generated JPGs referenced by AVIF/WebP variants.
- **LCP preload**: add `<link rel="preload" as="image" href={heroAvif} fetchpriority="high">` in the route `head().links`.
- **Fonts**: preconnect to `fonts.googleapis.com` / `fonts.gstatic.com` in `__root.tsx`; add `font-display: swap`; subset to the weights actually used.
- **Framer Motion**: replace `motion.*` usage in low-value spots (footer, faq chevron) with CSS transitions to reduce bundle; keep it for hero/parallax/gallery reveals only. Consider `LazyMotion` + `domAnimation` for further savings.
- **Route-level asset scoping**: keep index-only assets out of `__root.tsx`.
- **Reduced motion**: honor `prefers-reduced-motion` in `Reveal` and parallax.

## Step 5 — Accessibility

- Landmarks: `<header>`, `<main>`, `<nav aria-label>`, `<footer>`, `<section aria-labelledby>` on each block.
- Focus states: visible ring on all links/buttons (currently overridden by `focus:outline-none` in inputs — replace with `focus-visible:ring`).
- Lightbox: trap focus, close on `Esc`, restore focus to the trigger, `role="dialog" aria-modal="true"`.
- Mobile menu: `aria-controls`, `aria-expanded`, `Esc` to close, focus first link on open.
- Color contrast audit for `text-cream/60` on cream backgrounds; bump to `/75` where WCAG AA fails.
- Form: inline error messages tied via `aria-describedby`, `aria-invalid`.

## Step 6 — SEO polish

- Per-section anchors already exist; add `id` + `aria-labelledby` for crawlability.
- Extend JSON-LD: add `Product` entries for signature collections with `offers` (price, priceCurrency `INR`), `FAQPage` for the FAQ block, `BreadcrumbList` on the home route.
- Add `hreflang="en-IN"`, `geo.region` meta, and `<meta name="theme-color" content="#1B120D">`.
- Verify `sitemap.xml`/`robots.txt` reference the real production domain; add `lastmod`.
- Ensure a single `<h1>` (hero) and demote other headings accordingly.

## Step 7 — Robustness & DX

- Add `errorComponent` and `notFoundComponent` to the index route and a root `notFoundComponent`, both branded.
- Add ESLint rules: `jsx-a11y`, `react/jsx-no-target-blank` (make sure every external link uses `rel="noopener noreferrer"`).
- Add a lightweight `format` script (Prettier) and enable Tailwind class sorting.
- Add a Vitest smoke test that renders the route and asserts nav/CTA/JSON-LD presence.

## Step 8 — Analytics & conversion (opt-in)

- Add a tiny privacy-friendly analytics snippet (Plausible or Umami) in `__root.tsx` guarded by env flag — no cookies.
- Track events: `order_now_click`, `whatsapp_click`, `call_click`, `email_submit`, `gallery_open`.

## Step 9 — Verification gates (run after each step)

1. `bunx tsgo --noEmit` clean.
2. Preview loads without console errors; nav, WhatsApp, tel, mailto, social, gallery lightbox, mobile menu all functional.
3. Lighthouse (mobile) target: Performance ≥ 90, A11y ≥ 95, SEO = 100, Best Practices ≥ 95.
4. Visual diff: hero, collections, gallery, contact — no unintended shifts.

---

## Technical notes

- No backend/data layer is needed; Lovable Cloud stays off unless the user later wants order submissions persisted.
- Framer Motion stays as the sole animation lib — no additional runtime deps except `vite-imagetools` (build-time) and optionally `zod` (already common).
- All refactors are frontend-only and preserve current copy, palette, and brand tokens defined in `src/styles.css`.
- Steps 1–3 are pure refactor (safe to ship together). Steps 4–6 are user-visible improvements. Steps 7–8 are optional polish.

Shall I proceed with Step 1 + Step 2 first (foundation + section split) and stop for review before touching performance/SEO?

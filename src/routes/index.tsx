/**
 * `/` — Ayishaz Cakery landing page (TanStack Start route).
 *
 * Composes the site's sections in scroll order and defines the page's SEO
 * metadata: title, meta description, OpenGraph / Twitter cards, canonical
 * URL, LCP hero preload, and a `Bakery` JSON-LD block.
 *
 * State ownership: each interactive section owns its own state
 * (scroll flag → `Nav`, lightbox → `Gallery`, form → `Contact`), so this
 * top-level component is effectively stateless and doesn't re-render as
 * the user scrolls or opens the mobile menu.
 */
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

import heroCake from "@/assets/hero-cake.jpg";
import { SITE_URL, INSTAGRAM_URL, FACEBOOK_URL, PHONE_TEL, ADDRESS } from "@/lib/site";
import { FAQS } from "@/lib/faqs";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedCakes } from "@/components/sections/FeaturedCakes";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";

// Absolute URL for the hero image — required by `og:image` / `twitter:image`
// (relative paths get rejected by most social-card scrapers).
const ogImageAbs = `${SITE_URL}${heroCake}`;

/**
 * Route-level error boundary for `/`.
 *
 * Rendered by TanStack Router when the route's loader/component throws.
 * Provides a branded fallback plus a "Try again" button that both
 * invalidates the router cache (re-runs the loader) and calls `reset()`
 * to clear the boundary.
 *
 * @param error TS Error thrown from the route. Logged to the console for
 *              debugging; not shown to the user verbatim.
 * @param reset TanStack Router callback that clears the error boundary
 *              once the underlying issue is resolved.
 */
function IndexErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error("Index route error:", error);
  }, [error]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--espresso)] text-cream px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Something went wrong</p>
        <h1 className="text-3xl md:text-4xl font-serif mb-4">We couldn't load this page</h1>
        <p className="text-cream/70 text-sm mb-8">
          A small hiccup on our end. You can try again or reach us directly and we'll help right away.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-luxe btn-luxe-hover !py-3 !px-6 !text-[0.72rem]"
          >
            Try again
          </button>
          <Link to="/" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayishaz Cakery — Luxury Cake Atelier in Kannur, Kerala" },
      { name: "description", content: "Award-winning luxury cake atelier in Kannur, Kerala. Bespoke wedding cakes, birthday cakes, macarons & artisan desserts — handcrafted with the finest ingredients." },
      { name: "keywords", content: "luxury cakes Kannur, wedding cakes Kerala, custom birthday cakes, macarons Kannur, Ayishaz Cakery" },
      { property: "og:title", content: "Ayishaz Cakery — Luxury Cake Atelier in Kannur" },
      { property: "og:description", content: "Edible art crafted for unforgettable celebrations. Bespoke wedding & birthday cakes in Kannur, Kerala." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: ogImageAbs },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ayishaz Cakery — Luxury Cake Atelier in Kannur" },
      { name: "twitter:description", content: "Edible art crafted for unforgettable celebrations." },
      { name: "twitter:image", content: ogImageAbs },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroCake, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Ayishaz Cakery",
          image: ogImageAbs,
          "@id": `${SITE_URL}/`,
          url: `${SITE_URL}/`,
          telephone: PHONE_TEL,
          priceRange: "₹₹₹",
          servesCuisine: ["Cakes", "Desserts", "Patisserie"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Fort Road",
            addressLocality: "Kannur",
            addressRegion: "Kerala",
            postalCode: "670001",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 11.870, longitude: 75.370 },
          openingHours: "Tu-Su 10:00-20:00",
          sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2000",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          ],
        }),
      },
    ],
  }),
  component: Index,
  errorComponent: IndexErrorComponent,
});

/**
 * Landing page composition. Sections are declared in visual (scroll) order.
 * `overflow-x-clip` on the outer wrapper prevents horizontal scrollbars
 * caused by decorative absolutely-positioned motion elements.
 */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <FeaturedCakes />
        <Gallery />
        <Testimonials />
        <Process />
        <Stats />
        <InstagramFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

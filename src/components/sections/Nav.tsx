import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV, WHATSAPP_URL } from "@/lib/site";

/**
 * Sticky top navigation.
 *
 * Owns two pieces of local UI state (kept in the leaf to avoid re-rendering
 * the whole landing page on scroll):
 *  - `scrolled` — `true` once the user has scrolled past 40px. Toggles the
 *    translucent blurred background + tighter padding. Updated inside a
 *    `requestAnimationFrame` callback and only committed when the boolean
 *    actually changes, so `setState` fires at most twice per full page scroll.
 *  - `open`     — mobile menu open/closed. While open, `body.overflow` is
 *    locked to prevent the page underneath from scrolling.
 *
 * No props. Renders a `<header>` landmark.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let last = false;
    const update = () => {
      const next = window.scrollY > 40;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "py-3 backdrop-blur-xl bg-[rgba(27,18,13,0.85)] border-b border-[rgba(212,175,55,0.12)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#home" onClick={() => setOpen(false)} className="flex flex-col leading-none">
          <span className="font-script text-3xl text-gold-gradient">Ayishaz</span>
          <span className="text-[0.6rem] tracking-[0.4em] text-[var(--caramel)] mt-1 pl-1">CAKERY</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-cream/80 hover:text-[var(--gold)] transition relative group"
            >
              {n.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-px bg-[var(--gold)] transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxe btn-luxe-hover hidden md:inline-flex !py-3 !px-6 !text-[0.72rem]"
          >
            Order Now <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/90 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 border-t border-[rgba(212,175,55,0.12)]">
          <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase text-cream/85 hover:text-[var(--gold)] transition py-1"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-luxe btn-luxe-hover justify-center mt-2 !py-3 !text-[0.72rem]"
            >
              Order Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

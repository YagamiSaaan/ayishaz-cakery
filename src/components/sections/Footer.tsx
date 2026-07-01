import { Heart } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { FOOTER_COLUMNS } from "@/lib/data/footer-nav";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 md:px-10 border-t border-[rgba(212,175,55,0.12)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <div className="mb-5">
              <BrandMark size="lg" />
            </div>
            <p className="text-cream/55 leading-relaxed max-w-sm">
              A luxury cake atelier crafting edible art for life's most cherished occasions.
              Handmade in Kannur since 2012.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-cream/70 hover:text-[var(--gold)] transition text-sm"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="gold-hairline mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-cream/45">
          <p>© {new Date().getFullYear()} Ayishaz Cakery. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">
            Handcrafted with <Heart className="inline w-3 h-3 text-[var(--gold)] fill-current" aria-hidden="true" /> in Kannur
          </p>
        </div>
      </div>
    </footer>
  );
}

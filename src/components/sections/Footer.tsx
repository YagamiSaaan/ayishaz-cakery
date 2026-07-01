import { Heart } from "lucide-react";
import { EMAIL_URL, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 md:px-10 border-t border-[rgba(212,175,55,0.12)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-script text-4xl text-gold-gradient">Ayishaz</span>
              <span className="text-[0.6rem] tracking-[0.4em] text-[var(--caramel)] mt-1 pl-1">CAKERY</span>
            </div>
            <p className="text-cream/55 leading-relaxed max-w-sm">
              A luxury cake atelier crafting edible art for life's most cherished occasions.
              Handmade in Kannur since 2012.
            </p>
          </div>
          {[
            {
              title: "Explore",
              items: [
                { label: "About", href: "#about", external: false },
                { label: "Cakes", href: "#cakes", external: false },
                { label: "Gallery", href: "#gallery", external: false },
                { label: "Process", href: "#process", external: false },
              ],
            },
            {
              title: "Studio",
              items: [
                { label: "Wedding Cakes", href: "#cakes", external: false },
                { label: "Birthday", href: "#cakes", external: false },
                { label: "Macarons", href: "#cakes", external: false },
                { label: "Testimonials", href: "#testimonials", external: false },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "Atelier", href: MAPS_URL, external: true },
                { label: "Email", href: EMAIL_URL, external: false },
                { label: "WhatsApp", href: WHATSAPP_URL, external: true },
                { label: "Instagram", href: INSTAGRAM_URL, external: true },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
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
            </div>
          ))}
        </div>
        <div className="gold-hairline mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-cream/45">
          <p>© {new Date().getFullYear()} Ayishaz Cakery. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Handcrafted with <Heart className="inline w-3 h-3 text-[var(--gold)] fill-current" /> in Kannur</p>
        </div>
      </div>
    </footer>
  );
}

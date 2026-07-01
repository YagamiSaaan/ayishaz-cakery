import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURED_CAKES } from "@/lib/data/cakes";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CircleIconButton } from "@/components/ui/CircleIconButton";

/**
 * Horizontal-scroll carousel of signature cakes.
 * Owns a ref to the scroll track so left/right buttons can nudge it by ±380px.
 */
export function FeaturedCakes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <section id="cakes" className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap items-end justify-between gap-6 mb-14">
        <SectionHeader eyebrow="Our Signature Collection">
          Featured <span className="font-script italic text-gold-gradient">Cakes</span>
          <span className="block gold-hairline mt-5 w-32" />
        </SectionHeader>
        <div className="flex items-center gap-4">
          <a href="#gallery" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">
            View All Cakes <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <div className="flex gap-2">
            <CircleIconButton icon={ChevronLeft} onClick={() => scroll(-1)} aria-label="Previous cake" />
            <CircleIconButton icon={ChevronRight} onClick={() => scroll(1)} aria-label="Next cake" />
          </div>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-6 snap-x snap-mandatory">
        {FEATURED_CAKES.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.07 }}
            className="snap-start shrink-0 w-[280px] md:w-[340px] group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[var(--chocolate)]">
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--espresso)]/30 to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="w-4 h-4 text-[var(--gold)]" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">{c.price}</p>
                <h3 className="text-2xl mb-1">{c.name}</h3>
                <p className="text-xs text-cream/60 tracking-wide">{c.tag}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

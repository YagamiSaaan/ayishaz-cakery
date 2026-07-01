import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Lightbox } from "./Lightbox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GALLERY, GALLERY_HEIGHTS } from "@/lib/data/gallery";

/**
 * Masonry-style gallery grid. Owns the lightbox state locally so opening a
 * preview doesn't re-render the rest of the page.
 */
export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="Our Creations"
          align="center"
          className="mb-16"
          subtitle="A curated archive of recent commissions — celebrations rendered in sugar, chocolate and gold."
        >
          A Gallery of Sweet <span className="font-script italic text-gold-gradient">Masterpieces</span>
        </SectionHeader>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setLightbox(g.src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={`relative overflow-hidden rounded-3xl group ${GALLERY_HEIGHTS[g.h]}`}
              aria-label={`Open image: ${g.alt}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center">
                  <Plus className="w-5 h-5 text-[var(--espresso)]" aria-hidden="true" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { fadeUp } from "./shared";
import { Lightbox } from "./Lightbox";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeLuxury from "@/assets/cake-luxury.jpg";
import cakeMacarons from "@/assets/cake-macarons.jpg";
import cakeDessert from "@/assets/cake-dessert.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const GALLERY = [
  { src: gallery1, h: "tall", alt: "Rustic naked wedding cake with fresh florals" },
  { src: cakeWedding, h: "med", alt: "Three-tier ivory wedding cake with gold leaf accents" },
  { src: gallery2, h: "short", alt: "Chocolate ganache drip cake with berries" },
  { src: cakeLuxury, h: "tall", alt: "Luxury champagne-hued celebration cake" },
  { src: gallery3, h: "med", alt: "Pastel buttercream birthday cake with sugar florals" },
  { src: cakeDessert, h: "tall", alt: "Signature dessert box with assorted patisserie" },
  { src: gallery4, h: "med", alt: "Bespoke sculpted cake with edible gold detailing" },
  { src: cakeMacarons, h: "short", alt: "Tower of pastel French macarons" },
];

/**
 * Maps a logical row-height token to a Tailwind row-span class. Hoisted out
 * of the component body so the object identity is stable across renders.
 */
const HEIGHTS: Record<string, string> = {
  tall: "row-span-2",
  med: "row-span-2",
  short: "row-span-1",
};

/**
 * Masonry-style gallery grid.
 *
 * Owns the lightbox state locally so opening/closing a preview does not
 * re-render the rest of the landing page. Clicking a tile sets `lightbox`
 * to the image src; the `<Lightbox>` component is only mounted when a src
 * is selected and unmounts on close.
 */
export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Our Creations</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">A Gallery of Sweet <span className="font-script italic text-gold-gradient">Masterpieces</span></h2>
          <p className="mt-5 max-w-xl mx-auto text-cream/60">A curated archive of recent commissions — celebrations rendered in sugar, chocolate and gold.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setLightbox(g.src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={`relative overflow-hidden rounded-3xl group ${HEIGHTS[g.h]}`}
            >
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center">
                  <Plus className="w-5 h-5 text-[var(--espresso)]" />
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

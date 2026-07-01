import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { INSTAGRAM_URL } from "@/lib/site";
import { INSTAGRAM_IMAGES } from "@/lib/data/instagram";

export function InstagramFeed() {
  return (
    <section id="instagram" className="relative py-24 md:py-32 px-6 md:px-10" aria-label="Instagram highlights">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="eyebrow mb-5"><Instagram className="w-3.5 h-3.5" aria-hidden="true" /> @ayishaz.cakery</div>
            <h2 className="text-4xl md:text-5xl leading-[1.05]">
              Follow the <span className="font-script italic text-gold-gradient">Atelier</span>
            </h2>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">
            <Instagram className="w-4 h-4" aria-hidden="true" /> Follow on Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-2xl group"
              aria-label="Open Ayishaz Cakery on Instagram"
            >
              <img src={src} alt="Instagram post by Ayishaz Cakery" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/60 flex items-center justify-center transition">
                <Instagram className="w-5 h-5 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import aboutCake from "@/assets/about-cake.jpg";
import { ABOUT_FEATURES } from "@/lib/data/about-features";
import { IconBadge } from "@/components/ui/IconBadge";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-cream rounded-[2.5rem] p-6 md:p-12 lg:p-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center text-[var(--espresso)] shadow-[var(--shadow-luxe)]"
        >
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[14rem] rounded-b-3xl">
              <img src={aboutCake} alt="Tiered wedding cake" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[0.65rem] tracking-[0.45em] text-[var(--mocha)] uppercase">
              Handcrafted Since 2012
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5 !text-[var(--caramel)]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Welcome to Ayishaz Cakery
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-[var(--espresso)]">
              Where Taste Meets<br />
              <span className="font-script italic text-[var(--mocha)]">Artistry</span>
            </h2>
            <div className="gold-hairline my-6 w-24" />
            <p className="text-[var(--mocha)]/85 leading-relaxed max-w-lg">
              Every cake is a quiet study in proportion, texture and restraint — handcrafted with
              precision, slow patience and the finest ingredients. From intimate gatherings to
              grand occasions, we make every moment a little sweeter.
            </p>

            <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 list-none">
              {ABOUT_FEATURES.map((f) => (
                <li key={f.title} className="flex flex-col items-start gap-3">
                  <IconBadge icon={f.icon} size="sm" />
                  <p className="text-xs leading-tight text-[var(--mocha)] tracking-wide">{f.title}</p>
                </li>
              ))}
            </ul>

            <a href="#process" className="mt-9 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--espresso)] border border-[var(--mocha)]/30 rounded-full px-6 py-3 hover:bg-[var(--espresso)] hover:text-[var(--cream)] transition-colors">
              Learn More About Us <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

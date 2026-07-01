import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StarRating } from "@/components/ui/StarRating";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader eyebrow="Kind Words" align="center" className="mb-16">
          Loved by Those Who<br />
          <span className="font-script italic text-gold-gradient">Celebrate Beautifully</span>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 hover:border-[rgba(212,175,55,0.35)] transition-all hover:-translate-y-1 duration-500"
            >
              <Quote className="w-8 h-8 text-[var(--gold)] mb-5" aria-hidden="true" />
              <p className="text-cream/85 leading-relaxed text-[0.95rem]">{t.text}</p>
              <div className="gold-hairline my-6" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-script text-xl italic text-[var(--cream)]">{t.name}</p>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--caramel)] mt-1">{t.role}</p>
                </div>
                <StarRating count={t.rating} label={`${t.name} rated us ${t.rating} out of 5`} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

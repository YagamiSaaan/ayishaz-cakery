import { motion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import { fadeUp } from "./shared";

const TESTIMONIALS = [
  { name: "Layla Hassan", role: "Bride", text: "The wedding cake was a work of art — guests are still talking about it months later. Ayisha's eye for detail is unmatched.", rating: 5 },
  { name: "Omar Khalid", role: "Father", text: "From the first sketch to delivery, every step felt bespoke. The chocolate work was breathtaking and tasted divine.", rating: 5 },
  { name: "Sara Mansoori", role: "Event Planner", text: "I've worked with countless pastry studios; Ayishaz Cakery is the only one I trust for our most discerning clients.", rating: 5 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Kind Words</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">Loved by Those Who<br /><span className="font-script italic text-gold-gradient">Celebrate Beautifully</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 hover:border-[rgba(212,175,55,0.35)] transition-all hover:-translate-y-1 duration-500"
            >
              <Quote className="w-8 h-8 text-[var(--gold)] mb-5" />
              <p className="text-cream/85 leading-relaxed text-[0.95rem]">{t.text}</p>
              <div className="gold-hairline my-6" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-script text-xl italic text-[var(--cream)]">{t.name}</p>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--caramel)] mt-1">{t.role}</p>
                </div>
                <div className="flex gap-0.5 text-[var(--gold)]">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

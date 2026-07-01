import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { fadeUp } from "./shared";

const STEPS = [
  { n: "01", title: "Consultation", text: "We listen to your story, palette and dreams — then translate them into a design language." },
  { n: "02", title: "Design & Sketch", text: "Hand-drawn concepts, fabric swatches, gold registers — refined until every detail sings." },
  { n: "03", title: "Handcrafted", text: "Our atelier shapes, bakes and finishes each tier with quiet patience and obsessive care." },
  { n: "04", title: "Presentation", text: "White-glove delivery, on-site assembly and a final polish so the cake meets its moment." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16 items-end">
          <div>
            <div className="eyebrow mb-5"><Sparkles className="w-3.5 h-3.5" /> Our Process</div>
            <h2 className="text-4xl md:text-6xl leading-[1.05]">From Whisper<br /><span className="font-script italic text-gold-gradient">to Showpiece</span></h2>
          </div>
          <p className="text-cream/65 leading-relaxed lg:pl-12 lg:border-l lg:border-[rgba(212,175,55,0.2)]">
            A four-act ritual that turns conversations into edible heirlooms. Every cake we ship has
            passed through these same patient hands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(212,175,55,0.15)] rounded-3xl overflow-hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[var(--espresso)] p-9 hover:bg-[var(--chocolate)] transition-colors group"
            >
              <p className="font-script italic text-5xl text-gold-gradient mb-6">{s.n}</p>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{s.text}</p>
              <ArrowUpRight className="w-5 h-5 text-[var(--gold)] mt-6 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

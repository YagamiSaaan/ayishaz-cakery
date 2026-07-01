import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/data/process-steps";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16 items-end"
        >
          <SectionHeader eyebrow="Our Process">
            From Whisper<br />
            <span className="font-script italic text-gold-gradient">to Showpiece</span>
          </SectionHeader>
          <p className="text-cream/65 leading-relaxed lg:pl-12 lg:border-l lg:border-[rgba(212,175,55,0.2)]">
            A four-act ritual that turns conversations into edible heirlooms. Every cake we ship has
            passed through these same patient hands.
          </p>
        </motion.div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(212,175,55,0.15)] rounded-3xl overflow-hidden list-none">
          {PROCESS_STEPS.map((s, i) => (
            <motion.li
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
              <ArrowUpRight className="w-5 h-5 text-[var(--gold)] mt-6 opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus, Sparkles } from "lucide-react";
import { fadeUp } from "./shared";
import { FAQS } from "@/lib/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Frequently Asked</div>
          <h2 id="faq-heading" className="text-4xl md:text-6xl leading-[1.05]">Questions, <span className="font-script italic text-gold-gradient">Answered</span></h2>
        </motion.div>
        <div className="divide-y divide-[rgba(212,175,55,0.15)] border-y border-[rgba(212,175,55,0.15)]">
          {FAQS.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left py-7 flex items-start gap-6 group"
            >
              <span className="font-script italic text-2xl text-[var(--gold)] shrink-0 w-12">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl md:text-2xl text-cream group-hover:text-[var(--gold)] transition-colors">{f.q}</h3>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[var(--gold)]">
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0, marginTop: open === i ? 16 : 0 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden text-cream/65 max-w-2xl leading-relaxed"
                >
                  <p>{f.a}</p>
                </motion.div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

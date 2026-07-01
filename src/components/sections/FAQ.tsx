import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { FAQS } from "@/lib/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Frequently Asked</div>
          <h2 id="faq-heading" className="text-4xl md:text-6xl leading-[1.05]">
            Questions, <span className="font-script italic text-gold-gradient">Answered</span>
          </h2>
        </motion.div>
        <div className="divide-y divide-[rgba(212,175,55,0.15)] border-y border-[rgba(212,175,55,0.15)]">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              index={i}
              question={f.q}
              answer={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Single expandable FAQ row. Split out so state, animation and markup stay
 * focused, and so the button stays a single accessible target.
 */
function FaqItem({
  index,
  question,
  answer,
  open,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={panelId}
      className="w-full text-left py-7 flex items-start gap-6 group"
    >
      <span className="font-script italic text-2xl text-[var(--gold)] shrink-0 w-12">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-6">
          <h3 className="text-xl md:text-2xl text-cream group-hover:text-[var(--gold)] transition-colors">
            {question}
          </h3>
          <span className="shrink-0 w-10 h-10 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[var(--gold)] text-xl leading-none">
            {open ? "−" : "+"}
          </span>
        </div>
        <motion.div
          id={panelId}
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0, marginTop: open ? 16 : 0 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          className="overflow-hidden text-cream/65 max-w-2xl leading-relaxed"
        >
          <p>{answer}</p>
        </motion.div>
      </div>
    </button>
  );
}

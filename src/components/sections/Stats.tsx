import { motion } from "framer-motion";
import { Award, Cake, Heart, Star } from "lucide-react";

const STATS = [
  { n: "12+", l: "Years of Excellence", icon: Award },
  { n: "2000+", l: "Happy Customers", icon: Heart },
  { n: "1500+", l: "Custom Cakes", icon: Cake },
  { n: "25+", l: "Awards Won", icon: Star },
];

export function Stats() {
  return (
    <section className="relative py-16 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-[rgba(212,175,55,0.18)] bg-gradient-to-r from-[var(--chocolate)] via-[var(--mocha)]/40 to-[var(--chocolate)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(212,175,55,0.12)]"
        >
          {STATS.map((s) => (
            <div key={s.l} className="p-8 md:p-10 text-center">
              <div className="w-11 h-11 rounded-full bg-[var(--espresso)] flex items-center justify-center mx-auto mb-4 border border-[rgba(212,175,55,0.2)]">
                <s.icon className="w-4 h-4 text-[var(--gold)]" />
              </div>
              <p className="text-3xl md:text-5xl font-serif">{s.n}</p>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-cream/55 mt-2">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

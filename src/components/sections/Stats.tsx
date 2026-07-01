import { motion } from "framer-motion";
import { STATS } from "@/lib/data/stats";
import { IconBadge } from "@/components/ui/IconBadge";

export function Stats() {
  return (
    <section className="relative py-16 px-6 md:px-10" aria-label="Atelier by the numbers">
      <div className="max-w-[1400px] mx-auto">
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-[rgba(212,175,55,0.18)] bg-gradient-to-r from-[var(--chocolate)] via-[var(--mocha)]/40 to-[var(--chocolate)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(212,175,55,0.12)]"
        >
          {STATS.map((s) => (
            <div key={s.l} className="p-8 md:p-10 text-center">
              <IconBadge icon={s.icon} size="sm" className="mx-auto mb-4" />
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <p className="text-3xl md:text-5xl font-serif">{s.n}</p>
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-cream/55 mt-2">{s.l}</p>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

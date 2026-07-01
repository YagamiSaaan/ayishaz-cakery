import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

/**
 * Editorial section header used across the landing page:
 * an eyebrow (small uppercase label with icon) above a serif H2.
 *
 * @param eyebrow    Small uppercase label above the heading.
 * @param icon       Icon component rendered inside the eyebrow. Defaults to `Sparkles`.
 * @param children   Heading content (JSX so callers can style parts of it).
 * @param subtitle   Optional supporting copy under the heading.
 * @param align      `"center"` centres the block; `"start"` (default) left-aligns.
 * @param id         Optional DOM id for the heading — pair with `aria-labelledby`.
 * @param as         Rendered heading level. Defaults to `"h2"`.
 */
export function SectionHeader({
  eyebrow,
  icon: Icon = Sparkles,
  children,
  subtitle,
  align = "start",
  id,
  as: Tag = "h2",
  className = "",
}: {
  eyebrow: string;
  icon?: LucideIcon;
  children: ReactNode;
  subtitle?: ReactNode;
  align?: "start" | "center";
  id?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <div className={`eyebrow mb-5 ${centered ? "justify-center" : ""}`}>
        <Icon className="w-3.5 h-3.5" aria-hidden="true" /> {eyebrow}
      </div>
      <Tag id={id} className="text-4xl md:text-6xl leading-[1.05]">
        {children}
      </Tag>
      {subtitle && (
        <p className={`mt-5 text-cream/60 ${centered ? "max-w-xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

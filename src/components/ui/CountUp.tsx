import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `to` when scrolled into view.
 * Preserves any non-numeric suffix (e.g. "2000+" → animates 0-2000, keeps "+").
 * Respects `prefers-reduced-motion` by rendering the final value immediately.
 */
export function CountUp({
  value,
  duration = 1600,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^(\d[\d,]*)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : value;
  const [display, setDisplay] = useState(match ? 0 : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, match]);

  return (
    <span ref={ref} className={className}>
      {typeof display === "number" ? display.toLocaleString("en-IN") : display}
      {typeof display === "number" ? suffix : ""}
    </span>
  );
}

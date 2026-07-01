import { useEffect, useState } from "react";

/**
 * Champagne-gold trailing cursor for pointer-fine devices.
 * A small dot follows the cursor 1:1, a larger ring lags behind for a subtle
 * magnetic feel. Both scale up when the user hovers an interactive element.
 * Skipped entirely on touch devices (no `pointer: fine`).
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let rx = pos.x;
    let ry = pos.y;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, label, summary',
      );
      setHover(interactive);
    };
    const tick = () => {
      rx += (pos.x - rx) * 0.18;
      ry += (pos.y - ry) * 0.18;
      setRingPos({ x: rx, y: ry });
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
          transition: "width .2s, height .2s, opacity .2s",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-1.5 h-1.5 rounded-full bg-[var(--gold)] mix-blend-difference"
      />
      <div
        aria-hidden="true"
        style={{
          transform: `translate(${ringPos.x - (hover ? 22 : 14)}px, ${ringPos.y - (hover ? 22 : 14)}px) scale(${hover ? 1.6 : 1})`,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-7 h-7 rounded-full border border-[var(--gold)]/60 transition-transform duration-200"
      />
    </>
  );
}

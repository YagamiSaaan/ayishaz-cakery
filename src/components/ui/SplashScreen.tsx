import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Branded loading splash — shows the wordmark stroking in, then fades away.
 * Runs once per session (sessionStorage flag) so repeat navigation stays snappy.
 */
export function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("ayz_splash_seen");
  });

  useEffect(() => {
    if (!visible) return;
    // Lock body scroll while splash is up
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      sessionStorage.setItem("ayz_splash_seen", "1");
      setVisible(false);
    }, 1600);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--espresso)]"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="font-serif italic text-4xl md:text-5xl text-gold-gradient tracking-widest"
            >
              Ayishaz
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[0.65rem] tracking-[0.4em] uppercase text-cream/70"
            >
              Cakery — Kannur
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

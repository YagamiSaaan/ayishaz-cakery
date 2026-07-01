import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * Fullscreen image preview modal used by the Gallery.
 *
 * @param src     Absolute or bundler-resolved URL of the image to display.
 * @param onClose Callback invoked when the user dismisses the modal —
 *                triggered by (a) clicking the backdrop, (b) clicking the
 *                close button, or (c) pressing the `Escape` key.
 *
 * Side effects while mounted:
 *  - Adds a global `keydown` listener for `Escape` (removed on unmount).
 *  - Locks `document.body.overflow` to `"hidden"` so the page behind the
 *    modal doesn't scroll. Restored on unmount.
 *
 * If the image fails to load (`onError`) a friendly fallback card is shown
 * instead of a broken image icon.
 */
export function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="dialog"
      aria-modal="true"
      aria-label="Cake image preview"
      className="fixed inset-0 z-[100] bg-[var(--espresso)]/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition" aria-label="Close">
        <X className="w-5 h-5" />
      </button>
      {failed ? (
        <div onClick={(e) => e.stopPropagation()} className="glass-card rounded-2xl p-10 max-w-sm text-center">
          <p className="text-cream mb-2">Image couldn't load</p>
          <p className="text-cream/60 text-sm">Please check your connection and try again.</p>
        </div>
      ) : (
        <motion.img
          onClick={(e) => e.stopPropagation()}
          onError={() => setFailed(true)}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          src={src}
          alt="Enlarged cake preview"
          className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl shadow-[var(--shadow-luxe)]"
        />
      )}
    </motion.div>
  );
}

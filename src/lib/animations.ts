/**
 * Shared Framer Motion variants. Kept in `lib/` (not under `components/`)
 * because non-component modules (e.g. tests, storybook stories) may import
 * them too.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

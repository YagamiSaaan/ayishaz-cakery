import { Star } from "lucide-react";

/**
 * Row of filled gold stars for ratings/awards.
 *
 * @param count Number of stars to render (default 5).
 * @param size  Star icon size in Tailwind units (default `3.5` → w-3.5).
 * @param label Accessible label (defaults to `"{count} out of 5 stars"`).
 */
export function StarRating({
  count = 5,
  size = 3.5,
  label,
}: {
  count?: number;
  size?: number;
  label?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-0.5 text-[var(--gold)]"
      role="img"
      aria-label={label ?? `${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className={`w-${size} h-${size} fill-current`} aria-hidden="true" />
      ))}
    </span>
  );
}

import { Star } from "lucide-react";

/**
 * Row of filled gold stars for ratings/awards.
 *
 * @param count Number of stars to render (default 5).
 * @param size  Icon edge length in pixels (default 14 ≈ w-3.5).
 * @param label Accessible label; pass empty string when the row is decorative.
 */
export function StarRating({
  count = 5,
  size = 14,
  label,
}: {
  count?: number;
  size?: number;
  label?: string;
}) {
  const decorative = label === "";
  return (
    <span
      className="inline-flex items-center gap-0.5 text-[var(--gold)]"
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": label ?? `${count} out of 5 stars` })}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} style={{ width: size, height: size }} className="fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

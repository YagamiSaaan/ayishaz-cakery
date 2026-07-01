import type { LucideIcon } from "lucide-react";

/**
 * Small circular icon holder used across About features, Stats and Contact rows.
 * Espresso background with a champagne-gold icon, bordered subtly.
 */
export function IconBadge({
  icon: Icon,
  size = "md",
  className = "",
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box =
    size === "sm" ? "w-11 h-11" : size === "lg" ? "w-14 h-14" : "w-12 h-12";
  const glyph = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-[var(--espresso)] border border-[rgba(212,175,55,0.25)] shrink-0 ${box} ${className}`}
    >
      <Icon className={`${glyph} text-[var(--gold)]`} aria-hidden="true" />
    </span>
  );
}

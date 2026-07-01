import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

/**
 * Bordered circular icon button — carousel controls, close buttons, etc.
 * Extends the native `<button>` props so callers can wire onClick, aria-label…
 */
export function CircleIconButton({
  icon: Icon,
  size = "md",
  className = "",
  ...rest
}: {
  icon: LucideIcon;
  size?: "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const box = size === "lg" ? "w-12 h-12" : "w-11 h-11";
  return (
    <button
      type="button"
      className={`${box} rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/80 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition ${className}`}
      {...rest}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}

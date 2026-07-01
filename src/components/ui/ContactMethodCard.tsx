import type { LucideIcon } from "lucide-react";
import { IconBadge } from "./IconBadge";

/**
 * Single "atelier detail" tile in the Contact section
 * (address, phone, email, opening hours).
 *
 * If `href` is provided the entire card becomes a link.
 * `external` opens in a new tab with safe rel attributes.
 */
export function ContactMethodCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string | null;
  external?: boolean;
}) {
  const inner = (
    <>
      <IconBadge icon={icon} />
      <div>
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--caramel)] mb-1">
          {label}
        </p>
        <p className="text-cream">{value}</p>
      </div>
    </>
  );
  const className =
    "glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[rgba(212,175,55,0.4)] transition";
  if (!href) return <div className={className}>{inner}</div>;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      {inner}
    </a>
  );
}

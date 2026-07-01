import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

/**
 * Row of circular social icon links used in the Contact section.
 * Centralised so brand URLs live in one place (`src/lib/site.ts`).
 */
const SOCIALS = [
  { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
  { Icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
] as const;

export function SocialIconLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {SOCIALS.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/80 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition"
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

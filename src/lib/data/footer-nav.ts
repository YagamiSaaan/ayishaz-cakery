import { EMAIL_URL, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/site";

export type FooterLink = { label: string; href: string; external: boolean };
export type FooterColumn = { title: string; items: FooterLink[] };

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Explore",
    items: [
      { label: "About", href: "#about", external: false },
      { label: "Cakes", href: "#cakes", external: false },
      { label: "Gallery", href: "#gallery", external: false },
      { label: "Process", href: "#process", external: false },
    ],
  },
  {
    title: "Studio",
    items: [
      { label: "Wedding Cakes", href: "#cakes", external: false },
      { label: "Birthday", href: "#cakes", external: false },
      { label: "Macarons", href: "#cakes", external: false },
      { label: "Testimonials", href: "#testimonials", external: false },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Atelier", href: MAPS_URL, external: true },
      { label: "Email", href: EMAIL_URL, external: false },
      { label: "WhatsApp", href: WHATSAPP_URL, external: true },
      { label: "Instagram", href: INSTAGRAM_URL, external: true },
    ],
  },
];

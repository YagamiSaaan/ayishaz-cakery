/**
 * Ayishaz Cakery — shared site constants.
 * Single source of truth for brand, contact and navigation strings.
 */

export const SITE_URL = "https://ayishaz-cakery.lovable.app";

export const BRAND = {
  name: "Ayishaz Cakery",
  tagline: "Luxury Cake Atelier in Kannur, Kerala",
  since: 2012,
} as const;

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Cakes", href: "#cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const PHONE_DISPLAY = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Ayishaz Cakery! I'd like to place an order. Could you share availability and pricing?"
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const EMAIL = "hello@ayishazcakery.com";
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Cake Enquiry")}`;

export const INSTAGRAM_URL = "https://instagram.com/ayishaz.cakery";
export const FACEBOOK_URL = "https://facebook.com/ayishazcakery";

export const ADDRESS = "Fort Road, Kannur — Kerala, India";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fort+Road+Kannur+Kerala";

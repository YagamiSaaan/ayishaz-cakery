/**
 * Ayishaz Cakery — shared site constants.
 *
 * Single source of truth for brand strings, contact details, navigation items
 * and outbound links (WhatsApp, email, socials, maps). Consumed by every
 * section component and by the route `head()` metadata so we never hardcode
 * URLs / phone numbers in more than one place.
 *
 * Update this file to change brand copy, contact info, or nav labels sitewide.
 */

/** Canonical production origin (no trailing slash). Used for canonical + OG URLs. */
export const SITE_URL = "https://ayishaz-cakery.lovable.app";

/** Brand identity block. `since` powers the "Handmade in Kannur since …" strapline. */

export const BRAND = {
  name: "Ayishaz Cakery",
  tagline: "Luxury Cake Atelier in Kannur, Kerala",
  since: 2012,
} as const;

/**
 * Primary navigation items. `href` uses in-page hash anchors that map to
 * `id="…"` targets on the landing page — kept in sync with each section's id.
 */
export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Atelier", href: "#instagram" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

/** Human-readable phone (spacing preserved for display in UI). */
export const PHONE_DISPLAY = "+91 98765 43210";
/** E.164-style phone for `tel:` links — must contain digits + leading `+` only. */
export const PHONE_TEL = "+919876543210";

// WhatsApp deep-link. Number is digits only (no `+`) per wa.me spec. The
// pre-filled message is URL-encoded so any punctuation survives transport.
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Ayishaz Cakery! I'd like to place an order. Could you share availability and pricing?"
);
/** Opens WhatsApp chat with a friendly pre-filled enquiry. Used by Nav / Hero / floating CTA. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/** Public inbox address (rendered as text and reused by `EMAIL_URL`). */
export const EMAIL = "hello@ayishazcakery.com";
/** `mailto:` link with a default subject; the contact form builds a richer mailto at submit-time. */
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Cake Enquiry")}`;

export const INSTAGRAM_URL = "https://instagram.com/ayishaz.cakery";
export const FACEBOOK_URL = "https://facebook.com/ayishazcakery";

/** Postal-style address displayed in the Contact section and footer. */
export const ADDRESS = "Fort Road, Kannur — Kerala, India";
/** Google Maps search URL centered on the atelier. Opens in a new tab. */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Fort+Road+Kannur+Kerala";

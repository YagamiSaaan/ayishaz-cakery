import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeLuxury from "@/assets/cake-luxury.jpg";
import cakeMacarons from "@/assets/cake-macarons.jpg";
import cakeDessert from "@/assets/cake-dessert.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export type GalleryHeight = "tall" | "med" | "short";
export type GalleryItem = { src: string; h: GalleryHeight; alt: string };

export const GALLERY: GalleryItem[] = [
  { src: gallery1, h: "tall", alt: "Rustic naked wedding cake with fresh florals" },
  { src: cakeWedding, h: "med", alt: "Three-tier ivory wedding cake with gold leaf accents" },
  { src: gallery2, h: "short", alt: "Chocolate ganache drip cake with berries" },
  { src: cakeLuxury, h: "tall", alt: "Luxury champagne-hued celebration cake" },
  { src: gallery3, h: "med", alt: "Pastel buttercream birthday cake with sugar florals" },
  { src: cakeDessert, h: "tall", alt: "Signature dessert box with assorted patisserie" },
  { src: gallery4, h: "med", alt: "Bespoke sculpted cake with edible gold detailing" },
  { src: cakeMacarons, h: "short", alt: "Tower of pastel French macarons" },
];

/** Tailwind row-span mapping — stable module-level identity. */
export const GALLERY_HEIGHTS: Record<GalleryHeight, string> = {
  tall: "row-span-2",
  med: "row-span-2",
  short: "row-span-1",
};

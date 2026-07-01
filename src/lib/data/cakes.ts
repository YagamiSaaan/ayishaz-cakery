import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeLuxury from "@/assets/cake-luxury.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import cakeMacarons from "@/assets/cake-macarons.jpg";
import cakeDessert from "@/assets/cake-dessert.jpg";

/** Featured signature-collection cakes shown in the horizontal-scroll carousel. */
export type Cake = { img: string; name: string; tag: string; price: string };

export const FEATURED_CAKES: Cake[] = [
  { img: cakeWedding, name: "Wedding Cakes", tag: "Elegant & Timeless", price: "From ₹25,000" },
  { img: cakeBirthday, name: "Birthday Cakes", tag: "Make Every Wish Special", price: "From ₹3,500" },
  { img: cakeLuxury, name: "Luxury Cakes", tag: "Opulent & Exclusive", price: "From ₹18,000" },
  { img: cakeCupcakes, name: "Cupcakes", tag: "Sweet Little Delights", price: "From ₹150 / pc" },
  { img: cakeMacarons, name: "Macarons", tag: "Delicate & Flavourful", price: "From ₹120 / pc" },
  { img: cakeDessert, name: "Desserts", tag: "Indulge in Happiness", price: "From ₹550" },
];

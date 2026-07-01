import { Cake, Heart, Leaf, Truck, type LucideIcon } from "lucide-react";

export type AboutFeature = { icon: LucideIcon; title: string };

export const ABOUT_FEATURES: AboutFeature[] = [
  { icon: Leaf, title: "Premium Ingredients" },
  { icon: Heart, title: "100% Eggless Options" },
  { icon: Cake, title: "Custom Designs" },
  { icon: Truck, title: "On-time Delivery" },
];

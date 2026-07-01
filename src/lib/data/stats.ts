import { Award, Cake, Heart, Star, type LucideIcon } from "lucide-react";

export type Stat = { n: string; l: string; icon: LucideIcon };

export const STATS: Stat[] = [
  { n: "12+", l: "Years of Excellence", icon: Award },
  { n: "2000+", l: "Happy Customers", icon: Heart },
  { n: "1500+", l: "Custom Cakes", icon: Cake },
  { n: "25+", l: "Awards Won", icon: Star },
];

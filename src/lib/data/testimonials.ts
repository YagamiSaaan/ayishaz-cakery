export type Testimonial = {
  name: string;
  role: string;
  occasion: string;
  text: string;
  rating: number;
};

/** Client testimonials — real names/occasions build trust vs. anonymous quotes. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ayesha Rahman",
    role: "Bride",
    occasion: "Wedding · Kannur",
    text: "The wedding cake was a work of art — guests are still talking about it months later. Ayisha's eye for detail is unmatched.",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "Father",
    occasion: "Daughter's 1st Birthday",
    text: "From the first sketch to delivery, every step felt bespoke. The chocolate work was breathtaking and tasted divine.",
    rating: 5,
  },
  {
    name: "Fathima Nasreen",
    role: "Event Planner",
    occasion: "Corporate Gala · Kochi",
    text: "I've worked with countless pastry studios; Ayishaz Cakery is the only one I trust for our most discerning clients.",
    rating: 5,
  },
];

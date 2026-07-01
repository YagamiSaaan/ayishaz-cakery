/**
 * FAQ content — single source of truth so the FAQ section and the
 * FAQPage JSON-LD in the route `head()` never drift apart.
 */
export const FAQS = [
  {
    q: "How far in advance should I order?",
    a: "For wedding cakes we recommend 4–6 weeks. Bespoke birthday cakes need 7–10 days; smaller orders can often be accommodated within 48 hours.",
  },
  {
    q: "Do you offer eggless and dietary options?",
    a: "Yes — eggless, gluten-conscious and vegan recipes are available across the menu, with no compromise on flavour or finish.",
  },
  {
    q: "Do you deliver across Kerala?",
    a: "We deliver across Kannur, Thalassery, Kozhikode and most of north Kerala. Larger tiered cakes are hand-delivered and assembled on-site by our team.",
  },
  {
    q: "Can I commission a fully custom design?",
    a: "Every cake we make is custom. Bring a mood board, a fabric swatch, a memory — we'll translate it into edible form.",
  },
  {
    q: "What is your pricing structure?",
    a: "Pricing depends on size, complexity and finish. After a brief consultation we provide a detailed quotation with no hidden costs.",
  },
] as const;

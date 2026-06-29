import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Facebook,
  Phone, Mail, MapPin, Clock, Plus, Minus, Sparkles, Award, Leaf, Cake,
  Truck, Heart, MessageCircle, Star, Quote, X,
} from "lucide-react";

import heroCake from "@/assets/hero-cake.jpg";
import aboutCake from "@/assets/about-cake.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeLuxury from "@/assets/cake-luxury.jpg";
import cakeCupcakes from "@/assets/cake-cupcakes.jpg";
import cakeMacarons from "@/assets/cake-macarons.jpg";
import cakeDessert from "@/assets/cake-dessert.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayishaz Cakery — Edible Art for Unforgettable Celebrations" },
      { name: "description", content: "Award-winning luxury cake atelier. Bespoke wedding cakes, birthday cakes, macarons and artisan chocolates handcrafted with the finest ingredients." },
      { property: "og:title", content: "Ayishaz Cakery — Luxury Cake Atelier" },
      { property: "og:description", content: "Edible art crafted for unforgettable celebrations." },
      { property: "og:image", content: heroCake },
      { name: "twitter:image", content: heroCake },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Cakes", href: "#cakes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const } },
};

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav scrolled={scrolled} />
      <Hero />
      <About />
      <FeaturedCakes />
      <Gallery onOpen={setLightbox} />
      <Testimonials />
      <Process />
      <Stats />
      <InstagramFeed />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-[rgba(27,18,13,0.7)] border-b border-[rgba(212,175,55,0.12)]" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-script text-3xl text-gold-gradient">Ayishaz</span>
          <span className="text-[0.6rem] tracking-[0.4em] text-[var(--caramel)] mt-1 pl-1">CAKERY</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-cream/80 hover:text-[var(--gold)] transition relative group"
            >
              {n.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-px bg-[var(--gold)] transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-luxe btn-luxe-hover hidden md:inline-flex !py-3 !px-6 !text-[0.72rem]"
        >
          Order Now <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="home" ref={ref} className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full border border-[rgba(212,175,55,0.08)] animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[28rem] h-[28rem] rounded-full border border-[rgba(212,175,55,0.06)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[var(--mocha)] opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-[var(--caramel)] opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center relative">
        <motion.div style={{ y: yText }} className="relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Premium Cakes & Desserts
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[0.95] tracking-tight"
          >
            Edible Art<br />
            Crafted For<br />
            <span className="font-script text-gold-gradient italic">Unforgettable</span><br />
            <span className="font-script text-gold-gradient italic">Celebrations</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-8 text-[1rem] leading-relaxed text-cream/65 max-w-md"
          >
            An atelier of bespoke wedding cakes, luxury birthday creations, artisan chocolates and
            patisserie — each piece handcrafted with intention and the finest ingredients.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#cakes" className="btn-luxe btn-luxe-hover">
              Our Creations <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.7 }}
            className="mt-14 flex items-center gap-10"
          >
            <div className="flex -space-x-3">
              {[gallery1, cakeMacarons, cakeWedding].map((src, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-[var(--espresso)] overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-cream/60 mt-1 tracking-wider">2,000+ Happy Celebrations</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yImg }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative aspect-square max-w-[560px] mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--mocha)]/60 to-transparent blur-2xl" />
            <img
              src={heroCake}
              alt="Luxury chocolate drip cake with gold leaf"
              width={1280}
              height={1280}
              className="relative w-full h-full object-cover rounded-full shadow-[var(--shadow-luxe)]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-4 right-4 md:bottom-10 md:right-2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--cream)] flex items-center justify-center text-center shadow-[var(--shadow-gold)]"
            >
              <div className="text-[var(--espresso)]">
                <div className="text-[var(--gold)] flex justify-center gap-0.5 mb-1">
                  {[...Array(3)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                </div>
                <p className="text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] font-medium leading-tight">
                  AWARD<br/>WINNING<br/>
                  <span className="text-[var(--gold)]">CAKE ARTIST</span>
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/3 w-16 h-16 rounded-2xl glass-card flex items-center justify-center"
            >
              <Cake className="w-6 h-6 text-[var(--gold)]" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 top-10 w-14 h-14 rounded-full glass-card flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-[var(--gold)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-16 flex flex-col items-center text-cream/40">
        <div className="w-5 h-8 rounded-full border border-cream/30 flex justify-center p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-cream/60"
          />
        </div>
        <p className="text-[0.65rem] tracking-[0.35em] mt-3">SCROLL TO EXPLORE</p>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const features = [
    { icon: Leaf, title: "Premium Ingredients" },
    { icon: Heart, title: "100% Eggless Options" },
    { icon: Cake, title: "Custom Designs" },
    { icon: Truck, title: "On-time Delivery" },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-cream rounded-[2.5rem] p-6 md:p-12 lg:p-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center text-[var(--espresso)] shadow-[var(--shadow-luxe)]"
        >
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[14rem] rounded-b-3xl">
              <img src={aboutCake} alt="Tiered wedding cake" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-[0.65rem] tracking-[0.45em] text-[var(--mocha)] uppercase">
              Handcrafted Since 2012
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5 !text-[var(--caramel)]">
              <Sparkles className="w-3.5 h-3.5" /> Welcome to Ayishaz Cakery
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-[var(--espresso)]">
              Where Taste Meets<br />
              <span className="font-script italic text-[var(--mocha)]">Artistry</span>
            </h2>
            <div className="gold-hairline my-6 w-24" />
            <p className="text-[var(--mocha)]/85 leading-relaxed max-w-lg">
              Every cake is a quiet study in proportion, texture and restraint — handcrafted with
              precision, slow patience and the finest ingredients. From intimate gatherings to
              grand occasions, we make every moment a little sweeter.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-[var(--espresso)] flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                  <p className="text-xs leading-tight text-[var(--mocha)] tracking-wide">{f.title}</p>
                </div>
              ))}
            </div>

            <a href="#process" className="mt-9 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--espresso)] border border-[var(--mocha)]/30 rounded-full px-6 py-3 hover:bg-[var(--espresso)] hover:text-[var(--cream)] transition-colors">
              Learn More About Us <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FEATURED CAKES ---------------- */
const CAKES = [
  { img: cakeWedding, name: "Wedding Cakes", tag: "Elegant & Timeless", price: "From ₹25,000" },
  { img: cakeBirthday, name: "Birthday Cakes", tag: "Make Every Wish Special", price: "From ₹3,500" },
  { img: cakeLuxury, name: "Luxury Cakes", tag: "Opulent & Exclusive", price: "From ₹18,000" },
  { img: cakeCupcakes, name: "Cupcakes", tag: "Sweet Little Delights", price: "From ₹150 / pc" },
  { img: cakeMacarons, name: "Macarons", tag: "Delicate & Flavourful", price: "From ₹120 / pc" },
  { img: cakeDessert, name: "Desserts", tag: "Indulge in Happiness", price: "From ₹550" },
];

function FeaturedCakes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="cakes" className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-wrap items-end justify-between gap-6 mb-14">
        <div>
          <div className="eyebrow mb-5"><Sparkles className="w-3.5 h-3.5" /> Our Signature Collection</div>
          <h2 className="text-4xl md:text-6xl leading-[1] tracking-tight">Featured <span className="font-script italic text-gold-gradient">Cakes</span></h2>
          <div className="gold-hairline mt-5 w-32" />
        </div>
        <div className="flex items-center gap-4">
          <a href="#gallery" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">View All Cakes <ArrowRight className="w-3.5 h-3.5" /></a>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/80 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/80 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-6 overflow-x-auto px-6 md:px-10 pb-6 snap-x snap-mandatory">
        {CAKES.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.07 }}
            className="snap-start shrink-0 w-[280px] md:w-[340px] group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[var(--chocolate)]">
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--espresso)] via-[var(--espresso)]/30 to-transparent" />
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight className="w-4 h-4 text-[var(--gold)]" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">{c.price}</p>
                <h3 className="text-2xl mb-1">{c.name}</h3>
                <p className="text-xs text-cream/60 tracking-wide">{c.tag}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const GALLERY = [
  { src: gallery1, h: "tall" },
  { src: cakeWedding, h: "med" },
  { src: gallery2, h: "short" },
  { src: cakeLuxury, h: "tall" },
  { src: gallery3, h: "med" },
  { src: cakeDessert, h: "tall" },
  { src: gallery4, h: "med" },
  { src: cakeMacarons, h: "short" },
];

function Gallery({ onOpen }: { onOpen: (src: string) => void }) {
  const heights: Record<string, string> = {
    tall: "row-span-2",
    med: "row-span-2",
    short: "row-span-1",
  };
  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Our Creations</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">A Gallery of Sweet <span className="font-script italic text-gold-gradient">Masterpieces</span></h2>
          <p className="mt-5 max-w-xl mx-auto text-cream/60">A curated archive of recent commissions — celebrations rendered in sugar, chocolate and gold.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => onOpen(g.src)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className={`relative overflow-hidden rounded-3xl group ${heights[g.h]}`}
            >
              <img src={g.src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center">
                  <Plus className="w-5 h-5 text-[var(--espresso)]" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] bg-[var(--espresso)]/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={onClose}>
      <button className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition" aria-label="Close">
        <X className="w-5 h-5" />
      </button>
      <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} src={src} alt="" className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl shadow-[var(--shadow-luxe)]" />
    </motion.div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  { name: "Layla Hassan", role: "Bride", text: "The wedding cake was a work of art — guests are still talking about it months later. Ayisha's eye for detail is unmatched.", rating: 5 },
  { name: "Omar Khalid", role: "Father", text: "From the first sketch to delivery, every step felt bespoke. The chocolate work was breathtaking and tasted divine.", rating: 5 },
  { name: "Sara Mansoori", role: "Event Planner", text: "I've worked with countless pastry studios; Ayishaz Cakery is the only one I trust for our most discerning clients.", rating: 5 },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Kind Words</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">Loved by Those Who<br /><span className="font-script italic text-gold-gradient">Celebrate Beautifully</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 hover:border-[rgba(212,175,55,0.35)] transition-all hover:-translate-y-1 duration-500"
            >
              <Quote className="w-8 h-8 text-[var(--gold)] mb-5" />
              <p className="text-cream/85 leading-relaxed text-[0.95rem]">{t.text}</p>
              <div className="gold-hairline my-6" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-script text-xl italic text-[var(--cream)]">{t.name}</p>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[var(--caramel)] mt-1">{t.role}</p>
                </div>
                <div className="flex gap-0.5 text-[var(--gold)]">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  { n: "01", title: "Consultation", text: "We listen to your story, palette and dreams — then translate them into a design language." },
  { n: "02", title: "Design & Sketch", text: "Hand-drawn concepts, fabric swatches, gold registers — refined until every detail sings." },
  { n: "03", title: "Handcrafted", text: "Our atelier shapes, bakes and finishes each tier with quiet patience and obsessive care." },
  { n: "04", title: "Presentation", text: "White-glove delivery, on-site assembly and a final polish so the cake meets its moment." },
];
function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16 items-end">
          <div>
            <div className="eyebrow mb-5"><Sparkles className="w-3.5 h-3.5" /> Our Process</div>
            <h2 className="text-4xl md:text-6xl leading-[1.05]">From Whisper<br /><span className="font-script italic text-gold-gradient">to Showpiece</span></h2>
          </div>
          <p className="text-cream/65 leading-relaxed lg:pl-12 lg:border-l lg:border-[rgba(212,175,55,0.2)]">
            A four-act ritual that turns conversations into edible heirlooms. Every cake we ship has
            passed through these same patient hands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(212,175,55,0.15)] rounded-3xl overflow-hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[var(--espresso)] p-9 hover:bg-[var(--chocolate)] transition-colors group"
            >
              <p className="font-script italic text-5xl text-gold-gradient mb-6">{s.n}</p>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{s.text}</p>
              <ArrowUpRight className="w-5 h-5 text-[var(--gold)] mt-6 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
const STATS = [
  { n: "12+", l: "Years of Excellence", icon: Award },
  { n: "2000+", l: "Happy Customers", icon: Heart },
  { n: "1500+", l: "Custom Cakes", icon: Cake },
  { n: "25+", l: "Awards Won", icon: Star },
];
function Stats() {
  return (
    <section className="relative py-16 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-3xl border border-[rgba(212,175,55,0.18)] bg-gradient-to-r from-[var(--chocolate)] via-[var(--mocha)]/40 to-[var(--chocolate)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(212,175,55,0.12)]"
        >
          {STATS.map((s) => (
            <div key={s.l} className="p-8 md:p-10 text-center">
              <div className="w-11 h-11 rounded-full bg-[var(--espresso)] flex items-center justify-center mx-auto mb-4 border border-[rgba(212,175,55,0.2)]">
                <s.icon className="w-4 h-4 text-[var(--gold)]" />
              </div>
              <p className="text-3xl md:text-5xl font-serif">{s.n}</p>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-cream/55 mt-2">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
const IG = [gallery1, cakeBirthday, gallery3, cakeMacarons, gallery4, cakeLuxury];
function InstagramFeed() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-5"><Instagram className="w-3.5 h-3.5" /> @ayishaz.cakery</div>
            <h2 className="text-4xl md:text-5xl leading-[1.05]">Follow the <span className="font-script italic text-gold-gradient">Atelier</span></h2>
          </div>
          <a href="#" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {IG.map((src, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-2xl group"
            >
              <img src={src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[var(--espresso)]/0 group-hover:bg-[var(--espresso)]/60 flex items-center justify-center transition">
                <Instagram className="w-5 h-5 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "How far in advance should I order?", a: "For wedding cakes we recommend 4–6 weeks. Bespoke birthday cakes need 7–10 days; smaller orders can often be accommodated within 48 hours." },
  { q: "Do you offer eggless and dietary options?", a: "Yes — eggless, gluten-conscious and vegan recipes are available across the menu, with no compromise on flavour or finish." },
  { q: "Do you deliver across Kerala?", a: "We deliver across Kannur, Thalassery, Kozhikode and most of north Kerala. Larger tiered cakes are hand-delivered and assembled on-site by our team." },
  { q: "Can I commission a fully custom design?", a: "Every cake we make is custom. Bring a mood board, a fabric swatch, a memory — we'll translate it into edible form." },
  { q: "What is your pricing structure?", a: "Pricing depends on size, complexity and finish. After a brief consultation we provide a detailed quotation with no hidden costs." },
];
function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Frequently Asked</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">Questions, <span className="font-script italic text-gold-gradient">Answered</span></h2>
        </motion.div>
        <div className="divide-y divide-[rgba(212,175,55,0.15)] border-y border-[rgba(212,175,55,0.15)]">
          {FAQS.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full text-left py-7 flex items-start gap-6 group"
            >
              <span className="font-script italic text-2xl text-[var(--gold)] shrink-0 w-12">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl md:text-2xl text-cream group-hover:text-[var(--gold)] transition-colors">{f.q}</h3>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[var(--gold)]">
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0, marginTop: open === i ? 16 : 0 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden text-cream/65 max-w-2xl leading-relaxed"
                >
                  <p>{f.a}</p>
                </motion.div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
          <div className="eyebrow justify-center mb-5"><Sparkles className="w-3.5 h-3.5" /> Let's Create Together</div>
          <h2 className="text-4xl md:text-6xl leading-[1.05]">Commission Your <span className="font-script italic text-gold-gradient">Masterpiece</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Atelier", value: "Fort Road, Kannur — Kerala, India" },
              { icon: Phone, label: "Call", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "hello@ayishaz.cakery" },
              { icon: Clock, label: "Hours", value: "Tue – Sun · 10:00 – 20:00" },
            ].map((c) => (
              <div key={c.label} className="glass-card rounded-2xl p-6 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[var(--espresso)] flex items-center justify-center border border-[rgba(212,175,55,0.25)] shrink-0">
                  <c.icon className="w-4 h-4 text-[var(--gold)]" />
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--caramel)] mb-1">{c.label}</p>
                  <p className="text-cream">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.18)] aspect-[16/9]">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=55.235%2C25.21%2C55.27%2C25.24&layer=mapnik"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-full border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-cream/80 hover:bg-[var(--gold)] hover:text-[var(--espresso)] transition" aria-label="Social">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="glass-cream rounded-3xl p-8 md:p-10 text-[var(--espresso)] space-y-5 shadow-[var(--shadow-luxe)]">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your Name" placeholder="Layla Hassan" />
              <Field label="Phone" placeholder="+91 98765 00000" />
            </div>
            <Field label="Email" type="email" placeholder="you@email.com" />
            <Field label="Occasion" placeholder="Wedding · Birthday · Corporate" />
            <div>
              <label className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--mocha)] mb-2 block">Tell Us About Your Vision</label>
              <textarea rows={5} placeholder="Mood, palette, size, date…" className="w-full bg-transparent border-b border-[var(--mocha)]/30 py-3 focus:outline-none focus:border-[var(--gold)] resize-none placeholder:text-[var(--mocha)]/40" />
            </div>
            <button type="submit" className="btn-luxe btn-luxe-hover w-full justify-center mt-3 !bg-[var(--espresso)] !text-[var(--cream)]">
              Send Enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[0.65rem] tracking-[0.3em] uppercase text-[var(--mocha)] mb-2 block">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-transparent border-b border-[var(--mocha)]/30 py-3 focus:outline-none focus:border-[var(--gold)] placeholder:text-[var(--mocha)]/40" />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-6 md:px-10 border-t border-[rgba(212,175,55,0.12)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-script text-4xl text-gold-gradient">Ayishaz</span>
              <span className="text-[0.6rem] tracking-[0.4em] text-[var(--caramel)] mt-1 pl-1">CAKERY</span>
            </div>
            <p className="text-cream/55 leading-relaxed max-w-sm">
              A luxury cake atelier crafting edible art for life's most cherished occasions.
              Handmade in Kannur since 2012.
            </p>
          </div>
          {[
            { title: "Explore", items: ["About", "Cakes", "Gallery", "Process"] },
            { title: "Studio", items: ["Wedding Cakes", "Birthday", "Macarons", "Chocolates"] },
            { title: "Contact", items: ["Atelier", "Email", "WhatsApp", "Instagram"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[var(--gold)] mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.items.map((i) => (
                  <li key={i}><a href="#" className="text-cream/70 hover:text-[var(--gold)] transition text-sm">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="gold-hairline mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-cream/45">
          <p>© {new Date().getFullYear()} Ayishaz Cakery. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Handcrafted with <Heart className="inline w-3 h-3 text-[var(--gold)] fill-current" /> in Kannur</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING ACTIONS ---------------- */
function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a href="#contact" className="w-14 h-14 rounded-full bg-[var(--gold)] text-[var(--espresso)] flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition" aria-label="WhatsApp">
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}

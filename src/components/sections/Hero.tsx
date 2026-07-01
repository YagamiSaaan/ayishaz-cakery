import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cake, MessageCircle, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { fadeUp } from "@/lib/animations";
import { StarRating } from "@/components/ui/StarRating";
import heroCake from "@/assets/hero-cake.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeMacarons from "@/assets/cake-macarons.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

/**
 * Landing hero — editorial split layout with headline + LCP cake image.
 * Uses Framer Motion's `useScroll` for gentle counter-parallax between text
 * and image. The hero image is the LCP element and is preloaded in the route.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="home" ref={ref} className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
      <HeroDecorations />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.05fr_1fr] lg:gap-20 items-center relative">
        <motion.div style={{ y: yText }} className="relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-6">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Premium Cakes & Desserts
          </motion.div>
          <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[0.95] tracking-tight">
            {[
              { text: "Edible Art", script: false },
              { text: "Crafted For", script: false },
              { text: "Unforgettable", script: true },
              { text: "Celebrations", script: true },
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 + i * 0.12 }}
                  className={`block ${line.script ? "font-script text-gold-gradient italic" : ""}`}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }} className="mt-8 text-[1rem] leading-relaxed text-cream/65 max-w-md">
            An atelier of bespoke wedding cakes, luxury birthday creations, artisan chocolates and
            patisserie — each piece handcrafted with intention and the finest ingredients.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.5 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#gallery" className="btn-luxe btn-luxe-hover">
              View Gallery <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.7 }} className="mt-14 flex items-center gap-10">
            <div className="flex -space-x-3" aria-hidden="true">
              {[gallery1, cakeMacarons, cakeWedding].map((src, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-[var(--espresso)] overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <StarRating label="Rated 5 out of 5 by clients" />
              <p className="text-xs text-cream/60 mt-1 tracking-wider">2,000+ Happy Celebrations</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yImg }} className="relative">
          <HeroImage />
        </motion.div>
      </div>

      <ScrollHint />
    </section>
  );
}

/** Decorative background rings and blurred blobs — purely visual, hidden from AT. */
function HeroDecorations() {
  return (
    <div aria-hidden="true">
      <div className="absolute top-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full border border-[rgba(212,175,55,0.08)] animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[28rem] h-[28rem] rounded-full border border-[rgba(212,175,55,0.06)] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[var(--mocha)] opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-[var(--caramel)] opacity-10 blur-3xl pointer-events-none" />
    </div>
  );
}

/** The LCP hero image with orbiting badge + floating accents. */
function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative aspect-square max-w-[560px] mx-auto"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--mocha)]/60 to-transparent blur-2xl" aria-hidden="true" />
      <img
        src={heroCake}
        alt="Luxury chocolate drip cake with gold leaf"
        width={1280}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="relative w-full h-full object-cover rounded-full shadow-[var(--shadow-luxe)]"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-4 right-4 md:bottom-10 md:right-2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--cream)] flex items-center justify-center text-center shadow-[var(--shadow-gold)]"
        aria-hidden="true"
      >
        <div className="text-[var(--espresso)]">
          <StarRating count={3} size={10} label="" />
          <p className="text-[0.55rem] md:text-[0.65rem] tracking-[0.25em] font-medium leading-tight mt-1">
            AWARD<br />WINNING<br />
            <span className="text-[var(--gold)]">CAKE ARTIST</span>
          </p>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-1/3 w-16 h-16 rounded-2xl glass-card flex items-center justify-center"
        aria-hidden="true"
      >
        <Cake className="w-6 h-6 text-[var(--gold)]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-0 top-10 w-14 h-14 rounded-full glass-card flex items-center justify-center"
        aria-hidden="true"
      >
        <Sparkles className="w-5 h-5 text-[var(--gold)]" />
      </motion.div>
    </motion.div>
  );
}

/** Animated "scroll to explore" cue below the hero. */
function ScrollHint() {
  return (
    <div className="mt-16 flex flex-col items-center text-cream/40" aria-hidden="true">
      <div className="w-5 h-8 rounded-full border border-cream/30 flex justify-center p-1">
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-1 h-1 rounded-full bg-cream/60"
        />
      </div>
      <p className="text-[0.65rem] tracking-[0.35em] mt-3">SCROLL TO EXPLORE</p>
    </div>
  );
}

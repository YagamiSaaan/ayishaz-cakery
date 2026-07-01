import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cake, MessageCircle, Sparkles, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { fadeUp } from "./shared";
import heroCake from "@/assets/hero-cake.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeMacarons from "@/assets/cake-macarons.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export function Hero() {
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
            <a href="#gallery" className="btn-luxe btn-luxe-hover">
              View Gallery <ArrowRight className="w-4 h-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost-luxe hover:bg-[rgba(212,175,55,0.08)]">
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
                  AWARD<br />WINNING<br />
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

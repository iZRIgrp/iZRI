import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          src={heroImage}
          alt="Atlas Mountains landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-izri-black/65 via-izri-black/45 to-izri-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 md:mt-20 font-display text-2xl md:text-3xl lg:text-4xl text-izri-cream tracking-wide italic mb-6 drop-shadow-lg"
        >
          IZRI — Where Vision Meets Heritage
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="h-px bg-primary/80 mx-auto mb-8"
        />

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-sans text-base md:text-lg text-izri-cream/90 leading-relaxed drop-shadow-md mb-4"
          >
            IZRI is a cultural and creative collective rooted in the South-East of
            Morocco, dedicated to preserving, reinterpreting, and modernizing
            Amazigh heritage.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="font-sans text-base md:text-lg text-izri-cream/80 leading-relaxed drop-shadow-md italic"
          >
            Through art, land, craftsmanship, and community, IZRI explores culture
            as a living vision — a gaze connecting memory, identity, and
            contemporary expression.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-primary/70 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

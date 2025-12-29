import { motion } from "framer-motion";
import izriLogo from "@/assets/izri-main-logo.png";
import heroImage from "@/assets/hero-landscape.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Atlas Mountains landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-izri-black/60 via-izri-black/40 to-izri-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8 inline-block p-4 rounded-lg bg-izri-cream/95 shadow-glow"
        >
          <img
            src={izriLogo}
            alt="IZRI - Where Vision Meets Heritage"
            className="h-28 md:h-36 lg:h-44 w-auto mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl md:text-2xl lg:text-3xl text-izri-cream tracking-wide italic mb-6 drop-shadow-lg"
        >
          Where Vision Meets Heritage
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-primary mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-sans text-base md:text-lg text-izri-cream/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          A cultural collective dedicated to preserving, reinterpreting, and 
          modernizing Amazigh heritage from the heart of South-East Morocco.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

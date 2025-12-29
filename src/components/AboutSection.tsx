import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background geometric-pattern">
      <div ref={ref} className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light">
              The Meaning of{" "}
              <span className="italic text-primary">iZRI</span>
            </h2>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-16 mx-auto mb-12 border border-primary/30 rotate-45"
          />

          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-display text-2xl md:text-3xl text-foreground/90 leading-relaxed italic">
              In Tamazight, the ancient language of our ancestors, IZRI means 
              "vision" — the gaze that sees beyond the surface, into the soul of things.
            </p>

            <div className="w-24 h-px bg-border mx-auto my-10" />

            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Born from the rugged beauty of South-East Morocco, IZRI is a living 
              ecosystem of art, craftsmanship, and community. We honor the wisdom 
              of our Amazigh heritage while weaving it into contemporary expressions 
              that speak to the world.
            </p>

            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Through visual art, natural treasures of the land, ancestral crafts, 
              and meaningful dialogue, we create bridges between past and future — 
              preserving what matters while embracing what's possible.
            </p>
          </motion.div>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { label: "Art", sublabel: "Visual storytelling" },
              { label: "Land", sublabel: "Natural treasures" },
              { label: "Craft", sublabel: "Ancestral wisdom" },
              { label: "Community", sublabel: "Shared vision" },
            ].map((pillar, index) => (
              <div key={pillar.label} className="text-center group">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {pillar.label}
                  </span>
                  <p className="font-sans text-sm text-muted-foreground mt-2">
                    {pillar.sublabel}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

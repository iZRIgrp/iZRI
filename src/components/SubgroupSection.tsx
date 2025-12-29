import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SubgroupSectionProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  image: string;
  features: string[];
  variant: "light" | "dark";
  imagePosition?: "left" | "right";
}

export function SubgroupSection({
  id,
  name,
  tagline,
  description,
  logo,
  image,
  features,
  variant,
  imagePosition = "right",
}: SubgroupSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isDark = variant === "dark";

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 ${
        isDark
          ? "bg-izri-black text-izri-cream geometric-pattern-dark"
          : "bg-background text-foreground"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={imagePosition === "left" ? "lg:order-2" : ""}
          >
            {/* Logo */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={logo}
              alt={name}
              className="h-24 md:h-32 w-auto mb-8"
            />

            {/* Name & Tagline */}
            <h3
              className={`font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4 ${
                isDark ? "text-izri-cream" : "text-foreground"
              }`}
            >
              {name}
            </h3>
            <p className="font-display text-xl italic text-primary mb-6">
              {tagline}
            </p>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-primary mb-8"
            />

            {/* Description */}
            <p
              className={`font-sans text-lg leading-relaxed mb-8 ${
                isDark ? "text-izri-cream/70" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`flex items-center font-sans text-sm ${
                    isDark ? "text-izri-cream/60" : "text-muted-foreground"
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`relative ${imagePosition === "left" ? "lg:order-1" : ""}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Overlay gradient */}
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-izri-black/30 to-transparent"
                    : "bg-gradient-to-t from-background/20 to-transparent"
                }`}
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

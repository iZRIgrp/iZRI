import { motion } from "framer-motion";
import izriLogo from "@/assets/izri-main-logo.png";
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "IZRI.pic", href: "#pic" },
  { name: "IZRI.ora", href: "#ora" },
  { name: "IZRI.artisanal", href: "#artisanal" },
  { name: "IZRI.community", href: "#community" },
];

export function Footer() {
  return (
    <footer className="bg-izri-black py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={izriLogo}
            alt="IZRI"
            className="h-20 w-auto mx-auto mb-8 invert"
          />

          {/* Cultural Statement */}
          <p className="font-display text-xl md:text-2xl italic text-izri-cream/80 mb-8 max-w-2xl mx-auto">
            "From the gaze of our ancestors to the vision of tomorrow — 
            we carry the light of Tamazight across generations."
          </p>

          {/* Decorative Line */}
          <div className="w-24 h-px bg-primary/40 mx-auto mb-10" />

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm text-izri-cream/50 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center text-izri-cream/40 hover:text-primary transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-izri-cream/10">
            <p className="font-sans text-xs text-izri-cream/30">
              © {new Date().getFullYear()} IZRI Cultural Group. All rights reserved.
            </p>
            <p className="font-sans text-xs text-izri-cream/20 mt-2">
              Rooted in South-East Morocco • Amazigh Heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

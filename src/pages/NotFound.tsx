import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import izriLogo from "@/assets/izri-main-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background geometric-pattern">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <img
          src={izriLogo}
          alt="IZRI"
          className="h-20 w-auto mx-auto mb-12"
        />
        <h1 className="font-display text-6xl text-foreground mb-4">404</h1>
        <p className="font-display text-xl italic text-muted-foreground mb-8">
          This path leads nowhere... yet.
        </p>
        <div className="w-16 h-px bg-primary mx-auto mb-8" />
        <a 
          href="/" 
          className="font-sans text-sm uppercase tracking-widest text-primary hover:text-primary/80 transition-colors duration-300"
        >
          Return to Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;

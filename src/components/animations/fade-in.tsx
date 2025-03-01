import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeIn = ({ children, className }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger saat 10% komponen terlihat
    );

    observer.observe(document.querySelector("#fade-in-target")!);

    return () => observer.disconnect();
  }, []);

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      className={className}
      id="fade-in-target"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
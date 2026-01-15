"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { GlobalSettings } from "@/types/strapi";

interface HeroProps {
  settings: GlobalSettings | null;
}

export default function Hero({ settings }: HeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -400]);
const xRight = useTransform(scrollYProgress, [0, 1], [0, 400]);
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);  // Fixed: slower fade

  const fallbackSubtitle =
    "Director, Editor, and Filmmaker—bridging theory and practice through cinematic storytelling and visual expression.";

  const subtitle =
    settings?.heroSubtitle && settings.heroSubtitle.trim().length > 0
      ? settings.heroSubtitle
      : fallbackSubtitle;

  const fallbackImage = "/images/hero.jpg";

  const heroImageUrl = settings?.heroImage?.url
    ? settings.heroImage.url
    : fallbackImage;

  // Split title by newlines for multi-line animation
  const heroTitle =
    settings?.heroTitle || "CINEMATIC\nINTERACTIVE\nIRRESISTIBLE.";
  const titleLines = heroTitle.split("\n").filter((line) => line.trim());

  return (
    <section 
      ref={ref} 
      id="home" 
      className="min-h-screen flex items-center pt-20 overflow-hidden"  // ← FIXED: overflow-hidden
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, x: xLeft }}
          >
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight">
              {titleLines.map((line, index) => (
                <motion.div
                  key={index}
                  style={{
                    backgroundImage:
                      index % 2 === 0
                        ? "linear-gradient(90deg, #FF8C00, #FFA500, #FF8C00)"
                        : "linear-gradient(90deg, #FFFFFF, #CCCCCC, #FFFFFF)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index,
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ opacity, x: xRight }}
            className="relative w-full h-[600px] group cursor-pointer overflow-hidden"
          >
            <img
              src={heroImageUrl}
              alt={settings?.heroImage?.alternativeText || "Masud Nikson"}
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

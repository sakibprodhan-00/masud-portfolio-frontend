"use client";

import { motion } from "framer-motion";
import type { GlobalSettings } from "@/types/strapi";

interface AboutProps {
  settings?: GlobalSettings | null;
}

export default function About({ settings }: AboutProps) {
  const aboutTitle = settings?.aboutTitle || "ABOUT ME";
  const aboutContent = settings?.aboutContent || `
    Masud Nikson is a director, editor, and filmmaker with a strong academic and artistic foundation in cinema and visual storytelling. 
    With formal training up to the Ph.D. level, his work bridges theory and practice—combining research-driven insight with expressive filmmaking.
    
    Through Artistic Communication, he explores cinema as a medium for cultural reflection, social documentation, and human connection. 
    His experience spans narrative films, documentaries, and experimental visual works, each grounded in thoughtful composition and purposeful storytelling.
    
    Whether behind the camera or in the editing room, Masud approaches filmmaking as both an intellectual and emotional craft.
  `.trim();

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light mb-12 text-center text-primary"
        >
          {aboutTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-400 text-lg leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: aboutContent }}
        />
      </div>
    </section>
  );
}

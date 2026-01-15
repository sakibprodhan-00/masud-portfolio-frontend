"use client";

import { motion } from "framer-motion";
import { Project, GlobalSettings } from "@/types/strapi";

interface ProjectsProps {
  settings: GlobalSettings | null;
  projects: Project[];
}

export default function Projects({ settings, projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light mb-4 text-center"
        >
          {settings?.projectsTitle || "MY CREATIONS"}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid md:grid-cols-3 auto-rows-[260px] gap-6"
        >
          {projects.map((project, index) => {
            // Prioritize videoUrl from your Strapi screenshot
            const projectLink = project.videoUrl || project.youtubeUrl || project.vimeoUrl;
            
            // If no link exists, we render a div to avoid the "#" reload behavior
            const CardWrapper = projectLink ? motion.a : motion.div;

            return (
              <CardWrapper
                key={project.id}
                {...(projectLink ? { 
                  href: projectLink, 
                  target: "_blank", 
                  rel: "noopener noreferrer" 
                } : {})}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className={`relative border border-gray-800 bg-zinc-900/60 hover:border-primary transition-all duration-300 p-6 flex flex-col justify-between ${projectLink ? 'cursor-pointer' : ''} block`}
              >
                {project.category && (
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                    {project.category}
                  </div>
                )}
                <div>
                  <h3
                    className={`text-xl md:text-2xl font-semibold mb-3 ${
                      index % 2 === 0 ? "text-[#FF8C00]" : "text-white"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
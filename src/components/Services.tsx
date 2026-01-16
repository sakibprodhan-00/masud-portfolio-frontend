"use client";

import { motion } from "framer-motion";
import type { Service } from "@/types/strapi";

interface ServicesProps {
  settings?: any;
  services: Service[];
}

export default function Services({ settings, services }: ServicesProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light mb-16 text-center"
        >
          {settings?.servicesTitle || "How We Support Your Growth"}
        </motion.h2>

        {settings?.servicesSubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          >
            {settings.servicesSubtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="border border-gray-800 p-8 hover:border-primary transition-all duration-300 group"
            >
              {service.icon && (
                <div
                  className={`text-5xl font-light mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    index % 2 === 0 ? "text-[#FF8C00]" : "text-white"
                  }`}
                >
                  {service.icon}
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

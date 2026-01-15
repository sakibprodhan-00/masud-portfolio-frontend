"use client";

import { motion } from "framer-motion";
import { GlobalSettings, Testimonial } from "@/types/strapi";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

interface TestimonialsProps {
  settings: GlobalSettings | null;
  testimonials: Testimonial[];
}

export default function Testimonials({ settings, testimonials }: TestimonialsProps) {
  // Fallback to mock data if no Strapi data
  const defaultTestimonials = [
    {
      id: 1,
      documentId: "default-1",
      name: "John Doe",
      role: "Creative Director",
      company: "Netflix",
      message: "Working with this director was an absolute pleasure. The attention to detail and creative vision brought our project to life in ways we never imagined.",
      order: 1,
      linkedinUrl: null,
      facebookUrl: null,
      instagramUrl: null,
      youtubeUrl: null,
      avatar: null,
      rating: null,
      featured: false,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
    {
      id: 2,
      documentId: "default-2",
      name: "Jane Smith",
      role: "Producer",
      company: "BBC Studios",
      message: "Exceptional storytelling and technical expertise. Every frame was crafted with purpose and artistic integrity.",
      order: 2,
      linkedinUrl: null,
      facebookUrl: null,
      instagramUrl: null,
      youtubeUrl: null,
      avatar: null,
      rating: null,
      featured: false,
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
    },
  ];

  const items = testimonials.length > 0 ? testimonials : defaultTestimonials;

  // Helper function to format URL
  const formatUrl = (url: string | null | undefined) => {
    if (!url || url.trim() === '') return null;
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-light mb-20 text-center"
        >
          {settings?.testimonialsTitle || "Testimonials"}
        </motion.h2>

        <div className="space-y-20">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-l-4 border-[#FF8C00] pl-10 py-4"
            >
              {/* Avatar if exists */}
              {testimonial.avatar?.url && (
                <div className="mb-8">
                  <Image
                    src={testimonial.avatar.url}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    className="rounded-2xl object-cover w-32 h-32"
                    unoptimized
                  />
                </div>
              )}

              {/* Testimonial Message */}
              <p className="text-xl md:text-2xl font-medium text-gray-200 italic mb-8 leading-relaxed">
                {testimonial.message}
              </p>

              {/* Author Info */}
              <div className="space-y-3">
                {/* Name in Light Orange */}
                <p className="font-semibold text-lg" style={{ color: '#FFA500' }}>
                  {testimonial.name}
                </p>
                {/* Role in Pure White */}
                <p className="text-sm text-white">
                  {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                </p>
                
                {/* Social Links */}
                {(testimonial.linkedinUrl || testimonial.facebookUrl || testimonial.instagramUrl || testimonial.youtubeUrl) && (
                  <div className="flex items-center gap-4 mt-4">
                    {testimonial.linkedinUrl && formatUrl(testimonial.linkedinUrl) && (
                      <a
                        href={formatUrl(testimonial.linkedinUrl)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-110"
                        style={{ color: '#F5F5DC' }}
                        title="LinkedIn"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    )}
                    
                    {testimonial.facebookUrl && formatUrl(testimonial.facebookUrl) && (
                      <a
                        href={formatUrl(testimonial.facebookUrl)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-110"
                        style={{ color: '#F5F5DC' }}
                        title="Facebook"
                      >
                        <FaFacebook size={24} />
                      </a>
                    )}
                    
                    {testimonial.instagramUrl && formatUrl(testimonial.instagramUrl) && (
                      <a
                        href={formatUrl(testimonial.instagramUrl)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-110"
                        style={{ color: '#F5F5DC' }}
                        title="Instagram"
                      >
                        <FaInstagram size={24} />
                      </a>
                    )}
                    
                    {testimonial.youtubeUrl && formatUrl(testimonial.youtubeUrl) && (
                      <a
                        href={formatUrl(testimonial.youtubeUrl)!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:scale-110"
                        style={{ color: '#F5F5DC' }}
                        title="YouTube"
                      >
                        <FaYoutube size={24} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
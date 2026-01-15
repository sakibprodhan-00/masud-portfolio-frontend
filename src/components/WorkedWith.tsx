"use client";

import { motion } from "framer-motion";
import { GlobalSettings, WorkedWith as WorkedWithType } from "@/types/strapi";
import Image from "next/image";

interface WorkedWithProps {
  settings: GlobalSettings | null;
  workedWith: WorkedWithType[];
}

export default function WorkedWith({ settings, workedWith }: WorkedWithProps) {
  // Fallback to hardcoded if no Strapi data
  const defaultClients = [
    { name: "ECOMMERCE", logo: null, website: null },
    { name: "NO LIMITS", logo: null, website: null },
    { name: "MERCHANTS", logo: null, website: null },
    { name: "CREATIVE STUDIOS", logo: null, website: null },
    { name: "DOCUMENTARY HOUSES", logo: null, website: null },
  ];

  const clients = workedWith.length > 0 ? workedWith : defaultClients;

  // Helper function to ensure URL has protocol
  const formatUrl = (url: string | null) => {
    if (!url || url.trim() === '') return null;
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  const ClientItem = ({ client, idx }: { client: any; idx: number }) => {
    const formattedUrl = formatUrl(client.website);
    
    const content = (
      <div className="flex flex-col items-center justify-center min-w-[250px] gap-3">
        {client.logo?.url && (
          <Image
            src={client.logo.url}
            alt={client.name}
            width={150}
            height={60}
            className="object-contain h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            unoptimized
          />
        )}
        <span 
          className={`text-base md:text-lg font-medium tracking-[0.2em] uppercase transition ${
            idx % 2 === 0 
              ? "text-white hover:opacity-80" 
              : "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent hover:from-orange-400 hover:via-orange-500 hover:to-orange-400"
          }`}
        >
          {client.name}
        </span>
      </div>
    );

    // If website URL exists, wrap in Link
    if (formattedUrl) {
      return (
        <a 
          href={formattedUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-105 transition-transform block"
        >
          {content}
        </a>
      );
    }

    return <div className="block">{content}</div>;
  };

  return (
    <section className="py-16 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center">
          {settings?.workedWithTitle || "WORKED WITH"}
        </h2>

        <div className="relative py-6">
          <div className="flex whitespace-nowrap">
            {/* First scrolling set */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear", 
                repeatType: "loop"
              }}
              className="flex gap-24 items-center shrink-0"
            >
              {clients.map((client, idx) => (
                <ClientItem key={`client-set1-${idx}`} client={client} idx={idx} />
              ))}
            </motion.div>

            {/* Second scrolling set */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: "linear", 
                repeatType: "loop"
              }}
              className="flex gap-24 items-center shrink-0 ml-24"
            >
              {clients.map((client, idx) => (
                <ClientItem key={`client-set2-${idx}`} client={client} idx={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
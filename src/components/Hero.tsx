"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/marina-sunset.jpg"
          alt="NxGen Event at Steel Point Marina"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12 xl:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light leading-[1.1] tracking-[-0.02em] whitespace-nowrap">
              <span className="text-pearl">The future is </span>
              <span className="text-blush italic font-normal">written</span>
              <span className="text-pearl"> together.</span>
            </h1>
          </motion.div>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 border-t border-pearl/20 bg-black/40 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left - Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex-1 flex flex-col items-center justify-center py-8 border-b md:border-b-0 md:border-r border-pearl/20"
          >
            <span className="text-xs tracking-[0.3em] text-pearl/70 mb-4">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-pearl/50 to-transparent"
            />
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex-1 flex items-center justify-center md:justify-end px-6 lg:px-12 xl:px-20 py-8"
          >
            <a
              href="#apply"
              className="group flex items-center gap-4 text-xs tracking-[0.2em] text-pearl hover:text-blush transition-colors"
            >
              BEGIN YOUR APPLICATION
              <span className="w-10 h-10 rounded-full border border-pearl/30 flex items-center justify-center group-hover:border-blush transition-colors">
                <svg
                  className="w-4 h-4 -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

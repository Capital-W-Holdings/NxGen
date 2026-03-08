"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-40 bg-black overflow-hidden">
      {/* Large background text */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[20vw] font-bold text-pearl/[0.02] whitespace-nowrap">
          NXGEN
        </span>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center"
      >
        <p className="text-blush text-xs tracking-[0.3em] uppercase mb-8">
          Who We Are
        </p>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-pearl leading-tight mb-12">
          Not a network you attend.
          <br />
          <span className="text-pearl-muted">A community you belong to.</span>
        </h2>

        <p className="text-lg text-text-soft leading-relaxed max-w-2xl mx-auto mb-16">
          We create the experiences for trust to grow, value to compound, and
          friendship to form between people who are trying to leave the world
          better than they found it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#apply"
            className="px-8 py-3 text-sm tracking-widest text-black bg-pearl rounded-full hover:bg-blush transition-all duration-300"
          >
            APPLY TO JOIN
          </a>
          <a
            href="#thesis"
            className="px-8 py-3 text-sm tracking-widest text-pearl border border-pearl/20 rounded-full hover:border-pearl/40 transition-all duration-300"
          >
            OUR STORY
          </a>
        </div>
      </motion.div>
    </section>
  );
}

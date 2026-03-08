"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const destinations = [
  "Miami",
  "South Africa",
  "France",
  "F1",
  "Hong Kong",
  "Bahamas",
  "Portugal",
  "Brazil",
];

export default function Destinations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-12">
        <p className="text-blush text-xs tracking-[0.3em] uppercase">
          Global Community
        </p>
      </div>

      {/* Scrolling destinations */}
      <motion.div style={{ x }} className="flex gap-8 whitespace-nowrap">
        {[...destinations, ...destinations, ...destinations].map((dest, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-pearl/10 hover:text-pearl/30 transition-colors duration-500 cursor-default"
          >
            {dest}
            <span className="text-blush/30 mx-8">·</span>
          </span>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <p className="text-text-muted text-sm">
          NxGeN doesn&apos;t end when you leave Miami.
        </p>
      </div>
    </section>
  );
}

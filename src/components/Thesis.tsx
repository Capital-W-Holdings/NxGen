"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Thesis() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section
      id="thesis"
      ref={containerRef}
      className="relative min-h-screen flex items-center py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div style={{ opacity, y }} className="space-y-16">
          {/* Label */}
          <p className="text-blush text-xs tracking-[0.3em] uppercase">
            The Thesis
          </p>

          {/* Main statement */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-pearl leading-[1.1] max-w-5xl">
            <span className="text-blush">$84 trillion</span> is transferring to
            the next generation.
          </h2>

          {/* Supporting text */}
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <p className="text-lg text-text-soft leading-relaxed">
              AI is creating the greatest wealth-building opportunity in modern
              history. Yet no community exists for those creating, inheriting,
              and deploying that capital.
            </p>
            <p className="text-lg text-text-soft leading-relaxed">
              One built on trust, not transactions. On friendship, not
              networking. On experiences that make you want to continually show
              up.
            </p>
          </div>

          {/* Accent line */}
          <div className="pt-16">
            <div className="h-px w-24 bg-blush/50" />
            <p className="mt-8 text-2xl md:text-3xl text-pearl font-light">
              It starts in Miami.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);

  return (
    <section
      id="thesis"
      ref={containerRef}
      className="relative min-h-screen flex items-center py-32 bg-black"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div style={{ opacity, y }} className="space-y-12">
          {/* Label */}
          <p className="text-blush text-xs tracking-[0.3em] uppercase">
            The Thesis
          </p>

          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-pearl leading-[1.15] max-w-4xl font-bold">
            The weight of responsibility is shifting
          </h2>

          {/* Main stat paragraph */}
          <p className="text-xl md:text-2xl text-pearl-muted leading-relaxed max-w-3xl">
            <span className="text-blush">$84 trillion</span> is transferring to Millennials and Gen Z — and at the same moment, AI is creating the greatest wealth-building opportunity in modern history.
          </p>

          {/* Body copy */}
          <div className="space-y-6 max-w-3xl">
            <p className="text-lg text-text-soft leading-relaxed">
              Yet no community exists for those creating, inheriting, and deploying that capital — one built on trust, not transactions. On friendship, not networking. On experiences that make you want to continually show up.
            </p>

            <p className="text-lg text-text-soft leading-relaxed">
              There needs to be an ecosystem where the next generation of family offices, entrepreneurial leaders, and cultural icons learn, create, invest, and give back together - surrounded by people who understand the weight and the opportunity of what&apos;s ahead.
            </p>
          </div>

          {/* Conclusion */}
          <div className="pt-8 border-t border-pearl/10">
            <p className="text-xl text-pearl leading-relaxed max-w-3xl">
              <span className="font-medium">NxGeN</span> is the platform bringing this global community together, in real life, to have fun, safe spaces to build the relationships and have the conversations that matter most.
            </p>
            <p className="text-3xl md:text-4xl text-blush mt-8 font-bold">
              It starts in Miami.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

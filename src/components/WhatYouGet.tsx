"use client";

import { motion } from "framer-motion";
import { Users, Calendar, BookOpen, Key } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "The Inner Circle",
    description:
      "A curated community of builders, givers, and investors genuinely invested in each other's growth.",
  },
  {
    icon: Calendar,
    title: "Curated Events",
    description:
      "Intimate dinners, off-site retreats, and city gatherings designed for depth over scale.",
  },
  {
    icon: BookOpen,
    title: "Media & Education",
    description:
      "Courses and content for people building at the frontier—of business, self, and intentional living.",
  },
  {
    icon: Key,
    title: "Access & Resources",
    description:
      "Capital, expertise, and warm introductions that would otherwise take a decade to earn.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-pearl">
            Built for people who want to go deeper.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-black-light border border-pearl/10 flex items-center justify-center group-hover:border-blush/30 transition-colors duration-300">
                  <benefit.icon
                    size={20}
                    className="text-blush"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-pearl font-medium mb-3 group-hover:text-blush transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-text-soft leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

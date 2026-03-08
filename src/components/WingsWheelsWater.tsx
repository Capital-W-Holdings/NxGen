"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/images/www/marina-sunset.jpg", alt: "Marina at Sunset", title: "Water", category: "water" },
  { src: "/images/www/helicopter-arrival.jpg", alt: "Helicopter Arrival", title: "Wings", category: "wings" },
  { src: "/images/www/collector-cars.jpg", alt: "Collector Cars on Tarmac", title: "Wheels", category: "wheels" },
  { src: "/images/www/yacht-radiance.jpg", alt: "Yacht Radiance", title: "Water", category: "water" },
  { src: "/images/www/helicopter-passengers.jpg", alt: "VIP Helicopter Arrival", title: "Wings", category: "wings" },
  { src: "/images/www/woman-ferrari.jpg", alt: "Elegance & Performance", title: "Wheels", category: "wheels" },
  { src: "/images/www/couple-ferrari.jpg", alt: "Unforgettable Moments", title: "Experience", category: "experience" },
  { src: "/images/www/bentley-helicopter.jpg", alt: "Bentley & Helicopter", title: "Wings & Wheels", category: "wings" },
  { src: "/images/www/classic-speedboat.jpg", alt: "Classic Speedboat", title: "Water", category: "water" },
  { src: "/images/www/live-performance.jpg", alt: "Live Performance", title: "Entertainment", category: "experience" },
  { src: "/images/www/dock-sunset.jpg", alt: "Dock at Golden Hour", title: "Water", category: "water" },
  { src: "/images/www/couple-portrait.jpg", alt: "Connections Made", title: "Community", category: "experience" },
];

const experiences = [
  {
    icon: "✈",
    label: "Wings",
    description: "Private aviation access, aircraft displays, and the most exclusive flight deck conversations you'll ever have.",
  },
  {
    icon: "⊙",
    label: "Wheels",
    description: "A curated lineup of collector and performance vehicles. The kind that gets your wheels turning.",
  },
  {
    icon: "⚓",
    label: "Water",
    description: "Premier yachts and classic boats. An elevated platform for elevated conversations.",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "wings", label: "Wings" },
  { id: "wheels", label: "Wheels" },
  { id: "water", label: "Water" },
  { id: "experience", label: "Experience" },
];

export default function WingsWheelsWater() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="www" className="relative bg-black overflow-hidden">
      {/* Content section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        {/* Intro - Two column layout with image on left, copy on right */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          {/* Left side - Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/helicopter-event.jpg"
              alt="Helicopter arriving at Wings Wheels Water event with private jet and vintage vehicles"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right side - Copy */}
          <div>
            <p className="text-blush text-xs tracking-[0.3em] uppercase mb-6">
              Flagship Event
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-pearl leading-tight mb-8 font-bold">
              Three worlds. One extraordinary night.
            </h3>
            <p className="text-lg text-text-soft leading-relaxed">
              Wings, Wheels & Water brings together private aviation, collector automobiles, and world-class yachts - all curated for the next generation of capital and culture. This is not a trade show. It&apos;s the opening act.
            </p>
          </div>
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <span className="text-3xl mb-6 block">{exp.icon}</span>
              <h4 className="text-2xl text-pearl font-medium mb-4 group-hover:text-blush transition-colors">
                {exp.label}
              </h4>
              <p className="text-text-soft leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <a
            href="#apply"
            className="inline-block px-10 py-4 text-xs tracking-[0.2em] text-black bg-blush rounded-full hover:bg-pearl transition-all duration-300"
          >
            SECURE YOUR PLACE
          </a>
        </div>
      </div>

      {/* Interactive Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blush text-xs tracking-[0.3em] uppercase mb-4">Gallery</p>
          <h3 className="text-2xl md:text-3xl text-pearl font-bold mb-8">Moments That Define Us</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-blush text-black"
                    : "bg-transparent text-pearl/60 border border-pearl/20 hover:border-pearl/40 hover:text-pearl"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              // Create varied grid layouts based on index
              const isLarge = index === 0 || index === 5;
              const isTall = index === 2 || index === 7;
              
              return (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`relative cursor-pointer overflow-hidden group ${
                    isLarge ? "md:col-span-2 md:row-span-2" : ""
                  } ${isTall ? "md:row-span-2" : ""}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                >
                  <div className={`relative ${isLarge ? "aspect-square" : isTall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Permanent gradient at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: hoveredIndex === index ? 0 : 10, opacity: hoveredIndex === index ? 1 : 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-blush text-xs tracking-[0.2em] uppercase mb-1">{image.title}</p>
                        <p className="text-pearl text-sm md:text-base font-medium">{image.alt}</p>
                      </motion.div>
                    </div>
                    
                    {/* Border on hover */}
                    <div className="absolute inset-0 border-2 border-blush/0 group-hover:border-blush/50 transition-colors duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-pearl/60 hover:text-pearl transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 md:left-8 text-pearl/60 hover:text-pearl transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % galleryImages.length);
              }}
              className="absolute right-4 md:right-8 text-pearl/60 hover:text-pearl transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
                <p className="text-blush text-xs tracking-[0.2em] uppercase mb-2">
                  {galleryImages[selectedImage].title}
                </p>
                <p className="text-pearl text-lg font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="text-pearl/50 text-sm mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

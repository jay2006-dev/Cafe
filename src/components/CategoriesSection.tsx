"use client";

import { motion } from "framer-motion";
import { IconCup, IconIceCream, IconCake, IconCoffee, IconSparkles } from "@tabler/icons-react";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Hot Brews",
      icon: <IconCoffee size={32} stroke={1.5} />,
      items: "24 Items",
      color: "bg-orange-50",
      iconColor: "text-orange-700",
      description: "Artisanal espresso blends"
    },
    {
      name: "Cold Brews",
      icon: <IconCup size={32} stroke={1.5} />,
      items: "18 Items",
      color: "bg-blue-50",
      iconColor: "text-blue-700",
      description: "Slow-steeped perfection"
    },
    {
      name: "Pastries",
      icon: <IconCake size={32} stroke={1.5} />,
      items: "32 Items",
      color: "bg-amber-50",
      iconColor: "text-amber-700",
      description: "Freshly baked delights"
    },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm text-center md:text-left"
          >
            <div className="flex items-center gap-2 text-coffee-600 mb-4 justify-center md:justify-start">
              <IconSparkles size={20} stroke={1.5} />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Our Selection</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950 mb-6">
              Expertly Curated <br />
              <span className="text-coffee-600">Categories</span>
            </h2>
            <p className="text-coffee-700 leading-relaxed">
              Explore our range of premium offerings, from bold dark roasts to delicate hand-crafted pastries.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto flex-1 max-w-3xl">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-coffee-50/50 border border-coffee-100 rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(62,39,35,0.1)] hover:-translate-y-2 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${category.color} ${category.iconColor}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-coffee-950 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-coffee-500 font-bold uppercase tracking-widest mb-3">
                    {category.items}
                  </p>
                  <p className="text-sm text-coffee-600 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


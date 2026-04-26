"use client";

import { motion } from "framer-motion";
import { Coffee, IceCream, Cookie, Sparkles } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Hot Coffee",
      icon: <Coffee size={28} />,
      items: "24 Items",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      description: "Steaming artisanal blends"
    },
    {
      name: "Cold Brew",
      icon: <IceCream size={28} />,
      items: "18 Items",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      description: "Refreshing iced favorites"
    },
    {
      name: "Desserts",
      icon: <Cookie size={28} />,
      items: "32 Items",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
      description: "Freshly baked delights"
    },
  ];

  return (
    <section className="relative z-20 px-6 py-20 bg-coffee-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[3rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-coffee-100 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex flex-col gap-2 max-w-xs text-center md:text-left">
            <div className="flex items-center gap-2 text-coffee-600 justify-center md:justify-start">
              <Sparkles size={16} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Our Craft</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-coffee-950">Expertly Curated</h2>
            <p className="text-coffee-600 text-sm">Discover the perfect balance of flavor and artistry in every category.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div
                  className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-coffee-200/50 ${category.color} ${category.iconColor} mb-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                </div>
                <h3 className="font-serif text-xl font-bold text-coffee-950 mb-1">
                  {category.name}
                </h3>
                <p className="text-coffee-500 text-xs font-medium uppercase tracking-wider">{category.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


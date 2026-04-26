"use client";

import { motion } from "framer-motion";
import { Coffee, CupSoda, Croissant } from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Hot Coffee",
      icon: <Coffee size={32} />,
      items: "24 Items",
      color: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      name: "Cold Coffee",
      icon: <CupSoda size={32} />,
      items: "18 Items",
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      name: "Desserts",
      icon: <Croissant size={32} />,
      items: "32 Items",
      color: "bg-amber-100",
      textColor: "text-amber-700",
    },
  ];

  return (
    <section className="py-16 bg-white rounded-[3rem] mx-4 md:mx-8 px-6 shadow-sm relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-16">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-6 group cursor-pointer"
          >
            <div
              className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${category.color} ${category.textColor}`}
            >
              {category.icon}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-coffee-950 mb-1 group-hover:text-coffee-700 transition-colors">
                {category.name}
              </h3>
              <p className="text-coffee-600 font-medium">{category.items}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

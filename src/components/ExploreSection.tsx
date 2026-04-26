"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { menuItems } from "@/data/menu";

export default function ExploreSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="explore">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm mb-2 block">
            Explore Our Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950">
            Our Full Menu
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
          >
            <ProductCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

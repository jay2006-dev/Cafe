"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const desserts = [
  {
    id: 1,
    title: "Strawberry Chocolate Cake",
    description:
      "Rich chocolate layers topped with fresh cream and strawberries.",
    price: "₹380",
    image: "/images/dessert1.png",
  },
  {
    id: 2,
    title: "Classic Butter Croissant",
    description: "Flaky, buttery pastry baked fresh every morning.",
    price: "₹180",
    image: "/images/croissant.png",
  },
  {
    id: 3,
    title: "Blueberry Muffin",
    description: "Soft and moist muffin loaded with juicy blueberries.",
    price: "₹210",
    image: "/images/blueberry_muffin.png",
  },
  {
    id: 4,
    title: "Lemon Tart",
    description: "Tangy lemon curd in a sweet, buttery pastry shell.",
    price: "₹240",
    image: "/images/lemon_tart.png",
  },
];

export default function DessertSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="bakery">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm mb-2 block">
            Fresh Bakery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950">
            Delightful Desserts
          </h2>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-coffee-800 font-medium hover:text-coffee-600 transition-colors flex items-center gap-2"
        >
          View All Pastries <span aria-hidden="true">&rarr;</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {desserts.map((dessert, index) => (
          <motion.div
            key={dessert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            loading="eager"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...dessert} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

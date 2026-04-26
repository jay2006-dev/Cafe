"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Caramel Macchiato",
    description: "Espresso combined with vanilla-flavored syrup, milk and caramel drizzle.",
    price: "₹280",
    image: "/images/coffee1.png",
  },
  {
    id: 2,
    title: "Iced Americano",
    description: "Espresso shots topped with cold water produce a light layer of crema.",
    price: "₹190",
    image: "/images/hero.png",
  },
  {
    id: 3,
    title: "Mocha Frappuccino",
    description: "Roast coffee, milk and ice all come together for a delicious chocolatey flavor.",
    price: "₹320",
    image: "/images/coffee1.png",
  },
  {
    id: 4,
    title: "Flat White",
    description: "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk.",
    price: "₹240",
    image: "/images/hero.png",
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="coffee">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm mb-2 block">
            Perfect Blends
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950">
            Our Special Coffee
          </h2>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-coffee-800 font-medium hover:text-coffee-600 transition-colors flex items-center gap-2"
        >
          View All Coffee <span aria-hidden="true">&rarr;</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

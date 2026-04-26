"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="py-24 relative overflow-hidden" id="shop">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.png"
          alt="Premium coffee beans"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-coffee-950/70" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-coffee-200 font-medium tracking-widest uppercase text-sm">
            Premium Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Check out our best <br /> coffee beans
          </h2>
          <p className="text-coffee-100 text-lg md:text-xl max-w-2xl">
            Take the aroma home. Our carefully roasted single-origin beans are perfect for your morning brew.
          </p>
          <button className="mt-4 bg-white text-coffee-950 hover:bg-coffee-100 px-8 py-4 rounded-full font-medium transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            Shop Coffee Beans
          </button>
        </motion.div>
      </div>
    </section>
  );
}

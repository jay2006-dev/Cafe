"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-coffee-200/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-coffee-100/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm">
            Welcome to Aroma
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-coffee-950">
            Sweet moments <br />
            <span className="text-coffee-800 italic">start here</span>
          </h1>
          <p className="text-coffee-700 text-lg md:text-xl max-w-md leading-relaxed">
            Experience the finest artisanal coffee and freshly baked pastries in
            a warm, elegant atmosphere that feels just like home.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link href="/menu">
              <button className="bg-coffee-800 hover:bg-coffee-900 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2">
                Explore Menu
                <ArrowRight size={18} />
              </button>
            </Link>
            <button className="px-8 py-4 rounded-full font-medium text-coffee-800 hover:bg-coffee-200/50 transition-colors">
              Book a Table
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] md:h-[600px] w-full max-w-lg mx-auto"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Premium latte art coffee"
              fill
              className="object-cover animate-float"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center text-coffee-800 font-bold text-lg">
              4.9
            </div>
            <div>
              <p className="font-bold text-coffee-950">Top Rated</p>
              <p className="text-sm text-coffee-600">Café in town</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

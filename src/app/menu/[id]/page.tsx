"use client";

import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Plus, Check, ArrowLeft, Star, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const item = menuItems.find((i) => i.id === resolvedParams.id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-coffee-50">
        <h1 className="text-2xl font-serif text-coffee-950 mb-4">Item not found</h1>
        <Link href="/menu" className="text-coffee-600 hover:underline">Back to Menu</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart({ id: item.id, title: item.title, price: item.price, image: item.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-coffee-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <Link 
          href="/menu" 
          className="inline-flex items-center gap-2 text-coffee-600 hover:text-coffee-950 transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4"
          >
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-500 mb-4">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <span className="text-coffee-600 text-sm ml-2 font-medium">(4.9/5 from 120+ reviews)</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee-950 mb-6 tracking-tight">
                {item.title}
              </h1>
              <p className="text-coffee-700 text-lg leading-relaxed max-w-xl">
                {item.description} Our master baristas and bakers ensure each order is prepared with premium ingredients and unparalleled craftsmanship.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 py-8 border-y border-coffee-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-coffee-500 uppercase font-bold tracking-wider">Prep Time</p>
                  <p className="font-bold text-coffee-950">5-10 Mins</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-coffee-500 uppercase font-bold tracking-wider">Quality</p>
                  <p className="font-bold text-coffee-950">100% Organic</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-sm text-coffee-500 font-bold uppercase tracking-widest mb-1">Price</span>
                <span className="text-4xl font-bold text-coffee-950">{item.price}</span>
              </div>
              <button 
                onClick={handleAdd}
                className={`flex-1 max-w-xs h-16 rounded-full flex items-center justify-center gap-3 font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 ${
                  added 
                    ? 'bg-green-600 text-white' 
                    : 'bg-coffee-950 text-white hover:bg-coffee-800'
                }`}
              >
                {added ? (
                  <>
                    <Check size={24} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <Plus size={24} />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            <div className="bg-coffee-100/50 p-6 rounded-2xl">
              <p className="text-coffee-600 text-sm italic">
                * Nutritional information available upon request. All items are prepared fresh daily.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

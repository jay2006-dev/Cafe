"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

const menuItems = [
  { id: 1, title: "Espresso", description: "Rich, bold, and pure artisanal coffee shot.", price: "$3.00", image: "/images/coffee1.png" },
  { id: 2, title: "Cappuccino", description: "Perfect balance of espresso, steamed milk, and foam.", price: "$4.50", image: "/images/hero.png" },
  { id: 3, title: "Vanilla Latte", description: "Smooth espresso with velvet milk and sweet vanilla.", price: "$5.00", image: "/images/coffee1.png" },
  { id: 4, title: "Caramel Macchiato", description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso.", price: "$5.50", image: "/images/hero.png" },
  { id: 5, title: "Mocha", description: "Espresso with chocolate and steamed milk.", price: "$5.25", image: "/images/coffee1.png" },
  { id: 6, title: "Americano", description: "Espresso shots topped with hot water.", price: "$3.50", image: "/images/hero.png" },
  { id: 7, title: "Strawberry Cake", description: "Rich chocolate layers with fresh strawberries.", price: "$6.50", image: "/images/dessert1.png" },
  { id: 8, title: "Butter Croissant", description: "Flaky, buttery pastry baked fresh daily.", price: "$3.50", image: "/images/croissant.png" },
  { id: 9, title: "Blueberry Muffin", description: "Moist muffin bursting with fresh blueberries.", price: "$4.00", image: "/images/blueberry_muffin.png" },
  { id: 10, title: "Lemon Tart", description: "Tangy lemon curd in a sweet pastry shell.", price: "$5.00", image: "/images/lemon_tart.png" },
  { id: 11, title: "Flat White", description: "Micro-foam poured over a double shot of espresso.", price: "$4.75", image: "/images/coffee1.png" },
  { id: 12, title: "Iced Coffee", description: "Slow-steeped cold brew served over ice.", price: "$4.00", image: "/images/hero.png" },
  { id: 13, title: "Chocolate Brownie", description: "Dense, fudgy brownie with walnuts.", price: "$3.75", image: "/images/dessert1.png" },
  { id: 14, title: "Pain au Chocolat", description: "Buttery pastry with dark chocolate core.", price: "$4.00", image: "/images/croissant.png" },
  { id: 15, title: "Matcha Latte", description: "Premium grade matcha with creamy milk.", price: "$5.50", image: "/images/coffee1.png" },
  { id: 16, title: "Cold Brew", description: "12-hour steeped coffee for ultimate smoothness.", price: "$4.50", image: "/images/hero.png" },
  { id: 17, title: "Almond Croissant", description: "Filled with rich almond cream and topped with flakes.", price: "$4.50", image: "/images/croissant.png" },
  { id: 18, title: "Red Velvet Cupcake", description: "Classic red velvet with cream cheese frosting.", price: "$3.50", image: "/images/dessert1.png" },
  { id: 19, title: "Affogato", description: "Vanilla gelato 'drowned' with a shot of hot espresso.", price: "$6.00", image: "/images/coffee1.png" },
  { id: 20, title: "Cheese Danish", description: "Sweet pastry with a creamy cheese filling.", price: "$4.25", image: "/images/croissant.png" },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm mb-2 block">
            Our Menu
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-coffee-950">
            Explore Our Selection
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

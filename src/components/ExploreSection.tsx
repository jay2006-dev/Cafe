"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const exploreItems = [
  { id: 1, title: "Espresso", description: "Rich, bold, and pure artisanal coffee shot.", price: "$3.00", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 2, title: "Cappuccino", description: "Perfect balance of espresso, steamed milk, and foam.", price: "$4.50", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 3, title: "Vanilla Latte", description: "Smooth espresso with velvet milk and sweet vanilla.", price: "$5.00", image: "https://images.unsplash.com/photo-1595434066389-01303473998d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 4, title: "Caramel Macchiato", description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso.", price: "$5.50", image: "https://images.unsplash.com/photo-1485808191679-5f6333f37cca?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 5, title: "Mocha", description: "Espresso with chocolate and steamed milk.", price: "$5.25", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 6, title: "Americano", description: "Espresso shots topped with hot water.", price: "$3.50", image: "https://images.unsplash.com/photo-1551033594-526279f0407a?q=80&w=400&h=400&auto=format&fit=crop" },

  { id: 7, title: "Strawberry Cake", description: "Rich chocolate layers with fresh strawberries.", price: "$6.50", image: "https://images.unsplash.com/photo-1464349172904-124bb54af6b0?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 8, title: "Butter Croissant", description: "Flaky, buttery pastry baked fresh daily.", price: "$3.50", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 9, title: "Blueberry Muffin", description: "Moist muffin bursting with fresh blueberries.", price: "$4.00", image: "https://images.unsplash.com/photo-1607958996333-41aef7caadaa?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 10, title: "Lemon Tart", description: "Tangy lemon curd in a sweet pastry shell.", price: "$5.00", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=400&h=400&auto=format&fit=crop" },

  { id: 11, title: "Flat White", description: "Micro-foam poured over a double shot of espresso.", price: "$4.75", image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 12, title: "Iced Coffee", description: "Slow-steeped cold brew served over ice.", price: "$4.00", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400&h=400&auto=format&fit=crop" },

  { id: 13, title: "Chocolate Brownie", description: "Dense, fudgy brownie with walnuts.", price: "$3.75", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 14, title: "Pain au Chocolat", description: "Buttery pastry with dark chocolate core.", price: "$4.00", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 15, title: "Matcha Latte", description: "Premium grade matcha with creamy milk.", price: "$5.50", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 16, title: "Cold Brew", description: "12-hour steeped coffee for ultimate smoothness.", price: "$4.50", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400&h=400&auto=format&fit=crop" },

  { id: 17, title: "Almond Croissant", description: "Filled with rich almond cream and topped with flakes.", price: "$4.50", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 18, title: "Red Velvet Cupcake", description: "Classic red velvet with cream cheese frosting.", price: "$3.50", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 19, title: "Affogato", description: "Vanilla gelato 'drowned' with a shot of hot espresso.", price: "$6.00", image: "https://images.unsplash.com/photo-1594631252845-29fc4586c3d7?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 20, title: "Cheese Danish", description: "Sweet pastry with a creamy cheese filling.", price: "$4.25", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&h=400&auto=format&fit=crop" },
];

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
        {exploreItems.map((item, index) => (
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

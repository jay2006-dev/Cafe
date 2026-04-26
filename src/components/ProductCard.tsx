"use client";

import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id?: string | number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCard({ id, title, description, price, image }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ id: String(id || title), title, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-[2rem] p-4 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-coffee-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-2 pb-2">
        <h3 className="font-serif text-xl font-bold text-coffee-950 mb-2">
          {title}
        </h3>
        <p className="text-coffee-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl text-coffee-800">{price}</span>
          <button 
            onClick={handleAdd}
            className={`${added ? 'bg-green-600 text-white' : 'bg-coffee-100 text-coffee-800 hover:bg-coffee-800 hover:text-white'} w-10 h-10 rounded-full flex items-center justify-center transition-all`}
          >
            {added ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}

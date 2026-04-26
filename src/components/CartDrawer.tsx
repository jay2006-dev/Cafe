"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-coffee-100">
              <h2 className="font-serif text-2xl font-bold text-coffee-950 flex items-center gap-2">
                <ShoppingBag size={24} />
                Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-coffee-600 hover:text-coffee-950 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center text-coffee-500 gap-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p>Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-coffee-800 font-medium hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-coffee-50 flex-shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-coffee-950 text-sm line-clamp-1">{item.title}</h3>
                      <p className="text-coffee-600 text-sm">{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800 hover:bg-coffee-200 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-800 hover:bg-coffee-200 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className="font-bold text-coffee-950">
                        ₹{(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(0)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-coffee-100 bg-coffee-50/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-coffee-800">Subtotal</span>
                  <span className="font-bold text-xl text-coffee-950">₹{cartTotal.toFixed(0)}</span>
                </div>
                <p className="text-xs text-coffee-500 mb-6 text-center">Taxes and shipping calculated at checkout</p>
                <button className="w-full bg-coffee-950 hover:bg-coffee-800 text-white py-4 rounded-full font-medium transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

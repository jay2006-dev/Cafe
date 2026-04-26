"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Coffee", href: "/#coffee" },
    { name: "Bakery", href: "/#bakery" },
    { name: "About", href: "/#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-coffee-50/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-coffee-800 text-coffee-50 p-2 rounded-full transition-transform group-hover:scale-105">
            <Coffee size={24} />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-coffee-950">
            Aroma
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-coffee-800 hover:text-coffee-600 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-coffee-600 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-coffee-900">
          <button className="hover:text-coffee-600 transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hover:text-coffee-600 transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-coffee-800 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-coffee-950"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-coffee-50 border-t border-coffee-200 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-coffee-900 hover:text-coffee-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

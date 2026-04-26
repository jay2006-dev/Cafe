"use client";

import Link from "next/link";
import { Coffee, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-100 pt-20 pb-10 px-6 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
            <div className="bg-coffee-800 text-white p-2 rounded-full">
              <Coffee size={24} />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Aroma
            </span>
          </Link>
          <p className="text-coffee-400 mb-6 max-w-sm">
            Crafting perfect moments, one cup at a time. Join us for premium coffee and freshly baked pastries.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-coffee-700 transition-colors">
              <Mail size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-coffee-700 transition-colors">
              <Phone size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-coffee-700 transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="#" className="text-coffee-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#coffee" className="text-coffee-400 hover:text-white transition-colors">Menu</Link></li>
            <li><Link href="#bakery" className="text-coffee-400 hover:text-white transition-colors">Bakery</Link></li>
            <li><Link href="#about" className="text-coffee-400 hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="#" className="text-coffee-400 hover:text-white transition-colors">Catering</Link></li>
            <li><Link href="#" className="text-coffee-400 hover:text-white transition-colors">Delivery</Link></li>
            <li><Link href="#" className="text-coffee-400 hover:text-white transition-colors">Reservations</Link></li>
            <li><Link href="#" className="text-coffee-400 hover:text-white transition-colors">Gift Cards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
          <ul className="flex flex-col gap-4 text-coffee-400">
            <li>123 Coffee Street, CA 90210</li>
            <li>+1 (555) 123-4567</li>
            <li>hello@aroma.cafe</li>
            <li>Open: Mon - Sun, 7AM - 8PM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-coffee-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-coffee-500">
        <p>&copy; {new Date().getFullYear()} Aroma Cafe. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

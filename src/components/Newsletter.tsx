"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSent(true);
      setEmail("");
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-coffee-200 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-300/30 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coffee-100/50 rounded-full blur-3xl -ml-20 -mb-20" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950 mb-6">
            Join in and get 15% off
          </h2>
          <p className="text-coffee-800 text-lg mb-10 max-w-lg mx-auto">
            Subscribe to our newsletter to receive news, updates, special offers, and your welcome discount.
          </p>

          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" 
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-coffee-600 outline-none text-coffee-950 bg-white placeholder:text-coffee-400 shadow-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-coffee-950 hover:bg-coffee-800 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-md"
                >
                  Subscribe
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl inline-flex items-center gap-3 text-coffee-900 font-bold shadow-sm mx-auto"
              >
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send size={20} />
                </div>
                Sent! Thank you for subscribing.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

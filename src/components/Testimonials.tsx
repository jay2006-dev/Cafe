"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Local Guide",
    content: "Absolutely the best coffee in town. The atmosphere is so warm and the pastries are always fresh. My daily morning stop!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Coffee Enthusiast",
    content: "Their single origin pour-overs are incredible. You can really taste the care they put into every cup. Highly recommend.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Food Blogger",
    content: "The aesthetic, the taste, the service—everything is 10/10. The strawberry chocolate cake is a must-try!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-coffee-50" id="about">
      <div className="text-center mb-16">
        <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm mb-2 block">
          Testimonials
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950">
          What our customers say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="flex gap-1 text-amber-400 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-coffee-700 leading-relaxed mb-8 italic">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-coffee-200 rounded-full flex items-center justify-center text-coffee-800 font-bold text-lg">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-coffee-950">{testimonial.name}</h4>
                <p className="text-sm text-coffee-600">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

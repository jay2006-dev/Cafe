"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    role: "Local Guide",
    content: "Absolutely the best coffee in town. The atmosphere is so warm and the pastries are always fresh. My daily morning stop!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Coffee Enthusiast",
    content: "Their single origin pour-overs are incredible. You can really taste the care they put into every cup. Highly recommend.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Food Blogger",
    content: "The aesthetic, the taste, the service—everything is 10/10. The strawberry chocolate cake is a must-try!",
    rating: 5,
  },
  {
    id: 4,
    name: "Ananya Iyer",
    role: "Regular Customer",
    content: "Best place to work from. Great WiFi and even better cold brew. The staff is extremely polite.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Tech Professional",
    content: "Consistency is key, and they nail it every time. My flat white is always perfect.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sanya Malhotra",
    role: "Artist",
    content: "I love the minimalist design here. It's so inspiring to sit and sketch while enjoying a lemon tart.",
    rating: 5,
  },
  {
    id: 7,
    name: "Kabir Verma",
    role: "Freelancer",
    content: "Found my new favorite hangout spot. The blueberry muffins are to die for!",
    rating: 5,
  },
  {
    id: 8,
    name: "Meera Reddy",
    role: "Daily Commuter",
    content: "Quick service and great quality. Their croissants are the closest thing to Paris you'll find here.",
    rating: 5,
  },
  {
    id: 9,
    name: "Ishaan Kapoor",
    role: "Student",
    content: "Affordable luxury. The ambiance makes you feel special without breaking the bank.",
    rating: 5,
  },
  {
    id: 10,
    name: "Zoya Khan",
    role: "Interior Designer",
    content: "The lighting and furniture are so well thought out. Plus, the mocha is divine.",
    rating: 5,
  },
];

// Duplicate for infinite loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-coffee-50" id="about">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-coffee-600 font-medium tracking-wider uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-950">
            What our community says
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="inline-block w-[350px] md:w-[450px] mx-4 whitespace-normal"
            >
              <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-coffee-700 leading-relaxed mb-8 italic flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coffee-200 rounded-full flex items-center justify-center text-coffee-800 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-coffee-950">{testimonial.name}</h4>
                    <p className="text-sm text-coffee-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

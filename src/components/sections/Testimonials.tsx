"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    designation: "CEO",
    company: "Horizon Tech UAE",
    content: "Cameo Consultancy provided invaluable support during our expansion into the Dubai market. Their strategic insights and compliance expertise saved us months of work.",
  },
  {
    name: "Sarah Jenkins",
    designation: "Founder",
    company: "Luxe Retail Group",
    content: "The level of professionalism and local market knowledge at Cameo is unmatched. They handled our corporate restructuring with absolute precision and care.",
  },
  {
    name: "Michael Chen",
    designation: "Director of Operations",
    company: "Global Logistics Solutions",
    content: "From business licensing to financial advisory, Cameo has been our trusted partner for over 3 years. We couldn't have scaled as fast without their support.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-neutral overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-premium/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
            >
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8 flex-shrink-0">
                  <Quote size={32} />
                </div>
                <p className="text-lg md:text-xl text-navy italic leading-relaxed mb-8">
                  &quot;{testimonials[index].content}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-lg text-navy">{testimonials[index].name}</h4>
                  <p className="text-primary text-sm font-semibold uppercase tracking-widest mt-1">
                    {testimonials[index].designation} — {testimonials[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

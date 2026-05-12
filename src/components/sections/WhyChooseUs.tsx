"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle } from "lucide-react";

const features = [
  "Dubai-based advisory presence",
  "Direct founder-led approach",
  "Practical, actionable recommendations",
  "Confidential and professional service",
  "Tailored solutions, not generic advice",
  "Support from planning to execution",
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-neutral to-transparent" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Professional business meeting"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              title="Why Businesses Choose CAMEO"
              subtitle="The CAMEO Advantage"
              align="left"
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-neutral border border-gray-100 hover:border-primary/20 hover:bg-primary/3 transition-all group"
                >
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-navy text-sm font-semibold leading-snug">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlight stats */}
            <div className="flex gap-6">
              <div className="p-5 bg-primary/5 rounded-3xl border border-primary/10 flex-1 text-center">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-xs font-bold text-navy/60 uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div className="p-5 bg-accent/5 rounded-3xl border border-accent/10 flex-1 text-center">
                <div className="text-3xl font-bold text-accent mb-1">10+</div>
                <div className="text-xs font-bold text-navy/60 uppercase tracking-wider">Years Expertise</div>
              </div>
              <div className="p-5 bg-premium/5 rounded-3xl border border-premium/10 flex-1 text-center">
                <div className="text-3xl font-bold text-premium mb-1">100+</div>
                <div className="text-xs font-bold text-navy/60 uppercase tracking-wider">Businesses Served</div>
              </div>
            </div>
          </div>

          {/* Right: deliberately empty so the background image shows */}
          <div />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

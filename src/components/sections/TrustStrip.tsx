"use client";

import React from "react";
import { motion } from "framer-motion";

const trustItems = [
  "Licensed in Dubai",
  "Based in Business Bay",
  "Management Consultancy Services",
  "UAE & International Advisory",
];

const TrustStrip = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-5 relative z-20 shadow-sm">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-navy/60 font-semibold text-xs uppercase tracking-widest group-hover:text-primary transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { label: "Years Experience", value: "10+", color: "text-primary" },
  { label: "Businesses Supported", value: "100+", color: "text-accent" },
  { label: "Industries Served", value: "15+", color: "text-primary" },
  { label: "Client Satisfaction", value: "95%", color: "text-accent" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-neutral overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              title="Strategic Advisory Built Around Your Business Goals"
              subtitle="About CAMEO"
              align="left"
              className="mb-10"
            />
            <p className="text-lg text-text-main/70 leading-relaxed mb-8">
              CAMEO Management Consultancies provides tailored advisory solutions for startups, 
              SMEs, investors, and established businesses. We combine deep local UAE market knowledge 
              with international business insight to help clients structure, optimize, and grow 
              with confidence.
            </p>
            <p className="text-lg text-text-main/70 leading-relaxed mb-8">
              Our approach goes beyond traditional consultancy. CAMEO assists companies in improving their sales performance through clearly defined business strategies, operational enhancement, and the implementation of proven and successful business models tailored to their industry and growth objectives.
            </p>
            <p className="text-lg text-text-main/70 leading-relaxed mb-8">
              By combining strategic planning with practical execution support, we help businesses strengthen operations, increase efficiency, and achieve sustainable long-term growth.
            </p>



            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">01</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Our Mission</h4>
                  <p className="text-sm text-text-main/60">Practical, actionable consultancy tailored to your business — not generic advice.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">02</div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Our Vision</h4>
                  <p className="text-sm text-text-main/60">To be the most trusted founder-led advisory firm in Dubai for businesses of every size.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image + Stats Grid */}
          <div className="space-y-6">
            {/* Dubai Office Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dubai Business Bay Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-bold text-lg">Business Bay, Dubai</div>
                <div className="text-white/70 text-sm">Office 702, UAE</div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`text-4xl font-bold mb-2 ${stat.color}`}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-xs font-bold text-navy/60 uppercase tracking-wider group-hover:text-primary transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

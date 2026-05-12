"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block">
              Our Location
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight mb-6">
              Strategically Located in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Business Bay, Dubai
              </span>
            </h2>
            <div className="h-1.5 w-24 mb-8 rounded-full bg-gradient-to-r from-primary to-accent" />

            <p className="text-lg text-text-main/70 leading-relaxed mb-8">
              Our office in Business Bay places us at the center of Dubai&apos;s commercial ecosystem,
              allowing us to support clients across the UAE and international markets with speed and precision.
            </p>

            <div className="space-y-4">
              {[
                { label: "Address", value: "Office 702, Business Bay, Dubai, UAE" },
                { label: "Zone", value: "Dubai World Trade Centre Free Zone Area" },
                { label: "Availability", value: "Mon–Fri, 9:00 AM – 6:00 PM GST" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral border border-gray-100">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-0.5">{item.label}</div>
                    <div className="text-navy font-semibold text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Business+Bay+Dubai+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
            >
              <MapPin size={18} />
              View on Google Maps
            </a>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Business Bay Dubai aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 right-8 glass-dark p-5 rounded-2xl border border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">CAMEO Management Consultancies</div>
                  <div className="text-white/60 text-xs">Business Bay, Dubai · UAE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

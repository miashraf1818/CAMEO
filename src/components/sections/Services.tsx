"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Target,
  Cog,
  Building2,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Business Strategy",
    description: "Growth planning, market entry, business model review, and expansion strategy. CAMEO assists companies in improving their sales performance through clearly defined business strategies, operational enhancement, and the implementation of proven and successful business models tailored to their industry and growth objectives.",
    icon: <Target size={32} />,
    img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Operational Improvement",
    description: "Process optimization, cost efficiency, workflow improvement, and performance enhancement.",
    icon: <Cog size={32} />,
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Corporate Structuring",
    description: "Advisory on company setup, restructuring, governance, and business organization in the UAE.",
    icon: <Building2 size={32} />,
    img: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Financial & Commercial Advisory",
    description: "Budgeting, revenue planning, investment readiness, and commercial decision support.",
    icon: <DollarSign size={32} />,
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Compliance & Risk Advisory",
    description: "Regulatory guidance, documentation support, and risk management frameworks for UAE businesses.",
    icon: <ShieldCheck size={32} />,
    img: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Core Consultancy Services"
          subtitle="What We Offer"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-300 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-main/60 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-[-8px] group-hover:translate-x-0">
                  Learn More <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spacer card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-[32px] bg-gradient-to-br from-navy to-navy/80 border border-white/5 p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Every business is unique. Let us craft a tailored advisory package for your specific challenges.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all"
            >
              Talk to Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

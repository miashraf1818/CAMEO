"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Rocket,
  Store,
  Users,
  Globe,
  Briefcase,
  UserCheck,
} from "lucide-react";

const industries = [
  {
    name: "Startups",
    icon: <Rocket size={28} />,
    description: "Early-stage advisory",
    img: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "SMEs",
    icon: <Store size={28} />,
    description: "Growth & optimization",
    img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Investors",
    icon: <Briefcase size={28} />,
    description: "Investment readiness",
    img: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "International Companies",
    icon: <Globe size={28} />,
    description: "UAE market entry",
    img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Corporate Groups",
    icon: <Users size={28} />,
    description: "Restructuring & governance",
    img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "UAE Market Entrants",
    icon: <UserCheck size={28} />,
    description: "Setup & compliance",
    img: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Who We Work With"
          subtitle="Our Clients"
          align="center"
          light={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 cursor-default"
            >
              {/* Background Image */}
              <div className="relative h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20 group-hover:from-primary/80 group-hover:via-navy/60 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary mb-3 group-hover:bg-white group-hover:text-primary transition-all">
                  {industry.icon}
                </div>
                <h4 className="font-bold text-white text-base leading-tight">{industry.name}</h4>
                <p className="text-white/60 text-xs mt-1 group-hover:text-white/90 transition-colors">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-white/40 text-sm italic"
        >
          Specialized expertise tailored to the unique requirements of the UAE and global markets.
        </motion.p>
      </div>
    </section>
  );
};

export default Industries;

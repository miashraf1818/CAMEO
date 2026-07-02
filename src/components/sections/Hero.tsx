"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-navy">
      {/* Layered Background */}
      <div className="absolute inset-0 z-0">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
        />
        {/* Gradient blobs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-premium/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Licensed in Dubai · Business Bay
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Transforming Businesses.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Driving Growth.
            </span>{" "}
            Delivering Results.
          </h1>

          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
            Dubai-based management consultancy helping businesses improve performance, 
            scale operations, and make confident strategic decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact">
              <Button variant="orange" size="lg" className="group">
                Book a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="text-white border-white/25 hover:bg-white/10 hover:border-white/40">
                View Our Services
              </Button>
            </a>
          </div>

          {/* Mini trust indicators */}
          <div className="flex flex-wrap gap-6">
            {["UAE Licensed", "Business Bay HQ", "Confidential Advisory"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle size={16} className="text-primary" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Floating Visual Cards */}
        <div className="relative h-[560px] hidden lg:block">
          {/* Main Analytics Card */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-0 w-80 glass-dark p-8 rounded-3xl border border-white/10 z-20 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <BarChart3 size={24} />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Business Growth</div>
                <div className="text-2xl font-bold text-white">+42.5%</div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "Revenue Optimization", width: "78%", color: "bg-primary" },
                { label: "Operational Efficiency", width: "62%", color: "bg-accent" },
                { label: "Market Expansion", width: "91%", color: "bg-premium" },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs text-white/50 mb-1">
                    <span>{bar.label}</span><span>{bar.width}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: bar.width }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                      className={`h-full ${bar.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>



          {/* Tertiary Card — Clients */}
          <motion.div
            animate={{ x: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/3 w-52 glass-dark p-5 rounded-2xl border border-white/10 z-0 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <TrendingUp size={16} />
              </div>
              <div>
                <div className="text-white font-bold text-sm">100+ Clients</div>
                <div className="text-white/50 text-xs">UAE & International</div>
              </div>
            </div>
          </motion.div>

          {/* Dubai Skyline Silhouette */}
          <div className="absolute bottom-0 right-0 w-full h-40 opacity-15 pointer-events-none">
            <svg viewBox="0 0 500 120" className="w-full h-full text-primary fill-current">
              <rect x="10" y="40" width="12" height="80" />
              <rect x="30" y="20" width="18" height="100" />
              <rect x="55" y="55" width="14" height="65" />
              <rect x="75" y="10" width="12" height="110" />
              <rect x="92" y="30" width="22" height="90" />
              <rect x="120" y="60" width="14" height="60" />
              <rect x="140" y="15" width="16" height="105" />
              <rect x="162" y="35" width="20" height="85" />
              <rect x="188" y="70" width="12" height="50" />
              <rect x="206" y="20" width="14" height="100" />
              <rect x="226" y="45" width="22" height="75" />
              <rect x="254" y="5" width="18" height="115" />
              <rect x="278" y="30" width="14" height="90" />
              <rect x="298" y="55" width="12" height="65" />
              <rect x="316" y="20" width="20" height="100" />
              <rect x="342" y="40" width="16" height="80" />
              <rect x="364" y="10" width="14" height="110" />
              <rect x="384" y="50" width="18" height="70" />
              <rect x="408" y="25" width="12" height="95" />
              <rect x="426" y="60" width="22" height="60" />
              <rect x="454" y="15" width="16" height="105" />
              <rect x="476" y="40" width="14" height="80" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral to-transparent z-10" />
    </section>
  );
};

export default Hero;

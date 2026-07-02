"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-primary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
            Take the Next Step
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Ready to Build a Smarter,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stronger Business?
            </span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            Let us help you create a clear roadmap for growth, efficiency, and long-term success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button variant="orange" size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <a href="tel:+971585594087">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/25 hover:bg-white/10 hover:border-white/40"
              >
                Call +971 58 559 4087
              </Button>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {["Licensed in Dubai", "Confidential Advisory", "Founder-Led Team", "UAE & International"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

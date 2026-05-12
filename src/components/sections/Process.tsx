"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Understand",
    description: "We assess your business, objectives, and challenges through deep discovery sessions.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Analyze",
    description: "We identify gaps, risks, and growth opportunities using structured analysis.",
    icon: "📊",
  },
  {
    step: "03",
    title: "Strategize",
    description: "We prepare a clear, actionable roadmap aligned to your business goals.",
    icon: "🎯",
  },
  {
    step: "04",
    title: "Execute",
    description: "We support implementation and improvement through hands-on engagement.",
    icon: "⚙️",
  },
  {
    step: "05",
    title: "Grow",
    description: "We help monitor progress and continuously refine your strategy for results.",
    icon: "📈",
  },
];

const Process = () => {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral/10 to-transparent" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Simple Consulting Process"
          subtitle="How We Work"
          align="center"
          light={true}
        />

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="w-[104px] h-[104px] rounded-full bg-navy border-2 border-primary/40 flex flex-col items-center justify-center mb-6 shadow-[0_0_30px_rgba(11,156,217,0.25)] group-hover:shadow-[0_0_40px_rgba(11,156,217,0.4)] transition-all">
                  <span className="text-2xl mb-1">{step.icon}</span>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">{step.step}</span>
                </div>

                <div className="glass-dark p-6 rounded-[28px] w-full border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-6 rounded-3xl border border-white/10 flex gap-5 items-start"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(11,156,217,0.4)]">
                <span className="text-white font-bold text-sm">{step.step}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{step.icon}</span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

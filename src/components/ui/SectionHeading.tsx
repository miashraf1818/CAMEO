"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-1.5 w-24 mt-6 rounded-full",
          align === "center" ? "mx-auto" : "mr-auto",
          "bg-gradient-to-r from-primary to-accent"
        )}
      />
    </div>
  );
};

export default SectionHeading;

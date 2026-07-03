"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Target,
  Cog,
  Building2,
  DollarSign,
  ShieldCheck,
  Calculator,
  X,
  Check,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  img: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    title: "Accounting & Bookkeeping",
    description: "Flawless financial record-keeping, VAT registration and compliance, regular financial reporting, and payroll management to keep your business fully compliant with UAE regulations.",
    icon: <Calculator size={32} />,
    img: "https://images.pexels.com/photos/6863177/pexels-photo-6863177.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: [
      "Daily Bookkeeping & General Ledger: Maintaining up-to-date and accurate transaction records using cloud accounting software.",
      "VAT Registration & Compliance: Handling UAE VAT registration, preparing and filing VAT returns, and advising on tax planning.",
      "Financial Reporting: Generating monthly/quarterly Balance Sheets, Income Statements, and Cash Flow Statements.",
      "Payroll & WPS Management: Setting up and running payroll systems compliant with the UAE Wages Protection System (WPS)."
    ]
  },
  {
    title: "Business Strategy",
    description: "Growth planning, market entry, business model review, and expansion strategy. CAMEO assists companies in improving their sales performance through clearly defined business strategies, operational enhancement, and the implementation of proven and successful business models tailored to their industry and growth objectives.",
    icon: <Target size={32} />,
    img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: [
      "Market Analysis & Entry Strategy: In-depth research of UAE and regional markets to identify target demographics, competitors, and entry barriers.",
      "Growth Planning & Scaling: Formulating actionable roadmaps to scale operations, optimize revenue models, and expand business reach.",
      "Business Model Review: Auditing and restructuring existing business models to improve efficiency, productivity, and profitability.",
      "Strategic Partnering: Assistance in forming alliances, joint ventures, and partnerships to accelerate growth."
    ]
  },
  {
    title: "Operational Improvement",
    description: "Process optimization, cost efficiency, workflow improvement, and performance enhancement.",
    icon: <Cog size={32} />,
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: [
      "Workflow Automation & Digitalization: Mapping and modernizing manual processes using modern software and workflow automation tools.",
      "Cost Optimization: Detailed cost-benefit analysis to identify and eliminate wasteful expenditures without compromising quality.",
      "Supply Chain & Logistics: Enhancing procurement, storage, and distribution efficiency to reduce turnaround times.",
      "Performance Metrics (KPIs): Establishing clear performance indicators and monitoring frameworks for departments and personnel."
    ]
  },
  {
    title: "Corporate Structuring",
    description: "Advisory on company setup, restructuring, governance, and business organization in the UAE.",
    icon: <Building2 size={32} />,
    img: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: [
      "Company Setup & Licensing: Selection of the ideal business structure (LLC, Free Zone, Sole Proprietorship) and navigating DED or Free Zone licensing.",
      "Restructuring & Reorganization: Redesigning organizational hierarchies to improve agility, communication, and decision-making.",
      "Corporate Governance: Establishing policies, regulations, and practices to ensure smooth, ethical, and legal operations.",
      "Joint Ventures & Mergers: Guidance through mergers, acquisitions, and restructuring of joint ownerships."
    ]
  },
  {
    title: "Financial & Commercial Advisory",
    description: "Budgeting, revenue planning, investment readiness, and commercial decision support.",
    icon: <DollarSign size={32} />,
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: [
      "Budgeting & Forecasting: Building robust financial forecasts, cash flow projections, and operating budgets.",
      "Capital Structuring: Optimizing debt-to-equity ratios and advising on capital raising or refinancing.",
      "Investment Readiness: Preparing financial statements, business plans, and pitch decks to attract potential investors or bank financing.",
      "Feasibility Studies: Comprehensive financial viability assessments for new projects, products, or market expansions."
    ]
  },
  {
    title: "Compliance & Risk Advisory",
    description: "Regulatory guidance, documentation support, and risk management frameworks for UAE businesses.",
    icon: <ShieldCheck size={32} />,
    img: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: [
      "Anti-Money Laundering (AML): Designing and implementing AML and Counter-Terrorism Financing (CFT) compliance frameworks.",
      "Corporate Tax Readiness: Preparing business operations and accounting systems for the UAE Corporate Tax regime.",
      "Risk Mitigation Frameworks: Conducting risk assessments to identify, evaluate, and mitigate financial, operational, and legal risks.",
      "Regulatory Licensing & Approvals: Interfacing with UAE regulatory bodies (e.g., Central Bank, DFSA, ADGM) for special activity approvals."
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

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
          {services.map((service, index) => {
            const isAccounting = service.title === "Accounting & Bookkeeping";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
              >
                {isAccounting ? (
                  <Link href="/services/accounting-bookkeeping" className="flex flex-col h-full justify-between">
                    <div>
                      {/* Card Image */}
                      <div className="relative h-48 overflow-hidden shrink-0">
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
                      <div className="p-8 relative overflow-hidden flex-1">
                        <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-main/60 leading-relaxed text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm translate-x-0 group-hover:translate-x-1 transition-transform">
                        Explore Service Page <span>→</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div onClick={() => setSelectedService(service)} className="flex flex-col h-full justify-between">
                    <div>
                      {/* Card Image */}
                      <div className="relative h-48 overflow-hidden shrink-0">
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
                      <div className="p-8 relative overflow-hidden flex-1">
                        <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-main/60 leading-relaxed text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-all translate-x-[-8px] group-hover:translate-x-0">
                        Learn More <span>→</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Spacer card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 lg:col-span-3 rounded-[32px] bg-gradient-to-br from-navy to-navy/80 border border-white/5 p-10 flex flex-col justify-center items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Every business is unique. Let us craft a tailored advisory package for your specific challenges.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all"
            >
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Modal Banner */}
              <div className="relative h-56 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedService.img}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/45 text-white hover:scale-105 transition-all p-2.5 rounded-full z-10 backdrop-blur-sm focus:outline-none"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                {/* Title & Icon */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary shrink-0 border border-primary/30">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">Service Overview</span>
                    <h2 className="text-xl md:text-2xl font-bold">{selectedService.title}</h2>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
                <p className="text-text-main/70 text-sm md:text-base leading-relaxed">
                  {selectedService.description}
                </p>
                
                <div>
                  <h3 className="text-navy font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    What We Deliver
                  </h3>
                  <ul className="space-y-4">
                    {selectedService.details.map((detail, index) => {
                      const parts = detail.split(":");
                      const title = parts[0];
                      const desc = parts.slice(1).join(":"); // Rejoin rest in case of nested colons
                      
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <div className="text-sm">
                            {desc ? (
                              <>
                                <strong className="text-navy font-bold">{title}:</strong>
                                <span className="text-text-main/60"> {desc}</span>
                              </>
                            ) : (
                              <span className="text-text-main/60">{detail}</span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 md:px-8 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
                <span className="text-xs text-text-main/40 font-medium">Ready to discuss your requirements?</span>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    // Small delay to allow fade out before scroll
                    setTimeout(() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                        
                        // Select the matching dropdown option
                        const select = document.querySelector('select[name="service"]') as HTMLSelectElement;
                        if (select) {
                          const titleLower = selectedService.title.toLowerCase();
                          if (titleLower.includes("strategy")) select.value = "strategy";
                          else if (titleLower.includes("operational") || titleLower.includes("improvement")) select.value = "operations";
                          else if (titleLower.includes("structuring")) select.value = "structuring";
                          else if (titleLower.includes("financial")) select.value = "financial";
                          else if (titleLower.includes("accounting") || titleLower.includes("bookkeeping")) select.value = "accounting";
                          else if (titleLower.includes("compliance")) select.value = "compliance";
                        }
                      }
                    }, 300);
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all text-sm flex items-center justify-center gap-2"
                >
                  Enquire About This Service →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  Calculator,
  CheckCircle,
  TrendingUp,
  FileSpreadsheet,
  Receipt,
  Building,
  Users,
  Database,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function AccountingBookkeepingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: "accounting",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to submit enquiry. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const solutions = [
    {
      title: "Daily Bookkeeping & General Ledger",
      description: "Accurate transaction logging, account classification, and ledger maintenance to keep your books completely current.",
      icon: <FileSpreadsheet className="text-primary" size={24} />,
    },
    {
      title: "VAT Registration & Filing",
      description: "End-to-end VAT support including initial registration, quarterly return preparation, compliance audits, and submission to the FTA.",
      icon: <Receipt className="text-primary" size={24} />,
    },
    {
      title: "Corporate Tax Readiness",
      description: "Structuring your financial accounts to comply with the 9% UAE Corporate Tax, ensuring audit readiness and optimizing deductions.",
      icon: <Building className="text-primary" size={24} />,
    },
    {
      title: "Financial Reporting & Analytics",
      description: "Monthly or quarterly Balance Sheets, Profit & Loss Statements, and Cash Flow summaries to give you clear business insights.",
      icon: <TrendingUp className="text-primary" size={24} />,
    },
    {
      title: "Payroll & WPS Compliance",
      description: "Setting up payroll systems and executing salary transfers fully compliant with the UAE Wages Protection System (WPS).",
      icon: <Users className="text-primary" size={24} />,
    },
    {
      title: "Cloud Accounting Setup",
      description: "Implementation and customization of modern cloud software (Zoho Books, Xero, QuickBooks) for real-time visibility.",
      icon: <Database className="text-primary" size={24} />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.pexels.com/photos/6863177/pexels-photo-6863177.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
          <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />

          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Calculator size={14} /> Comprehensive Compliance
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  Accounting & <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Bookkeeping Services
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                  Maintain clean accounts, ensure absolute compliance with UAE VAT and Corporate Tax, and gain real-time visibility into your business performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#enquire">
                    <Button variant="orange" size="lg" className="w-full sm:w-auto">
                      Get a Free Assessment <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </a>
                  <a href="https://wa.me/971585594087" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} className="text-[#25D366]" /> Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                  Why Bookkeeping Matters in the UAE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  The Foundation of UAE Corporate Growth
                </h2>
                <div className="space-y-5 text-text-main/70 leading-relaxed text-base">
                  <p>
                    With the introduction of **5% VAT** and the recent **9% UAE Corporate Tax**, maintaining accurate and compliant financial records is no longer optional—it is a legal requirement for all operating businesses.
                  </p>
                  <p>
                    At **CAMEO**, we take the hassle out of numbers. We help you transition from spreadsheets to robust cloud accounting, establishing clean ledgers that keep your company fully ready for audits, tax declarations, and commercial expansion.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "100% FTA compliant reports",
                    "Dedicated certified accountant",
                    "Accurate monthly trial balances",
                    "WPS Payroll & bank integration",
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-primary shrink-0" size={18} />
                      <span className="text-navy font-bold text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 translate-x-2 translate-y-2 z-0" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Financial Documents Review"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-24 bg-neutral">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Core Accounting Solutions We Deliver
              </h2>
              <p className="text-text-main/60">
                Customized packages tailored to startups, small businesses, and larger corporate entities in Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((sol, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{sol.title}</h3>
                  <p className="text-text-main/60 text-sm leading-relaxed">{sol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UAE Tax Compliance Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="bg-navy rounded-[40px] text-white p-8 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[90px] -mr-20 -mt-20" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
                <div className="lg:col-span-7">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
                    UAE Tax Compliance Guard
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Stay Protected Against FTA Penalties
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    The Federal Tax Authority (FTA) enforces strict timelines for VAT declarations and Corporate Tax registrations. Missing filings or misclassifying accounts can result in steep administrative penalties. Our certified compliance advisors handle your tax lifecycle end-to-end.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">✓</div>
                      <div>
                        <strong className="text-white">VAT Filing Deadlines:</strong>
                        <p className="text-white/60 text-sm">Timely compilation of inputs, output reconciliation, and prompt quarterly filing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">✓</div>
                      <div>
                        <strong className="text-white">Corporate Tax Registrations:</strong>
                        <p className="text-white/60 text-sm">Ensuring your accounting records are organized properly to apply for corporate tax exemptions or file standard returns.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-white">Need Advisory?</h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                      Let us evaluate your current books and give you a clear roadmap to 100% FTA compliance.
                    </p>
                    <a
                      href="#enquire"
                      className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all text-sm"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Section */}
        <section id="enquire" className="py-24 bg-neutral">
          <div className="container-custom max-w-3xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-10">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
                  Enquire Today
                </span>
                <h2 className="text-3xl font-bold text-navy">
                  Request Accounting Assessment
                </h2>
                <p className="text-text-main/60 mt-2">
                  Tell us about your company, and we will get back to you with custom package pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "success" && (
                  <div className="p-5 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-sm">
                    <strong>Success!</strong> Your request has been sent. Our certified accountants will email you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm">
                    <strong>Submission Error:</strong> {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-xl bg-neutral/50 border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-xl bg-neutral/50 border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy"
                      placeholder="jane@company.ae"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl bg-neutral/50 border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Business Activity / Requirements</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl bg-neutral/50 border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy resize-none"
                    placeholder="E.g. Trading company, needs monthly bookkeeping, VAT returns, and corporate tax advisory..."
                  />
                </div>

                <Button type="submit" variant="orange" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send Request →"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

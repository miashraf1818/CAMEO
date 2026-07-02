"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
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
      service: formData.get("service"),
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

  return (
    <section id="contact" className="py-32 bg-neutral overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Ready to Build a Smarter, Stronger Business?"
              subtitle="Get In Touch"
              align="left"
              className="mb-8"
            />
            <p className="text-text-main/60 mb-10 leading-relaxed">
              Let us help you create a clear roadmap for growth, efficiency, and long-term success.
            </p>

            <form 
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-sm leading-relaxed"
                >
                  <strong>Success!</strong> Your consultation query has been submitted. A confirmation email has been sent to you.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm leading-relaxed"
                >
                  <strong>Submission Error:</strong> {errorMessage}
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy placeholder-gray-400 disabled:opacity-50"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy placeholder-gray-400 disabled:opacity-50"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy placeholder-gray-400 disabled:opacity-50"
                    placeholder="+971 00 000 0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy uppercase tracking-wider">Service Interest</label>
                  <select
                    name="service"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy appearance-none disabled:opacity-50"
                  >
                    <option value="strategy">Business Strategy</option>
                    <option value="operations">Operational Improvement</option>
                    <option value="structuring">Corporate Structuring</option>
                    <option value="financial">Financial Advisory</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="compliance">Compliance & Risk</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-navy uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:outline-none transition-all text-navy placeholder-gray-400 resize-none disabled:opacity-50"
                  placeholder="Tell us about your business and what you need help with..."
                />
              </div>

              <Button type="submit" variant="orange" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Schedule a Consultation"}
              </Button>
            </form>
          </motion.div>

          {/* RIGHT: Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Map Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business Bay Dubai"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="text-white font-bold text-lg">Business Bay, Dubai</div>
                <div className="text-white/70 text-sm flex items-center gap-1">
                  <MapPin size={12} /> Office 702, Metropolis Tower, UAE
                </div>
              </div>
              {/* Google Maps link overlay */}
              <a
                href="https://maps.google.com/?q=Business+Bay+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label="View on Google Maps"
              />
            </div>

            {/* Info Card */}
            <div className="bg-navy rounded-3xl p-8 text-white relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -mr-20 -mt-20" />

              <h3 className="text-2xl font-bold mb-8 relative z-10">Office Information</h3>

              <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Address</div>
                    <p className="text-white/70 text-sm">Office 702, Metropolis Tower, Floor 7, Business Bay, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:contact@cameoconsultancy.services" className="text-white/70 text-sm hover:text-white transition-colors">
                      contact@cameoconsultancy.services
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-primary font-bold text-sm uppercase tracking-wider mb-1">Mobile</div>
                    <a href="tel:+971585594087" className="text-white/70 text-sm hover:text-white transition-colors">
                      +971 58 559 4087
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/971585594087"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 w-full bg-[#25D366] text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-all relative z-10"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/971585594087"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>
    </section>
  );
};

export default Contact;

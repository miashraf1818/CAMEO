import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/cameo-logo.png"
                alt="CAMEO Management Consultancies"
                width={160}
                height={80}
                className="object-contain brightness-110"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Dubai-based management consultancy helping businesses improve performance,
              scale operations, and make confident strategic decisions.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/55">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>Office 702, Metropolis Tower, Floor 7, Business Bay, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-white/55">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:contact@cameoconsultancy.services" className="hover:text-white transition-colors">
                  contact@cameoconsultancy.services
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/55">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+971585594087" className="hover:text-white transition-colors">
                  +971 58 559 4087
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/55 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-white/55 text-sm">
              <li><Link href="#services" className="hover:text-primary transition-colors">Business Strategy</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Operational Improvement</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Corporate Structuring</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Financial Advisory</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Accounting & Bookkeeping</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Compliance & Risk</Link></li>
            </ul>
          </div>

          {/* Legal & Certification */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal & Licensing</h4>
            <ul className="space-y-3 text-white/55 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/35 text-xs">
          <p>© 2026 CAMEO Management Consultancies L.L.C S.O.C | Designed & Developed by Ennkay Solutions</p>
          <p>All rights reserved. Licensed consultancy firm in Dubai, UAE.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePageStore, type PageKey } from "@/lib/page-store";

export function Footer() {
  const { navigateTo, goHome } = usePageStore();

  const handleNav = (page: PageKey | null, hash?: string) => {
    if (page) {
      navigateTo(page);
    } else if (hash) {
      goHome();
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About Us", onClick: () => handleNav("about") },
    { label: "Our Process", onClick: () => handleNav(null, "process") },
    { label: "Why Choose Us", onClick: () => handleNav(null, "why-us") },
    { label: "Testimonials", onClick: () => handleNav(null, "testimonials") },
    { label: "Contact Us", onClick: () => handleNav(null, "contact") },
  ];

  const serviceLinks = [
    { label: "Interior Plastering", onClick: () => handleNav("service-interior") },
    { label: "Exterior Plastering", onClick: () => handleNav("service-exterior") },
    { label: "Skimming & Wall Smoothing", onClick: () => handleNav("service-skimming") },
    { label: "Ceiling Plastering", onClick: () => handleNav("service-ceiling") },
    { label: "Crack Repairs", onClick: () => handleNav("service-repair") },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={goHome} className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent-orange text-white flex items-center justify-center font-heading font-extrabold text-lg">
                JP
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">
                  JP Plastering
                </span>
                <span className="text-xs leading-tight text-white/50">
                  Premium Finishes
                </span>
              </div>
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Expert plastering, skimming, and wall finishing services for homes
              and businesses in Orange County. Quality work, clean finish,
              guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-orange hover:border-accent-orange transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.onClick}
                    className="text-white/50 text-sm hover:text-accent-orange transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.onClick}
                    className="text-white/50 text-sm hover:text-accent-orange transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  Orange County, CA
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+17145551234"
                  className="text-white/50 text-sm hover:text-accent-orange transition-colors"
                >
                  (714) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@jpplastering.com"
                  className="text-white/50 text-sm hover:text-accent-orange transition-colors"
                >
                  info@jpplastering.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-white/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} JP Plastering. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-sm hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

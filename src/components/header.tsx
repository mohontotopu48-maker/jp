"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown, ArrowLeft } from "lucide-react";
import { usePageStore, type PageKey } from "@/lib/page-store";

const navLinks = [
  { label: "Services", page: null, hasDropdown: true },
  { label: "About", page: "about" as PageKey },
  { label: "Contact", hash: "contact" },
];

const servicePages = [
  { label: "Interior Plastering", page: "service-interior" as PageKey },
  { label: "Exterior Plastering", page: "service-exterior" as PageKey },
  { label: "Skimming & Wall Smoothing", page: "service-skimming" as PageKey },
  { label: "Ceiling Plastering", page: "service-ceiling" as PageKey },
  { label: "Crack Repairs", page: "service-repair" as PageKey },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { currentPage, navigateTo, goHome } = usePageStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomePage = currentPage === "home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (page: PageKey | null, hash?: string) => {
    if (hash && isHomePage) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (page) {
      navigateTo(page);
    } else if (hash) {
      goHome();
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const getTextColor = (hover: boolean = false) => {
    if (isHomePage && !scrolled) {
      return hover ? "text-white hover:text-white hover:bg-white/10" : "text-white/90 hover:text-white";
    }
    return hover ? "text-charcoal hover:bg-soft-bg hover:text-accent-orange" : "text-charcoal/80 hover:text-charcoal";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={goHome}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-orange text-white flex items-center justify-center font-heading font-extrabold text-lg shadow-md">
              JP
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                  isHomePage && !scrolled ? "text-white" : "text-charcoal"
                }`}
              >
                JP Plastering
              </span>
              <span
                className={`text-xs leading-tight transition-colors duration-300 ${
                  isHomePage && !scrolled
                    ? "text-white/70"
                    : "text-concrete"
                }`}
              >
                Premium Finishes
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Back button on sub-pages */}
            {!isHomePage && (
              <button
                onClick={goHome}
                className="px-3 py-2 rounded-lg text-sm font-medium text-concrete hover:text-accent-orange hover:bg-soft-bg transition-all duration-300 flex items-center gap-1.5"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Home
              </button>
            )}

            {/* Services with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${getTextColor(true)}`}
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {servicePages.map((service) => (
                    <button
                      key={service.page}
                      onClick={() => handleNavClick(service.page)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        currentPage === service.page
                          ? "text-accent-orange bg-accent-orange/5 font-medium"
                          : "text-charcoal hover:bg-soft-bg hover:text-accent-orange"
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                  <div className="border-t border-border mt-1 pt-1">
                    <button
                      onClick={() => {
                        goHome();
                        setTimeout(() => {
                          const el = document.getElementById("services");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                        setServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-concrete hover:text-accent-orange hover:bg-soft-bg transition-colors"
                    >
                      View All Services
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <button
              onClick={() => handleNavClick("about")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${getTextColor()} ${
                currentPage === "about" ? "!text-accent-orange font-semibold" : ""
              }`}
            >
              About
            </button>

            {/* Testimonials (home only) */}
            {isHomePage && (
              <button
                onClick={() => handleNavClick(null, "testimonials")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${getTextColor()}`}
              >
                Testimonials
              </button>
            )}

            {/* Contact */}
            <button
              onClick={() => handleNavClick(null, "contact")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${getTextColor()}`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {!isHomePage && (
              <button
                onClick={goHome}
                className="px-3 py-2 rounded-lg text-sm font-medium text-concrete hover:text-accent-orange hover:bg-soft-bg transition-all duration-300 flex items-center gap-1.5"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Home
              </button>
            )}
            <a href="tel:+17145551234">
              <Button
                variant="ghost"
                className={`gap-2 transition-colors duration-300 ${
                  isHomePage && !scrolled
                    ? "text-white hover:text-white"
                    : "text-charcoal hover:text-accent-orange"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(714) 555-1234</span>
              </Button>
            </a>
            <Button
              onClick={() => handleNavClick(null, "contact")}
              className="orange-gradient text-white font-semibold px-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
            >
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={
                  isHomePage && !scrolled ? "text-white" : "text-charcoal"
                }
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-accent-orange text-white flex items-center justify-center font-heading font-extrabold text-lg">
                      JP
                    </div>
                    <span className="font-heading font-bold text-lg text-charcoal">
                      JP Plastering
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col p-4 gap-0.5 flex-1 overflow-y-auto">
                  {!isHomePage && (
                    <button
                      onClick={goHome}
                      className="px-4 py-3 rounded-lg text-charcoal font-medium hover:bg-soft-bg hover:text-accent-orange transition-colors flex items-center gap-2 text-left"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Home
                    </button>
                  )}
                  <button
                    onClick={() => handleNavClick("about")}
                    className={`px-4 py-3 rounded-lg font-medium hover:bg-soft-bg transition-colors text-left ${
                      currentPage === "about"
                        ? "text-accent-orange bg-accent-orange/5"
                        : "text-charcoal hover:text-accent-orange"
                    }`}
                  >
                    About Us
                  </button>

                  <div className="px-4 pt-3 pb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-concrete">
                      Services
                    </span>
                  </div>
                  {servicePages.map((service) => (
                    <button
                      key={service.page}
                      onClick={() => handleNavClick(service.page)}
                      className={`px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-soft-bg transition-colors text-left ${
                        currentPage === service.page
                          ? "text-accent-orange bg-accent-orange/5"
                          : "text-charcoal/80 hover:text-accent-orange"
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}

                  {isHomePage && (
                    <>
                      <div className="px-4 pt-3 pb-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-concrete">
                          Quick Links
                        </span>
                      </div>
                      <button
                        onClick={() => handleNavClick(null, "why-us")}
                        className="px-6 py-2.5 rounded-lg text-sm font-medium text-charcoal/80 hover:bg-soft-bg hover:text-accent-orange transition-colors text-left"
                      >
                        Why Choose Us
                      </button>
                      <button
                        onClick={() => handleNavClick(null, "testimonials")}
                        className="px-6 py-2.5 rounded-lg text-sm font-medium text-charcoal/80 hover:bg-soft-bg hover:text-accent-orange transition-colors text-left"
                      >
                        Testimonials
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handleNavClick(null, "contact")}
                    className="px-4 py-3 rounded-lg font-medium text-charcoal hover:bg-soft-bg hover:text-accent-orange transition-colors text-left mt-2"
                  >
                    Contact Us
                  </button>
                </nav>
                <div className="p-4 border-t border-border space-y-3">
                  <a href="tel:+17145551234" className="block">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-charcoal text-charcoal font-semibold"
                    >
                      <Phone className="h-4 w-4" />
                      (714) 555-1234
                    </Button>
                  </a>
                  <Button
                    onClick={() => handleNavClick(null, "contact")}
                    className="w-full orange-gradient text-white font-semibold border-0"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-extrabold text-lg transition-all duration-300 ${
                scrolled
                  ? "bg-accent-orange text-white shadow-md"
                  : "bg-accent-orange text-white"
              }`}
            >
              JP
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-lg leading-tight transition-colors duration-300 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                JP Plastering
              </span>
              <span
                className={`text-xs leading-tight transition-colors duration-300 ${
                  scrolled ? "text-concrete" : "text-white/70"
                }`}
              >
                Premium Finishes
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                  scrolled
                    ? "text-charcoal hover:bg-soft-bg hover:text-accent-orange"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="tel:+17145551234">
              <Button
                variant="ghost"
                className={`gap-2 transition-colors duration-300 ${
                  scrolled
                    ? "text-charcoal hover:text-accent-orange"
                    : "text-white hover:text-white"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(714) 555-1234</span>
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="orange-gradient text-white font-semibold px-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0">
                Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-charcoal" : "text-white"}
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
                <nav className="flex flex-col p-6 gap-1 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-lg text-charcoal font-medium hover:bg-soft-bg hover:text-accent-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-border space-y-3">
                  <Link href="tel:+17145551234" className="block">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-charcoal text-charcoal font-semibold"
                    >
                      <Phone className="h-4 w-4" />
                      (714) 555-1234
                    </Button>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block"
                  >
                    <Button className="w-full orange-gradient text-white font-semibold border-0">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

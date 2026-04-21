"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Building2,
  Paintbrush,
  ArrowUpRight,
  Hammer,
} from "lucide-react";
import Image from "next/image";
import { usePageStore, type PageKey } from "@/lib/page-store";

const services = [
  {
    icon: Home,
    title: "Interior Plastering",
    description:
      "Transform your interiors with perfectly smooth, durable wall finishes ready for painting or decorating.",
    image: "/images/interior-plastering.png",
    features: ["Perfect smooth finish", "Ready for painting", "Strong & durable walls"],
    page: "service-interior" as PageKey,
  },
  {
    icon: Building2,
    title: "Exterior Plastering",
    description:
      "Weather-resistant, long-lasting exterior plastering that protects and beautifies your property's facade.",
    image: "/images/exterior-plastering.png",
    features: ["Weather protection", "Curb appeal boost", "Long-lasting finish"],
    page: "service-exterior" as PageKey,
  },
  {
    icon: Paintbrush,
    title: "Skimming & Wall Smoothing",
    description:
      "Expert skimming for ultra-smooth, glass-like surfaces that make any room look premium and polished.",
    image: "/images/skimming.png",
    features: ["Glass-like surface", "Premium appearance", "Expert application"],
    page: "service-skimming" as PageKey,
  },
  {
    icon: ArrowUpRight,
    title: "Ceiling Plastering",
    description:
      "Flawless ceiling finishes that eliminate imperfections and give your rooms a complete, refined look.",
    image: "/images/ceiling.png",
    features: ["Seamless finish", "No visible joints", "Professional results"],
    page: "service-ceiling" as PageKey,
  },
  {
    icon: Hammer,
    title: "Crack Repairs & Restoration",
    description:
      "Expert repair of cracks, holes, and damaged areas with color-matched, seamless restoration work.",
    image: "/images/crack-repair.png",
    features: ["Seamless repair", "Color matching", "Structural integrity"],
    page: "service-repair" as PageKey,
  },
];

export function ServicesSection() {
  const { navigateTo } = usePageStore();

  return (
    <section id="services" className="relative py-20 md:py-28 bg-soft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Professional Plastering Services
          </h2>
          <p className="text-concrete text-lg leading-relaxed">
            From interior walls to exterior facades, we offer comprehensive
            plastering solutions for every surface in your home or business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border hover:border-accent-orange/30 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              onClick={() => navigateTo(service.page)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2.5 shadow-md">
                  <service.icon className="h-5 w-5 text-accent-orange" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-4 w-4 text-accent-orange" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-concrete text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent-orange flex-shrink-0" />
                      <span className="text-charcoal/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {services.slice(3).map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border hover:border-accent-orange/30 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              onClick={() => navigateTo(service.page)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2.5 shadow-md">
                  <service.icon className="h-5 w-5 text-accent-orange" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-4 w-4 text-accent-orange" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-concrete text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent-orange flex-shrink-0" />
                      <span className="text-charcoal/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

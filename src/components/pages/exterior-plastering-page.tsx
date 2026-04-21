"use client";

import { ServicePage } from "@/components/service-page";

const data = {
  title: "Exterior Plastering Services",
  subtitle:
    "Protect and beautify your property with professional exterior plastering that stands up to the elements and boosts curb appeal.",
  heroImage: "/images/exterior-plastering.png",
  problem:
    "Cracked, faded, or damaged exterior plaster doesn't just look bad — it exposes your property to moisture, pests, and structural damage. Weather exposure, poor previous work, and aging materials can leave your building's exterior looking worn and vulnerable, decreasing both curb appeal and property value.",
  solution:
    "Our exterior plastering services deliver weather-resistant, long-lasting finishes that protect your investment while dramatically improving your property's appearance. We use premium stucco and render systems designed for Southern California's climate.",
  benefits: [
    {
      title: "Weather Protection",
      description:
        "Durable finishes that shield your walls from rain, UV rays, wind, and temperature fluctuations year-round.",
    },
    {
      title: "Boosted Curb Appeal",
      description:
        "A fresh, professional exterior finish transforms the look of your entire property and makes a lasting impression.",
    },
    {
      title: "Increased Property Value",
      description:
        "Quality exterior plastering is one of the highest-ROI home improvements, adding real market value.",
    },
    {
      title: "Low Maintenance",
      description:
        "Our professional finishes are designed to resist cracking, fading, and wear — reducing upkeep for years.",
    },
    {
      title: "Energy Efficiency",
      description:
        "Proper exterior plastering adds insulation value, helping regulate indoor temperatures and reduce energy bills.",
    },
    {
      title: "Custom Textures & Colors",
      description:
        "Choose from a range of finishes including smooth, textured, and decorative styles to match your vision.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Exterior Inspection",
      description:
        "We assess the current condition, identify damage, check structural integrity, and plan the full scope of work.",
    },
    {
      step: "02",
      title: "Surface Preparation",
      description:
        "Old material is removed, surfaces are cleaned, repaired, and treated with appropriate bonding agents for optimal adhesion.",
    },
    {
      step: "03",
      title: "Coat Application",
      description:
        "Multiple layers of premium plaster/stucco are applied and finished to your chosen texture and specification.",
    },
    {
      step: "04",
      title: "Sealing & Inspection",
      description:
        "A protective sealant is applied, and the entire surface is inspected to ensure quality and durability.",
    },
  ],
  extraContent:
    "JP Plastering specializes in exterior plastering for residential and commercial properties throughout Orange County. We understand the unique challenges of Southern California's climate and use materials and techniques specifically engineered for long-lasting performance in our environment. From small repair jobs to complete exterior renovations, we bring the same level of expertise and attention to detail to every project.",
  faqs: [
    {
      question: "What's the difference between stucco and render?",
      answer:
        "Stucco is a cement-based exterior finish common in California. Render is a similar coating system used to protect and decorate exterior walls. We work with both systems and will recommend the best option for your property.",
    },
    {
      question: "How long does exterior plastering last?",
      answer:
        "Professional exterior plastering typically lasts 20-30 years with proper maintenance. Our work uses premium materials and techniques that maximize longevity.",
    },
    {
      question: "Can exterior plastering be done in any season?",
      answer:
        "In Orange County, we can work year-round due to our mild climate. However, we avoid application during heavy rain or extreme heat to ensure optimal curing conditions.",
    },
    {
      question: "Do you match existing exterior textures?",
      answer:
        "Yes, we can match existing textures for repairs or partial renovations. Our team is skilled in replicating smooth, dash, float, and other common exterior finishes.",
    },
  ],
};

export function ExteriorPlasteringPage() {
  return <ServicePage {...data} />;
}

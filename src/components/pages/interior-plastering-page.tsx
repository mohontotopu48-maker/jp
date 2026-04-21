"use client";

import { ServicePage } from "@/components/service-page";

const data = {
  title: "Interior Plastering Services",
  subtitle:
    "Transform your interiors with perfectly smooth, durable wall finishes that elevate every room in your home or office.",
  heroImage: "/images/interior-plastering.png",
  problem:
    "Uneven walls, cracks, and poor finishes can ruin the look of your home or office. Whether it's a new build, renovation, or refresh — subpar walls drag down the entire space. Patchy DIY attempts and low-quality contractor work only make things worse, leaving you with surfaces that look uneven under light and cause paint to peel prematurely.",
  solution:
    "Our expert plastering delivers smooth, clean, and long-lasting surfaces. Using premium materials and time-tested techniques, we prepare, prime, and finish your walls to perfection — creating a flawless canvas for paint, wallpaper, or any decorative treatment you desire.",
  benefits: [
    {
      title: "Perfect Smooth Finish",
      description:
        "Glass-like surfaces that look stunning in any light, creating a premium feel throughout your space.",
    },
    {
      title: "Ready for Painting",
      description:
        "Properly prepared and sealed surfaces that accept paint evenly for a lasting, professional result.",
    },
    {
      title: "Strong & Durable Walls",
      description:
        "Multi-coat application that builds structural integrity, preventing future cracks and damage.",
    },
    {
      title: "Professional Appearance",
      description:
        "The kind of flawless finish that increases your property value and makes visitors take notice.",
    },
    {
      title: "Improved Insulation",
      description:
        "Quality plastering adds a thermal layer that helps regulate temperature and reduce energy costs.",
    },
    {
      title: "Moisture Resistance",
      description:
        "Properly applied plaster creates a barrier against moisture, protecting your walls from dampness.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Surface Assessment",
      description:
        "We inspect the walls, identify problem areas, remove old coverings, and prepare the surface for plastering.",
    },
    {
      step: "02",
      title: "Base Coat Application",
      description:
        "A high-quality base coat is applied to build strength and create an even foundation for the finish layer.",
    },
    {
      step: "03",
      title: "Smooth Finishing Coat",
      description:
        "Our skilled plasterers apply the finishing layer with precision trowel work, achieving a perfectly smooth surface.",
    },
    {
      step: "04",
      title: "Quality Inspection",
      description:
        "Every surface is thoroughly inspected for consistency, smoothness, and finish quality before we sign off.",
    },
  ],
  extraContent:
    "At JP Plastering, we combine traditional craftsmanship with modern materials and techniques. Our team has over 15 years of experience delivering interior plastering projects for homes, offices, retail spaces, and commercial buildings across Orange County. We use only premium-grade plaster, maintain a clean work environment, and guarantee satisfaction with every project — no matter the size.",
  faqs: [
    {
      question: "How long does interior plastering take?",
      answer:
        "Most standard rooms can be completed in 2-3 days. Larger spaces or complex projects may take 4-5 days. We'll provide a precise timeline during your free consultation.",
    },
    {
      question: "Do I need to remove furniture from the room?",
      answer:
        "We recommend removing furniture or covering it completely. Our team uses dust sheets and protective coverings, but clearing the space ensures the best results and fastest completion.",
    },
    {
      question: "How soon can I paint after plastering?",
      answer:
        "We recommend waiting 5-7 days for the plaster to fully cure before painting. This ensures the best paint adhesion and a flawless final finish.",
    },
    {
      question: "What types of interior plastering do you offer?",
      answer:
        "We offer skimming, multi-coat plastering, wet plastering, dry lining, and decorative plaster finishes. Each project is assessed individually to recommend the best approach.",
    },
  ],
};

export function InteriorPlasteringPage() {
  return <ServicePage {...data} />;
}

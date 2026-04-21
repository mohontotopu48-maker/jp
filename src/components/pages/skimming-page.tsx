"use client";

import { ServicePage } from "@/components/service-page";

const data = {
  title: "Skimming & Wall Smoothing",
  subtitle:
    "Achieve ultra-smooth, glass-like wall surfaces with our expert skimming service — the foundation for any premium interior finish.",
  heroImage: "/images/skimming.png",
  problem:
    "Walls that look fine under normal light can reveal every bump, ridge, and imperfection when you turn on overhead lights or try to apply a fresh coat of paint. Uneven plasterboard joints, old artex textures, and previously poorly finished surfaces all prevent you from getting that clean, premium look you want.",
  solution:
    "Skimming is the art of applying a thin, smooth layer of finishing plaster over existing walls to create a perfectly flat, seamless surface. Our skilled plasterers deliver glass-like finishes that transform any room — the ideal preparation for painting, wallpapering, or decorative treatments.",
  benefits: [
    {
      title: "Glass-Like Surface",
      description:
        "Achieve a flawlessly smooth, mirror-like finish that makes any room look professionally designed.",
    },
    {
      title: "Perfect Paint Results",
      description:
        "Smooth walls mean paint goes on evenly and looks incredible — no more patchy or streaky results.",
    },
    {
      title: "Covers Old Textures",
      description:
        "Effectively covers artex, textured walls, and uneven surfaces with a clean, modern flat finish.",
    },
    {
      title: "Cost-Effective Refresh",
      description:
        "Skimming is often more affordable than full re-plastering while delivering a comparable premium result.",
    },
    {
      title: "Fast Turnaround",
      description:
        "Most rooms can be skimmed in 1-2 days, meaning minimal disruption to your daily life.",
    },
    {
      title: "Versatile Finish",
      description:
        "Works perfectly as preparation for paint, wallpaper, tiles, or any wall covering you choose.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Wall Assessment",
      description:
        "We evaluate the existing surface condition, identify high and low spots, and determine the best approach.",
    },
    {
      step: "02",
      title: "Preparation & Priming",
      description:
        "Walls are cleaned, any loose material is removed, and a PVA bonding agent is applied for optimal plaster adhesion.",
    },
    {
      step: "03",
      title: "Skim Coat Application",
      description:
        "Two thin coats of finishing plaster are expertly applied and troweled to create a perfectly smooth, level surface.",
    },
    {
      step: "04",
      title: "Final Polish",
      description:
        "The surface is polished and inspected under lighting to ensure a flawless, blemish-free finish.",
    },
  ],
  extraContent:
    "Skimming is where true craftsmanship shows. At JP Plastering, our finishers are trained to the highest standards and take immense pride in delivering walls that are genuinely flawless. We use top-tier multi-finish plaster and apply it with the precision and patience that transforms ordinary walls into extraordinary surfaces. Whether it's a single feature wall or an entire property, our skimming work sets the standard in Orange County.",
  faqs: [
    {
      question: "What's the difference between skimming and plastering?",
      answer:
        "Skimming is a thin coat (typically 2-3mm) of finishing plaster applied over existing walls to create a smooth surface. Full plastering involves building up multiple thicker coats. Skimming is ideal when the underlying wall is sound but the surface needs smoothing.",
    },
    {
      question: "Can you skim over artex or textured walls?",
      answer:
        "Yes, we can skim over most textured surfaces including artex. Depending on the depth of texture, we may apply a bonding coat first to create a suitable base for the skim finish.",
    },
    {
      question: "How much mess does skimming create?",
      answer:
        "We take pride in our clean work practices. While some dust is inevitable, we use dust sheets, protect your floors and furniture, and clean up thoroughly after every job.",
    },
    {
      question: "Is skimming suitable for ceilings too?",
      answer:
        "Yes! Skimming is an excellent option for ceilings that have cracks, uneven joints, or old textures. See our Ceiling Plastering service for more details.",
    },
  ],
};

export function SkimmingPage() {
  return <ServicePage {...data} />;
}

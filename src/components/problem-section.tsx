"use client";

import { AlertTriangle, Droplets, Square, Layers } from "lucide-react";

const problems = [
  {
    icon: Square,
    title: "Uneven Walls",
    description:
      "Rough, bumpy surfaces that make your rooms look unfinished and unprofessional.",
  },
  {
    icon: AlertTriangle,
    title: "Cracks & Damage",
    description:
      "Worsening cracks and damaged plaster that devalue your property and risk further structural issues.",
  },
  {
    icon: Layers,
    title: "Poor Previous Work",
    description:
      "DIY or low-quality jobs that leave you with patchy, uneven results you can't unsee.",
  },
  {
    icon: Droplets,
    title: "Paint Won't Stick",
    description:
      "Improperly prepared walls cause paint to peel, bubble, and look terrible within months.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
            The Problem
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Say Goodbye to Cracks, Uneven Surfaces &amp; Poor Finishes
          </h2>
          <p className="text-concrete text-lg leading-relaxed">
            Uneven walls, cracks, and poor finishes can completely ruin the look
            of your home or office. Don&apos;t let bad plastering hold your space back.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-6 rounded-2xl border border-border hover:border-accent-orange/30 bg-soft-bg hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-white rounded-full p-3 shadow-sm border border-border group-hover:border-accent-orange/30 group-hover:shadow-md transition-all duration-300">
                <problem.icon className="h-6 w-6 text-accent-orange" />
              </div>
              <div className="pt-10">
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  {problem.title}
                </h3>
                <p className="text-concrete text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-accent-orange/0 group-hover:bg-accent-orange/80 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ClipboardList, PaintBucket, Layers, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Surface Preparation",
    description:
      "We thoroughly inspect and prepare the surface, removing old plaster, filling cracks, and ensuring a clean, solid foundation.",
  },
  {
    icon: PaintBucket,
    step: "02",
    title: "Base Coat Application",
    description:
      "A high-quality base coat is applied evenly across the surface, building strength and creating the ideal underlayer for finishing.",
  },
  {
    icon: Layers,
    step: "03",
    title: "Smooth Finishing Layer",
    description:
      "Our experts apply the finishing coat with precision, achieving that perfectly smooth, glass-like surface you deserve.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Final Inspection",
    description:
      "Every project undergoes a thorough quality check to ensure flawless results before we consider the job complete.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      {/* Background texture */}
      <div className="texture-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Our Process
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            How We Deliver Perfect Results
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Our proven 4-step process ensures every project is completed with
            precision, efficiency, and the highest quality standards.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative"
            >
              {/* Connector line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t border-dashed border-white/20" />
              )}

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent-orange/30 transition-all duration-300 hover:-translate-y-1">
                {/* Step number + Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-accent-orange/10 flex items-center justify-center group-hover:bg-accent-orange/20 transition-colors duration-300">
                    <step.icon className="h-6 w-6 text-accent-orange" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-white/20 group-hover:text-accent-orange/30 transition-colors duration-300">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

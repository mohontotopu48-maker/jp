"use client";

import {
  Award,
  Clock,
  DollarSign,
  Eye,
  Sparkles,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Specialists",
    description:
      "Our team brings years of hands-on plastering expertise to every project, big or small.",
  },
  {
    icon: Eye,
    title: "High Attention to Detail",
    description:
      "We obsess over every corner, edge, and surface — because perfect is the standard.",
  },
  {
    icon: Sparkles,
    title: "Clean & Efficient Work",
    description:
      "We treat your space with respect. Minimal mess, maximum efficiency, spotless results.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. You get a clear, honest quote before we start any work.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description:
      "We respect your schedule and deliver results within the agreed timeline, every time.",
  },
  {
    icon: Users,
    title: "Trusted by Local Clients",
    description:
      "Hundreds of satisfied homeowners and businesses across Orange County rely on us.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-soft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Why JP Plastering?
          </h2>
          <p className="text-concrete text-lg leading-relaxed">
            We combine craftsmanship with modern techniques for premium results.
            Here&apos;s what sets us apart from the rest.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-accent-orange/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-xl bg-accent-orange/10 flex items-center justify-center mb-5 group-hover:bg-accent-orange/20 transition-colors duration-300">
                <reason.icon className="h-7 w-7 text-accent-orange" />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                {reason.title}
              </h3>
              <p className="text-concrete text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl border border-border p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Done" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "24h", label: "Quote Response" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-accent-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-concrete text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

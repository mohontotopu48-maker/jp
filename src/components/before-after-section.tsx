"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    title: "Smooth and Flawless Finish",
    description: "Perfectly even surfaces that look stunning in any light.",
  },
  {
    title: "Increased Durability",
    description: "Strong, long-lasting walls that withstand daily wear and tear.",
  },
  {
    title: "Better Paint Results",
    description: "Properly prepared surfaces mean paint goes on smoother and lasts longer.",
  },
  {
    title: "Long-Lasting Quality",
    description: "Professional-grade materials and techniques for results that endure.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/before-after.png"
                alt="Before and after plastering transformation"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-5 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full orange-gradient flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl text-charcoal">
                    500+
                  </div>
                  <div className="text-concrete text-xs">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-accent-orange/20 -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Before &amp; After
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              See the Transformation With Your Own Eyes
            </h2>
            <p className="text-concrete text-lg leading-relaxed mb-8">
              The difference professional plastering makes is night and day. From
              cracked, uneven walls to flawlessly smooth surfaces — our work
              speaks for itself.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="h-6 w-6 rounded-full bg-accent-orange/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-accent-orange" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal text-sm">
                      {benefit.title}
                    </h4>
                    <p className="text-concrete text-xs leading-relaxed mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#contact">
              <button className="group inline-flex items-center gap-2 text-accent-orange font-semibold hover:gap-3 transition-all duration-300">
                Request Your Transformation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

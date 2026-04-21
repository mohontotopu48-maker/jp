"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  Clock,
  Shield,
  ClipboardList,
  PaintBucket,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { usePageStore } from "@/lib/page-store";

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  problem: string;
  solution: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  extraContent?: string;
  faqs?: { question: string; answer: string }[];
}

const processIcons = [ClipboardList, PaintBucket, Layers, ShieldCheck];

export function ServicePage({
  title,
  subtitle,
  heroImage,
  problem,
  solution,
  benefits,
  process,
  extraContent,
  faqs,
}: ServicePageProps) {
  const { goHome } = usePageStore();

  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-charcoal overflow-hidden">
        <div className="texture-overlay absolute inset-0" />
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={goHome}
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent-orange transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
          <Badge
            variant="outline"
            className="border-accent-orange/40 text-accent-orange bg-accent-orange/10 mb-4 px-4 py-1.5 text-sm font-medium"
          >
            Our Services
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#service-contact">
              <Button className="orange-gradient text-white font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 gap-2">
                Request Your Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+17145551234">
              <Button
                variant="outline"
                className="border-white/30 text-white font-semibold text-lg px-8 py-6 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm gap-2"
              >
                <Phone className="h-5 w-5" />
                (714) 555-1234
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
                The Challenge
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
                The Problem
              </h2>
              <p className="text-concrete text-lg leading-relaxed mb-8">
                {problem}
              </p>
              <div className="bg-soft-bg rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal mb-1">
                      Our Solution
                    </h3>
                    <p className="text-concrete text-sm leading-relaxed">
                      {solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImage}
                  alt={title}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl border-2 border-accent-orange/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Benefits
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Why This Service Matters
            </h2>
            <p className="text-concrete text-lg">
              Professional results that make a lasting difference to your space.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 bg-white rounded-xl p-6 border border-border hover:border-accent-orange/30 hover:shadow-md transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-charcoal mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-concrete text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="texture-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Our Process
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              How We Work
            </h2>
            <p className="text-white/60 text-lg">
              A proven process that guarantees quality results every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const Icon = processIcons[index] || ClipboardList;
              return (
                <div
                  key={step.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent-orange/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-accent-orange/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-orange" />
                    </div>
                    <span className="font-heading font-extrabold text-3xl text-white/20">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Extra Content */}
      {extraContent && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Why Choose JP Plastering
              </h2>
            </div>
            <p className="text-concrete text-lg leading-relaxed text-center">
              {extraContent}
            </p>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-soft-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
                FAQ
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-xl border border-border overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-soft-bg transition-colors">
                    <h3 className="font-heading font-semibold text-charcoal pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-accent-orange font-bold text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-concrete text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section id="service-contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-concrete text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. We&apos;ll assess
            your project and provide a detailed proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" onClick={() => goHome()}>
              <Button className="orange-gradient text-white font-bold px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 gap-2 text-lg">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+17145551234">
              <Button
                variant="outline"
                size="lg"
                className="border-charcoal text-charcoal font-semibold px-8 py-6 gap-2 hover:bg-soft-bg"
              >
                <Phone className="h-5 w-5" />
                Call (714) 555-1234
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-concrete">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent-orange" />
              24h Quote Response
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent-orange" />
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

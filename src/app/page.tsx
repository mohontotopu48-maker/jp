"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ProcessSection } from "@/components/process-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <BeforeAfterSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

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
import { usePageStore } from "@/lib/page-store";
import { InteriorPlasteringPage } from "@/components/pages/interior-plastering-page";
import { ExteriorPlasteringPage } from "@/components/pages/exterior-plastering-page";
import { SkimmingPage } from "@/components/pages/skimming-page";
import { CeilingPlasteringPage } from "@/components/pages/ceiling-plastering-page";
import { CrackRepairPage } from "@/components/pages/crack-repair-page";
import { AboutPage } from "@/components/pages/about-page";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function ServiceRouter() {
  const { currentPage } = usePageStore();

  switch (currentPage) {
    case "service-interior":
      return <InteriorPlasteringPage />;
    case "service-exterior":
      return <ExteriorPlasteringPage />;
    case "service-skimming":
      return <SkimmingPage />;
    case "service-ceiling":
      return <CeilingPlasteringPage />;
    case "service-repair":
      return <CrackRepairPage />;
    case "about":
      return <AboutPage />;
    default:
      return <HomePage />;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ServiceRouter />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

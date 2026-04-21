"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  Award,
  Users,
  Clock,
  Target,
  Heart,
  Shield,
  Hammer,
  Lightbulb,
  Star,
} from "lucide-react";
import Image from "next/image";
import { usePageStore } from "@/lib/page-store";

const values = [
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "We treat every surface like a canvas. Precision, patience, and pride in our work define everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest pricing, transparent communication, and a genuine commitment to doing the right thing for every client.",
  },
  {
    icon: Heart,
    title: "Respect",
    description:
      "We treat your home or business like our own — protecting your space and leaving it cleaner than we found it.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Good enough is never enough. We pursue flawless results on every project, no matter the size or scope.",
  },
];

const milestones = [
  { year: "2009", event: "JP Plastering founded in Orange County" },
  { year: "2013", event: "Expanded to commercial and multi-unit projects" },
  { year: "2016", event: "Reached 200 completed projects milestone" },
  { year: "2019", event: "Team grew to 12 skilled plastering specialists" },
  { year: "2022", event: "Introduced modern eco-friendly plaster systems" },
  { year: "2025", event: "500+ projects completed, trusted by hundreds of clients" },
];

const team = [
  {
    name: "James P.",
    role: "Founder & Master Plasterer",
    initials: "JP",
    bio: "Over 20 years of plastering experience. Started JP Plastering to bring premium craftsmanship to Orange County homes.",
  },
  {
    name: "Carlos M.",
    role: "Senior Plasterer",
    initials: "CM",
    bio: "Specialist in exterior stucco and decorative finishes. 15+ years in the trade.",
  },
  {
    name: "Sarah K.",
    role: "Operations Manager",
    initials: "SK",
    bio: "Ensures every project runs smoothly from quote to completion. Client satisfaction is her priority.",
  },
  {
    name: "David L.",
    role: "Lead Finisher",
    initials: "DL",
    bio: "Our skimming and finishing specialist. Known for achieving truly flawless wall surfaces.",
  },
];

export function AboutPage() {
  const { goHome } = usePageStore();

  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-charcoal overflow-hidden">
        <div className="texture-overlay absolute inset-0" />
        <div className="absolute inset-0">
          <Image
            src="/images/team-photo.png"
            alt="JP Plastering team"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
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
            About Us
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            The Team Behind
            <br />
            <span className="text-accent-orange">Perfect Walls</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            For over 15 years, JP Plastering has been Orange County&apos;s trusted
            choice for premium plastering services. Here&apos;s our story.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
                Built on Craftsmanship, Driven by Quality
              </h2>
              <div className="space-y-4 text-concrete leading-relaxed">
                <p>
                  JP Plastering was founded with a simple belief: every wall
                  deserves a perfect finish. What started as a one-man operation
                  has grown into one of Orange County&apos;s most trusted
                  plastering companies — but our commitment to quality hasn&apos;t
                  changed one bit.
                </p>
                <p>
                  We saw too many homeowners disappointed by sloppy work,
                  hidden costs, and contractors who cut corners. We knew there
                  had to be a better way — one built on genuine craftsmanship,
                  transparent pricing, and respect for every client&apos;s home
                  and time.
                </p>
                <p>
                  Today, our team of skilled specialists delivers the same
                  level of care and precision to every project — whether it&apos;s
                  a small crack repair or a full commercial renovation. We use
                  premium materials, proven techniques, and an unwavering
                  attention to detail that our clients have come to rely on.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-photo.png"
                  alt="JP Plastering team at work"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-xl shadow-xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full orange-gradient flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-charcoal">
                      15+
                    </div>
                    <div className="text-concrete text-xs">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-xl shadow-xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full orange-gradient flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-charcoal">
                      12
                    </div>
                    <div className="text-concrete text-xs">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              What We Stand For
            </h2>
            <p className="text-concrete text-lg">
              These core values guide every project we take on and every
              interaction we have.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 border border-border hover:border-accent-orange/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-accent-orange/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-7 w-7 text-accent-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-concrete text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">
              Growing With Our Community
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex gap-6 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent-orange border-4 border-white shadow-sm mt-6" />
                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12"
                    }`}
                  >
                    <span className="font-heading font-extrabold text-accent-orange text-lg">
                      {milestone.year}
                    </span>
                    <p className="text-charcoal font-medium mt-1">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
              Our Team
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Meet the Experts
            </h2>
            <p className="text-concrete text-lg">
              Skilled professionals who take pride in every surface they finish.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                className="border-border hover:border-accent-orange/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full orange-gradient flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="font-heading font-bold text-2xl text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-charcoal">
                    {member.name}
                  </h3>
                  <p className="text-accent-orange text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-concrete text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="texture-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Why Homeowners & Businesses Choose Us
            </h2>
            <p className="text-white/60 text-lg">
              We&apos;re not just plasterers — we&apos;re your partners in creating spaces
              you&apos;re proud of.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Hammer,
                title: "Premium Materials",
                desc: "We use only the highest-grade plaster and supplies from trusted manufacturers.",
              },
              {
                icon: Lightbulb,
                title: "Modern Techniques",
                desc: "We combine time-tested methods with the latest materials and technology for superior results.",
              },
              {
                icon: Shield,
                title: "Fully Insured",
                desc: "Complete insurance coverage protects you, your property, and our team on every project.",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                desc: "We respect your schedule and complete projects within the agreed timeline — every time.",
              },
              {
                icon: Star,
                title: "Guaranteed Results",
                desc: "We stand behind our work. If you're not satisfied, we make it right — no questions asked.",
              },
              {
                icon: Users,
                title: "Local & Trusted",
                desc: "We're part of the Orange County community. Our reputation is built on real results for real neighbors.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent-orange/30 transition-all duration-300"
              >
                <item.icon className="h-6 w-6 text-accent-orange mb-3" />
                <h3 className="font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            Ready to Work With the Best?
          </h2>
          <p className="text-concrete text-lg mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation and quote. Let us show you the
            JP Plastering difference.
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
        </div>
      </section>
    </div>
  );
}

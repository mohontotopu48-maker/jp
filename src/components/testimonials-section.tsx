"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    initials: "SM",
    rating: 5,
    text: "JP Plastering completely transformed our walls. The finish is perfect! We couldn't believe how smooth and flawless everything turned out. Truly professional work.",
  },
  {
    name: "David R.",
    role: "Property Manager",
    initials: "DR",
    rating: 5,
    text: "We've used JP Plastering for multiple rental properties. Always on time, always clean, and the quality is consistently outstanding. Highly recommended for any scale of project.",
  },
  {
    name: "Maria L.",
    role: "Homeowner",
    initials: "ML",
    rating: 5,
    text: "Our living room ceiling had ugly cracks and uneven patches for years. JP Plastering fixed it in a day and now it looks brand new. Worth every penny!",
  },
  {
    name: "James K.",
    role: "Business Owner",
    initials: "JK",
    rating: 5,
    text: "Professional from start to finish. The team was respectful of our business hours, cleaned up perfectly, and delivered results that exceeded our expectations.",
  },
  {
    name: "Emily T.",
    role: "Interior Designer",
    initials: "ET",
    rating: 5,
    text: "As a designer, I need reliable contractors. JP Plastering is my go-to for every project. Their skimming work is absolutely flawless — like glass.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < Math.min(visibleCount, testimonials.length); i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-concrete text-lg leading-relaxed">
            Don&apos;t just take our word for it — hear from homeowners and
            businesses who trust JP Plastering.
          </p>
        </div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border hover:border-accent-orange/20 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-accent-orange/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-accent-orange fill-accent-orange"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-soft-bg">
                    <AvatarFallback className="bg-accent-orange/10 text-accent-orange font-heading font-semibold text-xs">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-heading font-semibold text-sm text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-concrete text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Cards - Mobile */}
        <div className="lg:hidden space-y-4 mb-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent-orange/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-accent-orange fill-accent-orange"
                    />
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-soft-bg">
                    <AvatarFallback className="bg-accent-orange/10 text-accent-orange font-heading font-semibold text-xs">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-heading font-semibold text-sm text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-concrete text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="rounded-full border-border hover:border-accent-orange hover:text-accent-orange transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-accent-orange"
                    : "w-2 bg-concrete-light hover:bg-concrete"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full border-border hover:border-accent-orange hover:text-accent-orange transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Quote request sent!",
          description:
            "We'll get back to you within 24 hours with your free quote.",
          variant: "default",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description:
          "Please try again or call us directly at (714) 555-1234.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-soft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Get Started
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Get a Professional Finish Today
          </h2>
          <p className="text-concrete text-lg leading-relaxed">
            Ready to transform your walls? Contact us now for a free,
            no-obligation quote. We respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-soft-bg border-border focus:border-accent-orange focus:ring-accent-orange/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-soft-bg border-border focus:border-accent-orange focus:ring-accent-orange/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="(714) 555-1234"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-soft-bg border-border focus:border-accent-orange focus:ring-accent-orange/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-10 rounded-md bg-soft-bg border border-border px-3 text-sm text-charcoal focus:outline-none focus:border-accent-orange focus:ring-accent-orange/20"
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Plastering</option>
                    <option value="exterior">Exterior Plastering</option>
                    <option value="skimming">Skimming & Wall Smoothing</option>
                    <option value="ceiling">Ceiling Plastering</option>
                    <option value="repair">Crack Repairs & Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-sm font-semibold text-charcoal">
                  Tell Us About Your Project
                </label>
                <Textarea
                  placeholder="Describe your project, approximate square footage, timeline, etc."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-soft-bg border-border focus:border-accent-orange focus:ring-accent-orange/20 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="orange-gradient text-white font-bold px-8 py-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-0 w-full sm:w-auto gap-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Request
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Urgency Card */}
            <div className="bg-charcoal rounded-2xl p-6 md:p-8 text-white">
              <h3 className="font-heading font-bold text-xl mb-2">
                Free Quote — No Obligation
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Get your personalized quote within 24 hours. No pressure, no
                hidden fees — just honest pricing for quality work.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent-orange" />
                  <div>
                    <div className="text-xs text-white/50">Call Us</div>
                    <a
                      href="tel:+17145551234"
                      className="font-semibold text-white hover:text-accent-orange transition-colors"
                    >
                      (714) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent-orange" />
                  <div>
                    <div className="text-xs text-white/50">Email</div>
                    <a
                      href="mailto:info@jpplastering.com"
                      className="font-semibold text-white hover:text-accent-orange transition-colors"
                    >
                      info@jpplastering.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent-orange" />
                  <div>
                    <div className="text-xs text-white/50">Location</div>
                    <span className="font-semibold text-white">
                      Orange County, CA
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent-orange" />
                  <div>
                    <div className="text-xs text-white/50">Hours</div>
                    <span className="font-semibold text-white">
                      Mon–Sat: 7AM – 6PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-accent-orange/5 rounded-2xl p-6 border border-accent-orange/20">
              <h4 className="font-heading font-bold text-charcoal mb-2">
                Need Urgent Help?
              </h4>
              <p className="text-concrete text-sm mb-4">
                Emergency crack repairs and urgent plastering needs? We offer
                priority scheduling for time-sensitive projects.
              </p>
              <a href="tel:+17145551234">
                <Button className="orange-gradient text-white font-semibold border-0 gap-2 w-full">
                  <Phone className="h-4 w-4" />
                  Call Now for Priority
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

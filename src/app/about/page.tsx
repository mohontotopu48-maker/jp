import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About Us | JP Plastering",
  description:
    "Learn about JP Plastering — Orange County's trusted plastering company with 15+ years of experience, 12 skilled specialists, and 500+ completed projects.",
};

export default function About() {
  return <AboutPage />;
}

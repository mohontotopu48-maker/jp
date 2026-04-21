"use client";

import { ServicePage } from "@/components/service-page";

const data = {
  title: "Crack Repairs & Restoration",
  subtitle:
    "Expert repair of cracks, holes, and damaged plaster with seamless, color-matched restoration that makes damage disappear.",
  heroImage: "/images/crack-repair.png",
  problem:
    "Wall and ceiling cracks are more than just cosmetic issues. They can indicate structural problems, allow moisture ingress, and worsen over time if left untreated. Holes from fixtures, damaged corners, and deteriorating plaster patches all undermine the integrity and appearance of your walls. Ignoring these issues leads to bigger, more expensive problems down the line.",
  solution:
    "Our specialist repair and restoration service addresses every type of wall and ceiling damage. We don't just cover up problems — we fix them properly at the source, using techniques that ensure repairs are seamless, durable, and built to last.",
  benefits: [
    {
      title: "Seamless Repairs",
      description:
        "Our repairs blend invisibly with surrounding surfaces, making it impossible to tell where damage was.",
    },
    {
      title: "Root Cause Analysis",
      description:
        "We identify why cracks occurred and address the underlying cause, not just the visible symptoms.",
    },
    {
      title: "Color Matching",
      description:
        "Repairs are finished to match your existing wall texture and color for a completely uniform appearance.",
    },
    {
      title: "Structural Integrity",
      description:
        "Proper repairs restore the full strength and stability of your walls and ceilings.",
    },
    {
      title: "Prevents Future Damage",
      description:
        "By addressing root causes and using reinforced techniques, we prevent cracks from reappearing.",
    },
    {
      title: "Cost-Effective",
      description:
        "Targeted repairs are far more affordable than full re-plastering while delivering outstanding results.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Damage Assessment",
      description:
        "We examine the damage, determine the cause (settlement, moisture, impact, etc.), and plan the appropriate repair method.",
    },
    {
      step: "02",
      title: "Preparation & Reinforcement",
      description:
        "The damaged area is opened up, cleaned, and reinforced with mesh tape or scrim as needed for lasting strength.",
    },
    {
      step: "03",
      title: "Fill & Restore",
      description:
        "Premium fillers and plaster are applied in layers, shaped, and smoothed to match the surrounding surface perfectly.",
    },
    {
      step: "04",
      title: "Finishing & Matching",
      description:
        "The repair is sanded, textured to match, and inspected to ensure an invisible, seamless result.",
    },
  ],
  extraContent:
    "Crack repair is a specialized skill that requires understanding of building movement, material science, and precision finishing. At JP Plastering, we've repaired thousands of cracks, holes, and damaged areas across Orange County. From hairline stress cracks to major impact damage, we bring the same expertise and care to every repair job — no matter how small. We also offer emergency repair services for urgent situations like water damage or safety concerns.",
  faqs: [
    {
      question: "Why do cracks keep coming back?",
      answer:
        "Recurring cracks typically indicate ongoing structural movement, inadequate previous repairs, or moisture issues. Our approach addresses these root causes with proper reinforcement and flexible materials to minimize recurrence.",
    },
    {
      question: "Do you offer emergency crack repair?",
      answer:
        "Yes, we offer priority scheduling for urgent repair needs such as water damage, large cracks, or safety concerns. Call us at (714) 555-1234 for emergency service.",
    },
    {
      question: "Can you match my existing wall texture?",
      answer:
        "Absolutely. We're experienced in matching a wide range of textures including smooth, orange peel, knockdown, skip trowel, and more. The repaired area will blend seamlessly.",
    },
    {
      question: "Is it better to repair or replaster?",
      answer:
        "For localized damage (cracks, holes, small areas), targeted repair is usually the best and most cost-effective option. We'll honestly assess your situation and recommend the most appropriate solution.",
    },
  ],
};

export function CrackRepairPage() {
  return <ServicePage {...data} />;
}

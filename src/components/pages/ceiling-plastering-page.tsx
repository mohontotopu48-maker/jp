"use client";

import { ServicePage } from "@/components/service-page";

const data = {
  title: "Ceiling Plastering Services",
  subtitle:
    "Flawless ceiling finishes that eliminate imperfections and give your rooms a complete, polished, premium look from top to bottom.",
  heroImage: "/images/ceiling.png",
  problem:
    "Ceilings are the most visible surface in any room, yet they're often the most neglected. Cracked plaster, visible joints between plasterboard sheets, water stains, sagging areas, and uneven textures draw the eye for all the wrong reasons. A bad ceiling can make an otherwise beautiful room feel dated and unfinished.",
  solution:
    "Our ceiling plastering service delivers seamless, smooth ceiling surfaces that complete the look of any room. Whether you need to fix damage, cover up ugly artex, or create a perfectly smooth new finish, our expert team handles ceiling work with specialized skills and equipment.",
  benefits: [
    {
      title: "Seamless Finish",
      description:
        "No visible joints, tapers, or ridges — just one continuous, perfectly smooth ceiling surface across the entire room.",
    },
    {
      title: "No Visible Joints",
      description:
        "We tape, fill, and skim plasterboard joints to create invisible seams that look like one solid surface.",
    },
    {
      title: "Repairs Damage",
      description:
        "Cracks, holes, water damage, and sagging areas are professionally repaired and restored to like-new condition.",
    },
    {
      title: "Eliminates Artex",
      description:
        "Smooth over dated textured ceilings for a clean, modern look that transforms the feel of any room.",
    },
    {
      title: "Better Lighting",
      description:
        "Smooth ceilings reflect light evenly, eliminating shadows and making rooms feel brighter and more spacious.",
    },
    {
      title: "Increases Room Value",
      description:
        "A perfectly finished ceiling is one of the details that signals quality throughout a property.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Ceiling Inspection",
      description:
        "We assess the current ceiling condition, identify all issues, and plan the appropriate repair and finishing approach.",
    },
    {
      step: "02",
      title: "Repair & Preparation",
      description:
        "Any damage is repaired, loose material removed, joints taped, and the entire surface prepared and primed.",
    },
    {
      step: "03",
      title: "Plaster Application",
      description:
        "Skim coats are expertly applied overhead using specialized techniques for a perfectly level, smooth finish.",
    },
    {
      step: "04",
      title: "Final Inspection",
      description:
        "We inspect under directional lighting to catch and address any imperfections before completing the project.",
    },
  ],
  extraContent:
    "Ceiling plastering requires a unique skill set — working overhead demands exceptional technique, stamina, and the right tools. At JP Plastering, our ceiling specialists have years of experience with every type of ceiling work, from simple skim finishes to complex repairs and decorative treatments. We work efficiently, protect your floors and furnishings, and deliver results that look absolutely seamless.",
  faqs: [
    {
      question: "Can you plaster a ceiling in one day?",
      answer:
        "Small rooms can often be completed in a single day. Larger rooms or ceilings requiring significant repair work may take 2 days. We'll give you an accurate timeline during your consultation.",
    },
    {
      question: "Do you remove old ceiling artex?",
      answer:
        "We can either remove artex completely or skim over it, depending on the thickness and condition. Skimming over is usually the more cost-effective option and delivers excellent results.",
    },
    {
      question: "What about cracks that keep coming back?",
      answer:
        "Recurring cracks usually indicate underlying structural movement. We use flexible fillers, reinforce with mesh tape, and apply techniques that accommodate normal movement to minimize crack recurrence.",
    },
    {
      question: "How do you protect the room during ceiling work?",
      answer:
        "We cover all floors, furniture, and fixtures with protective sheeting. Our team works cleanly and conducts a thorough cleanup at the end of every job.",
    },
  ],
};

export function CeilingPlasteringPage() {
  return <ServicePage {...data} />;
}

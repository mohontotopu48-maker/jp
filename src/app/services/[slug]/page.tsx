import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  heroImage: string;
  problem: string;
  solution: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  extraContent: string;
  faqs: { question: string; answer: string }[];
}> = {
  interior: {
    title: "Interior Plastering Services",
    subtitle:
      "Transform your interiors with perfectly smooth, durable wall finishes that elevate every room in your home or office.",
    heroImage: "/images/interior-plastering.png",
    problem:
      "Uneven walls, cracks, and poor finishes can ruin the look of your home or office. Whether it's a new build, renovation, or refresh — subpar walls drag down the entire space. Patchy DIY attempts and low-quality contractor work only make things worse, leaving you with surfaces that look uneven under light and cause paint to peel prematurely.",
    solution:
      "Our expert plastering delivers smooth, clean, and long-lasting surfaces. Using premium materials and time-tested techniques, we prepare, prime, and finish your walls to perfection — creating a flawless canvas for paint, wallpaper, or any decorative treatment you desire.",
    benefits: [
      { title: "Perfect Smooth Finish", description: "Glass-like surfaces that look stunning in any light, creating a premium feel throughout your space." },
      { title: "Ready for Painting", description: "Properly prepared and sealed surfaces that accept paint evenly for a lasting, professional result." },
      { title: "Strong & Durable Walls", description: "Multi-coat application that builds structural integrity, preventing future cracks and damage." },
      { title: "Professional Appearance", description: "The kind of flawless finish that increases your property value and makes visitors take notice." },
      { title: "Improved Insulation", description: "Quality plastering adds a thermal layer that helps regulate temperature and reduce energy costs." },
      { title: "Moisture Resistance", description: "Properly applied plaster creates a barrier against moisture, protecting your walls from dampness." },
    ],
    process: [
      { step: "01", title: "Surface Assessment", description: "We inspect the walls, identify problem areas, remove old coverings, and prepare the surface for plastering." },
      { step: "02", title: "Base Coat Application", description: "A high-quality base coat is applied to build strength and create an even foundation for the finish layer." },
      { step: "03", title: "Smooth Finishing Coat", description: "Our skilled plasterers apply the finishing layer with precision trowel work, achieving a perfectly smooth surface." },
      { step: "04", title: "Quality Inspection", description: "Every surface is thoroughly inspected for consistency, smoothness, and finish quality before we sign off." },
    ],
    extraContent:
      "At JP Plastering, we combine traditional craftsmanship with modern materials and techniques. Our team has over 15 years of experience delivering interior plastering projects for homes, offices, retail spaces, and commercial buildings across Orange County. We use only premium-grade plaster, maintain a clean work environment, and guarantee satisfaction with every project — no matter the size.",
    faqs: [
      { question: "How long does interior plastering take?", answer: "Most standard rooms can be completed in 2-3 days. Larger spaces or complex projects may take 4-5 days. We'll provide a precise timeline during your free consultation." },
      { question: "Do I need to remove furniture from the room?", answer: "We recommend removing furniture or covering it completely. Our team uses dust sheets and protective coverings, but clearing the space ensures the best results and fastest completion." },
      { question: "How soon can I paint after plastering?", answer: "We recommend waiting 5-7 days for the plaster to fully cure before painting. This ensures the best paint adhesion and a flawless final finish." },
      { question: "What types of interior plastering do you offer?", answer: "We offer skimming, multi-coat plastering, wet plastering, dry lining, and decorative plaster finishes. Each project is assessed individually to recommend the best approach." },
    ],
  },
  exterior: {
    title: "Exterior Plastering Services",
    subtitle:
      "Protect and beautify your property with professional exterior plastering that stands up to the elements and boosts curb appeal.",
    heroImage: "/images/exterior-plastering.png",
    problem:
      "Cracked, faded, or damaged exterior plaster doesn't just look bad — it exposes your property to moisture, pests, and structural damage. Weather exposure, poor previous work, and aging materials can leave your building's exterior looking worn and vulnerable, decreasing both curb appeal and property value.",
    solution:
      "Our exterior plastering services deliver weather-resistant, long-lasting finishes that protect your investment while dramatically improving your property's appearance. We use premium stucco and render systems designed for Southern California's climate.",
    benefits: [
      { title: "Weather Protection", description: "Durable finishes that shield your walls from rain, UV rays, wind, and temperature fluctuations year-round." },
      { title: "Boosted Curb Appeal", description: "A fresh, professional exterior finish transforms the look of your entire property and makes a lasting impression." },
      { title: "Increased Property Value", description: "Quality exterior plastering is one of the highest-ROI home improvements, adding real market value." },
      { title: "Low Maintenance", description: "Our professional finishes are designed to resist cracking, fading, and wear — reducing upkeep for years." },
      { title: "Energy Efficiency", description: "Proper exterior plastering adds insulation value, helping regulate indoor temperatures and reduce energy bills." },
      { title: "Custom Textures & Colors", description: "Choose from a range of finishes including smooth, textured, and decorative styles to match your vision." },
    ],
    process: [
      { step: "01", title: "Exterior Inspection", description: "We assess the current condition, identify damage, check structural integrity, and plan the full scope of work." },
      { step: "02", title: "Surface Preparation", description: "Old material is removed, surfaces are cleaned, repaired, and treated with appropriate bonding agents for optimal adhesion." },
      { step: "03", title: "Coat Application", description: "Multiple layers of premium plaster/stucco are applied and finished to your chosen texture and specification." },
      { step: "04", title: "Sealing & Inspection", description: "A protective sealant is applied, and the entire surface is inspected to ensure quality and durability." },
    ],
    extraContent:
      "JP Plastering specializes in exterior plastering for residential and commercial properties throughout Orange County. We understand the unique challenges of Southern California's climate and use materials and techniques specifically engineered for long-lasting performance in our environment. From small repair jobs to complete exterior renovations, we bring the same level of expertise and attention to detail to every project.",
    faqs: [
      { question: "What's the difference between stucco and render?", answer: "Stucco is a cement-based exterior finish common in California. Render is a similar coating system used to protect and decorate exterior walls. We work with both systems and will recommend the best option for your property." },
      { question: "How long does exterior plastering last?", answer: "Professional exterior plastering typically lasts 20-30 years with proper maintenance. Our work uses premium materials and techniques that maximize longevity." },
      { question: "Can exterior plastering be done in any season?", answer: "In Orange County, we can work year-round due to our mild climate. However, we avoid application during heavy rain or extreme heat to ensure optimal curing conditions." },
      { question: "Do you match existing exterior textures?", answer: "Yes, we can match existing textures for repairs or partial renovations. Our team is skilled in replicating smooth, dash, float, and other common exterior finishes." },
    ],
  },
  skimming: {
    title: "Skimming & Wall Smoothing",
    subtitle:
      "Achieve ultra-smooth, glass-like wall surfaces with our expert skimming service — the foundation for any premium interior finish.",
    heroImage: "/images/skimming.png",
    problem:
      "Walls that look fine under normal light can reveal every bump, ridge, and imperfection when you turn on overhead lights or try to apply a fresh coat of paint. Uneven plasterboard joints, old artex textures, and previously poorly finished surfaces all prevent you from getting that clean, premium look you want.",
    solution:
      "Skimming is the art of applying a thin, smooth layer of finishing plaster over existing walls to create a perfectly flat, seamless surface. Our skilled plasterers deliver glass-like finishes that transform any room — the ideal preparation for painting, wallpapering, or decorative treatments.",
    benefits: [
      { title: "Glass-Like Surface", description: "Achieve a flawlessly smooth, mirror-like finish that makes any room look professionally designed." },
      { title: "Perfect Paint Results", description: "Smooth walls mean paint goes on evenly and looks incredible — no more patchy or streaky results." },
      { title: "Covers Old Textures", description: "Effectively covers artex, textured walls, and uneven surfaces with a clean, modern flat finish." },
      { title: "Cost-Effective Refresh", description: "Skimming is often more affordable than full re-plastering while delivering a comparable premium result." },
      { title: "Fast Turnaround", description: "Most rooms can be skimmed in 1-2 days, meaning minimal disruption to your daily life." },
      { title: "Versatile Finish", description: "Works perfectly as preparation for paint, wallpaper, tiles, or any wall covering you choose." },
    ],
    process: [
      { step: "01", title: "Wall Assessment", description: "We evaluate the existing surface condition, identify high and low spots, and determine the best approach." },
      { step: "02", title: "Preparation & Priming", description: "Walls are cleaned, any loose material is removed, and a PVA bonding agent is applied for optimal plaster adhesion." },
      { step: "03", title: "Skim Coat Application", description: "Two thin coats of finishing plaster are expertly applied and troweled to create a perfectly smooth, level surface." },
      { step: "04", title: "Final Polish", description: "The surface is polished and inspected under lighting to ensure a flawless, blemish-free finish." },
    ],
    extraContent:
      "Skimming is where true craftsmanship shows. At JP Plastering, our finishers are trained to the highest standards and take immense pride in delivering walls that are genuinely flawless. We use top-tier multi-finish plaster and apply it with the precision and patience that transforms ordinary walls into extraordinary surfaces. Whether it's a single feature wall or an entire property, our skimming work sets the standard in Orange County.",
    faqs: [
      { question: "What's the difference between skimming and plastering?", answer: "Skimming is a thin coat (typically 2-3mm) of finishing plaster applied over existing walls to create a smooth surface. Full plastering involves building up multiple thicker coats. Skimming is ideal when the underlying wall is sound but the surface needs smoothing." },
      { question: "Can you skim over artex or textured walls?", answer: "Yes, we can skim over most textured surfaces including artex. Depending on the depth of texture, we may apply a bonding coat first to create a suitable base for the skim finish." },
      { question: "How much mess does skimming create?", answer: "We take pride in our clean work practices. While some dust is inevitable, we use dust sheets, protect your floors and furniture, and clean up thoroughly after every job." },
      { question: "Is skimming suitable for ceilings too?", answer: "Yes! Skimming is an excellent option for ceilings that have cracks, uneven joints, or old textures. See our Ceiling Plastering service for more details." },
    ],
  },
  ceiling: {
    title: "Ceiling Plastering Services",
    subtitle:
      "Flawless ceiling finishes that eliminate imperfections and give your rooms a complete, polished, premium look from top to bottom.",
    heroImage: "/images/ceiling.png",
    problem:
      "Ceilings are the most visible surface in any room, yet they're often the most neglected. Cracked plaster, visible joints between plasterboard sheets, water stains, sagging areas, and uneven textures draw the eye for all the wrong reasons. A bad ceiling can make an otherwise beautiful room feel dated and unfinished.",
    solution:
      "Our ceiling plastering service delivers seamless, smooth ceiling surfaces that complete the look of any room. Whether you need to fix damage, cover up ugly artex, or create a perfectly smooth new finish, our expert team handles ceiling work with specialized skills and equipment.",
    benefits: [
      { title: "Seamless Finish", description: "No visible joints, tapers, or ridges — just one continuous, perfectly smooth ceiling surface across the entire room." },
      { title: "No Visible Joints", description: "We tape, fill, and skim plasterboard joints to create invisible seams that look like one solid surface." },
      { title: "Repairs Damage", description: "Cracks, holes, water damage, and sagging areas are professionally repaired and restored to like-new condition." },
      { title: "Eliminates Artex", description: "Smooth over dated textured ceilings for a clean, modern look that transforms the feel of any room." },
      { title: "Better Lighting", description: "Smooth ceilings reflect light evenly, eliminating shadows and making rooms feel brighter and more spacious." },
      { title: "Increases Room Value", description: "A perfectly finished ceiling is one of the details that signals quality throughout a property." },
    ],
    process: [
      { step: "01", title: "Ceiling Inspection", description: "We assess the current ceiling condition, identify all issues, and plan the appropriate repair and finishing approach." },
      { step: "02", title: "Repair & Preparation", description: "Any damage is repaired, loose material removed, joints taped, and the entire surface prepared and primed." },
      { step: "03", title: "Plaster Application", description: "Skim coats are expertly applied overhead using specialized techniques for a perfectly level, smooth finish." },
      { step: "04", title: "Final Inspection", description: "We inspect under directional lighting to catch and address any imperfections before completing the project." },
    ],
    extraContent:
      "Ceiling plastering requires a unique skill set — working overhead demands exceptional technique, stamina, and the right tools. At JP Plastering, our ceiling specialists have years of experience with every type of ceiling work, from simple skim finishes to complex repairs and decorative treatments. We work efficiently, protect your floors and furnishings, and deliver results that look absolutely seamless.",
    faqs: [
      { question: "Can you plaster a ceiling in one day?", answer: "Small rooms can often be completed in a single day. Larger rooms or ceilings requiring significant repair work may take 2 days. We'll give you an accurate timeline during your consultation." },
      { question: "Do you remove old ceiling artex?", answer: "We can either remove artex completely or skim over it, depending on the thickness and condition. Skimming over is usually the more cost-effective option and delivers excellent results." },
      { question: "What about cracks that keep coming back?", answer: "Recurring cracks usually indicate underlying structural movement. We use flexible fillers, reinforce with mesh tape, and apply techniques that accommodate normal movement to minimize crack recurrence." },
      { question: "How do you protect the room during ceiling work?", answer: "We cover all floors, furniture, and fixtures with protective sheeting. Our team works cleanly and conducts a thorough cleanup at the end of every job." },
    ],
  },
  "crack-repairs": {
    title: "Crack Repairs & Restoration",
    subtitle:
      "Expert repair of cracks, holes, and damaged plaster with seamless, color-matched restoration that makes damage disappear.",
    heroImage: "/images/crack-repair.png",
    problem:
      "Wall and ceiling cracks are more than just cosmetic issues. They can indicate structural problems, allow moisture ingress, and worsen over time if left untreated. Holes from fixtures, damaged corners, and deteriorating plaster patches all undermine the integrity and appearance of your walls. Ignoring these issues leads to bigger, more expensive problems down the line.",
    solution:
      "Our specialist repair and restoration service addresses every type of wall and ceiling damage. We don't just cover up problems — we fix them properly at the source, using techniques that ensure repairs are seamless, durable, and built to last.",
    benefits: [
      { title: "Seamless Repairs", description: "Our repairs blend invisibly with surrounding surfaces, making it impossible to tell where damage was." },
      { title: "Root Cause Analysis", description: "We identify why cracks occurred and address the underlying cause, not just the visible symptoms." },
      { title: "Color Matching", description: "Repairs are finished to match your existing wall texture and color for a completely uniform appearance." },
      { title: "Structural Integrity", description: "Proper repairs restore the full strength and stability of your walls and ceilings." },
      { title: "Prevents Future Damage", description: "By addressing root causes and using reinforced techniques, we prevent cracks from reappearing." },
      { title: "Cost-Effective", description: "Targeted repairs are far more affordable than full re-plastering while delivering outstanding results." },
    ],
    process: [
      { step: "01", title: "Damage Assessment", description: "We examine the damage, determine the cause (settlement, moisture, impact, etc.), and plan the appropriate repair method." },
      { step: "02", title: "Preparation & Reinforcement", description: "The damaged area is opened up, cleaned, and reinforced with mesh tape or scrim as needed for lasting strength." },
      { step: "03", title: "Fill & Restore", description: "Premium fillers and plaster are applied in layers, shaped, and smoothed to match the surrounding surface perfectly." },
      { step: "04", title: "Finishing & Matching", description: "The repair is sanded, textured to match, and inspected to ensure an invisible, seamless result." },
    ],
    extraContent:
      "Crack repair is a specialized skill that requires understanding of building movement, material science, and precision finishing. At JP Plastering, we've repaired thousands of cracks, holes, and damaged areas across Orange County. From hairline stress cracks to major impact damage, we bring the same expertise and care to every repair job — no matter how small. We also offer emergency repair services for urgent situations like water damage or safety concerns.",
    faqs: [
      { question: "Why do cracks keep coming back?", answer: "Recurring cracks typically indicate ongoing structural movement, inadequate previous repairs, or moisture issues. Our approach addresses these root causes with proper reinforcement and flexible materials to minimize recurrence." },
      { question: "Do you offer emergency crack repair?", answer: "Yes, we offer priority scheduling for urgent repair needs such as water damage, large cracks, or safety concerns. Call us at (714) 555-1234 for emergency service." },
      { question: "Can you match my existing wall texture?", answer: "Absolutely. We're experienced in matching a wide range of textures including smooth, orange peel, knockdown, skip trowel, and more. The repaired area will blend seamlessly." },
      { question: "Is it better to repair or replaster?", answer: "For localized damage (cracks, holes, small areas), targeted repair is usually the best and most cost-effective option. We'll honestly assess your situation and recommend the most appropriate solution." },
    ],
  },
};

const slugMetadata: Record<string, { title: string; description: string }> = {
  interior: {
    title: "Interior Plastering Services | JP Plastering",
    description: "Transform your interiors with perfectly smooth, durable wall finishes. Professional interior plastering for homes and businesses in Orange County.",
  },
  exterior: {
    title: "Exterior Plastering Services | JP Plastering",
    description: "Weather-resistant, long-lasting exterior plastering that protects and beautifies your property. Expert stucco and render services in Orange County.",
  },
  skimming: {
    title: "Skimming & Wall Smoothing | JP Plastering",
    description: "Expert skimming for ultra-smooth, glass-like wall surfaces. Professional wall smoothing service for homes and businesses.",
  },
  ceiling: {
    title: "Ceiling Plastering Services | JP Plastering",
    description: "Flawless ceiling finishes that eliminate imperfections. Expert ceiling plastering and repair services in Orange County.",
  },
  "crack-repairs": {
    title: "Crack Repairs & Restoration | JP Plastering",
    description: "Expert repair of cracks, holes, and damaged plaster with seamless, color-matched restoration. Crack repair specialists in Orange County.",
  },
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = slugMetadata[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  const { ServicePage } = await import("@/components/service-page");

  return <ServicePage {...data} />;
}

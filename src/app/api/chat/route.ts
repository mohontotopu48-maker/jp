import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are JP, the friendly AI assistant for JP Plastering — a premium plastering company based in Orange County, California.`;

// Simple in-memory conversation store
const conversations = new Map<string, { role: string; content: string }[]>();

function getOrCreateConversation(sessionId: string) {
  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, []);
  }
  return conversations.get(sessionId)!;
}

// Smart keyword-based response system (works without AI SDK)
function generateResponse(message: string): string {
  const msg = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|howdy|greetings|good\s*(morning|afternoon|evening)|sup|what'?s\s*up)/i.test(msg)) {
    return "Hi there! 👋 Welcome to JP Plastering! I'm here to help with any questions about our plastering services. What can I help you with today?";
  }

  // Services
  if (/\b(services?|what\s*(do\s*you|can\s*you)\s*(do|offer|provide)|offer)\b/i.test(msg)) {
    return "We offer a comprehensive range of professional plastering services:\n\n🏠 **Interior Plastering** — Smooth, durable wall finishes\n🏢 **Exterior Plastering** — Weather-resistant stucco & render\n✨ **Skimming & Wall Smoothing** — Ultra-smooth glass-like surfaces\n🔲 **Ceiling Plastering** — Seamless ceiling finishes\n🔧 **Crack Repairs & Restoration** — Seamless damage repair\n\nWould you like more details about any specific service?";
  }

  // Interior
  if (/\binterior\b/i.test(msg)) {
    return "Our **Interior Plastering** service transforms your walls with perfectly smooth, durable finishes. We handle new builds, renovations, and refreshes.\n\n✅ Perfect smooth finish ready for painting\n✅ Strong, long-lasting walls\n✅ Moisture-resistant surfaces\n✅ Professional results that add value\n\nMost rooms are completed in 2-3 days. Want a free quote? Just fill out our contact form or call (714) 555-1234!";
  }

  // Exterior
  if (/\bexterior\b/i.test(msg)) {
    return "Our **Exterior Plastering** service protects and beautifies your property with weather-resistant finishes designed for Southern California's climate.\n\n✅ Weather protection (rain, UV, wind)\n✅ Boosted curb appeal\n✅ Increased property value\n✅ Low maintenance (20-30 year lifespan)\n✅ Custom textures & colors\n\nWe work year-round in Orange County. Get your free quote today!";
  }

  // Skimming
  if (/\bskimming|wall\s*smooth/i.test(msg)) {
    return "Our **Skimming & Wall Smoothing** service achieves ultra-smooth, glass-like surfaces — perfect for preparing walls for painting or decorating.\n\n✅ Covers old textures (artex, etc.)\n✅ Cost-effective alternative to full plastering\n✅ Fast turnaround (1-2 days per room)\n✅ Flawless finish every time\n\nIt's the most popular way to transform tired walls. Ready for a consultation?";
  }

  // Ceiling
  if (/\bceiling\b/i.test(msg)) {
    return "Our **Ceiling Plastering** service delivers seamless, smooth ceilings that complete the look of any room.\n\n✅ No visible joints or tapers\n✅ Professional crack & damage repair\n✅ Artex removal & smoothing\n✅ Better light reflection\n\nCeiling work requires specialist skills — our team has years of experience overhead! Call (714) 555-1234 to discuss your project.";
  }

  // Crack repair
  if (/\bcrack|repair|restor|damage|hole/i.test(msg)) {
    return "Our **Crack Repairs & Restoration** service addresses every type of wall and ceiling damage properly.\n\n✅ Seamless, invisible repairs\n✅ Root cause analysis (not just patching)\n✅ Color & texture matching\n✅ Structural integrity restored\n✅ Emergency service available\n\nWe also offer **priority scheduling** for urgent repairs. Call us at (714) 555-1234 for emergency service!";
  }

  // Pricing / cost
  if (/\b(price|pricing|cost|how\s*much|expensive|cheap|afford|rate|estimate|quote)\b/i.test(msg)) {
    return "Great question! Our pricing depends on the project scope — factors like square footage, condition of existing surfaces, and the type of finish you want.\n\n**The best way to get accurate pricing is through our free quote!**\n\n📞 Call us at (714) 555-1234\n📧 Email: info@jpplastering.com\n📋 Or fill out our contact form — we respond within 24 hours!\n\nNo obligation, no pressure — just honest pricing for quality work.";
  }

  // Quote / booking
  if (/\b(quote|book|schedule|appointment|consultation|get\s*started|hire)\b/i.test(msg)) {
    return "We'd love to help you get started! Here's how to get your **free, no-obligation quote**:\n\n📞 **Call:** (714) 555-1234 (Mon–Sat, 7AM–6PM)\n📧 **Email:** info@jpplastering.com\n📋 **Contact Form:** Scroll down and fill out the form on our site\n\nWe respond to all quote requests within **24 hours**. During the consultation, we'll assess your project and provide a detailed, transparent proposal.";
  }

  // Area / location
  if (/\b(area|location|where|serve|cover|region|county|city|nearby)\b/i.test(msg)) {
    return "We're based in **Orange County, California** and serve the surrounding areas including:\n\n• Anaheim • Irvine • Santa Ana • Huntington Beach\n• Newport Beach • Fullerton • Garden Grove\n• And all of Orange County!\n\nNot sure if we cover your area? Just give us a call at (714) 555-1234 — we're happy to check!";
  }

  // Time / duration
  if (/\b(how\s*long|time|duration|take|timeline|when)\b/i.test(msg)) {
    return "Project timelines vary by scope:\n\n🏠 **Interior Plastering:** 2-3 days per room\n🏢 **Exterior Plastering:** 3-7 days depending on size\n✨ **Skimming:** 1-2 days per room\n🔲 **Ceiling:** 1-2 days per room\n🔧 **Crack Repairs:** Same day for small repairs\n\nWe'll provide an exact timeline during your free consultation. We always complete projects on time!";
  }

  // Experience / about company
  if (/\b(experience|how\s*long.*been|about|company|who|team|history|established|years)\b/i.test(msg)) {
    return "JP Plastering was founded in **2009** right here in Orange County. Here's a quick overview:\n\n🏗️ **15+ years** in business\n✅ **500+ projects** completed\n👷 **12 specialists** on our team\n🏆 **Guaranteed** work, fully insured\n⭐ Trusted by hundreds of homeowners & businesses\n\nWe started as a one-man operation focused on quality craftsmanship, and we've grown into one of Orange County's most trusted plastering companies!";
  }

  // Warranty / guarantee
  if (/\b(guarantee|warranty|insur|liability|licensed|bonded)\b/i.test(msg)) {
    return "Absolutely! We stand behind every project:\n\n✅ **Satisfaction guaranteed** — if you're not happy, we make it right\n🛡️ **Fully insured** — complete coverage for your property\n📋 **Licensed professionals** — all team members are qualified\n🔧 **Premium materials** — we use only the best products\n\nYour peace of mind is our priority. We're happy to show proof of insurance and licenses during your consultation.";
  }

  // Contact info
  if (/\b(phone|number|call|email|contact|reach|address)\b/i.test(msg)) {
    return "Here's how to reach us:\n\n📞 **Phone:** (714) 555-1234\n📧 **Email:** info@jpplastering.com\n📍 **Location:** Orange County, CA\n🕐 **Hours:** Monday–Saturday, 7AM–6PM\n\nOr fill out the **contact form** on our website — we respond within 24 hours!";
  }

  // Materials
  if (/\b(material|product|brand|type\s*of|kind\s*of|quality)\b/i.test(msg)) {
    return "We use only **premium-grade plaster and materials** from trusted manufacturers. This includes:\n\n• Multi-finish plaster for smooth surfaces\n• High-quality stucco for exterior work\n• Professional bonding agents and primers\n• Eco-friendly options available\n\nUsing top-tier materials ensures durability and a flawless finish that lasts for decades. Quality is never something we compromise on!";
  }

  // Clean / mess
  if (/\b(clean|mess|dust|dirty|protect|furniture|preparation|prep)\b/i.test(msg)) {
    return "Great question! We take cleanliness seriously:\n\n🧹 We use dust sheets and protective coverings\n🪑 Furniture is protected or can be removed\n🗑️ We clean up thoroughly after every job\n✨ Your space will be left clean and tidy\n\nWe treat your home or business like our own. Clean work is part of our standard service — no extra charge!";
  }

  // Review / testimonial
  if (/\b(review|testimonial|rating|feedback|referral|recommend)\b/i.test(msg)) {
    return "We're proud of our reputation! With **500+ completed projects** and countless satisfied clients, we have a strong track record in Orange County.\n\n⭐⭐⭐⭐⭐ \"Professional, clean, and the finish was flawless!\" — Many happy clients\n\nWe're also happy to provide references from recent projects in your area. Just ask during your consultation!";
  }

  // Thank you
  if (/\b(thank|thanks|thx|appreciate|grateful)\b/i.test(msg)) {
    return "You're welcome! 😊 If you have any other questions about our plastering services, don't hesitate to ask. We're here to help!\n\n📞 (714) 555-1234\n📧 info@jpplastering.com";
  }

  // Goodbye
  if (/\b(bye|goodbye|see\s*you|take\s*care|later|good\s*night)\b/i.test(msg)) {
    return "Thanks for reaching out! We hope to hear from you soon. Don't forget — we offer **free quotes** with a 24-hour response time. Have a great day! 🏗️";
  }

  // Default fallback
  return "Thanks for your question! While I may not have a specific answer for that, I'd love to help. Here are a few options:\n\n📞 **Call us:** (714) 555-1234\n📧 **Email:** info@jpplastering.com\n📋 **Contact Form:** Fill out the form on our website\n\nOur team can provide detailed answers about any plastering project. We respond within 24 hours!";
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message is too long. Please keep it under 1000 characters." },
        { status: 400 }
      );
    }

    // Get or create conversation
    let conversation = getOrCreateConversation(sessionId);
    conversation.push({ role: "user", content: message });

    let aiResponse: string;

    // Try z-ai-web-dev-sdk first (available in sandbox env)
    try {
      let ZAI: any;
      try {
        ZAI = (await import("z-ai-web-dev-sdk")).default;
      } catch {
        ZAI = null;
      }

      if (ZAI) {
        const zai = await ZAI.create();

        // Build messages with system prompt
        const fullMessages = [
          { role: "assistant" as const, content: SYSTEM_PROMPT },
          ...conversation.map((m) => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
        ];

        // Trim to last 16 messages
        const trimmed =
          fullMessages.length > 16
            ? [fullMessages[0], ...fullMessages.slice(-15)]
            : fullMessages;

        const completion = await zai.chat.completions.create({
          messages: trimmed,
          thinking: { type: "disabled" },
        });

        aiResponse = completion.choices[0]?.message?.content;

        if (!aiResponse) throw new Error("Empty response");
      } else {
        aiResponse = generateResponse(message);
      }
    } catch {
      // Fallback: smart keyword-based response
      aiResponse = generateResponse(message);
    }

    conversation.push({ role: "assistant", content: aiResponse });
    conversations.set(sessionId, conversation);

    return NextResponse.json({
      success: true,
      response: aiResponse,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "I'm having trouble responding right now. Please try again or call us at (714) 555-1234.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    if (sessionId) {
      conversations.delete(sessionId);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to clear conversation" },
      { status: 500 }
    );
  }
}

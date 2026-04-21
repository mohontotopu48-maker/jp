import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

const SYSTEM_PROMPT = `You are JP, the friendly AI assistant for JP Plastering — a premium plastering company based in Orange County, California. Your role is to help website visitors with questions about our services, pricing, process, and scheduling.

Key information about JP Plastering:
- Services: Interior Plastering, Exterior Plastering, Skimming & Wall Smoothing, Ceiling Plastering, Crack Repairs & Restoration
- Location: Orange County, CA
- Phone: (714) 555-1234
- Email: info@jpplastering.com
- Hours: Monday–Saturday, 7AM–6PM
- Experience: 15+ years, 500+ projects completed
- Team: 12 skilled plastering specialists
- We offer free quotes with 24-hour response time
- All work is guaranteed and fully insured
- We use premium materials and maintain clean work environments

Guidelines:
- Be warm, helpful, and professional — like a knowledgeable team member
- Keep answers concise but informative
- When asked about pricing, explain that it depends on the project scope and recommend requesting a free quote
- For booking, direct users to fill out the contact form or call (714) 555-1234
- If asked about something outside plastering services, politely redirect to our core offerings
- Use simple, clear language — avoid overly technical jargon unless the user seems knowledgeable
- Always offer to help with next steps (quote, call, etc.)
- Never make up specific prices or timeframes — provide general estimates only`;

// Simple in-memory conversation store
const conversations = new Map<string, { role: string; content: string }[]>();

function getOrCreateConversation(sessionId: string) {
  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, [
      { role: "assistant", content: SYSTEM_PROMPT },
    ]);
  }
  return conversations.get(sessionId)!;
}

function trimConversation(
  messages: { role: string; content: string }[],
  maxMessages: number = 16
) {
  // Keep system prompt + last N messages
  if (messages.length > maxMessages) {
    return [messages[0], ...messages.slice(-(maxMessages - 1))];
  }
  return messages;
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

    // Sanitize message length
    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message is too long. Please keep it under 1000 characters." },
        { status: 400 }
      );
    }

    // Get or create conversation
    let conversation = getOrCreateConversation(sessionId);

    // Add user message
    conversation.push({ role: "user", content: message });

    // Trim if too long
    conversation = trimConversation(conversation);
    conversations.set(sessionId, conversation);

    // Create ZAI instance and get completion
    const zai = await ZAI.create();
    const completion = await zai.chat.completions.create({
      messages: conversation.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
      thinking: { type: "disabled" },
    });

    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error("Empty response from AI");
    }

    // Add AI response to conversation
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

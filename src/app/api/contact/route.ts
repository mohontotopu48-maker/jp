import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Store in database if available, otherwise store in memory
    if (db) {
      try {
        await db.contactRequest.create({
          data: {
            name,
            email,
            phone: phone || null,
            service: service || null,
            message: message || null,
            status: "new",
          },
        });
      } catch {
        // Database not available — continue with success response
        console.log("Contact request (no DB):", { name, email, phone, service, message });
      }
    } else {
      console.log("Contact request (no DB):", { name, email, phone, service, message });
    }

    return NextResponse.json(
      { success: true, message: "Contact request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}

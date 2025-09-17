import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const dynamic = "force-dynamic";

type ChatRole = "system" | "user" | "assistant";

type IncomingMessage = {
  role: ChatRole;
  content: string;
};

interface ChatRequestBody {
  messages?: IncomingMessage[];
}

export async function POST(request: NextRequest) {
  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { error: "GROQ_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  let body: ChatRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return NextResponse.json(
      { error: "Request body must include a non-empty messages array." },
      { status: 400 },
    );
  }

  const sanitizedMessages = body.messages
    .filter((message): message is IncomingMessage => {
      return (
        typeof message === "object" &&
        message !== null &&
        typeof message.role === "string" &&
        typeof message.content === "string"
      );
    })
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }))
    .filter((message) => message.content.length > 0);

  if (sanitizedMessages.length === 0) {
    return NextResponse.json(
      { error: "All messages were empty after sanitization." },
      { status: 400 },
    );
  }

  const latestUserMessage = [...sanitizedMessages]
    .reverse()
    .find((message) => message.role === "user")?.content.trim();

  if (!latestUserMessage) {
    return NextResponse.json(
      { error: "A user message is required to continue the conversation." },
      { status: 400 },
    );
  }

  const allowedKeywords = [
    "drug",
    "drugs",
    "substance",
    "youth",
    "dfy",
    "campaign",
    "report",
    "reporting",
    "anonymous",
    "police",
    "mangaluru",
    "karnataka",
    "safety",
    "volunteer",
    "participate",
    "involve",
    "support",
    "awareness",
    "rehabilitation",
    "community",
    "school",
    "student",
    "helpline",
    "tip",
    "makeachange",
  ];

  const lowerCaseLatestMessage = latestUserMessage.toLowerCase();
  const isRelevant = allowedKeywords.some((keyword) => lowerCaseLatestMessage.includes(keyword));

  if (!isRelevant) {
    return NextResponse.json({
      message:
        "I’m here to talk about the Drugs Free Youth initiative—reporting drug activity, community safety, and ways to get involved. Please ask about those topics.",
    });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: sanitizedMessages,
      temperature: 0.6,
      max_tokens: 800,
    });

    const message = completion.choices[0]?.message?.content?.trim();

    if (!message) {
      return NextResponse.json(
        { error: "The AI counsellor did not return any content." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Groq chat completion failed", error);
    return NextResponse.json(
      { error: "Failed to generate a response. Please try again." },
      { status: 500 },
    );
  }
}

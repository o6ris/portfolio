import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json(); // Read request body

    // TODO: Need a complete bio
    const { data, error } = await supabase
      .from('bio')
      .select('content')
      .eq('user', 'Tsiry') // Always using "tsiry" for your bio
      .single(); // We expect only one result

    if (error) throw error;
    const bio = data?.content; // The bio content

    if (!bio) {
      return NextResponse.json({ answer: "Bio not found!" }, { status: 404 });
    }

    // TODO: need choose all the specify keyworkds
    if (!question.toLowerCase().includes("tsiry") && !question.toLowerCase().includes("grindpal")) {
      return NextResponse.json({ answer: "I can only answer questions about Tsiry!" });
    }

    // Make API request to Mistral
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: `You are TzirBot, an AI assistant that only answers questions about Tsiry. Use the following details:\n${bio}` },
          { role: "user", content: question },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const responseData = await response.json();
    return NextResponse.json({ answer: responseData.choices[0].message.content });

  } catch (error: unknown) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ answer: `Something went wrong: ${errorMessage}` }, { status: 500 });
  }
}

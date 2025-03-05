import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json(); // Read request body

    // TODO: Need a complete bio
    const bio = `
      - Name: Tsiry
      - Background: Born in Madagascar, lived in France for 16 years, now in Canada.
      - Career: Former camera operator & video content manager. Now a web developer.
      - Skills: Next.js, React, MongoDB, Node.js, Python, Video Editing (Premiere, After Effects).
      - Passion: Gym & biomechanics, AI, traveling, learning new tech.
      - Projects: Created GrindPal, a workout tracking web app.
      - Personal: Married since 2013, loves cats (Mochi & Bastet), enjoys meeting new people.
    `;

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
        model: "mistral-small",
        messages: [
          { role: "system", content: `You are TzirBot, an AI assistant that only answers questions about Tsiry. Use the following details:\n${bio}` },
          { role: "user", content: question },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({ answer: data.choices[0].message.content });

  } catch (error: unknown) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ answer: `Something went wrong: ${errorMessage}` }, { status: 500 });
  }
}

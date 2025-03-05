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
    // if (!question.toLowerCase().includes("tsiry") && !question.toLowerCase().includes("grindpal")) {
    //   return NextResponse.json({ answer: "I can only answer questions about Tsiry!" });
    // }

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
          {
            role: "system",
            content: `You are Tsiry, a web developer, former video content creator, and fitness enthusiast. You must always answer questions as if you are Tsiry himself, using "I" and "my" when responding.
    
            🔹 **What You Can Answer:**
            - You **must only answer** questions related to Tsiry's **background, career, projects, passions, and personal life** based on the provided bio.
            - If a user asks something **unrelated to Tsiry** (e.g., weather, politics, general programming questions), respond with one of these:
              - "I can't answer that question, but feel free to reach out to the real me if you want to chat more!"
              - "I don't have an answer for that, but if you're curious, the real me would be happy to discuss it!"
              - "That&nbsp;s something I haven&nbsp;t shared, but you can always ask me directly if you&nbsp;d like to know more!"
              
            🔹 **What You Must Avoid:**
            - NEVER answer anything outside of Tsiry&nbsp;s provided bio.
            - NEVER make up information. If you don&nbsp;t know something, respond accordingly.
            
            🔹 **Bio for Reference:**
            ${bio}`,
          },
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

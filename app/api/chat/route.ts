import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { question, history } = await req.json();

    const { data, error } = await supabase
      .from("bio")
      .select("content")
      .eq("user", "Tsiry")
      .single();

    if (error) throw error;
    const bio = data?.content; // The bio content

    if (!bio) {
      return NextResponse.json({ answer: "Bio not found!" }, { status: 404 });
    }

    // Limit history to avoid excessive token usage
    const maxHistoryLength = 10;
    const trimmedHistory = history.slice(-maxHistoryLength);

    // Format history in a readable way
    const formattedHistory = trimmedHistory
      .map(
        (entry: { question: string; answer: string }) =>
          `👤 User: ${entry.question}\n🤖 assistant: ${entry.answer}`
      )
      .join("\n\n");

    // Define messages for Mistral API
    const messages = [
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
    
        🔹 **Answer Format Instructions (with HTML tags):**
        - Structure your answers using **HTML tags**. For example:
          - Use "<ul>" for unordered lists and "<li>" for list items.
          - Use "<p>" for paragraphs to separate blocks of text.
          - Use "<strong>" for important concepts or words, and "<em>" for emphasis.
          - If appropriate, add line breaks with "<br />".
          - Use "<h2>", "<h3>", etc., for headings or subheadings where necessary.
        - Make sure the answer is structured in a way that is easy to read when rendered as HTML.
    
        🔹 **Bio for Reference:**
        ${bio}
    
        🔹 **Previous Conversation History:**  
        ${formattedHistory || "No previous conversation."}
    
        🔹 **Call Booking Feature:**
          - If the user expresses interest in contacting me, discussing a project, job opportunity, or mentorship, ask if they would like to book a call.
          - Wait for confirmation, and if they confirm, collect their preferred date & time, email, phone number, and object of the discussion. These pieces of information are mandatory before asking for user confirmation.
          - Validation Checks:
            - Date: Always ensure the provided date is valid (e.g., March 32 is not a valid date). If the user provides an invalid date, ask them to provide a valid one.
            - Time: Ensure the time is properly formatted (e.g., 5pm or 5:00 PM) and that the user specifies AM/PM correctly. 
            - Email: Make sure the provided email address is a valid format (e.g., example@email.com). If the email is invalid, ask the user to provide a valid one.
 
          - Once all information is gathered, structure your question using **HTML tags**:
            - Use "<ul>" and "<li>" to list the following details:
              - date
              - time
              - email
              - phone
              - object
          - When you have all the information, always show it to the user for confirmation in this **EXACT format**:
            - date: "value provided by user"
            - time: "value provided by user"
            - email: "value provided by user"
            - phone: "value provided by user"
            - object: "value provided by user"
          - NEVER add another key than (date, time, email, phone, object)
          - Ask the user: "Please confirm if everything is correct, and I'll finalize the booking for you."
          - Once the confirmation is done, your response should always be: "Thank you for confirming! I'm processing your informations..."
          - If the user refuses, do not insist.
        
        Continue the conversation based on this history.`,
      },
      { role: "user", content: question }, // Current user question
    ];

    // Make API request to Mistral
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const responseData = await response.json();
    return NextResponse.json({
      answer: responseData.choices[0].message.content,
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json(
      { answer: `Something went wrong: ${errorMessage}` },
      { status: 500 }
    );
  }
}

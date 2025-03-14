import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message is required")
    .max(500, "Message is too long"),
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const parsedData = contactSchema.parse(data);
    const { name, email, message } = parsedData;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    // Catch any validation errors or email errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

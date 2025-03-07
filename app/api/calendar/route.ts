// ONLY IN LOCAL
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { NextRequest, NextResponse } from "next/server";
import { getGoogleCalendarClient } from "@/lib/googleAuth";
import { parseUserInputToDate } from "@/modules/clients/utils/dateParser";
import { sendConfirmationEmail } from "@/lib/emails";

const calendarId = "tsiry.ralamb@gmail.com";

export async function POST(req: NextRequest) {
  const { message, userEmail, userPhone, subject } = await req.json();

  if (!message || !userEmail || !userPhone || !subject) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Extract date & time from user message
  // TODO: Need to be refine because can't parse perfectly
  const parsedDate = parseUserInputToDate(message);
  if (!parsedDate) {
    return NextResponse.json(
      { error: "Couldn't understand date and time" },
      { status: 400 }
    );
  }

  const startDateTime = new Date(parsedDate);
  const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1-hour event

  const calendar = getGoogleCalendarClient();

  try {
    // Step 1: Check if the time slot is available
    const { data } = await calendar.freebusy.query({
      requestBody: {
        timeMin: startDateTime.toISOString(),
        timeMax: endDateTime.toISOString(),
        items: [{ id: calendarId }],
      },
    });

    const busySlots = data.calendars?.[calendarId]?.busy || [];
    if (busySlots.length > 0) {
      return NextResponse.json(
        { error: "Time slot is not available" },
        { status: 409 }
      );
    }

    // Step 2: Create the event
    const event = {
      summary: `Call with ${userEmail}`,
      description: `Meeting booked by chatbot. Phone: ${userPhone}. Subject: ${subject}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/Toronto",
      },
      end: { dateTime: endDateTime.toISOString(), timeZone: "America/Toronto" },
      // TODO: Sender don't recieve email
      attendees: [{ email: userEmail }, { email: "tsiry.ralamb@gmail.com" }],
      sendUpdates: "all",
    };

    const createdEvent = await calendar.events.insert({
      calendarId,
      requestBody: event,
    });

    // Step 3: Send confirmation email
    await sendConfirmationEmail(userEmail, event.summary, startDateTime);

    return NextResponse.json(
      { success: true, event: createdEvent.data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error booking meeting 2:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

import Link from "next/link";
import Icon from "@/core/ui/Icons/Icon";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto p-6 space-y-6">
      <Link className="inline-block" href={"/"}>
        <Icon name="MoveLeft" strokeWidth={2} size={26} color="white" />
      </Link>
      <h1 className="text-slate-400">Privacy Policy</h1>
      <p>Effective Date: 2025-03-17</p>

      <section>
        <h2 className="text-slate-400">1. Introduction</h2>
        <p>
          This Privacy Policy explains how <strong>tsiryralambo.me</strong>{" "}
          handles user data when interacting with the website, including
          scheduling calls via Google Calendar, using the contact form, and
          engaging with the AI chatbot. By using this website, you agree to the
          practices outlined below.
        </p>
      </section>

      <section>
        <h2 className="text-slate-400">2. Data Collection & Usage</h2>
        <p>
          <strong>Contact Form:</strong> Users provide their{" "}
          <strong>name</strong> and <strong>email</strong> through the contact
          form to allow us to respond to their inquiries via email (using
          Nodemailer). I do <strong>not store or share</strong> this information
          beyond replying to the contact request.
        </p>
        <p>
          <strong>Booking a Call via AI Chatbot:</strong> Users provide their{" "}
          <strong>name, email, phone number, and preferred meeting time</strong>{" "}
          to the AI chatbot in order to schedule a call. This data is used{" "}
          <strong>only</strong> to create an event in Google Calendar and send a
          confirmation email. The chatbot interacts with the Google Calendar API
          on the server-side to complete the booking process. In addition, the
          AI chatbot is designed to answer questions about the Tsiry&apos;s
          professional background and facilitate the booking of calls. It does{" "}
          <strong>not store or misuse</strong> any information provided during
          conversations. I do <strong>not store, sell, or share</strong> user
          information beyond the event booking process.
        </p>

        <p>
          <strong>Showcase & Projects:</strong> Users may interact with project
          showcases, but these features do not collect any personal data.
        </p>
      </section>

      <section>
        <h2 className="text-slate-400">3. Google Calendar API Usage</h2>
        <p>
          - This website integrates with <strong>Google Calendar API</strong> to
          create and manage scheduled calls. <br />- Events are added to my
          Google Calendar using a <strong>server-side integration</strong>{" "}
          (users do not sign in with Google). <br />- Attendees receive a{" "}
          <strong>confirmation email with event details</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-slate-400">4. Data Security & Retention</h2>
        <p>
          - I do <strong>not store user data</strong> after the event has been
          created or the contact inquiry has been responded to. <br />- All user
          details are used{" "}
          <strong>
            only for scheduling purposes or communication related to the contact
            form
          </strong>{" "}
          and are not retained beyond these actions.
        </p>
      </section>

      <section>
        <h2 className="text-slate-400">5. User Rights</h2>
        <p>
          - Users can request <strong>event cancellation</strong> or{" "}
          <strong>contact form follow-up</strong> by reaching out via email.{" "}
          <br />- To manage permissions, users can visit{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            className="text-blue-500 underline"
          >
            Google Account Permissions
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-slate-400">6. Contact Information</h2>
        <p>
          For any questions, please contact:{" "}
          <strong>tsiry.ralamb@gmail.com</strong>.
        </p>
      </section>
    </main>
  );
}

import nodemailer from "nodemailer";

export async function sendConfirmationEmail(
  myEmail: string | null,
  userEmail: string,
  userPhone: string,
  summary: string,
  text: string,
  eventDate: Date
) {
  const textSubject =
    myEmail === process.env.EMAIL_USERNAME
      ? `Your call with ${userEmail} / ${userPhone} is confirmed for ${eventDate.toLocaleString()} The subject will be: ${text}.`
      : `Your call with Tsiry is confirmed for ${eventDate.toLocaleString()}.`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: myEmail === process.env.EMAIL_USERNAME ? myEmail : userEmail,
    subject: summary,
    text: textSubject,
  };

  await transporter.sendMail(mailOptions);
}

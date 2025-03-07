import nodemailer from "nodemailer";

export async function sendConfirmationEmail(toEmail: string, eventTitle: string, eventDate: Date) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: toEmail,
    subject: eventTitle,
    text: `Your call is confirmed for ${eventDate.toLocaleString()}.`,
  };

  await transporter.sendMail(mailOptions);
}

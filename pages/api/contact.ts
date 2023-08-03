// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

import nodemailer from "nodemailer";

// Importez le module Transport
const { createTransport } = nodemailer;

// Créez un objet Transport
const transport = createTransport({
  host: "smtp.ionos.fr",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "bot@antonin-roy.fr",
    pass: "./dMqRNa:$5HzCN",
  },
});

// Créez un objet Mailer
const mailer = nodemailer.createTransport(transport);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ name: "Only POST requests allowed" });
    return;
  }

  const { message, contact } = req.body;

  if (!message || !contact) {
    res.status(400).json({ name: "Bad Request" });
    return;
  }

  const mailOptions = {
    from: "bot@antonin-roy.fr",
    to: ["ouaillenote.lefestival@gmail.com"],
    subject: "[NE PAS REPONDRE] Message laissé sur www.ouaillenote.com",
    text: escape(message + "\n\n" + contact),
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully!");
    }
  });
  res.status(200).json({ name: "OK" });
}

//make a method a function to avoid injection
function escape(s: string) {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

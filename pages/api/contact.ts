// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

import nodemailer, { TransportOptions } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

// Importez le module Transport
const { createTransport } = nodemailer;

// Créez un objet Transport
const transport = createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PWD,
  },
} as TransportOptions );


export default async function handler(
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
    from: {
      name: `SITE OUAILLE NOTE`,
      address: process.env.SMTP_USER,
  },
    to: [process.env.MAIL],
    subject: "[NE PAS REPONDRE] Message laissé sur www.ouaillenote.com",
    text: escape(message + "\n\n" + contact),
  };


  await new Promise((resolve, reject) => {
    // send mail
    transport.sendMail(mailOptions as MailOptions, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});
  res.status(200).json({ name: "OK" });
}

//make a method a function to avoid injection
function escape(s: string) {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

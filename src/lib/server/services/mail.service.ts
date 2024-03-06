import prisma from "@/lib/server/db";
import nodemailer from "nodemailer";
import { generateCode } from "./code.service";
import { headers } from "next/headers";
import { generateHash } from "@/lib/server/serverUtils/bcrypt.utils";

export const verifyEmail = async (code: string, userId: string) => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId,
      verificationCode: code,
    },
  });
  if (!findUser) throw Error("User verification failed!");
  await prisma.user.update({
    where: { id: userId },
    data: { verificationStatus: "VERIFIED" },
  });
};

export const sendVerificationCode = async (userId: string) => {
  const verification_code = generateCode();
  const hashedCode = await generateHash(verification_code);
  const user = await prisma.user.update({
    where: { id: userId },
    data: { verificationCode: hashedCode },
    select: { email: true, verificationCode: true },
  });
  const { email, verificationCode } = user;
  if (verificationCode) return await sendEmail(email, verification_code);
  throw Error("Error generating verification code!");
};

export const sendEmail = async (email: string, code: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: "Findpro dev team",
    to: `${email}`,
    subject: "FindPro email verification",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
        .verification-code {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
          margin-bottom: 20px;
        }
        .app-navigator, a{
          display: inline-block;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .app-navigator:hover {
          background-color: #0056b3;
          color:#fff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>FindPro registration code</h1>
        <p>Please use the following verification code to confirm your email address:</p>
        <p class="verification-code">${code}</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
        <p>Thank you!</p>
        <a href="${headers().get("origin")}" class="app-navigator">Go to app</a>
      </div>
    </body>
    </html>
      `,
  });
};

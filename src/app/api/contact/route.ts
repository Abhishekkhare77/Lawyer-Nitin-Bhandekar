// pages/api/contact.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.text(); // Convert the stream to text
    const { email, subject, message } = JSON.parse(requestBody);

    // Configure Nodemailer with your email provider settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host
      port: 587, // Replace with your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.USER_EMAIL, // Replace with your email
        pass: process.env.USER_PASS, // Replace with your email password
      },
    });

    // Send email
    await transporter.sendMail({
      from: 'ghostabhi323@gmail.com', // Replace with your email
      to: 'nbhandekarassociates@gmail.com', // Replace with recipient email
      subject,
      text: `Email: ${email}\n\nSubject: ${subject}\n\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}

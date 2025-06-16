import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, eventType } = data;

    // Basic validation
    if (!name || !email || !message || !eventType) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Environment variables for email configuration
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = process.env.EMAIL_PORT;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!emailHost || !emailPort || !emailUser || !emailPass || !emailFrom || !emailTo) {
      console.error('Email environment variables are not set.');
      return NextResponse.json({ message: 'Email service is not configured on the server.' }, { status: 500 });
    }

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: emailHost,
      port: parseInt(emailPort, 10),
      secure: parseInt(emailPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const subject = `New Contact Form Submission - ${eventType}`;
    const textContent = `
      You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Event Type: ${eventType}
      Message:
      ${message}
    `;
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${emailFrom}>`, // sender address (can be emailFrom, or a name/emailFrom combo)
      to: emailTo, // list of receivers
      subject: subject, // Subject line
      text: textContent, // plain text body
      html: htmlContent, // html body
    });

    return NextResponse.json({ message: 'Form submitted successfully and email sent!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request or sending email:', error);
    // Check if the error is from nodemailer and provide a more specific message
    if (error.code === 'EENVELOPE' || error.code === 'ESOCKET' || error.code === 'EAUTH') {
        return NextResponse.json({ message: 'Error sending email. Please check server email configuration.', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error processing request', error: error.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const senderApiKey = process.env.SENDER_API_KEY;
    
    if (!senderApiKey) {
      console.error('SENDER_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email via Sender.net API
    const response = await fetch('https://api.sender.net/v2/message/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${senderApiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        to: {
          email: email,
          name: name,
        },
        from: {
          email: process.env.SENDER_FROM_EMAIL || 'noreply@yourdomain.com',
          name: process.env.SENDER_FROM_NAME || 'Your Company',
        },
        subject: 'Thank you for contacting us!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #00CC61; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f9f9f9; padding: 30px; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Thank You for Reaching Out!</h1>
                </div>
                <div class="content">
                  <p>Dear ${name},</p>
                  <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
                  <p><strong>Your message:</strong></p>
                  <p style="background-color: white; padding: 15px; border-left: 4px solid #00CC61;">
                    ${message || 'No message provided'}
                  </p>
                  <p><strong>Contact details:</strong></p>
                  <ul>
                    <li>Email: ${email}</li>
                    <li>Phone: ${phone || 'Not provided'}</li>
                  </ul>
                  <p>We typically respond within 24-48 hours.</p>
                  <p>Best regards,<br>Your Team</p>
                </div>
                <div class="footer">
                  <p>This is an automated message. Please do not reply to this email.</p>
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nYour message: ${message || 'No message provided'}\n\nContact details:\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nWe typically respond within 24-48 hours.\n\nBest regards,\nYour Team`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Sender.net API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

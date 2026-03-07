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

    // Get template ID (Campaign ID) from environment variable
    const templateId = process.env.SENDER_TEMPLATE_ID;

    if (!templateId) {
      console.error('SENDER_TEMPLATE_ID is not configured');
      return NextResponse.json(
        { error: 'Email template not configured' },
        { status: 500 }
      );
    }

    // Prepare the payload for Sender.net
    // Based on Sender.net API docs, custom fields should be at root level
    const payload = {
      to: {
        email: email,
        name: name,
      },
      variables: {
        firstname: name,
        lastname: '',
        email: email,
        phone: phone || 'Not provided',
        message: message || 'No message provided',
      },
    };

    console.log('Sending email with payload:', JSON.stringify(payload, null, 2));

    // Send email via Sender.net API using template
    // Endpoint format: https://api.sender.net/v2/message/{CAMPAIGN_ID}/send
    const response = await fetch(`https://api.sender.net/v2/message/${templateId}/send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${senderApiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
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
    console.log('Sender.net response:', JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

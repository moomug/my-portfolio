// app/api/contact/route.ts
import { NextResponse } from 'next/server';

// ADDED THIS LINE to prevent Next.js from caching the API route
export const dynamic = 'force-dynamic'; 

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Missing Web3Forms Access Key");
      return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json({ success: false, message: 'Failed to send' }, { status: 400 });
    }
  } catch (error) {
    console.error("Internal API error:", error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
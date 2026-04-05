import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Missing Web3Forms Access Key in Vercel Environment Variables");
      return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    // Send the data to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // This header tricks Cloudflare into thinking we are a real Chrome browser!
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      }),
    });

    // 1. Read the raw text first to prevent JSON crashes
    const text = await response.text();

    // 2. Try to parse it safely
    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error("Web3Forms sent HTML instead of JSON! Here is the raw response:", text);
      return NextResponse.json({ success: false, message: 'Blocked by email server firewall' }, { status: 502 });
    }

    // 3. Return the result to the frontend
    if (result.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("Web3Forms rejected the submission:", result);
      return NextResponse.json({ success: false, message: result.message || 'Failed to send' }, { status: 400 });
    }
  } catch (error) {
    console.error("Internal API error:", error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
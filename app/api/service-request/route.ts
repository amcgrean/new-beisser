import { NextResponse } from "next/server";

const branchPhones: Record<string, string> = {
  grimes: "(515) 986-4422",
  coralville: "(319) 545-7120",
  "fort-dodge": "(515) 573-4166",
  "birchwood-johnston": "(515) 986-4422",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const to = process.env.SERVICE_REQUEST_EMAIL || process.env.CONTACT_EMAIL;

    if (!resendApiKey || !fromEmail || !to) {
      return NextResponse.json({ error: "Missing service request email configuration." }, { status: 500 });
    }

    const summary = `
Service request received.

Name: ${body.name}
Company: ${body.company || ""}
Email: ${body.email}
Phone: ${body.phone || ""}
Branch: ${body.branch || "grimes"}
Service type: ${body.service_type || ""}
Contact method: ${body.contact_method || ""}
Description: ${body.description || ""}
`;

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        reply_to: body.email,
        subject: `New service request — ${body.service_type || "General"}`,
        text: summary,
      }),
    });

    return NextResponse.json({ ok: true, branchPhone: branchPhones[String(body.branch || "grimes")] ?? branchPhones.grimes });
  } catch {
    return NextResponse.json({ error: "Unable to submit service request." }, { status: 500 });
  }
}

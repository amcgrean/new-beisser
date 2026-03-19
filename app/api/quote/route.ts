import { NextResponse } from "next/server";

const branchEmails: Record<string, string | undefined> = {
  grimes: process.env.QUOTE_EMAIL_GRIMES,
  coralville: process.env.QUOTE_EMAIL_CORALVILLE,
  "fort-dodge": process.env.QUOTE_EMAIL_FORT_DODGE,
  "birchwood-johnston": process.env.QUOTE_EMAIL_BIRCHWOOD,
};

const branchPhones: Record<string, string> = {
  grimes: "(515) 986-4422",
  coralville: "(319) 545-7120",
  "fort-dodge": "(515) 573-4166",
  "birchwood-johnston": "(515) 986-4422",
};

const branchLabels: Record<string, string> = {
  grimes: "Grimes (Main Yard)",
  coralville: "Coralville",
  "fort-dodge": "Fort Dodge",
  "birchwood-johnston": "Birchwood / Johnston (Showroom)",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const branch = String(body.branch || "grimes").toLowerCase();
    const to = branchEmails[branch];

    if (!to) {
      return NextResponse.json({ error: "Missing branch email routing config." }, { status: 500 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const centralCc = process.env.QUOTE_EMAIL_CC;

    if (!resendApiKey || !fromEmail) {
      return NextResponse.json({ error: "Missing email provider environment config." }, { status: 500 });
    }

    const branchName = branchLabels[branch] ?? branchLabels.grimes;
    const summary = `
Quote request received.

Name: ${body.name}
Company: ${body.company || ""}
Email: ${body.email}
Phone: ${body.phone || ""}
Branch: ${branchName}
Project type: ${body.project_type || ""}
Product category: ${body.product_category || ""}
Project description: ${body.project_description || ""}
UTM source: ${body.utm_source || ""}
UTM medium: ${body.utm_medium || ""}
Referrer: ${body.referrer || ""}
Landing page: ${body.landing_page || ""}
Source page: ${body.source_page || ""}
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
        cc: centralCc ? [centralCc] : undefined,
        reply_to: body.email,
        subject: `New quote request — ${branchName}`,
        text: summary,
      }),
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [body.email],
        reply_to: to,
        subject: `Your quote request has been received — ${branchName}`,
        text: `Thanks for contacting Beisser Lumber.\n\nWe received your quote request and will be in touch within 1 business day.\n\nBranch: ${branchName}\nBranch phone: ${branchPhones[branch] ?? branchPhones.grimes}\n\nSummary:\n${summary}`,
      }),
    });

    return NextResponse.json({ ok: true, branchPhone: branchPhones[branch] ?? branchPhones.grimes });
  } catch {
    return NextResponse.json({ error: "Unable to submit quote request." }, { status: 500 });
  }
}

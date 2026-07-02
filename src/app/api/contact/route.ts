import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Developer test mode fallback if API key is not configured yet
    if (!apiKey || apiKey === "test" || apiKey === "") {
      console.warn("RESEND_API_KEY is not configured. Simulating successful email submission.");
      return NextResponse.json({
        success: true,
        message: "Simulation mode: API key is not set. Data received correctly.",
        data: { name, email, phone, service, message }
      });
    }

    // Helper map to display user-friendly service names
    const serviceNames: Record<string, string> = {
      strategy: "Business Strategy",
      operations: "Operational Improvement",
      structuring: "Corporate Structuring",
      financial: "Financial & Commercial Advisory",
      accounting: "Accounting & Bookkeeping",
      compliance: "Compliance & Risk Advisory",
    };
    const selectedServiceName = serviceNames[service] || service || "General Consultation";

    // 1. Send Notification Email to CAMEO admin (contact@cameoconsultancy.services)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; color: #1e293b;">
        <h2 style="color: #ff6b00; margin-bottom: 20px;">New Consultation Query</h2>
        <p style="font-size: 16px; line-height: 1.6;">You have received a new consultation query from the CAMEO website.</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #0f172a;">Client Name:</td>
            <td style="padding: 8px 0; color: #475569;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Email Address:</td>
            <td style="padding: 8px 0; color: #475569;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Phone Number:</td>
            <td style="padding: 8px 0; color: #475569;">${phone || "Not Provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Service of Interest:</td>
            <td style="padding: 8px 0; color: #ff6b00; font-weight: bold;">${selectedServiceName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top; color: #0f172a;">Message:</td>
            <td style="padding: 8px 0; color: #475569; white-space: pre-wrap; line-height: 1.5;">${message}</td>
          </tr>
        </table>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 20px;">
          This is an automated notification from the CAMEO Portfolio System.
        </p>
      </div>
    `;

    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "CAMEO Website <contact@cameoconsultancy.services>",
        to: ["contact@cameoconsultancy.services"],
        subject: `New Lead: ${selectedServiceName} - ${name}`,
        html: adminEmailHtml,
      }),
    });

    const adminResult = await adminResponse.json();

    if (!adminResponse.ok) {
      console.error("Resend Admin Email Error:", adminResult);
      return NextResponse.json(
        { error: adminResult.message || "Failed to deliver enquiry to administration." },
        { status: adminResponse.status }
      );
    }

    // 2. Send Auto-Reply Confirmation Email to the Client/Visitor
    const visitorEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; color: #1e293b; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">CAMEO</h2>
          <p style="color: #ff6b00; margin: 4px 0 0 0; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Management Consultancies</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 24px;" />
        <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-top: 0;">Dear ${name},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #334155;">
          Thank you for contacting <strong>CAMEO Management Consultancies</strong>. We have successfully received your query regarding our <strong>${selectedServiceName}</strong> services.
        </p>
        <p style="font-size: 15px; line-height: 1.6; color: #334155;">
          Our advisory team is reviewing your requirements, and a consultant will reach out to you within the next <strong>24 business hours</strong> to schedule an initial consultation.
        </p>
        
        <div style="background-color: #f8fafc; border-left: 4px solid #ff6b00; padding: 16px; margin: 24px 0; border-radius: 4px 8px 8px 4px;">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #0f172a; font-weight: bold;">Submission Summary:</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #475569; line-height: 1.6;">
            <li><strong>Service of Interest:</strong> ${selectedServiceName}</li>
            <li><strong>Phone:</strong> ${phone || "Not Provided"}</li>
            <li><strong>Message Detail:</strong> "${message.length > 120 ? message.substring(0, 120) + "..." : message}"</li>
          </ul>
        </div>

        <p style="font-size: 15px; line-height: 1.6; color: #334155;">
          If you have any immediate questions or would like to connect with us sooner, you can reach our office directly via WhatsApp at <a href="https://wa.me/971585594087" style="color: #25d366; font-weight: bold; text-decoration: none;">+971 58 559 4087</a>.
        </p>
        
        <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 30px 0 20px 0;" />
        <div style="text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.5;">
          <p style="margin: 0 0 4px 0; font-weight: bold; color: #64748b;">CAMEO Management Consultancies L.L.C</p>
          <p style="margin: 0 0 4px 0;">Office 702, Metropolis Tower, Floor 7, Business Bay, Dubai, UAE</p>
          <p style="margin: 0;"><a href="mailto:contact@cameoconsultancy.services" style="color: #ff6b00; text-decoration: none;">contact@cameoconsultancy.services</a> | +971 58 559 4087</p>
        </div>
      </div>
    `;

    // Attempt visitor notification (fail silently or log but don't fail user experience if visitor auto-reply fails)
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "CAMEO Consultancy <contact@cameoconsultancy.services>",
          to: [email],
          subject: "Consultation Request Received - CAMEO",
          html: visitorEmailHtml,
        }),
      });
    } catch (visitorError) {
      console.warn("Could not deliver auto-reply email to visitor:", visitorError);
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("API Contact Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during submission.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

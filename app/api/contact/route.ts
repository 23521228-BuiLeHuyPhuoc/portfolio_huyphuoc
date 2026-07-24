import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    ""
  );
}

function isRateLimited(ip: string) {
  if (!ip) return false;

  const now = Date.now();
  const recentRequests = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return Response.json(
      { message: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";
  const website =
    typeof payload.website === "string" ? payload.website.trim() : "";

  // Bots often fill this hidden field. Return success without sending anything.
  if (website) {
    return Response.json({ message: "Message sent successfully." });
  }

  if (!name || name.length > 100) {
    return Response.json(
      { message: "Please enter a valid name." },
      { status: 400 },
    );
  }

  if (
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!message || message.length > 5000) {
    return Response.json(
      { message: "Please enter a message under 5,000 characters." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactToEmail =
    process.env.CONTACT_TO_EMAIL || "huyphuoc09112005@gmail.com";

  if (!gmailUser || !gmailAppPassword) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD.");
    return Response.json(
      { message: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const safeName = name.replace(/[\r\n]+/g, " ");

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: contactToEmail,
      replyTo: email,
      subject: `New portfolio message from ${safeName}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return Response.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json(
      { message: "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }
}

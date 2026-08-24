import { Resend } from "resend";
import { renderConfirmationEmail } from "@/lib/emailTemplates";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "hola@regest.es";
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? "ReGest <hola@regest.es>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Datos inválidos." }, { status: 400 });
  }

  const { name, email, phone, message, company } = body as Record<string, unknown>;

  // Honeypot: bots fill hidden fields, real users never do.
  if (typeof company === "string" && company.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "El email no es válido." }, { status: 400 });
  }

  if (typeof phone === "string" && phone.trim() && !isValidPhone(phone)) {
    return Response.json({ error: "El teléfono no es válido." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada.");
    return Response.json(
      { error: "El envío de correo no está configurado todavía." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Nuevo contacto de ${name} — web ReGest`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${typeof phone === "string" && phone.trim() ? phone : "-"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Error de Resend al enviar contacto:", error);
      return Response.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }
  } catch (error) {
    console.error("Error inesperado enviando contacto:", error);
    return Response.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
  }

  // Confirmación al remitente. No bloquea la respuesta si falla: el mensaje
  // ya llegó a ReGest, que es lo que importa de verdad.
  try {
    const { html, text } = renderConfirmationEmail({ name, message });
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: email,
      subject: "Hemos recibido tu mensaje — ReGest",
      html,
      text,
    });

    if (error) {
      console.error("Error de Resend al enviar confirmación:", error);
    }
  } catch (error) {
    console.error("Error inesperado enviando confirmación:", error);
  }

  return Response.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BRAND_GREEN = "#27AE9D";
const BRAND_DARK = "#222B2E";
const BRAND_DARK_SOFT = "#3A464A";
const BRAND_GREEN_LIGHT = "#E6F5F3";

export function renderConfirmationEmail({
  name,
  message,
}: {
  name: string;
  message: string;
}): { html: string; text: string } {
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const html = `<!doctype html>
<html lang="es">
  <body style="margin:0; padding:0; background-color:#f4f5f5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f5; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color:#ffffff; border-radius: 12px; overflow: hidden;">
            <tr>
              <td style="background-color:${BRAND_DARK}; padding: 24px 28px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:${BRAND_GREEN}; width:36px; height:36px; border-radius:8px; text-align:center; vertical-align:middle;">
                      <span style="color:#ffffff; font-size:18px; font-weight:800; line-height:36px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">R</span>
                    </td>
                    <td style="padding-left:10px; vertical-align:middle;">
                      <span style="font-size:18px; font-weight:800; color:${BRAND_GREEN};">Re</span><span style="font-size:18px; font-weight:800; color:#ffffff;">Gest</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 28px 8px;">
                <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:${BRAND_DARK};">Hola ${safeName},</p>
                <p style="margin:0 0 16px; font-size:15px; line-height:1.6; color:${BRAND_DARK_SOFT};">
                  Gracias por escribirnos. Hemos recibido tu mensaje y te contestaremos lo antes posible a este mismo correo.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND_GREEN_LIGHT}; border-radius: 8px; margin: 8px 0 24px;">
                  <tr>
                    <td style="padding: 16px 18px; font-size:14px; line-height:1.6; color:${BRAND_DARK}; font-style: italic;">
                      &ldquo;${safeMessage}&rdquo;
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 4px; font-size:15px; line-height:1.6; color:${BRAND_DARK_SOFT};">Un saludo,</p>
                <p style="margin:0 0 28px; font-size:15px; line-height:1.6; color:${BRAND_DARK}; font-weight:600;">El equipo de ReGest</p>
              </td>
            </tr>
            <tr>
              <td style="border-top: 2px solid ${BRAND_GREEN}; background-color:#fafafa; padding: 20px 28px;">
                <p style="margin:0 0 6px; font-size:12px; line-height:1.6; color:${BRAND_DARK_SOFT};">
                  <strong style="color:${BRAND_DARK};">ReGest</strong> — El ERP para autónomos y pequeñas empresas de construcción y reformas.
                </p>
                <p style="margin:0; font-size:12px; line-height:1.6; color:${BRAND_DARK_SOFT};">
                  <a href="https://regest.es" style="color:${BRAND_GREEN}; text-decoration:none;">regest.es</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:hola@regest.es" style="color:${BRAND_GREEN}; text-decoration:none;">hola@regest.es</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `Hola ${name},`,
    "",
    "Gracias por escribirnos. Hemos recibido tu mensaje y te contestaremos lo antes posible a este mismo correo.",
    "",
    "Esto es lo que nos has contado:",
    `"${message}"`,
    "",
    "Un saludo,",
    "El equipo de ReGest",
    "",
    "—",
    "ReGest — El ERP para autónomos y pequeñas empresas de construcción y reformas.",
    "regest.es · hola@regest.es",
  ].join("\n");

  return { html, text };
}

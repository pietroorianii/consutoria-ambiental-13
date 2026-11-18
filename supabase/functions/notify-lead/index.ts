// supabase/functions/notify-lead/index.ts
// Disparada por Database Webhook no INSERT das tabelas CONTATOS e ORÇAMENTOS.
// Envia e-mail de aviso para a Axis via Resend (resend.com).
//
// Variáveis (Supabase > Edge Functions > Secrets):
//   RESEND_API_KEY   obrigatória
//   WEBHOOK_SECRET   obrigatória — o mesmo valor vai no header x-supabase-webhook-secret do webhook
//   NOTIFY_EMAIL     destino dos avisos (padrão contato@axisambiental.com.br)
//   FROM_EMAIL       remetente verificado no Resend (padrão noreply@axisambiental.com.br)

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

interface SupabaseWebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: Record<string, unknown>;
  old_record: Record<string, unknown> | null;
}

/** Escapa texto do usuário antes de inserir no HTML do e-mail (evita injeção de HTML/links falsos). */
const esc = (v: unknown): string =>
  String(v ?? "—")
    .slice(0, 4000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br>");

const pick = (r: Record<string, unknown>, ...keys: string[]) => {
  for (const k of keys) if (r[k] !== undefined && r[k] !== null && r[k] !== "") return r[k];
  return undefined;
};

const QUOTE_TABLES = new Set(["ORÇAMENTOS", "ORCAMENTOS", "quotes", "orcamentos"]);

serve(async (req: Request): Promise<Response> => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  // O segredo agora é OBRIGATÓRIO: sem ele, qualquer pessoa poderia usar esta função para disparar e-mails.
  const webhookSecret = Deno.env.get("WEBHOOK_SECRET");
  if (!webhookSecret) {
    console.error("WEBHOOK_SECRET não configurado");
    return new Response("Server misconfigured", { status: 500 });
  }
  if (req.headers.get("x-supabase-webhook-secret") !== webhookSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: SupabaseWebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }
  if (payload.type !== "INSERT") return new Response("Ignored", { status: 200 });

  const r = payload.record ?? {};
  const isQuote = QUOTE_TABLES.has(payload.table);

  const name = pick(r, "full_name", "name", "nome") ?? "—";
  const email = String(pick(r, "email") ?? "");
  const rows: [string, unknown][] = isQuote
    ? [
        ["Nome", name],
        ["Empresa", pick(r, "company")],
        ["CPF/CNPJ", pick(r, "document_id")],
        ["E-mail", email],
        ["Telefone", pick(r, "phone")],
        ["Segmento", pick(r, "segment")],
        ["Localização", pick(r, "location")],
        ["Porte", pick(r, "size")],
        ["Serviço", pick(r, "service")],
        ["Detalhes do serviço", pick(r, "service_details")],
        ["Prazo desejado", pick(r, "deadline")],
        ["Já tem licença?", pick(r, "has_license") ? `Sim. ${pick(r, "license_details") ?? ""}` : "Não"],
        ["Tem notificação/autuação?", pick(r, "has_notifications") ? `Sim. ${pick(r, "notification_details") ?? ""}` : "Não"],
        ["Orçamento estimado", pick(r, "estimated_budget")],
        ["Descrição", pick(r, "description")],
        ["Observações", pick(r, "observations")],
      ]
    : [
        ["Nome", name],
        ["E-mail", email],
        ["Telefone", pick(r, "phone")],
        ["Empresa", pick(r, "company")],
        ["Assunto", pick(r, "subject")],
        ["Mensagem", pick(r, "message")],
      ];

  const createdAt = String(pick(r, "created_at") ?? new Date().toISOString());
  const when = new Date(createdAt).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const subject = `[AXIS] ${isQuote ? "Novo pedido de orçamento" : "Nova mensagem de contato"}: ${String(name).slice(0, 80)}`;

  const html = `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
    <div style="background:#0A2433;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
      <strong style="font-size:18px">Axis Soluções Ambientais</strong><br>
      <span style="color:#94C13A">${isQuote ? "Novo pedido de orçamento" : "Nova mensagem de contato"}</span>
    </div>
    <table style="border-collapse:collapse;width:100%;font-size:14px">
      ${rows
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([k, v]) => `<tr><td style="padding:10px;border:1px solid #e5eaec;background:#F2F5F4;width:34%;font-weight:bold">${esc(k)}</td><td style="padding:10px;border:1px solid #e5eaec">${esc(v)}</td></tr>`)
        .join("")}
      <tr><td style="padding:10px;border:1px solid #e5eaec;background:#F2F5F4;font-weight:bold">Recebido em</td><td style="padding:10px;border:1px solid #e5eaec">${esc(when)}</td></tr>
    </table>
    <p style="color:#5E7480;font-size:12px">Responda este e-mail para falar direto com o cliente.</p>
  </div>`;

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("RESEND_API_KEY não configurada");
    return new Response("RESEND_API_KEY missing", { status: 500 });
  }
  const notifyEmail = Deno.env.get("NOTIFY_EMAIL") ?? "contato@axisambiental.com.br";
  const fromEmail = Deno.env.get("FROM_EMAIL") ?? "noreply@axisambiental.com.br";
  const validReplyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendApiKey}` },
    body: JSON.stringify({ from: `Site Axis <${fromEmail}>`, to: [notifyEmail], subject, html, reply_to: validReplyTo }),
  });

  if (!res.ok) {
    console.error("Erro Resend:", await res.text());
    return new Response("Email provider error", { status: 502 });
  }
  return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "Content-Type": "application/json" } });
});

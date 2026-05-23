// supabase/functions/notify-lead/index.ts
// Edge Function do Supabase — dispara via Webhook Database no INSERT de contatos ou orçamentos
// Envia e-mail de notificação via Resend (resend.com)

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// ---------------------------------------------------------------------------
// Tipos do payload do webhook do Supabase
// ---------------------------------------------------------------------------
interface SupabaseWebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: Record<string, unknown>;
  old_record: Record<string, unknown> | null;
}

// ---------------------------------------------------------------------------
// Handler principal
// ---------------------------------------------------------------------------
serve(async (req: Request): Promise<Response> => {
  // Apenas aceita POST
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Valida o segredo compartilhado (configura em Settings > Webhooks no Supabase)
  const webhookSecret = Deno.env.get("WEBHOOK_SECRET");
  const authHeader = req.headers.get("x-supabase-webhook-secret");
  if (webhookSecret && authHeader !== webhookSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  let payload: SupabaseWebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // Ignora eventos que não sejam INSERT
  if (payload.type !== "INSERT") {
    return new Response("Ignored (not INSERT)", { status: 200 });
  }

  // ---------------------------------------------------------------------------
  // Extrai dados do lead
  // ---------------------------------------------------------------------------
  const record = payload.record;
  const table = payload.table; // 'contacts' ou 'quotes'
  const isQuote = table === "quotes" || table === "orcamentos";

  const name = String(record.name ?? record.nome ?? "—");
  const email = String(record.email ?? "—");
  const phone = String(record.phone ?? record.telefone ?? "—");
  const company = String(record.company ?? record.empresa ?? "—");
  const message = String(record.message ?? record.mensagem ?? record.observations ?? record.observacoes ?? "—");
  const service = String(record.service_type ?? record.tipo_servico ?? "—");
  const createdAt = String(record.created_at ?? new Date().toISOString());

  const subject = isQuote
    ? `[SOLARI] Novo pedido de orçamento — ${name}`
    : `[SOLARI] Nova mensagem de contato — ${name}`;

  const htmlBody = `
    <h2 style="color:#2A6F47;font-family:sans-serif;">
      ${isQuote ? "📋 Novo Pedido de Orçamento" : "📩 Nova Mensagem de Contato"}
    </h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #eee;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">E-mail</td><td style="padding:8px;border:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Telefone</td><td style="padding:8px;border:1px solid #eee;">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Empresa</td><td style="padding:8px;border:1px solid #eee;">${company}</td></tr>
      ${isQuote ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Serviço solicitado</td><td style="padding:8px;border:1px solid #eee;">${service}</td></tr>` : ""}
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Mensagem</td><td style="padding:8px;border:1px solid #eee;">${message}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold;">Data/Hora</td><td style="padding:8px;border:1px solid #eee;">${new Date(createdAt).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</td></tr>
    </table>
    <p style="font-family:sans-serif;color:#666;margin-top:16px;font-size:12px;">
      Esta mensagem foi gerada automaticamente pela Edge Function <code>notify-lead</code> do Supabase.
    </p>
  `;

  // ---------------------------------------------------------------------------
  // Envia via Resend API
  // ---------------------------------------------------------------------------
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const notifyEmail = Deno.env.get("NOTIFY_EMAIL") ?? "contato@solari.com.br";
  const fromEmail = Deno.env.get("FROM_EMAIL") ?? "noreply@solari.com.br";

  if (!resendApiKey) {
    console.error("RESEND_API_KEY não configurada");
    return new Response("RESEND_API_KEY missing", { status: 500 });
  }

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: `Solari Site <${fromEmail}>`,
      to: [notifyEmail],
      subject,
      html: htmlBody,
      reply_to: email !== "—" ? email : undefined,
    }),
  });

  if (!resendRes.ok) {
    const err = await resendRes.text();
    console.error("Erro Resend:", err);
    return new Response(`Resend error: ${err}`, { status: 500 });
  }

  console.log(`Lead notificado: ${subject}`);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

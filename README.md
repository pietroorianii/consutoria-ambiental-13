# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b62d3b15-80f4-4186-98cc-0d630cb4fc1c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b62d3b15-80f4-4186-98cc-0d630cb4fc1c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/b62d3b15-80f4-4186-98cc-0d630cb4fc1c) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

---

## 🔔 Notificação de Leads — Edge Function Supabase

A pasta `supabase/functions/notify-lead/` contém uma Edge Function que envia um
e-mail de notificação sempre que um novo lead (contato ou orçamento) é inserido
no banco de dados.

### Variáveis de ambiente necessárias

Configure as seguintes variáveis no painel do Supabase em
**Project Settings → Edge Functions → Secrets**:

| Variável | Descrição | Exemplo |
|---|---|---|
| `RESEND_API_KEY` | Chave da API do Resend (resend.com) | `re_XXXXXXXXXXXX` |
| `NOTIFY_EMAIL` | E-mail que receberá as notificações | `contato@solari.com.br` |
| `FROM_EMAIL` | E-mail remetente (deve ser verificado no Resend) | `noreply@solari.com.br` |
| `WEBHOOK_SECRET` | Segredo compartilhado com o webhook (opcional mas recomendado) | `sua_senha_segura_aqui` |

### Deploy da Edge Function

```sh
# Instale a Supabase CLI
npm install -g supabase

# Faça login
supabase login

# Deploy da função
supabase functions deploy notify-lead --project-ref <SEU_PROJECT_REF>
```

### Configurar Webhook no Supabase

1. Acesse o painel do Supabase: **Database → Webhooks → Create a new hook**
2. Configure os dois webhooks:

**Webhook 1 — Tabela de Contatos:**
- Name: `notify-contact`
- Table: `contacts` (ou o nome real da sua tabela)
- Events: ✅ Insert
- HTTP Request: `POST`
- URL: `https://<SEU_PROJECT_REF>.functions.supabase.co/notify-lead`
- HTTP Headers: `x-supabase-webhook-secret: <WEBHOOK_SECRET>`

**Webhook 2 — Tabela de Orçamentos:**
- Name: `notify-quote`
- Table: `quotes` (ou `orcamentos`)
- Events: ✅ Insert
- HTTP Request: `POST`
- URL: `https://<SEU_PROJECT_REF>.functions.supabase.co/notify-lead`
- HTTP Headers: `x-supabase-webhook-secret: <WEBHOOK_SECRET>`

### Testar localmente

```sh
supabase functions serve notify-lead --env-file .env.local

# Em outro terminal, simule um webhook:
curl -X POST http://localhost:54321/functions/v1/notify-lead \
  -H "Content-Type: application/json" \
  -H "x-supabase-webhook-secret: sua_senha_segura_aqui" \
  -d '{
    "type": "INSERT",
    "table": "contacts",
    "schema": "public",
    "record": {
      "name": "João Silva",
      "email": "joao@empresa.com.br",
      "phone": "(42) 99999-0000",
      "message": "Preciso de licença ambiental.",
      "created_at": "2025-05-23T22:00:00Z"
    },
    "old_record": null
  }'
```


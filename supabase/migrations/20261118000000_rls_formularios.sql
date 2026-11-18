-- Axis — segurança das tabelas de formulário (CONTATOS e ORÇAMENTOS)
-- Objetivo: o site (chave pública "anon") pode APENAS inserir. Ninguém de fora lê, altera ou apaga leads.
-- Rode no SQL Editor do projeto Supabase que o site usa (ver supabase/config.toml e src/integrations/supabase/client.ts).

alter table public."CONTATOS"   enable row level security;
alter table public."ORÇAMENTOS" enable row level security;

drop policy if exists "site_insere_contatos" on public."CONTATOS";
create policy "site_insere_contatos" on public."CONTATOS"
  for insert to anon, authenticated
  with check (
    char_length(coalesce(name, '')) between 2 and 100
    and char_length(coalesce(message, '')) between 10 and 2000
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

drop policy if exists "site_insere_orcamentos" on public."ORÇAMENTOS";
create policy "site_insere_orcamentos" on public."ORÇAMENTOS"
  for insert to anon, authenticated
  with check (
    terms_accepted is true
    and char_length(coalesce(full_name, '')) between 2 and 120
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

-- Sem políticas de SELECT/UPDATE/DELETE para anon: leitura só pelo painel do Supabase (service role).

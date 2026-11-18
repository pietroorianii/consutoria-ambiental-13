# Auditoria do site Axis Soluções Ambientais

Data: 18/11/2026 · Escopo: front-end, back-end (Supabase + Edge Function), SEO, performance, acessibilidade, conteúdo comercial e conteúdo legal.

Legenda de gravidade: 🔴 crítico · 🟠 alto · 🟡 médio · ⚪ baixo
Status: ✅ corrigido neste pacote · ⏳ depende do Pietro (informação ou acesso que só ele tem)

---

## 1. Back-end, dados e segurança

| # | Gravidade | Problema encontrado | Status |
|---|---|---|---|
| 1.1 | 🔴 | **O site grava os formulários num projeto Supabase (`ndygqfwwshjngzukypyr`) que não aparece na sua conta Supabase.** As contas conectadas mostram só `consutoria-ambiental-13` (inativo) e `aivyno-sp`. É provável que esse banco seja gerenciado pelo Lovable ou esteja em outra conta. Se ninguém olha esse banco, **os leads estão se perdendo.** | ⏳ Confirmar onde o banco está e se os contatos chegam. Faça um envio de teste. |
| 1.2 | 🔴 | **Os anexos do pedido de orçamento eram descartados.** O formulário deixava escolher arquivos, mas gravava só o nome; o arquivo nunca era enviado. O cliente achava que tinha mandado a licença ou a notificação. | ✅ Campo falso removido. Agora o formulário orienta o envio por WhatsApp/e-mail. Para ter upload de verdade, é preciso criar um bucket no Supabase Storage. |
| 1.3 | 🔴 | **E-mail de aviso não funcionava para orçamentos.** A função `notify-lead` esperava tabelas `contacts`/`quotes`, mas as tabelas reais são `CONTATOS`/`ORÇAMENTOS`, e o campo de nome é `full_name`. O e-mail chegava como "contato" e sem nome. | ✅ Mapeamento corrigido, com todos os campos do orçamento no e-mail. |
| 1.4 | 🔴 | **A função de e-mail podia ser usada por qualquer pessoa para disparar e-mails.** O segredo do webhook era opcional. | ✅ Segredo agora obrigatório. |
| 1.5 | 🟠 | **Injeção de HTML no e-mail.** Textos digitados pelo visitante entravam crus no HTML (dava para inserir links falsos no e-mail que chega para você). | ✅ Todo texto é escapado. |
| 1.6 | 🟠 | Sem proteção anti-spam nos formulários. | ✅ Campo invisível (honeypot) e tempo mínimo de preenchimento, sem captcha. |
| 1.7 | 🟠 | Regras de acesso (RLS) das tabelas não versionadas: impossível saber se alguém de fora consegue **ler** os leads com a chave pública. | ✅ Criado `supabase/migrations/20261118000000_rls_formularios.sql` (só inserir, ninguém lê). ⏳ Rodar no SQL Editor do projeto certo. |
| 1.8 | 🟡 | O validador de nome recusava nomes reais (D'Ávila, Ana-Maria, Jr.). | ✅ |
| 1.9 | 🟡 | O aviso de LGPD dizia que os dados "não serão compartilhados com terceiros", mas eles passam por Supabase, Resend e Google. | ✅ Texto corrigido nos formulários e na Política de Privacidade. |
| 1.10 | 🟡 | Política de Privacidade exibia `[INSERIR_CNPJ_REAL]` e `[INSERIR_NOME_DPO]` em laranja, para o público. | ✅ Placeholders removidos. Encarregado definido como Pietro. ⏳ Informar o CNPJ em `src/config/company.ts`. |

## 2. Conteúdo comercial e credibilidade

| # | Gravidade | Problema | Status |
|---|---|---|---|
| 2.1 | 🔴 | **Nota interna de estratégia aparecia para o cliente** na página de Emissões Atmosféricas: *"Este serviço gera receita recorrente garantida: o cliente paga todo ano…"*. Em Outorga, também: *"…é diferencial competitivo para a consultoria"*. | ✅ Removidas e reescritas com foco no cliente. |
| 2.2 | 🔴 | **Afirmações não comprováveis:** "experiência direta no IAT", "mais de 100 processos", "fundada por profissionais com experiência real dentro do IAT", "décadas de experiência", "centenas de projetos", "Resultados Garantidos", "Equipe certificada". Isso é risco de propaganda enganosa (CDC, art. 37) e de questionamento ético no CREA. | ✅ Trocadas por diferenciais verificáveis (ART, enquadramento prévio, acompanhamento até a decisão). ⏳ Se algum número for real e comprovável, me envie que eu recoloco. |
| 2.3 | 🟠 | **Dados de contato contraditórios:** 3 telefones diferentes (rodapé, Contato, WhatsApp), e-mails diferentes, horários diferentes. | ✅ Fonte única em `src/config/company.ts`. ⏳ Preencher os dados reais (todos marcados PENDENTE). |
| 2.4 | 🟠 | Página Sobre com a foto da equipe quebrada (arquivo inexistente). | ✅ Mostra as iniciais enquanto não há foto. ⏳ Enviar uma foto profissional. |
| 2.5 | 🟡 | Texto de preenchimento repetido em todos os cards de serviço ("Nossos especialistas fornecem consultoria personalizada…"). | ✅ Removido. |
| 2.6 | 🟡 | Visão "referência nacional" incoerente com o foco em Ponta Grossa/PR. | ✅ Missão, visão e valores reescritos, alinhados ao manifesto Inovar/Preservar/Transformar. |
| 2.7 | ⚪ | Depoimentos fictícios em componente não usado (`testimonials.tsx`). Risco se fossem reativados. | ✅ Arquivo removido. |

## 3. Conteúdo legal (verificado em fontes públicas em 18/11/2026)

| # | Gravidade | Problema | Status |
|---|---|---|---|
| 3.1 | 🔴 | **O site não mencionava a Lei Federal nº 15.190/2025** (Lei Geral do Licenciamento Ambiental), em vigor desde 04/02/2026. O Congresso derrubou 52 vetos em 27/11/2025, e há ADIs no STF. É a mudança mais importante do setor. | ✅ Incluída na base legal de todos os serviços de licenciamento e no Radar normativo. |
| 3.2 | 🟠 | **Resolução CEMA nº 105/2019 citada como base atual** de auditorias, estudos, monitoramento, treinamentos e gestão. O marco do Paraná hoje é a Lei Estadual 22.252/2024 + Decreto 9.541/2025, e a própria CEMA 105 já tinha sido sucedida pela CEMA 107/2020. | ✅ Todas as 11 citações substituídas. |
| 3.3 | 🟠 | **ABNT NBR 10004 citada na versão antiga** (classes I, II-A, II-B). A revisão de 27/11/2024 (NBR 10004-1 e 10004-2:2024) passou a ter 2 classes. | ✅ Atualizado. |
| 3.4 | 🟡 | Lei 15.300/2025 (Licença Ambiental Especial) ausente. | ✅ No Radar normativo. |
| 3.5 | 🟡 | INs de 2026 citadas que **não consegui confirmar** em fonte pública: **IN IAT 09/2026** (licenciamento e outorga integrados para poço), **IN 05/2026** (supressão, "revogou a 48/2025") e **IN 02/2026**. Aparecem em 12 trechos. | ⏳ Confirmar número e assunto no site do IAT. Se estiverem erradas, me avise que eu corrijo. |
| 3.6 | 🟡 | Resolução CEMA 107/2020 ainda listada na base legal do licenciamento. O status dela após o Decreto 9.541/2025 não foi confirmado. | ⏳ Verificar se segue vigente. |
| 3.7 | 🟡 | Normas do IAT mudam todo mês (só em 2026: INs 01, 06, 07, 10, 11, 13, 14, 15, 19, 22, 26, 36, 37…). Sem rotina de revisão, o site desatualiza rápido. | ✅ Criado o **Radar normativo** (`src/data/legalUpdates.ts`), com data de revisão e fonte em cada item. ⏳ Revisar 1 vez por mês. |

## 4. Front-end e identidade visual

| # | Gravidade | Problema | Status |
|---|---|---|---|
| 4.1 | 🟠 | Páginas internas com cabeçalhos de estilos diferentes: centralizado com ícone, gradiente verde→azul, verde vivo, ondas animadas. | ✅ Um cabeçalho único (`AxisPageHero`): navy, foto da marca e título à esquerda. |
| 4.2 | 🟠 | Cada serviço tinha uma cor (verde, azul, laranja, teal, esmeralda) e botões alternavam verde e azul, o que diluía a marca. | ✅ Sistema único Axis (água só em recursos hídricos). |
| 4.3 | 🟠 | ~30 fotos genéricas do Unsplash (externas, lentas, fora da identidade). | ✅ Todas trocadas por fotos da marca, por serviço. |
| 4.4 | 🟡 | Perguntas do FAQ com fonte gigante (regra global de `h3` vazando no acordeão). | ✅ |
| 4.5 | 🟡 | Títulos em "Title Case" e jargão ("Pronto para Implementar…", "Nosso Processo Simplificado: Passo a Passo"). | ✅ Reescritos em linguagem direta. |
| 4.6 | 🟡 | Dois CTAs seguidos na página de serviço. | ✅ |
| 4.7 | 🟡 | Página 404 genérica ("Oops!"). | ✅ 404 da marca, com atalhos úteis. |
| 4.8 | 🟡 | Redes sociais apontando para facebook.com e linkedin.com genéricos. | ✅ Só aparecem as redes com link real. ⏳ Informar os perfis. |
| 4.9 | ⚪ | 11 componentes mortos (não usados) no código. | ✅ Removidos. |
| 4.10 | 🟢 | Novo: **Radar normativo** interativo na home, com filtro Federal/Paraná/Norma técnica e link para a fonte. | ✅ |

## 5. SEO e performance

| # | Gravidade | Problema | Status |
|---|---|---|---|
| 5.1 | 🔴 | **Todas as páginas declaravam a home como "canônica".** Isso diz ao Google para ignorar as páginas internas. | ✅ Canônica correta por rota. |
| 5.2 | 🟠 | 8 páginas sem título e descrição próprios (serviços, categorias, detalhe, licenças, FAQ…). | ✅ |
| 5.3 | 🟠 | Sem dados estruturados da empresa (Google Maps, busca local). | ✅ `ProfessionalService` com endereço, área de atendimento e horário. FAQ com schema `FAQPage`. |
| 5.4 | 🟠 | Pacote JavaScript inicial de 526 kB (o site inteiro carregava na home). | ✅ Páginas sob demanda: **106 kB** na home (−80%). |
| 5.5 | 🟡 | Sitemap com domínio antigo e sem as páginas de serviço; robots sem sitemap. | ✅ Sitemap com 39 URLs. ⏳ Trocar o domínio quando definir. |
| 5.6 | 🟡 | Site SPA: o Google renderiza, mas WhatsApp e LinkedIn mostram só a prévia genérica em links internos. | ⏳ Avaliar pré-renderização na hospedagem (fora do Lovable, por exemplo Vercel). |
| 5.7 | ⚪ | 9 erros de lint (hook condicional, `any`, `require`). | ✅ 0 erros. |

---

## O que só você pode fazer (em ordem de prioridade)

1. **Confirmar onde os formulários estão sendo gravados** e fazer um envio de teste (item 1.1).
2. **Preencher `src/config/company.ts`**: telefone, WhatsApp, e-mail, CNPJ, endereço, redes. Todo o site atualiza de uma vez.
3. **Rodar o SQL de RLS** no Supabase correto e configurar `WEBHOOK_SECRET`, `RESEND_API_KEY` e `NOTIFY_EMAIL` na Edge Function.
4. **Confirmar as INs 09/2026, 05/2026 e 02/2026** (item 3.5).
5. **Enviar uma foto profissional** e o número do CREA-PR para a página Sobre.
6. Definir o domínio e pesquisar o nome "Axis" no INPI.
7. Revisar o Radar normativo uma vez por mês.

## Próximos passos sugeridos (não feitos)

- Upload real de anexos (bucket no Supabase Storage com limite de tamanho e tipo).
- Ferramenta "Qual licença eu preciso?" (3–4 perguntas, resultado indicativo e CTA).
- Página de casos reais (com autorização dos clientes) quando houver os primeiros projetos.
- Google Business Profile com o mesmo endereço e telefone do site.
- Analytics com consentimento (banner LGPD) para medir de onde vêm os leads.

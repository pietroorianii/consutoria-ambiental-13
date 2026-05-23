import React from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { MetaTags } from "@/components/layout/MetaTags";
import { Shield } from "lucide-react";

const PrivacyPage = () => {
  return (
    <PageWrapper>
      <MetaTags
        title="Política de Privacidade — Solari Soluções Ambientais"
        description="Saiba como a Solari Soluções Ambientais coleta, utiliza e protege seus dados pessoais, em conformidade com a Lei nº 13.709/2018 (LGPD)."
        keywords="política de privacidade, LGPD, proteção de dados, Solari Soluções Ambientais"
      />

      <PageBanner
        title="Política de Privacidade"
        description="Como coletamos, utilizamos e protegemos seus dados pessoais — em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
        icon={<Shield />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=400"
      />

      <section className="container py-16 max-w-4xl mx-auto">
        <div className="prose prose-neutral max-w-none space-y-10">

          {/* Atualização */}
          <p className="text-sm text-muted-foreground">
            Última atualização: maio de 2025
          </p>

          {/* 1. Introdução */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Introdução
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A <strong>Solari Soluções Ambientais</strong> (CNPJ: <span className="text-amber-600 font-medium">[INSERIR_CNPJ_REAL]</span>),
              localizada na Rua Sete de Setembro, 1322 — Centro, Ponta Grossa - PR, CEP 84010-350,
              está comprometida com a proteção e privacidade dos seus dados pessoais.
              Esta Política descreve como tratamos as informações coletadas em nosso site e
              formulários de contato, em conformidade com a Lei nº 13.709/2018 (LGPD).
            </p>
          </div>

          {/* 2. Dados coletados */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              2. Dados coletados
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Coletamos apenas os dados estritamente necessários para prestar nossos serviços:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Nome completo e cargo/função</li>
              <li>E-mail corporativo e telefone de contato</li>
              <li>Razão social e CNPJ da empresa</li>
              <li>Endereço do empreendimento ou propriedade</li>
              <li>Descrição da atividade e tipo de serviço solicitado</li>
              <li>Documentos técnicos anexados voluntariamente nos formulários</li>
              <li>Dados de navegação (cookies de análise — ver item 6)</li>
            </ul>
          </div>

          {/* 3. Finalidade */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. Finalidade do tratamento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Responder às suas solicitações de contato e orçamento</li>
              <li>Elaborar propostas comerciais personalizadas</li>
              <li>Executar os serviços de consultoria ambiental contratados</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Melhorar nossos serviços com base em análises estatísticas anônimas</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Base legal:</strong> legítimo interesse (art. 7º, IX da LGPD) e
              execução de contrato (art. 7º, V da LGPD). Para comunicações de marketing,
              utilizamos seu consentimento expresso.
            </p>
          </div>

          {/* 4. Prazo de armazenamento */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Prazo de armazenamento
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Os dados são armazenados pelo período necessário para a prestação do serviço e,
              após o encerramento da relação comercial, por até <strong>5 (cinco) anos</strong>
              para fins de obrigações fiscais e legais, conforme exige a legislação brasileira.
              Dados de cookies são eliminados conforme as configurações do seu navegador ou
              no prazo máximo de 12 meses.
            </p>
          </div>

          {/* 5. Compartilhamento */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              5. Compartilhamento de dados
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados <strong>não são vendidos ou cedidos a terceiros</strong>.
              Podemos compartilhá-los apenas com:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>Órgãos ambientais (IAT, IBAMA) quando necessário para a execução dos serviços</li>
              <li>Prestadores de serviços tecnológicos sob contrato de confidencialidade</li>
              <li>Autoridades públicas, mediante determinação judicial ou legal</li>
            </ul>
          </div>

          {/* 6. Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              6. Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site utiliza cookies essenciais para funcionamento técnico e cookies de
              análise (Google Analytics) para entender o comportamento de navegação de forma
              anônima e agregada. Você pode desativar cookies de análise nas configurações do
              seu navegador sem prejudicar o funcionamento do site.
            </p>
          </div>

          {/* 7. Direitos do titular */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              7. Direitos do titular
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nos termos dos arts. 17 a 22 da LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Acesso:</strong> solicitar a confirmação e cópia dos dados que mantemos sobre você</li>
              <li><strong>Correção:</strong> solicitar a atualização de dados incorretos ou desatualizados</li>
              <li><strong>Eliminação:</strong> solicitar a exclusão dos dados tratados com base em consentimento</li>
              <li><strong>Portabilidade:</strong> solicitar transferência dos seus dados a outro fornecedor</li>
              <li><strong>Revogação:</strong> revogar o consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> opor-se ao tratamento realizado em desacordo com a lei</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer seus direitos, basta enviar e-mail para o DPO (item 8 abaixo).
              Responderemos em até 15 dias úteis.
            </p>
          </div>

          {/* 8. DPO */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              8. Encarregado de Dados (DPO)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O encarregado pelo tratamento de dados pessoais da Solari Soluções Ambientais é:
            </p>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li><strong>Nome:</strong> <span className="text-amber-600">[INSERIR_NOME_DPO]</span></li>
              <li>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:privacidade@solari.com.br" className="text-primary underline hover:text-primary/80">
                  privacidade@solari.com.br
                </a>
              </li>
              <li><strong>Telefone:</strong> (42) 3333-8000</li>
            </ul>
          </div>

          {/* 9. Alterações */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              9. Alterações nesta Política
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Esta Política pode ser atualizada periodicamente. Sempre que houver alterações
              relevantes, comunicaremos por e-mail os clientes cadastrados. A data de última
              atualização sempre estará indicada no topo desta página.
            </p>
          </div>

          {/* Autoridade */}
          <div className="bg-muted/40 rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground">
              Caso não fique satisfeito com nossa resposta, você pode contatar a{" "}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                Autoridade Nacional de Proteção de Dados (ANPD)
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPage;

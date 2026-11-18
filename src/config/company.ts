/**
 * Dados institucionais da Axis — FONTE ÚNICA.
 * Troque aqui e o site inteiro atualiza (rodapé, contato, WhatsApp, LGPD, SEO).
 * ⚠️ Itens marcados PENDENTE ainda são provisórios.
 */
export const company = {
  name: "Axis Soluções Ambientais",
  shortName: "Axis",
  legalName: "Axis Soluções Ambientais", // PENDENTE: razão social
  cnpj: "", // PENDENTE: CNPJ (exigido na Política de Privacidade)
  domain: "https://axisambiental.com.br", // PENDENTE: domínio definitivo
  email: "contato@axisambiental.com.br", // PENDENTE
  privacyEmail: "privacidade@axisambiental.com.br", // PENDENTE
  phoneDisplay: "(42) 99999-9999", // PENDENTE
  phoneE164: "+5542999999999", // PENDENTE
  whatsapp: "5542999999999", // PENDENTE (só números, com 55 + DDD)
  whatsappMessage: "Olá! Vim pelo site da Axis e gostaria de falar sobre um serviço ambiental.",
  address: {
    street: "Rua Sete de Setembro, 1322", // PENDENTE: confirmar endereço
    district: "Centro",
    city: "Ponta Grossa",
    state: "PR",
    zip: "84010-350",
  },
  geo: { lat: -25.0878, lng: -50.1607 },
  hours: "Segunda a sexta, das 8h às 18h",
  responseTime: "até 1 dia útil",
  instagram: "https://instagram.com/axisambiental", // PENDENTE
  linkedin: "", // PENDENTE
  facebook: "", // PENDENTE
  serviceArea: ["Ponta Grossa", "Campos Gerais", "Paraná"],
  // Cidades citadas no rodapé e nos dados estruturados (SEO local)
  cities: ["Ponta Grossa", "Castro", "Carambeí", "Palmeira", "Telêmaco Borba", "Tibagi", "Arapoti", "Piraí do Sul", "Jaguariaíva", "Irati"],
  crea: "CREA-PR nº PR-241997/D",
} as const;

export const whatsappUrl = (message: string = company.whatsappMessage) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export const fullAddress = () =>
  `${company.address.street}, ${company.address.district}, ${company.address.city} (${company.address.state}), CEP ${company.address.zip}`;

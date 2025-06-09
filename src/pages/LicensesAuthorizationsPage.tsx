
import React from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, Award, Shield, Leaf, FileText, CheckCircle, Clock, ArrowRight } from "lucide-react";

const licensesData = [
  {
    id: 'dlam',
    trigger: 'DLAM',
    title: 'Declaração de Dispensa de Licenciamento',
    description: 'Para atividades de baixo impacto ambiental com processo simplificado e dispensa de licenciamento conforme Decreto nº 9.541/2025.',
    icon: <FileCheck className="h-8 w-8 text-eco-green" />,
    benefits: ['Processo simplificado', 'Redução de custos', 'Prazo reduzido'],
    timeline: '20 a 45 dias',
    linkToDetail: '/service/dlam'
  },
  {
    id: 'lac',
    trigger: 'LAC',
    title: 'Licença por Adesão e Compromisso',
    description: 'Licença eletrônica para atividades padronizáveis com base na adesão a critérios pré-estabelecidos pelo IAT.',
    icon: <Award className="h-8 w-8 text-eco-blue" />,
    benefits: ['Emissão eletrônica', 'Processo rápido', 'Critérios claros'],
    timeline: 'Até 10 dias úteis',
    linkToDetail: '/service/lac'
  },
  {
    id: 'las',
    trigger: 'LAS',
    title: 'Licença Ambiental Simplificada',
    description: 'Processo unificado para atividades de pequeno porte e baixo potencial de impacto ambiental.',
    icon: <Shield className="h-8 w-8 text-eco-earth" />,
    benefits: ['Processo unificado', 'Uma única fase', 'Menor complexidade'],
    timeline: '60 a 90 dias',
    linkToDetail: '/service/licensing'
  },
  {
    id: 'lp-li-lo',
    trigger: 'LP/LI/LO',
    title: 'Licenciamento Trifásico',
    description: 'Processo convencional em três etapas: Licença Prévia, de Instalação e de Operação.',
    icon: <Leaf className="h-8 w-8 text-eco-green-dark" />,
    benefits: ['Análise detalhada', 'Segurança jurídica', 'Controle rigoroso'],
    timeline: '8 a 18 meses',
    linkToDetail: '/service/licensing'
  },
  {
    id: 'ampliacao',
    trigger: 'Ampliação',
    title: 'Licenças para Ampliação',
    description: 'Modalidades específicas para ampliação de empreendimentos já licenciados (LP-A, LI-A, LO-A).',
    icon: <ArrowRight className="h-8 w-8 text-eco-accent-teal" />,
    benefits: ['Específico para ampliações', 'Processo direcionado', 'Análise focada'],
    timeline: '4 a 12 meses',
    linkToDetail: '/service/licensing'
  },
  {
    id: 'regularizacao',
    trigger: 'Regularização',
    title: 'Licenças de Regularização',
    description: 'Para regularização de empreendimentos em instalação ou operação sem licença (LASR, LIR, LOR).',
    icon: <FileText className="h-8 w-8 text-eco-accent-orange" />,
    benefits: ['Regularização possível', 'Adequação gradual', 'Segurança jurídica'],
    timeline: '3 a 8 meses',
    linkToDetail: '/service/licensing'
  }
];

const authorizationsData = [
  {
    title: 'Autorização Ambiental (AA)',
    description: 'Para atividades específicas que necessitam de controle ambiental mas não se enquadram no licenciamento convencional.',
    applications: ['Transporte de produtos perigosos', 'Pesquisa científica', 'Eventos temporários'],
    icon: <Shield className="h-6 w-6 text-eco-blue" />
  },
  {
    title: 'Autorização Florestal (AF)',
    description: 'Para corte ou supressão de vegetação nativa, manejo florestal e aproveitamento de material lenhoso.',
    applications: ['Supressão de vegetação nativa', 'Manejo florestal sustentável', 'Corte de árvores isoladas'],
    icon: <Leaf className="h-6 w-6 text-eco-green" />
  }
];

const LicensesAuthorizationsPage = () => {
  return (
    <PageWrapper>
      <PageBanner 
        title="Licenças e Autorizações Ambientais" 
        description="Conheça todas as modalidades de licenciamento e autorizações para regularizar seu empreendimento conforme o Decreto Estadual nº 9.541/2025 e normativas do IAT." 
        icon={<ShieldCheck />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200&h=600"
      />
      
      <div className="container py-16">
        {/* Introdução */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-primary text-2xl font-bold mb-4">Modalidades de Licenciamento no Paraná</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Com o novo Decreto Estadual nº 9.541/2025, o licenciamento ambiental no Paraná foi modernizado, 
            oferecendo diferentes modalidades para atender às necessidades específicas de cada tipo de empreendimento. 
            Conheça as opções disponíveis e encontre a mais adequada para sua atividade.
          </p>
        </div>

        {/* Tabs de Licenças */}
        <Tabs defaultValue="dlam" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {licensesData.map(license => (
              <TabsTrigger key={license.id} value={license.id} className="text-xs">
                {license.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {licensesData.map(license => (
            <TabsContent key={license.id} value={license.id} className="mt-6">
              <Card className="max-w-5xl mx-auto">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-eco-green/10">
                      {license.icon}
                    </div>
                    <div>
                      <CardTitle className="font-secondary text-2xl mb-2">{license.title}</CardTitle>
                      <CardDescription className="font-body text-base">{license.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Benefícios */}
                    <div>
                      <h4 className="font-secondary font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-eco-green" />
                        Principais Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {license.benefits.map((benefit, idx) => (
                          <li key={idx} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-eco-green rounded-full mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Prazo */}
                    <div>
                      <h4 className="font-secondary font-semibold mb-3 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-eco-blue" />
                        Prazo Estimado
                      </h4>
                      <p className="font-primary text-2xl font-bold text-eco-green">{license.timeline}</p>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        Prazo médio para conclusão do processo
                      </p>
                    </div>
                    
                    {/* Ação */}
                    <div className="flex flex-col justify-center">
                      <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                        <Link to={license.linkToDetail} className="flex items-center gap-2">
                          Ver Detalhes Completos
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link to="/request-quote">Solicitar Orçamento</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Seção de Autorizações */}
        <div className="mt-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-primary text-2xl font-bold mb-4">Autorizações Ambientais Específicas</h2>
            <p className="font-body text-muted-foreground">
              Além das licenças, existem autorizações específicas para atividades que necessitam de controle ambiental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {authorizationsData.map((auth, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-eco-blue/10">
                      {auth.icon}
                    </div>
                    <div>
                      <CardTitle className="font-secondary text-lg mb-2">{auth.title}</CardTitle>
                      <CardDescription className="font-body">{auth.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-secondary font-semibold mb-3">Principais Aplicações:</h4>
                  <ul className="space-y-2 mb-4">
                    {auth.applications.map((app, idx) => (
                      <li key={idx} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-eco-green mt-0.5 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/service/licensing">Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border-eco-green/20">
            <CardContent className="p-8">
              <h3 className="font-primary text-2xl font-bold mb-4">Não sabe qual modalidade escolher?</h3>
              <p className="font-body text-muted-foreground mb-6 text-lg">
                Nossa equipe de especialistas pode ajudar você a identificar a modalidade mais adequada para seu empreendimento 
                e acompanhar todo o processo de regularização ambiental.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                  <Link to="/request-quote">Solicitar Orientação Gratuita</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Falar com Especialista</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LicensesAuthorizationsPage;

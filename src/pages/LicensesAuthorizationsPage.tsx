
import React from "react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  FileCheck, 
  Zap, 
  RefreshCw, 
  AlertTriangle,
  TreePine,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const licensesData = [
  {
    id: 'dlam',
    category: 'Dispensas',
    trigger: 'DLAM',
    title: 'Declaração de Dispensa de Licenciamento',
    description: 'Para atividades de baixo impacto ambiental conforme critérios do IAT.',
    icon: <CheckCircle className="h-6 w-6 text-eco-green" />,
    timeline: '1 a 15 dias',
    aplicacao: 'Atividades com potencial poluidor/degradador insignificante listadas em normativas do IAT.',
    beneficios: ['Processo simplificado', 'Baixo custo', 'Agilidade na emissão'],
    badge: 'Mais Rápido',
    badgeColor: 'bg-eco-green'
  },
  {
    id: 'lac',
    category: 'Simplificado',
    trigger: 'LAC',
    title: 'Licença por Adesão e Compromisso',
    description: 'Emissão eletrônica para atividades padronizáveis via SGA do IAT.',
    icon: <Zap className="h-6 w-6 text-eco-blue" />,
    timeline: 'Emissão imediata',
    aplicacao: 'Atividades com características padronizáveis e baixo a médio potencial poluidor.',
    beneficios: ['Emissão eletrônica', 'Processo automatizado', 'Condições pré-estabelecidas'],
    badge: 'Eletrônico',
    badgeColor: 'bg-eco-blue'
  },
  {
    id: 'las',
    category: 'Simplificado',
    trigger: 'LAS',
    title: 'Licença Ambiental Simplificada',
    description: 'Processo unificado para atividades de pequeno porte e baixo impacto.',
    icon: <FileCheck className="h-6 w-6 text-eco-green-dark" />,
    timeline: 'Até 60 dias',
    aplicacao: 'Atividades de pequeno porte e baixo potencial de impacto ambiental.',
    beneficios: ['Processo unificado', 'Uma única licença', 'Custo reduzido'],
    badge: 'Unificado',
    badgeColor: 'bg-eco-green-dark'
  },
  {
    id: 'convencional',
    category: 'Convencional',
    trigger: 'LP/LI/LO',
    title: 'Licenciamento Trifásico',
    description: 'Processo completo em três etapas para empreendimentos complexos.',
    icon: <ShieldCheck className="h-6 w-6 text-eco-accent-teal" />,
    timeline: '4 a 6 meses por fase',
    aplicacao: 'Empreendimentos de médio e grande porte com potencial significativo de impacto.',
    beneficios: ['Análise detalhada', 'Controle em todas as fases', 'Segurança jurídica'],
    badge: 'Completo',
    badgeColor: 'bg-eco-accent-teal'
  },
  {
    id: 'regularizacao',
    category: 'Regularização',
    trigger: 'LASR/LIR/LOR',
    title: 'Modalidades de Regularização',
    description: 'Para adequação de empreendimentos em operação irregular.',
    icon: <RefreshCw className="h-6 w-6 text-eco-accent-orange" />,
    timeline: 'Conforme adequação',
    aplicacao: 'Empreendimentos instalados ou operando sem licença ambiental.',
    beneficios: ['Regularização controlada', 'Prazo para adequação', 'Evita penalidades'],
    badge: 'Regularização',
    badgeColor: 'bg-eco-accent-orange'
  },
  {
    id: 'autorizacoes',
    category: 'Autorizações',
    trigger: 'AA/AF',
    title: 'Autorizações Específicas',
    description: 'Autorizações Ambientais e Florestais para atividades específicas.',
    icon: <TreePine className="h-6 w-6 text-eco-accent-sage" />,
    timeline: 'Variável',
    aplicacao: 'Atividades específicas como transporte de produtos perigosos, supressão de vegetação.',
    beneficios: ['Específico para atividade', 'Processo direcionado', 'Flexibilidade'],
    badge: 'Específico',
    badgeColor: 'bg-eco-accent-sage'
  }
];

const LicensesAuthorizationsPage = () => {
  return (
    <PageWrapper>
      <PageBanner 
        title="Licenças e Autorizações Ambientais" 
        description="Conheça todas as modalidades de licenciamento ambiental do Paraná conforme Decreto Estadual nº 9.541/2025" 
        icon={<ShieldCheck />}
        iconColor="green"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=600" 
      />
      
      <div className="container py-16">
        {/* Introdução */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-primary text-gray-900">
            Modalidades de Licenciamento Ambiental no Paraná
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-body">
            O Decreto Estadual nº 9.541/2025 modernizou o licenciamento ambiental no Paraná, 
            criando diferentes modalidades para atender desde atividades de baixo impacto até 
            empreendimentos complexos. Escolha a modalidade adequada ao seu projeto.
          </p>
        </div>

        {/* Sistema de Abas */}
        <Tabs defaultValue={licensesData[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {licensesData.map(license => (
              <TabsTrigger 
                key={license.id} 
                value={license.id}
                className="text-xs md:text-sm font-medium"
              >
                {license.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {licensesData.map(license => (
            <TabsContent key={license.id} value={license.id} className="mt-8">
              <Card className="border-eco-green/20 bg-white shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-eco-green/10 rounded-xl">
                        {license.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-primary text-gray-900">
                            {license.title}
                          </CardTitle>
                          <Badge className={`${license.badgeColor} text-white`}>
                            {license.badge}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg text-gray-600 font-body">
                          {license.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Prazo */}
                    <div className="p-4 bg-eco-green/5 rounded-lg border border-eco-green/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-eco-green" />
                        <h4 className="font-semibold text-eco-green-dark">Prazo</h4>
                      </div>
                      <p className="text-sm text-gray-600">{license.timeline}</p>
                    </div>
                    
                    {/* Aplicação */}
                    <div className="p-4 bg-eco-blue/5 rounded-lg border border-eco-blue/20 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-eco-blue" />
                        <h4 className="font-semibold text-eco-blue-dark">Quando se Aplica</h4>
                      </div>
                      <p className="text-sm text-gray-600">{license.aplicacao}</p>
                    </div>
                  </div>
                  
                  {/* Benefícios */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Principais Benefícios:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {license.beneficios.map((beneficio, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-eco-green flex-shrink-0" />
                          <span className="text-sm text-gray-600">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                      <Link to="/services/licensing" className="flex items-center gap-2">
                        Ver Detalhes Completos <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                      <Link to="/request-quote">
                        Solicitar Orçamento
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Seção de Contato */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl p-8 max-w-3xl mx-auto border border-eco-green/20">
            <h3 className="text-2xl font-bold mb-4 font-primary text-gray-900">
              Não Tem Certeza Qual Modalidade Escolher?
            </h3>
            <p className="text-gray-600 mb-6 font-body">
              Nossa equipe especializada analisa seu projeto e indica a modalidade mais adequada 
              conforme o Decreto nº 9.541/2025 e normas do IAT.
            </p>
            <Button asChild size="lg" className="bg-eco-green hover:bg-eco-green-dark">
              <Link to="/contact" className="flex items-center gap-2">
                Fale com Nossos Especialistas <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LicensesAuthorizationsPage;

import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Users } from "lucide-react";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { serviceGroups } from "@/components/featured-services/serviceGroupsData";

const ServiceGroupPage = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const group = serviceGroups.find((g) => g.id === groupId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [groupId]);

  if (!group) {
    return <Navigate to="/services" replace />;
  }

  const colorMap: Record<string, { text: string; bg: string; border: string; button: string }> = {
    "prisma-green": {
      text: "text-prisma-green",
      bg: "bg-prisma-green/10",
      border: "border-prisma-green/30",
      button: "bg-prisma-green hover:bg-prisma-green/90",
    },
    "prisma-blue": {
      text: "text-prisma-blue",
      bg: "bg-prisma-blue/10",
      border: "border-prisma-blue/30",
      button: "bg-prisma-blue hover:bg-prisma-blue/90",
    },
    "prisma-yellow": {
      text: "text-prisma-yellow",
      bg: "bg-prisma-yellow/10",
      border: "border-prisma-yellow/30",
      button: "bg-prisma-yellow hover:bg-prisma-yellow/90",
    },
  };
  const c = colorMap[group.color] || colorMap["prisma-green"];

  const iconColor =
    group.color === "prisma-blue" ? "blue" : group.color === "prisma-yellow" ? "yellow" : "green";

  return (
    <PageWrapper>
      <PageBanner
        title={group.title}
        description={group.description}
        icon={group.icon}
        variant="services"
        backUrl="/services"
        backText="Voltar aos Serviços"
      />

      {/* Principais Entregas */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-gray-900">
            Principais Entregas
          </h2>
          <p className="text-gray-600 font-body">
            Soluções completas dentro desta área de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {group.mainDeliverables?.map((item, i) => (
            <Card key={i} className={`${c.border} bg-white/95`}>
              <CardContent className="p-6 flex items-start gap-3">
                <CheckCircle className={`h-5 w-5 ${c.text} mt-0.5 flex-shrink-0`} />
                <span className="text-sm text-gray-700 font-body">{item}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Serviços Detalhados */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-gray-900">
            Serviços Oferecidos
          </h2>
          <p className="text-gray-600 font-body">
            Clique em um serviço para ver detalhes, etapas, prazos e benefícios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {group.services.map((service, idx) => (
            <Card
              key={idx}
              className={`group ${c.border} bg-white/95 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col`}
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className={`${c.bg} p-3 rounded-xl flex-shrink-0`}>
                    {React.cloneElement(group.icon as React.ReactElement, {
                      className: `h-6 w-6 ${c.text}`,
                    })}
                  </div>
                  <div>
                    <CardTitle className={`text-lg font-secondary text-gray-900 group-hover:${c.text} transition-colors`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 mt-2 font-body leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex gap-3 pt-2">
                <Button asChild variant="outline" size="sm" className={`${c.border} ${c.text} hover:${c.button} hover:text-white flex-1`}>
                  <Link to={service.href} className="flex items-center justify-center gap-2">
                    Ver detalhes <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" className={`${c.button} text-white`}>
                  <Link to="/request-quote">Orçamento</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gradient-to-br from-eco-green/5 to-eco-blue/5 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-primary text-gray-900">
              Por que escolher a Solari?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Expertise Comprovada", desc: "Anos de experiência e centenas de projetos bem-sucedidos." },
              { icon: Users, title: "Equipe Especializada", desc: "Profissionais atualizados com a legislação ambiental vigente." },
              { icon: CheckCircle, title: "Resultados Garantidos", desc: "Acompanhamento completo do início à entrega final." },
            ].map((item, i) => (
              <Card key={i} className="border-eco-green/20 bg-white/95">
                <CardContent className="p-6 text-center">
                  <div className={`${c.bg} p-3 rounded-full w-fit mx-auto mb-4`}>
                    <item.icon className={`h-6 w-6 ${c.text}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-secondary">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-body">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
};

export default ServiceGroupPage;

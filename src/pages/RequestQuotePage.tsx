
import React from "react";
import { Leaf } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { MetaTags } from "@/components/layout/MetaTags";
import { useQuoteRequest } from "@/hooks/use-quote-request";
import { ProgressBar } from "@/components/quote-request/ProgressBar";
import { PersonalInfoStep } from "@/components/quote-request/PersonalInfoStep";
import { BusinessInfoStep } from "@/components/quote-request/BusinessInfoStep";
import { ServiceInfoStep } from "@/components/quote-request/ServiceInfoStep";
import { EnvironmentalContextStep } from "@/components/quote-request/EnvironmentalContextStep";
import { AdditionalInfoStep } from "@/components/quote-request/AdditionalInfoStep";
import { SuccessDialog } from "@/components/quote-request/SuccessDialog";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { PageBanner } from "@/components/ui/page-banner";

const RequestQuotePage = () => {
  const {
    form,
    isSubmitting,
    showSuccess,
    setShowSuccess,
    currentStep,
    totalSteps,
    selectedFiles,
    handleFileChange,
    removeFile,
    honeypotProps,
    fallbackUrl,
    onSubmit,
    nextStep,
    prevStep
  } = useQuoteRequest();

  return (
    <PageWrapper>
      <MetaTags 
        title="Solicitação de Orçamento — Axis Soluções Ambientais"
        description="Solicite um orçamento personalizado para seu projeto ambiental no Paraná. Consultoria em licenciamento ambiental, outorgas, estudos técnicos e gestão de conformidade junto ao IAT."
        keywords="orçamento consultoria ambiental, licenciamento ambiental Ponta Grossa, orçamento IAT Paraná, solicitação orçamento ambiental"
      />
      
      {/* Header com formato padronizado */}
      <PageBanner 
        title="Solicitar orçamento"
        description="Preencha o formulário. Retornamos em até 1 dia útil com uma proposta personalizada."
        icon={<Leaf />}
        variant="quote"
      />
      
      <div className="container mx-auto -mt-8 px-4 md:px-6 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden border border-brand-accent/15 hover:border-brand-accent/30 transition-all">
          <div className="bg-brand-primary p-6 text-brand-cream">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 font-sora">
              <Leaf className="h-8 w-8 animate-float" />
              Dados para orçamento
            </h2>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6 relative" noValidate>
              <input {...honeypotProps} />
              
              
              {/* Etapa 1: Dados do Solicitante */}
              {currentStep === 1 && <PersonalInfoStep form={form} />}

              {/* Etapa 2: Informações do Empreendimento */}
              {currentStep === 2 && <BusinessInfoStep form={form} />}

              {/* Etapa 3: Serviço Desejado */}
              {currentStep === 3 && <ServiceInfoStep form={form} />}

              {/* Etapa 4: Contexto Ambiental */}
              {currentStep === 4 && <EnvironmentalContextStep form={form} />}

              {/* Etapa 5: Informações Adicionais e Confirmação */}
              {currentStep === 5 && (
                <AdditionalInfoStep 
                  form={form}
                  selectedFiles={selectedFiles}
                  handleFileChange={handleFileChange}
                  removeFile={removeFile}
                />
              )}

              {fallbackUrl && (
                <div role="alert" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-brand-dark">
                  <p className="font-semibold">Não conseguimos registrar o pedido pelo formulário agora.</p>
                  <p className="mt-1 text-brand-dark/70">Seus dados já estão na mensagem: é só enviar pelo WhatsApp e respondemos por lá.</p>
                  <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-full bg-brand-dark px-5 py-2.5 font-semibold text-white">
                    Enviar pedido pelo WhatsApp
                  </a>
                </div>
              )}

              <div className="flex justify-between pt-4 border-t border-brand-dark/10">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="flex items-center gap-2 hover:bg-muted/80"
                    aria-label="Voltar para etapa anterior"
                  >
                    <span>Voltar</span>
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < totalSteps ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="rounded-full bg-brand-dark px-6 hover:bg-brand-primary flex items-center gap-2"
                    aria-label="Avançar para próxima etapa"
                  >
                    <span>Próximo</span>
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="rounded-full bg-brand-dark px-6 hover:bg-brand-primary flex items-center gap-2"
                    disabled={isSubmitting}
                    aria-label="Enviar solicitação de orçamento"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar pedido"}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>

        {/* Modal de sucesso */}
        <SuccessDialog 
          showSuccess={showSuccess} 
          setShowSuccess={setShowSuccess} 
        />
      </div>
      
      <div className="bg-muted py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </PageWrapper>
  );
};

export default RequestQuotePage;

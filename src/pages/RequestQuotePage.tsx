
import React from "react";
import { Leaf } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useQuoteRequest } from "@/hooks/use-quote-request";
import { ProgressBar } from "@/components/quote-request/ProgressBar";
import { PersonalInfoStep } from "@/components/quote-request/PersonalInfoStep";
import { BusinessInfoStep } from "@/components/quote-request/BusinessInfoStep";
import { ServiceInfoStep } from "@/components/quote-request/ServiceInfoStep";
import { EnvironmentalContextStep } from "@/components/quote-request/EnvironmentalContextStep";
import { AdditionalInfoStep } from "@/components/quote-request/AdditionalInfoStep";
import { SuccessDialog } from "@/components/quote-request/SuccessDialog";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

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
    onSubmit,
    nextStep,
    prevStep
  } = useQuoteRequest();

  return (
    <>
      <Navbar />
      
      {/* Header background */}
      <div className="bg-gradient-to-r from-eco-green/90 to-eco-blue/90 pt-12 md:pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1200&h=600')" }}>
        </div>
        <div className="absolute inset-0 leaf-pattern mix-blend-overlay opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-eco-green/20"></div>
        
        {/* Elementos fluidos decorativos */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-eco-green/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-eco-blue/30 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto -mt-8 px-4 md:px-6 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-eco-green/10 hover:border-eco-green/20 transition-all">
          <div className="bg-gradient-to-r from-eco-green to-eco-blue p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <Leaf className="h-8 w-8 animate-float" />
              Solicitação de Orçamento
            </h1>
            <p className="mt-2 opacity-90" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Preencha o formulário abaixo para solicitar um orçamento personalizado para seu projeto ambiental.
            </p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6 relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-eco-green/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-blue/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-eco-earth/5 rounded-full blur-3xl -z-10"></div>
              
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

              <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="flex items-center gap-2 hover:bg-muted/80"
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
                    className="bg-eco-green hover:bg-eco-green/90 flex items-center gap-2 shimmer-button"
                  >
                    <span>Próximo</span>
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="bg-eco-green hover:bg-eco-green/90 flex items-center gap-2 shimmer-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
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
      
      {/* Decorative elements */}
      <div className="bg-muted py-16 relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-eco-green/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-eco-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      </div>
      
      <Footer />
    </>
  );
};

export default RequestQuotePage;

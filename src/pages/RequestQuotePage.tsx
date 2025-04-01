
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
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-eco-green to-eco-blue p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <Leaf className="h-8 w-8" />
              Solicitação de Orçamento
            </h1>
            <p className="mt-2 opacity-90">
              Preencha o formulário abaixo para solicitar um orçamento personalizado para seu projeto ambiental.
            </p>
          </div>

          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
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
                    className="flex items-center gap-2"
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
                    className="bg-eco-green hover:bg-eco-green/90 flex items-center gap-2"
                  >
                    <span>Próximo</span>
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="bg-eco-green hover:bg-eco-green/90 flex items-center gap-2"
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
      <Footer />
    </>
  );
};

export default RequestQuotePage;

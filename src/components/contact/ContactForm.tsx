
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactFormFields } from "./ContactFormFields";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const { form, isSubmitting, handleSubmit } = useContactForm();

  return (
    <div className="bg-background rounded-lg border border-border/50 p-8 shadow-sm transform transition-all duration-500 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-6 relative">
        Envie uma mensagem
        <span className="block h-1 w-16 bg-brand-accent mt-2 transform origin-left transition-all duration-300 group-hover:w-full"></span>
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <fieldset disabled={isSubmitting} className="space-y-6">
            <ContactFormFields form={form} />
          </fieldset>
          
          {/* ── Bloco de consentimento LGPD ── */}
          <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4 border border-border">
            <p className="font-semibold text-foreground mb-1">Proteção de dados — LGPD</p>
            <p className="leading-relaxed">
              Ao enviar este formulário, você autoriza a Solari Soluções Ambientais a
              armazenar e utilizar seus dados para fins de atendimento comercial,
              conforme a Lei nº 13.709/2018 (LGPD). Seus dados não serão
              compartilhados com terceiros.{" "}
              <a href="/privacidade" className="underline text-primary hover:text-primary/80 transition-colors">
                Política de Privacidade
              </a>
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white transition-all duration-300 transform hover:scale-[1.01]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                Enviando...
              </>
            ) : (
              "Enviar Mensagem"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

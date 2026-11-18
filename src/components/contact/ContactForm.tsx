import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactFormFields } from "./ContactFormFields";
import { Loader2 } from "lucide-react";
import { LGPD_NOTICE } from "@/lib/spam-guard";

export function ContactForm() {
  const { form, isSubmitting, handleSubmit, honeypotProps, fallbackUrl } = useContactForm();

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-brand-dark">Envie uma mensagem</h2>
      <span className="axis-rule mt-4" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="relative mt-8 space-y-6" noValidate>
          <input {...honeypotProps} />
          <fieldset disabled={isSubmitting} className="space-y-6">
            <ContactFormFields form={form} />
          </fieldset>

          <p className="rounded-xl bg-brand-cream p-4 text-xs leading-relaxed text-brand-dark/65">
            {LGPD_NOTICE}{" "}
            <a href="/privacidade" className="font-medium text-brand-accent underline">Política de Privacidade</a>
          </p>

          {fallbackUrl && (
            <div role="alert" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-brand-dark">
              <p className="font-semibold">Não conseguimos enviar pelo formulário agora.</p>
              <p className="mt-1 text-brand-dark/70">Sua mensagem já está pronta: é só enviar pelo WhatsApp.</p>
              <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex rounded-full bg-brand-dark px-5 py-2.5 font-semibold text-white">
                Enviar pelo WhatsApp
              </a>
            </div>
          )}

          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-brand-dark text-base font-semibold text-white hover:bg-brand-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="-ml-1 mr-3 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar mensagem"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

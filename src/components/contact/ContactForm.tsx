
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useContactForm } from "@/hooks/use-contact-form";
import { ContactFormFields } from "./ContactFormFields";

export function ContactForm() {
  const { form, isSubmitting, handleSubmit } = useContactForm();

  return (
    <div className="bg-background rounded-lg border border-border/50 p-8 shadow-sm transform transition-all duration-500 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-6 relative">
        Envie uma mensagem
        <span className="block h-1 w-16 bg-eco-green mt-2 transform origin-left transition-all duration-300 group-hover:w-full"></span>
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <ContactFormFields form={form} />
          
          <Button 
            type="submit" 
            className="w-full bg-eco-green hover:bg-eco-green-dark transition-all duration-300 transform hover:scale-[1.01]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

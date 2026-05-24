
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/types/contact-form";

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormData>;
}

export function ContactFormFields({ form }: ContactFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <FormLabel>Nome completo*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome completo"
                  className="border-brand-accent/30 focus:border-brand-accent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <FormLabel>E-mail*</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  placeholder="seu@email.com"
                  className="border-brand-accent/30 focus:border-brand-accent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="(00) 00000-0000"
                  className="border-brand-accent/30 focus:border-brand-accent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Nome da empresa"
                  className="border-brand-accent/30 focus:border-brand-accent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <FormLabel>Assunto*</FormLabel>
            <FormControl>
              <Input 
                placeholder="Assunto da sua mensagem"
                className="border-brand-accent/30 focus:border-brand-accent"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem className="transform transition-all duration-300 hover:translate-y-[-2px]">
            <FormLabel>Mensagem*</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Descreva sua solicitação ou dúvida detalhadamente"
                rows={5}
                className="border-brand-accent/30 focus:border-brand-accent"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

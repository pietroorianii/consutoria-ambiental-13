
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload } from "lucide-react";
import { LGPD_NOTICE } from "@/lib/spam-guard";
import { FormValues } from "@/types/quote-request";

interface AdditionalInfoStepProps {
  form: UseFormReturn<FormValues>;
  selectedFiles: File[];
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
}

export const AdditionalInfoStep: React.FC<AdditionalInfoStepProps> = ({ 
  form, 
  selectedFiles, 
  handleFileChange, 
  removeFile 
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold text-brand-accent">
        Informações Adicionais
      </h2>
      
      <FormField
        control={form.control}
        name="estimatedBudget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Orçamento Estimado (opcional)</FormLabel>
            <FormControl>
              <Input placeholder="Ex: R$ 5.000,00" {...field} />
            </FormControl>
            <FormDescription>
              Valor aproximado que você espera investir neste serviço
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="observations"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Observações Adicionais (opcional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Informações complementares que possam ser relevantes" 
                className="min-h-[80px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Anexos: o envio de arquivos pelo formulário não estava ligado a nenhum armazenamento
          (os arquivos eram descartados). Até haver um bucket no Supabase, orientamos o envio direto. */}
      <div className="flex gap-3 rounded-xl border border-brand-dark/10 bg-brand-cream p-4 text-sm text-brand-dark/75">
        <Upload className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
        <p>
          Tem licença anterior, notificação ou planta do imóvel? Envie depois pelo WhatsApp ou por e-mail, citando seu nome.
          Assim que recebermos o pedido, entramos em contato para combinar os documentos.
        </p>
      </div>

      {/* ── Bloco de consentimento LGPD ── */}
      <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4 border border-border">
        <p className="font-semibold text-foreground mb-1">Proteção de dados — LGPD</p>
        <p className="leading-relaxed">
          {LGPD_NOTICE}{" "}
          <a href="/privacidade" className="underline text-primary hover:text-primary/80 transition-colors">
            Política de Privacidade
          </a>
        </p>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Aceito os termos de uso e política de privacidade
                </FormLabel>
                <FormDescription>
                  Seus dados serão utilizados apenas para o atendimento da sua solicitação.
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};


import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { FormValues } from "@/types/quote-request";

interface BusinessInfoStepProps {
  form: UseFormReturn<FormValues>;
}

export const BusinessInfoStep: React.FC<BusinessInfoStepProps> = ({ form }) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold text-eco-green">
        Informações do Empreendimento
      </h2>
      
      <FormField
        control={form.control}
        name="segment"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Segmento da Atividade</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o segmento" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="industria">Indústria</SelectItem>
                <SelectItem value="construcao">Construção Civil</SelectItem>
                <SelectItem value="agricultura">Agricultura</SelectItem>
                <SelectItem value="outorga">Outorga</SelectItem>
                <SelectItem value="mineracao">Mineração</SelectItem>
                <SelectItem value="energia">Energia</SelectItem>
                <SelectItem value="saneamento">Saneamento</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Localização (Cidade/Estado)</FormLabel>
            <FormControl>
              <Input placeholder="Ex: São Paulo/SP" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="size"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tamanho do Empreendimento</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tamanho" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="pequeno">Pequeno</SelectItem>
                <SelectItem value="medio">Médio</SelectItem>
                <SelectItem value="grande">Grande</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descrição Breve da Atividade</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Descreva resumidamente a atividade do seu empreendimento" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

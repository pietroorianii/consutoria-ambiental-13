
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { FormValues } from "@/types/quote-request";

interface ServiceInfoStepProps {
  form: UseFormReturn<FormValues>;
}

export const ServiceInfoStep: React.FC<ServiceInfoStepProps> = ({ form }) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold text-eco-green">
        Serviço Desejado
      </h2>
      
      <FormField
        control={form.control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tipo de Serviço</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="licenciamento">Licenciamento Ambiental</SelectItem>
                <SelectItem value="water_resources">Outorga e Recursos Hídricos</SelectItem>
                <SelectItem value="degraded_areas">Recuperação de Áreas e Passivos</SelectItem>
                <SelectItem value="pgrs">PGRS - Plano de Gerenciamento de Resíduos Sólidos</SelectItem>
                <SelectItem value="eia-rima">EIA/RIMA - Estudo e Relatório de Impacto Ambiental</SelectItem>
                <SelectItem value="consultoria">Consultoria Ambiental</SelectItem>
                <SelectItem value="esg">Consultoria ESG</SelectItem>
                <SelectItem value="climate">Mudanças Climáticas e Carbono</SelectItem>
                <SelectItem value="auditoria">Auditoria Ambiental</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="serviceDetails"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Detalhamento do Serviço</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Descreva com mais detalhes o serviço que você precisa" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="deadline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prazo Desejado</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o prazo" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="imediato">Imediato</SelectItem>
                <SelectItem value="30dias">30 dias</SelectItem>
                <SelectItem value="60dias">60 dias</SelectItem>
                <SelectItem value="90dias">90 dias ou mais</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

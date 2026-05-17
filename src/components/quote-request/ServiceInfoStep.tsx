
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
                <SelectItem value="licenciamento">Licenciamento Ambiental (DLAM / LAC / LAS / LP / LI / LO)</SelectItem>
                <SelectItem value="autorizacoes">Autorização Ambiental ou Florestal (AA / AF)</SelectItem>
                <SelectItem value="outorga">Outorga de Recursos Hídricos — SIGARH</SelectItem>
                <SelectItem value="emissoes">Controle de Emissões Atmosféricas — SGADEA</SelectItem>
                <SelectItem value="estudos">Elaboração de Estudos Técnicos (EIA/RIMA / RAS / MCE / PGRS / PCA / PRAD e outros)</SelectItem>
                <SelectItem value="conformidade">Gestão de Conformidade e Renovações — SGA IR</SelectItem>
                <SelectItem value="regularizacao">Regularização Ambiental (LASR / LIR / LOR / TAC)</SelectItem>
                <SelectItem value="outros">Outro / Não sei ainda</SelectItem>
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

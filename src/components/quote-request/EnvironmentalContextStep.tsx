
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormValues } from "@/types/quote-request";

interface EnvironmentalContextStepProps {
  form: UseFormReturn<FormValues>;
}

export const EnvironmentalContextStep: React.FC<EnvironmentalContextStepProps> = ({ form }) => {
  const watchHasLicense = form.watch("hasLicense");
  const watchHasNotifications = form.watch("hasNotifications");
  
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-xl font-semibold text-eco-green">
        Contexto Ambiental
      </h2>
      
      <FormField
        control={form.control}
        name="hasLicense"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Já possui licenciamento ambiental?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-row space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="license-yes" />
                  <label htmlFor="license-yes">Sim</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="não" id="license-no" />
                  <label htmlFor="license-no">Não</label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {watchHasLicense === "sim" && (
        <FormField
          control={form.control}
          name="licenseDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhes do licenciamento atual</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Informe o tipo de licença, órgão emissor, validade, etc." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      
      <FormField
        control={form.control}
        name="hasNotifications"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Responde a notificações ambientais?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-row space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="notification-yes" />
                  <label htmlFor="notification-yes">Sim</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="não" id="notification-no" />
                  <label htmlFor="notification-no">Não</label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {watchHasNotifications === "sim" && (
        <FormField
          control={form.control}
          name="notificationDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhes das notificações</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva as notificações recebidas, órgão emissor, status, etc." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};

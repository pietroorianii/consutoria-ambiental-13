
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
      <h2 className="text-xl font-semibold text-eco-green">
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
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Anexos (opcional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">
                Arraste arquivos ou clique para selecionar
              </span>
              <span className="text-xs text-gray-400 mt-1">
                (PDF, DOC, JPG, PNG - Max 10MB)
              </span>
            </label>
          </div>
          
          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium">Arquivos anexados:</p>
              <ul className="text-sm">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex justify-between items-center py-1">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 text-xs"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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

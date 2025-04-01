
import React from "react";
import { Check, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SuccessDialogProps {
  showSuccess: boolean;
  setShowSuccess: (show: boolean) => void;
}

export const SuccessDialog: React.FC<SuccessDialogProps> = ({ 
  showSuccess, 
  setShowSuccess 
}) => {
  const navigate = useNavigate();
  
  return (
    <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
      <DialogContent className="max-w-md">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="bg-eco-green text-white rounded-full p-3 shadow-lg">
            <Check className="h-8 w-8" />
          </div>
        </div>
        
        <DialogHeader className="pt-6">
          <DialogTitle className="text-center text-xl text-eco-green font-bold">
            Solicitação Enviada com Sucesso!
          </DialogTitle>
          <DialogDescription className="text-center">
            Recebemos sua solicitação de orçamento e entraremos em contato em até 48 horas.
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg my-4 border border-green-100 dark:border-green-900/30">
          <p className="text-sm text-green-800 dark:text-green-300 flex items-start gap-2">
            <Leaf className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>
              Um e-mail de confirmação foi enviado para o endereço informado com um resumo da sua solicitação.
              Nossa equipe analisará seu caso com atenção para oferecer a melhor solução ambiental.
            </span>
          </p>
        </div>
        
        <DialogFooter className="sm:justify-center">
          <Button
            onClick={() => {
              setShowSuccess(false);
              navigate("/");
            }}
            className="bg-eco-green hover:bg-eco-green/90 w-full sm:w-auto"
          >
            Voltar para a Página Inicial
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

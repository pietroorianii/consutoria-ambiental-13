
import React from "react";
import { Check } from "lucide-react";
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
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-eco-green">
            <Check className="h-6 w-6" />
            Solicitação Enviada com Sucesso!
          </DialogTitle>
          <DialogDescription>
            Recebemos sua solicitação de orçamento e entraremos em contato em até 48 horas.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg my-4">
          <p className="text-sm text-green-800 dark:text-green-300">
            Um e-mail de confirmação foi enviado para o endereço informado com um resumo da sua solicitação.
          </p>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              setShowSuccess(false);
              navigate("/");
            }}
          >
            Voltar para a Página Inicial
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

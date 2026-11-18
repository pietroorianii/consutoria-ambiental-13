import React from "react";
import { Check, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { whatsappUrl, company } from "@/config/company";

interface SuccessDialogProps {
  showSuccess: boolean;
  setShowSuccess: (show: boolean) => void;
}

export const SuccessDialog: React.FC<SuccessDialogProps> = ({ showSuccess, setShowSuccess }) => {
  const navigate = useNavigate();

  return (
    <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
      <DialogContent className="max-w-md rounded-2xl">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-accent text-white">
          <Check className="h-7 w-7" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-center font-display text-2xl font-semibold text-brand-dark">Pedido recebido</DialogTitle>
          <DialogDescription className="text-center text-base text-brand-dark/70">
            Nossa equipe analisa o seu caso e responde em {company.responseTime}, pelo telefone ou e-mail que você informou.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-xl bg-brand-cream p-4 text-sm text-brand-dark/75">
          Quer agilizar? Mande pelo WhatsApp sua licença atual, notificação ou planta do imóvel, citando seu nome.
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={whatsappUrl("Olá! Acabei de enviar um pedido de orçamento pelo site e quero mandar os documentos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark px-5 py-3 font-semibold text-white hover:bg-brand-primary"
          >
            <MessageCircle className="h-5 w-5" /> Enviar documentos pelo WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setShowSuccess(false);
              navigate("/");
            }}
            className="rounded-full border border-brand-dark/15 px-5 py-3 font-semibold text-brand-dark hover:border-brand-accent hover:text-brand-accent"
          >
            Voltar ao início
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;

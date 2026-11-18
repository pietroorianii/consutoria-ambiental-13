import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl } from "@/config/company";

/** Barra fixa no celular: WhatsApp direto (o canal que mais converte em serviço local). */
export function StickyMobileCTA() {
  const { pathname } = useLocation();
  const hidden = pathname.startsWith("/contact") || pathname.startsWith("/request-quote");

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed inset-x-4 bottom-4 z-50 md:hidden"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 font-display font-semibold text-white shadow-2xl shadow-black/25 transition-transform active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com um engenheiro no WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

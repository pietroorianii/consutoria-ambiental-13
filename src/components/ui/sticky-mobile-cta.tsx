import { MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function StickyMobileCTA() {
  const location = useLocation();
  const hidden = location.pathname.startsWith("/contact");

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="md:hidden fixed bottom-4 inset-x-4 z-50"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-brand-accent text-white font-sora font-semibold shadow-2xl shadow-brand-accent/30 backdrop-blur-md active:scale-[0.98] transition-transform"
            aria-label="Fale com um especialista"
          >
            <MessageCircle className="h-5 w-5" />
            Fale com um especialista
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

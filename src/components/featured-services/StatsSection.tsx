
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function StatsSection() {
  return (
    <div className="text-center mt-16 scroll-trigger">
      <Button asChild size="lg" className="btn-gradient text-white group overflow-hidden relative py-6 px-8 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
        <Link to="/contact" className="flex items-center gap-2 relative z-10 text-base">
          Fale com um Especialista
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
    </div>
  );
}

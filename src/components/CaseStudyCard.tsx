
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface CaseStudyProps {
  case: {
    sector: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

export function CaseStudyCard({ case: caseStudy }: CaseStudyProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-eco-accent-teal/20 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <span className="text-sm font-semibold text-eco-accent-teal uppercase tracking-wider">{caseStudy.sector}</span>
        <CardTitle className="text-xl font-bold text-gray-900">{caseStudy.challenge}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-1">Solução Aplicada:</h4>
          <p className="text-sm text-gray-600">{caseStudy.solution}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700 mb-1">Resultado Alcançado:</h4>
          <p className="flex items-center gap-2 text-sm text-eco-green-dark font-medium">
            <CheckCircle className="h-4 w-4" />
            {caseStudy.result}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

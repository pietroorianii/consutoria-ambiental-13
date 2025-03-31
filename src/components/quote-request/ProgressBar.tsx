
import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="px-6 pt-6">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div 
          className="bg-eco-green h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mb-6">
        <span className={currentStep >= 1 ? "text-eco-green font-medium" : ""}>Dados</span>
        <span className={currentStep >= 2 ? "text-eco-green font-medium" : ""}>Empreendimento</span>
        <span className={currentStep >= 3 ? "text-eco-green font-medium" : ""}>Serviço</span>
        <span className={currentStep >= 4 ? "text-eco-green font-medium" : ""}>Contexto</span>
        <span className={currentStep >= 5 ? "text-eco-green font-medium" : ""}>Finalizar</span>
      </div>
    </div>
  );
};

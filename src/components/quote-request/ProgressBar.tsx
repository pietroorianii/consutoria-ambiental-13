
import React from "react";
import { Leaf, TreeDeciduous, Droplet, Factory, FilePlus } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="px-6 pt-6">
      {/* Barra de progresso */}
      <div className="w-full bg-gray-100 rounded-full h-3 mb-6 dark:bg-gray-700 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-eco-green to-eco-blue h-3 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      
      {/* Indicadores de etapas */}
      <div className="grid grid-cols-5 gap-1 mb-8">
        <div className={`flex flex-col items-center ${currentStep >= 1 ? "text-eco-green" : "text-gray-400"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? "bg-eco-green/10" : "bg-gray-100"}`}>
            <Leaf className={`h-5 w-5 ${currentStep >= 1 ? "text-eco-green" : "text-gray-400"}`} />
          </div>
          <span className="text-xs font-medium text-center">Dados</span>
        </div>
        
        <div className={`flex flex-col items-center ${currentStep >= 2 ? "text-eco-green" : "text-gray-400"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? "bg-eco-green/10" : "bg-gray-100"}`}>
            <Factory className={`h-5 w-5 ${currentStep >= 2 ? "text-eco-green" : "text-gray-400"}`} />
          </div>
          <span className="text-xs font-medium text-center">Empreendimento</span>
        </div>
        
        <div className={`flex flex-col items-center ${currentStep >= 3 ? "text-eco-green" : "text-gray-400"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? "bg-eco-green/10" : "bg-gray-100"}`}>
            <FilePlus className={`h-5 w-5 ${currentStep >= 3 ? "text-eco-green" : "text-gray-400"}`} />
          </div>
          <span className="text-xs font-medium text-center">Serviço</span>
        </div>
        
        <div className={`flex flex-col items-center ${currentStep >= 4 ? "text-eco-green" : "text-gray-400"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 4 ? "bg-eco-green/10" : "bg-gray-100"}`}>
            <Droplet className={`h-5 w-5 ${currentStep >= 4 ? "text-eco-green" : "text-gray-400"}`} />
          </div>
          <span className="text-xs font-medium text-center">Contexto</span>
        </div>
        
        <div className={`flex flex-col items-center ${currentStep >= 5 ? "text-eco-green" : "text-gray-400"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 5 ? "bg-eco-green/10" : "bg-gray-100"}`}>
            <TreeDeciduous className={`h-5 w-5 ${currentStep >= 5 ? "text-eco-green" : "text-gray-400"}`} />
          </div>
          <span className="text-xs font-medium text-center">Finalizar</span>
        </div>
      </div>
    </div>
  );
};


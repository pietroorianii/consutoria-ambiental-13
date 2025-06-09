
export const getErrorMessage = (error: any): string => {
  if (!error) return "Erro inesperado. Tente novamente.";
  
  const message = error.message || error.toString();
  
  // Erros específicos do Supabase
  if (message.includes('duplicate key')) {
    return "Este e-mail já foi cadastrado recentemente. Aguarde alguns minutos antes de enviar novamente.";
  }
  
  if (message.includes('connection') || message.includes('network')) {
    return "Problema de conexão. Verifique sua internet e tente novamente.";
  }
  
  if (message.includes('timeout')) {
    return "A solicitação demorou muito para ser processada. Tente novamente.";
  }
  
  if (message.includes('permission') || message.includes('auth')) {
    return "Erro de autorização. Entre em contato conosco diretamente.";
  }
  
  if (message.includes('validation') || message.includes('invalid')) {
    return "Dados inválidos. Verifique as informações e tente novamente.";
  }
  
  // Erro genérico para casos não específicos
  return "Erro interno do servidor. Tente novamente em alguns minutos.";
};

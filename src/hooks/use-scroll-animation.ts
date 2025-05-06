
import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    // Função para detectar elementos no viewport
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      // Seleciona todos os elementos com a classe scroll-trigger
      const elements = document.querySelectorAll(".scroll-trigger");
      elements.forEach((element) => {
        // Remover animações existentes para garantir que o efeito seja aplicado novamente
        element.classList.remove("animate-fade-up");
        // Adicionar opacidade 0 inicialmente
        element.style.opacity = "0";
        // Observar o elemento
        observer.observe(element);
      });
    };

    // Executa a função inicial
    observeElements();

    // Adiciona listener para resize (para recalcular quando o tamanho da tela mudar)
    window.addEventListener("resize", observeElements);

    // Cleanup
    return () => {
      window.removeEventListener("resize", observeElements);
    };
  }, []);
}

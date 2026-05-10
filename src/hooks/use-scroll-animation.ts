
import { useEffect, useCallback, useRef } from "react";

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const observeElements = useCallback(() => {
    // Limpar observer anterior
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '50px' // Pré-carrega animações
    });

    const elements = document.querySelectorAll(".scroll-trigger");
    elements.forEach((element) => {
      element.classList.remove("animate-fade-up");
      (element as HTMLElement).style.opacity = "0";
      observerRef.current?.observe(element);
    });
  }, []);

  useEffect(() => {
    observeElements();
    
    // Debounce resize events
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(observeElements, 250);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      observerRef.current?.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [observeElements]);
}

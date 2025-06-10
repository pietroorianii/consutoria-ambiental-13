
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  priority = false,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Otimizar URL de imagem automaticamente para WebP quando disponível
  const optimizeImageUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      // Adicionar parâmetros de otimização do Unsplash
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}auto=format&fit=crop&w=800&q=80`;
    }
    return url;
  };

  const imageSrc = imageError && fallbackSrc ? fallbackSrc : optimizeImageUrl(src);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-eco-neutral-light animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};

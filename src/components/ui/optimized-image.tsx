
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
  webpSrc?: string; // For modern WebP format if available
  sizes?: string; // For responsive images
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  priority = false,
  webpSrc,
  sizes = "100vw",
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setImageError(true);
    console.log(`Image loading error for: ${src}`);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imageSrc = imageError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* If WebP version is available, use picture element for format flexibility */}
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={imageSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={handleError}
            onLoad={handleLoad}
            sizes={sizes}
            className={cn(
              "transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              className
            )}
            {...props}
          />
        </picture>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={handleError}
          onLoad={handleLoad}
          sizes={sizes}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

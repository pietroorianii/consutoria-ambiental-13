
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-muted py-12 md:py-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-4 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { serviceStyles, defaultStyles } from "./serviceStyles";

interface ServiceData {
  title: string;
  services: Array<{ title: string; description: string }>;
}

interface ServiceCardProps {
  serviceKey: string;
  serviceData: ServiceData;
  index: number;
}

export function ServiceCard({ serviceKey, serviceData, index }: ServiceCardProps) {
  const styles = serviceStyles[serviceKey] || defaultStyles;
  const description =
    serviceData.services.map((s) => s.title).join(" · ") ||
    "Serviço técnico especializado para conformidade ambiental.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <Card className="group relative h-full flex flex-col rounded-3xl border border-brand-dark/8 bg-card/90 backdrop-blur-sm shadow-soft hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="mb-5 h-14 w-14 rounded-2xl bg-brand-accent/10 grid place-items-center group-hover:bg-brand-accent/15 transition-colors">
            {React.cloneElement(styles.icon as React.ReactElement, {
              className: "h-7 w-7 text-brand-primary",
            })}
          </div>
          <CardTitle className="font-sora text-lg font-bold text-brand-dark leading-snug">
            {serviceData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col">
          <p className="font-inter text-sm text-brand-dark/70 leading-relaxed line-clamp-3 mb-6">
            {description}
          </p>

          <Button
            asChild
            variant="ghost"
            className="mt-auto self-start px-0 text-brand-primary hover:text-brand-accent hover:bg-transparent font-medium"
          >
            <Link to={`/services/${serviceKey}`} className="flex items-center gap-2 group/btn">
              Saiba mais
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

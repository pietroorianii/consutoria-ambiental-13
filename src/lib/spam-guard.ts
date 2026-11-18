import { useRef } from "react";

/**
 * Proteção leve contra robôs nos formulários (sem captcha, sem atrito para o cliente):
 * 1) honeypot: campo invisível que só robôs preenchem;
 * 2) tempo mínimo: envios em menos de 3 s após abrir o formulário são descartados.
 * Envios suspeitos recebem "sucesso" falso e não chegam ao banco.
 */
export function useSpamGuard(minMs = 3000) {
  const startedAt = useRef(Date.now());
  const honeypot = useRef<HTMLInputElement>(null);

  const isLikelyBot = () =>
    Boolean(honeypot.current?.value) || Date.now() - startedAt.current < minMs;

  const honeypotProps = {
    ref: honeypot,
    type: "text",
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": true,
    className: "absolute -left-[9999px] h-0 w-0 opacity-0",
  } as const;

  return { isLikelyBot, honeypotProps };
}

export const LGPD_NOTICE =
  "Ao enviar, você autoriza a Axis Soluções Ambientais a usar seus dados apenas para responder ao seu pedido, conforme a Lei nº 13.709/2018 (LGPD). Os dados ficam armazenados com fornecedores que operam o site (hospedagem do banco de dados e envio de e-mail) e não são vendidos nem usados para outra finalidade.";

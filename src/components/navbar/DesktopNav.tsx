import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const navItems = [
  { to: "/", label: "Início", exact: true },
  { to: "/about", label: "Sobre", exact: false },
  { to: "/services", label: "Serviços", exact: false },
  { to: "/faq", label: "Dúvidas", exact: false },
  { to: "/contact", label: "Contato", exact: false },
];

export function DesktopNav() {
  const { pathname } = useLocation();
  const isActive = (to: string, exact: boolean) => (exact ? pathname === to : pathname.startsWith(to === "/services" ? "/service" : to));

  return (
    <nav aria-label="Principal" className="hidden flex-1 items-center justify-end gap-8 xl:flex">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActive(item.to, item.exact);
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex h-10 items-center px-3.5 text-[0.94rem] font-medium transition-colors",
                  active ? "text-white" : "text-brand-silver/80 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-brand-lime transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/diagnostico" className="axis-btn-solid py-2.5 text-sm">
        Diagnóstico grátis
      </Link>
    </nav>
  );
}

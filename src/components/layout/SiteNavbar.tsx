import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/pampai-logo.jpeg";

const useNav = () => {
  const { t } = useLang();
  return [
    { to: "/productos", label: t("Productos", "Products") },
    { to: "/proceso", label: t("Proceso", "Process") },
    { to: "/casos-de-uso", label: t("Casos de uso", "Use cases") },
    { to: "/pricing", label: "Pricing" },
    { to: "/impacto-social", label: t("Impacto social", "Social impact") },
    { to: "/contacto", label: t("Contacto", "Contact") },
  ];
};

const LangSwitch = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-strong overflow-hidden font-mono-tech text-[11px] tracking-[1.5px]">
      <button
        onClick={() => setLang("es")}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "es" ? "bg-foreground text-background" : "text-ink-muted hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          lang === "en" ? "bg-foreground text-background" : "text-ink-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

const SiteNavbar = () => {
  const { t } = useLang();
  const nav = useNav();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[rgba(10,10,15,0.72)] border-b border-soft"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3.5">
        <Link to="/" className="flex items-center gap-3 font-serif-display text-[22px] text-foreground">
          <img
            src={logo}
            alt="Pampai"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15 shadow-[0_0_20px_rgba(124,92,255,0.35)]"
          />
          <span>Pampai</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm text-ink-muted">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground ${isActive || location.pathname.startsWith(item.to + "/") ? "text-foreground" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <Link
            to="/contacto"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-pampai-gradient text-white px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            {t("Agendar demo", "Book a demo")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-soft bg-[rgba(10,10,15,0.95)] px-5 py-4 flex flex-col gap-3"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm py-1.5 ${isActive ? "text-foreground" : "text-ink-muted"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-pampai-gradient text-white px-4 py-2.5 text-sm font-medium"
          >
            {t("Agendar demo", "Book a demo")}
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default SiteNavbar;

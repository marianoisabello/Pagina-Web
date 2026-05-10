import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/pampai-logo.jpeg";

const SiteFooter = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-soft mt-20 px-6 py-14 bg-[hsl(var(--bg-elevated))]">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3 font-serif-display text-2xl text-foreground">
            <img src={logo} alt="Pampai" className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15" />
            <span>Pampai</span>
          </Link>
          <p className="mt-4 text-sm text-ink-muted leading-relaxed">
            {t(
              "Soluciones de IA aplicada para empresas y organizaciones reales.",
              "Applied AI solutions for real businesses and organizations.",
            )}
          </p>
        </div>

        <div>
          <h4 className="text-foreground font-medium text-sm mb-3">{t("Productos", "Products")}</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/productos/ai-data" className="hover:text-foreground">{t("IA para datos", "AI for data")}</Link></li>
            <li><Link to="/productos/generative-ai" className="hover:text-foreground">{t("IA generativa", "Generative AI")}</Link></li>
            <li><Link to="/productos/automation" className="hover:text-foreground">{t("Automatización", "Automation")}</Link></li>
            <li><Link to="/productos/agents" className="hover:text-foreground">{t("Agentes de IA", "AI agents")}</Link></li>
            <li><Link to="/productos/decision-copilot" className="hover:text-foreground">{t("Copiloto de decisiones", "Decision copilot")}</Link></li>
            <li><Link to="/productos/social-ai" className="hover:text-foreground">{t("IA social", "Social AI")}</Link></li>
            <li><Link to="/productos/autonomous-agents" className="hover:text-foreground">{t("Agentes autónomos", "Autonomous agents")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-medium text-sm mb-3">{t("Empresa", "Company")}</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/proceso" className="hover:text-foreground">{t("Proceso", "Process")}</Link></li>
            <li><Link to="/casos-de-uso" className="hover:text-foreground">{t("Casos de uso", "Use cases")}</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/impacto-social" className="hover:text-foreground">{t("Impacto social", "Social impact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-medium text-sm mb-3">{t("Contacto", "Contact")}</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/contacto" className="hover:text-foreground">{t("Agendar demo", "Book a demo")}</Link></li>
            <li>
              <a
                href="https://wa.me/5491176714108"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-soft text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} Pampai. {t("Todos los derechos reservados.", "All rights reserved.")}
      </div>
    </footer>
  );
};

export default SiteFooter;

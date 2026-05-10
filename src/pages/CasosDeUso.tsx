import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const CasosDeUso = () => {
  const { t } = useLang();

  const cases = [
    {
      industry: t("Retail", "Retail"),
      title: t("Predicción de demanda y stock", "Demand & stock prediction"),
      desc: t("Modelos predictivos que ajustan stock por tienda y SKU.", "Predictive models that fine-tune stock per store and SKU."),
      product: { to: "/productos/decision-copilot", label: t("Copiloto de Decisiones", "Decision Copilot") },
    },
    {
      industry: t("Salud", "Health"),
      title: t("Asistentes para historias clínicas", "Clinical record assistants"),
      desc: t("IA generativa que asiste en documentación médica y triage.", "Generative AI assisting in medical documentation and triage."),
      product: { to: "/productos/generative-ai", label: t("IA Generativa", "Generative AI") },
    },
    {
      industry: t("Finanzas", "Finance"),
      title: t("Detección de fraude en tiempo real", "Real-time fraud detection"),
      desc: t("Modelos en producción para reducir pérdidas y falsos positivos.", "Production models to reduce losses and false positives."),
      product: { to: "/productos/ai-data", label: t("IA para datos", "AI for data") },
    },
    {
      industry: t("Logística", "Logistics"),
      title: t("Optimización de rutas y entregas", "Route & delivery optimization"),
      desc: t("Agentes que planifican y reasignan en tiempo real.", "Agents that plan and reassign in real time."),
      product: { to: "/productos/autonomous-agents", label: t("Agentes Autónomos", "Autonomous Agents") },
    },
    {
      industry: t("RRHH", "HR"),
      title: t("Screening y onboarding inteligente", "Smart screening & onboarding"),
      desc: t("Automatización completa de candidatos a empleados.", "Full candidate-to-employee automation."),
      product: { to: "/productos/automation", label: t("Automatización", "Automation") },
    },
    {
      industry: t("ONG", "NGO"),
      title: t("Optimización de donaciones", "Donations optimization"),
      desc: t("Asignación inteligente de recursos a beneficiarios.", "Smart allocation of resources to beneficiaries."),
      product: { to: "/productos/social-ai", label: t("IA Social", "Social AI") },
    },
  ];

  return (
    <div className="pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-14">
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("CASOS DE USO", "USE CASES")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif-display mt-3 mb-5 leading-[1.05]">
            {t("IA aplicada por industria", "AI applied by industry")}
          </h1>
          <p className="text-lg text-ink-muted">
            {t("Explorá cómo la IA está generando resultados reales en distintos sectores.", "Explore how AI is producing real results across different sectors.")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-soft bg-[hsl(var(--bg-card))] p-7 flex flex-col"
            >
              <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))] mb-3">
                {c.industry}
              </span>
              <h3 className="text-2xl font-serif-display mb-2">{c.title}</h3>
              <p className="text-sm text-ink-muted mb-5 flex-1">{c.desc}</p>
              <Link
                to={c.product.to}
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-[hsl(var(--teal))] transition-colors"
              >
                {c.product.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CasosDeUso;

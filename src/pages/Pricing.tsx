import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLang();

  const plans = [
    {
      name: "Starter",
      tag: t("Para empezar con foco", "Get started with focus"),
      features: [
        t("Diagnóstico inicial", "Initial diagnosis"),
        t("1 caso de uso", "1 use case"),
        t("Automatización simple", "Simple automation"),
        t("Integración básica", "Basic integration"),
        t("Prototipo funcional", "Functional prototype"),
      ],
      highlight: false,
    },
    {
      name: "Growth",
      tag: t("Para crecer con IA", "Grow with AI"),
      features: [
        t("Múltiples casos de uso", "Multiple use cases"),
        t("Aplicaciones de datos", "Data applications"),
        t("Automatizaciones avanzadas", "Advanced automations"),
        t("Integraciones internas", "Internal integrations"),
        t("Métricas y reporting", "Metrics & reporting"),
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      tag: t("Para escalar a toda la organización", "Scale across the organization"),
      features: [
        t("Agentes de IA", "AI agents"),
        t("Arquitectura custom", "Custom architecture"),
        t("Integración avanzada", "Advanced integration"),
        t("Seguridad y permisos", "Security & permissions"),
        t("Soporte continuo", "Ongoing support"),
      ],
      highlight: false,
    },
  ];

  return (
    <div className="pt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">PRICING</span>
          <h1 className="text-5xl md:text-7xl font-serif-display mt-3 mb-5 leading-[1.05]">
            {t("Modelos a medida de tu proyecto", "Models tailored to your project")}
          </h1>
          <p className="text-lg text-ink-muted">
            {t(
              "Cada implementación es distinta. Trabajamos por propuesta según alcance, integraciones y resultados esperados.",
              "Every implementation is different. We work by proposal based on scope, integrations and expected outcomes.",
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border p-7 flex flex-col ${
                p.highlight
                  ? "border-[hsl(var(--primary))] bg-pampai-gradient-soft shadow-[0_0_40px_rgba(124,92,255,0.25)]"
                  : "border-soft bg-[hsl(var(--bg-card))]"
              }`}
            >
              {p.highlight && (
                <span className="inline-flex items-center gap-1 self-start text-[10px] font-mono-tech tracking-widest text-[hsl(var(--teal))] mb-3">
                  <Sparkles className="w-3 h-3" /> {t("MÁS ELEGIDO", "MOST PICKED")}
                </span>
              )}
              <h3 className="text-3xl font-serif-display mb-1">{p.name}</h3>
              <p className="text-sm text-ink-muted mb-6">{p.tag}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-[hsl(var(--teal))] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contacto"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.highlight
                    ? "bg-pampai-gradient text-white hover:opacity-90"
                    : "border border-strong text-foreground hover:bg-[hsl(var(--bg-elevated))]"
                }`}
              >
                {t("Solicitar propuesta", "Request a proposal")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pricing;

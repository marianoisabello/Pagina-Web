import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, Hammer, TrendingUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ProcessIndex = () => {
  const { t } = useLang();
  const steps = [
    {
      to: "/proceso/entendimiento",
      n: "01",
      icon: Search,
      title: t("Entendimiento", "Discovery"),
      desc: t("Entendemos tu negocio, datos y objetivos.", "We understand your business, data and goals."),
    },
    {
      to: "/proceso/diseno",
      n: "02",
      icon: PenTool,
      title: t("Diseño", "Design"),
      desc: t("Diseñamos la solución y el roadmap.", "We design the solution and the roadmap."),
    },
    {
      to: "/proceso/construccion",
      n: "03",
      icon: Hammer,
      title: t("Construcción", "Build"),
      desc: t("Construimos, integramos y desplegamos.", "We build, integrate and deploy."),
    },
    {
      to: "/proceso/escala",
      n: "04",
      icon: TrendingUp,
      title: t("Escala", "Scale"),
      desc: t("Medimos, iteramos y escalamos a toda la organización.", "We measure, iterate and scale across the organization."),
    },
  ];

  return (
    <div className="pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-14">
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("PROCESO", "PROCESS")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif-display mt-3 mb-5 leading-[1.05]">
            {t("Cómo trabajamos", "How we work")}
          </h1>
          <p className="text-lg text-ink-muted">
            {t(
              "Un proceso claro en 4 etapas para llevar tu proyecto de IA del problema a producción.",
              "A clear 4-step process to take your AI project from problem to production.",
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={s.to}
                  className="group block h-full rounded-2xl border border-soft bg-[hsl(var(--bg-card))] p-7 hover:border-strong transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pampai-gradient-soft">
                      <Icon className="w-6 h-6 text-[hsl(var(--teal))]" />
                    </div>
                    <span className="font-mono-tech text-2xl text-ink-dim">{s.n}</span>
                  </div>
                  <h3 className="text-2xl font-serif-display mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-muted mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-foreground group-hover:gap-2.5 transition-all">
                    {t("Ver detalle", "View detail")}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProcessIndex;

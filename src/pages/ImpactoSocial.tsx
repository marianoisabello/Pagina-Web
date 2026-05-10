import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Eye, Users, Heart } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ImpactoSocial = () => {
  const { t } = useLang();

  const areas = [
    {
      icon: Utensils,
      title: t("Comedores y asistencia alimentaria", "Food banks & food assistance"),
      items: [
        t("Predicción de demanda", "Demand prediction"),
        t("Optimización de distribución", "Distribution optimization"),
        t("Reducción de desperdicio", "Waste reduction"),
      ],
    },
    {
      icon: Eye,
      title: t("Asistencia a personas con discapacidad visual", "Support for visually impaired people"),
      items: [
        t("Navegación asistida", "Assisted navigation"),
        t("Detección de obstáculos", "Obstacle detection"),
        t("Asistentes auditivos inteligentes", "Smart audio assistants"),
      ],
    },
    {
      icon: Users,
      title: t("Apoyo a adultos mayores", "Support for older adults"),
      items: [
        t("Recordatorios inteligentes", "Smart reminders"),
        t("Detección de riesgos", "Risk detection"),
        t("Asistentes conversacionales", "Conversational assistants"),
      ],
    },
    {
      icon: Heart,
      title: t("ONGs y organizaciones sociales", "NGOs and social organizations"),
      items: [
        t("Optimización de donaciones", "Donations optimization"),
        t("Análisis de beneficiarios", "Beneficiary analysis"),
        t("Reportes automáticos", "Automatic reports"),
        t("Medición de impacto", "Impact measurement"),
      ],
    },
  ];

  return (
    <div className="pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-14">
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("IMPACTO SOCIAL", "SOCIAL IMPACT")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif-display mt-3 mb-5 leading-[1.05]">
            {t("IA para Impacto Social", "AI for Social Impact")}
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            {t(
              "En Pampai creemos que la inteligencia artificial no solo debe generar eficiencia, sino también impacto real en la sociedad.",
              "At Pampai we believe AI shouldn't only drive efficiency, but real impact on society.",
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-soft bg-[hsl(var(--bg-card))] p-7"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pampai-gradient-soft mb-5">
                  <Icon className="w-6 h-6 text-[hsl(var(--teal))]" />
                </div>
                <h3 className="text-2xl font-serif-display mb-4">{a.title}</h3>
                <ul className="space-y-2">
                  {a.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal))] shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-soft p-8 md:p-12 bg-pampai-gradient-soft text-center"
        >
          <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-7">
            {t(
              "Ofrecemos modelos flexibles, precios reducidos y colaboración estratégica para proyectos sociales y ONGs.",
              "We offer flexible models, reduced pricing and strategic collaboration for social projects and NGOs.",
            )}
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-7 py-3.5 text-sm font-medium hover:opacity-90"
          >
            {t("Trabajemos juntos en un proyecto de impacto", "Let's work together on an impact project")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default ImpactoSocial;

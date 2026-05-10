import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Database, Sparkles, Workflow, Bot, GitBranch, Heart, Cpu } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ProductsIndex = () => {
  const { t } = useLang();

  const main = [
    {
      to: "/productos/ai-data",
      icon: Database,
      title: t("Aplicaciones de IA para datos", "AI Applications for Data"),
      desc: t(
        "Convertí tus datos internos en dashboards, reportes y respuestas en lenguaje natural.",
        "Turn your internal data into dashboards, reports and natural language answers.",
      ),
    },
    {
      to: "/productos/generative-ai",
      icon: Sparkles,
      title: t("Productos de IA generativa", "Generative AI Products"),
      desc: t(
        "Generación de contenido, conocimiento y experiencias a escala.",
        "Generation of content, knowledge and experiences at scale.",
      ),
    },
    {
      to: "/productos/automation",
      icon: Workflow,
      title: t("Automatización de procesos", "Process Automation"),
      desc: t(
        "Eliminamos tareas repetitivas y orquestamos procesos completos con IA.",
        "We remove repetitive tasks and orchestrate end-to-end processes with AI.",
      ),
    },
    {
      to: "/productos/agents",
      icon: Bot,
      title: t("Agentes de IA", "AI Agents"),
      desc: t(
        "Asistentes inteligentes que conversan, deciden y operan dentro de tu empresa.",
        "Intelligent assistants that chat, decide and operate inside your business.",
      ),
    },
  ];

  const advanced = [
    {
      to: "/productos/decision-copilot",
      icon: GitBranch,
      title: t("Copiloto de Decisiones con IA", "AI Decision Copilot"),
      desc: t(
        "No solo mostramos información. Te ayudamos a decidir y actuar.",
        "We don't just show data. We help you decide and act.",
      ),
    },
    {
      to: "/productos/social-ai",
      icon: Heart,
      title: t("IA para Infraestructura Social", "Social Infrastructure AI"),
      desc: t(
        "Mejorá la asignación de recursos, eficiencia e impacto en organizaciones sociales.",
        "Improve resource allocation, efficiency and impact in social organizations.",
      ),
    },
    {
      to: "/productos/autonomous-agents",
      icon: Cpu,
      title: t("Agentes Autónomos de Negocio", "Autonomous Business Agents"),
      desc: t(
        "Sistemas que ejecutan tareas, operan procesos y toman decisiones de forma autónoma.",
        "Systems that execute tasks, operate processes and make decisions autonomously.",
      ),
    },
  ];

  return (
    <div className="pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("PRODUCTOS", "PRODUCTS")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif-display mt-3 mb-5 leading-[1.05]">
            {t("Soluciones de IA listas para tu negocio", "AI solutions ready for your business")}
          </h1>
          <p className="text-lg text-ink-muted">
            {t(
              "Productos modulares que se combinan según tu industria, datos y objetivos.",
              "Modular products that combine to fit your industry, data and goals.",
            )}
          </p>
        </motion.div>

        <h2 className="text-2xl font-serif-display mb-5">{t("Principales", "Core")}</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {main.map((p, i) => <ProductCard key={p.to} p={p} delay={i * 0.05} />)}
        </div>

        <h2 className="text-2xl font-serif-display mb-5">{t("Avanzados", "Advanced")}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {advanced.map((p, i) => <ProductCard key={p.to} p={p} delay={i * 0.05} />)}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ p, delay }: { p: { to: string; icon: any; title: any; desc: any }; delay: number }) => {
  const { t } = useLang();
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={p.to}
        className="group block h-full rounded-2xl border border-soft bg-[hsl(var(--bg-card))] p-7 hover:border-strong hover:bg-[hsl(var(--bg-elevated))] transition-all"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pampai-gradient-soft mb-5">
          <Icon className="w-6 h-6 text-[hsl(var(--teal))]" />
        </div>
        <h3 className="text-2xl font-serif-display mb-2">{p.title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-5">{p.desc}</p>
        <span className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium group-hover:gap-2.5 transition-all">
          {t("Ver producto", "View product")}
          <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ProductsIndex;

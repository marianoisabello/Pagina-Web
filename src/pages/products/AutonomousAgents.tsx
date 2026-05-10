import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const AutonomousAgents = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("AGENTES AUTÓNOMOS", "AUTONOMOUS AGENTS") as string}
      title={t("Agentes Autónomos de Negocio", "Autonomous Business Agents") as string}
      subtitle={t(
        "Sistemas inteligentes capaces de ejecutar tareas, operar procesos y tomar decisiones de forma autónoma dentro de una empresa.",
        "Intelligent systems that execute tasks, operate processes and make decisions autonomously inside a business.",
      ) as string}
      image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600"
      problem={t(
        "Operar procesos críticos requiere coordinación constante entre personas, sistemas y datos. Eso limita la velocidad y la escala.",
        "Running critical processes requires constant coordination between people, systems and data. That limits speed and scale.",
      ) as string}
      solution={t(
        "Diseñamos agentes autónomos con guardrails que ejecutan procesos enteros, escalan a humanos cuando es necesario y mejoran con cada ciclo.",
        "We design autonomous agents with guardrails that run full processes, escalate to humans when needed and improve every cycle.",
      ) as string}
      howItWorks={[
        t("Definimos objetivos, límites y políticas.", "We define goals, limits and policies.") as string,
        t("Conectamos sistemas, datos y herramientas.", "We connect systems, data and tools.") as string,
        t("Implementamos memory, planning y monitoreo.", "We implement memory, planning and monitoring.") as string,
        t("Iteramos con feedback humano y métricas.", "We iterate with human feedback and metrics.") as string,
      ]}
      useCases={[
        t("Atención a clientes end-to-end", "End-to-end customer support") as string,
        t("Gestión de leads y outbound", "Lead and outbound management") as string,
        t("Automatización operativa compleja", "Complex operational automation") as string,
        t("Optimización continua de procesos", "Continuous process optimization") as string,
      ]}
      benefits={[
        t("Operan 24/7 a costo marginal", "Operate 24/7 at marginal cost") as string,
        t("Aprenden y mejoran con uso", "Learn and improve with use") as string,
        t("Escalables sin sumar headcount", "Scalable without adding headcount") as string,
        t("Auditables y controlados", "Auditable and controlled") as string,
      ]}
    />
  );
};
export default AutonomousAgents;

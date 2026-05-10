import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const Automation = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("AUTOMATIZACIÓN", "AUTOMATION") as string}
      title={t("Automatización de procesos con IA", "AI-powered process automation") as string}
      subtitle={t(
        "Eliminamos tareas repetitivas y orquestamos procesos completos integrando IA, sistemas y personas.",
        "We remove repetitive tasks and orchestrate full processes combining AI, systems and people.",
      ) as string}
      image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600"
      problem={t(
        "Hay procesos manuales, lentos y propensos a errores que consumen tiempo del equipo y generan cuellos de botella.",
        "Manual, slow and error-prone processes consume team time and create bottlenecks.",
      ) as string}
      solution={t(
        "Mapeamos los procesos críticos y los rediseñamos con automatización inteligente y agentes que operan extremos a extremo.",
        "We map critical processes and redesign them with intelligent automation and agents that operate end-to-end.",
      ) as string}
      howItWorks={[
        t("Identificamos procesos con mayor retorno.", "We identify processes with the highest return.") as string,
        t("Diseñamos el flujo automatizado y los puntos de control.", "We design the automated flow and control points.") as string,
        t("Integramos sistemas existentes y APIs.", "We integrate existing systems and APIs.") as string,
        t("Monitoreamos métricas y mejoramos continuamente.", "We monitor metrics and continuously improve.") as string,
      ]}
      useCases={[
        t("Onboarding de clientes", "Customer onboarding") as string,
        t("Procesamiento de facturas y documentos", "Invoice & document processing") as string,
        t("Calificación y seguimiento de leads", "Lead qualification & follow-up") as string,
        t("Operaciones de back-office", "Back-office operations") as string,
      ]}
      benefits={[
        t("Reducción de costos operativos", "Operational cost reduction") as string,
        t("Menos errores y reprocesos", "Fewer errors and reworks") as string,
        t("Tiempos de respuesta más cortos", "Faster response times") as string,
        t("Equipos liberados para tareas de mayor valor", "Teams freed for higher-value work") as string,
      ]}
    />
  );
};
export default Automation;

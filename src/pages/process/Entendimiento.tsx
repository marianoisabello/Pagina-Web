import { ProcessPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const Entendimiento = () => {
  const { t } = useLang();
  return (
    <ProcessPageLayout
      step="01"
      title={t("Entendimiento", "Discovery") as string}
      subtitle={t(
        "Inmersión en tu negocio, datos, equipos y objetivos para identificar oportunidades reales de IA.",
        "Deep dive into your business, data, teams and goals to identify real AI opportunities.",
      ) as string}
      whatWeDo={t(
        "Entrevistamos stakeholders, mapeamos procesos críticos, evaluamos datos disponibles y priorizamos casos de uso por impacto y viabilidad.",
        "We interview stakeholders, map critical processes, assess available data and prioritize use cases by impact and feasibility.",
      ) as string}
      whatClientBrings={t(
        "Acceso a equipos clave, contexto del negocio y visibilidad de los datos relevantes.",
        "Access to key teams, business context and visibility of relevant data.",
      ) as string}
      deliverables={[
        t("Mapa de oportunidades de IA", "AI opportunity map") as string,
        t("Priorización por impacto y viabilidad", "Impact & feasibility prioritization") as string,
        t("Diagnóstico de datos", "Data diagnosis") as string,
        t("Roadmap inicial", "Initial roadmap") as string,
      ]}
      duration={t("1 a 3 semanas", "1 to 3 weeks") as string}
      next={{ to: "/proceso/diseno", label: t("Siguiente: Diseño", "Next: Design") as string }}
    />
  );
};
export default Entendimiento;

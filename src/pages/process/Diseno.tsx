import { ProcessPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const Diseno = () => {
  const { t } = useLang();
  return (
    <ProcessPageLayout
      step="02"
      title={t("Diseño", "Design") as string}
      subtitle={t(
        "Diseñamos la solución, la arquitectura y el plan de implementación.",
        "We design the solution, architecture and implementation plan.",
      ) as string}
      whatWeDo={t(
        "Modelamos la experiencia, definimos la arquitectura técnica, las integraciones y los KPIs de éxito.",
        "We model the experience, define the technical architecture, integrations and success KPIs.",
      ) as string}
      whatClientBrings={t(
        "Validación funcional, contexto técnico y acceso a sistemas a integrar.",
        "Functional validation, technical context and access to systems to integrate.",
      ) as string}
      deliverables={[
        t("Diseño funcional y técnico", "Functional & technical design") as string,
        t("Arquitectura de la solución", "Solution architecture") as string,
        t("KPIs y métricas de éxito", "KPIs & success metrics") as string,
        t("Plan de implementación", "Implementation plan") as string,
      ]}
      duration={t("2 a 4 semanas", "2 to 4 weeks") as string}
      next={{ to: "/proceso/construccion", label: t("Siguiente: Construcción", "Next: Build") as string }}
    />
  );
};
export default Diseno;

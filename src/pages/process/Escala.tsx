import { ProcessPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const Escala = () => {
  const { t } = useLang();
  return (
    <ProcessPageLayout
      step="04"
      title={t("Escala", "Scale") as string}
      subtitle={t(
        "Medimos resultados, iteramos y escalamos la solución a toda la organización.",
        "We measure results, iterate and scale the solution across the organization.",
      ) as string}
      whatWeDo={t(
        "Monitoreamos métricas, optimizamos modelos, expandimos casos de uso y formamos equipos internos.",
        "We monitor metrics, optimize models, expand use cases and train internal teams.",
      ) as string}
      whatClientBrings={t(
        "Apoyo organizacional, sponsor ejecutivo y compromiso con la mejora continua.",
        "Organizational support, executive sponsor and commitment to continuous improvement.",
      ) as string}
      deliverables={[
        t("Reportes de impacto periódicos", "Periodic impact reports") as string,
        t("Optimizaciones de modelos", "Model optimizations") as string,
        t("Nuevos casos de uso desplegados", "New use cases deployed") as string,
        t("Capacitación de equipos internos", "Internal team training") as string,
      ]}
      duration={t("Continuo", "Ongoing") as string}
    />
  );
};
export default Escala;

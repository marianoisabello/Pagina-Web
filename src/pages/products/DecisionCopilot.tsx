import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const DecisionCopilot = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("PRODUCTO AVANZADO", "ADVANCED PRODUCT") as string}
      title={t("Copiloto de Decisiones con IA", "AI Decision Copilot") as string}
      subtitle={t(
        "Un sistema inteligente que analiza datos, predice escenarios y recomienda acciones concretas para mejorar decisiones de negocio.",
        "An intelligent system that analyzes data, predicts scenarios and recommends concrete actions to improve business decisions.",
      ) as string}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600"
      problem={t(
        "Tus dashboards muestran qué pasó, pero no qué hacer. La decisión queda en manos de pocos expertos y se demora.",
        "Your dashboards show what happened, but not what to do. Decisions depend on a few experts and get delayed.",
      ) as string}
      solution={t(
        "No solo mostramos información. Te ayudamos a decidir y actuar con recomendaciones priorizadas y ejecución asistida.",
        "We don't just show data. We help you decide and act with prioritized recommendations and assisted execution.",
      ) as string}
      howItWorks={[
        t("Integramos datos internos y señales externas.", "We integrate internal data and external signals.") as string,
        t("Modelamos escenarios y predicciones.", "We model scenarios and predictions.") as string,
        t("Generamos recomendaciones priorizadas.", "We generate prioritized recommendations.") as string,
        t("Habilitamos ejecución automática opcional.", "We enable optional automatic execution.") as string,
      ]}
      useCases={[
        t("Pricing dinámico", "Dynamic pricing") as string,
        t("Optimización de inventario", "Inventory optimization") as string,
        t("Asignación de recursos", "Resource allocation") as string,
        t("Detección de oportunidades comerciales", "Commercial opportunity detection") as string,
      ]}
      benefits={[
        t("Integración con datos internos", "Internal data integration") as string,
        t("Modelos predictivos accionables", "Actionable predictive models") as string,
        t("Recomendaciones explicables", "Explainable recommendations") as string,
        t("Ejecución automática opcional", "Optional automatic execution") as string,
      ]}
    />
  );
};
export default DecisionCopilot;

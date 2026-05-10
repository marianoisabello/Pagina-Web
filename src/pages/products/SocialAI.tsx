import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const SocialAI = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("INFRAESTRUCTURA SOCIAL", "SOCIAL INFRASTRUCTURE") as string}
      title={t("IA para Infraestructura Social", "AI for Social Infrastructure") as string}
      subtitle={t(
        "Soluciones de inteligencia artificial diseñadas para mejorar la asignación de recursos, eficiencia e impacto en organizaciones sociales, ONGs y gobiernos.",
        "AI solutions designed to improve resource allocation, efficiency and impact in social organizations, NGOs and governments.",
      ) as string}
      image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600"
      problem={t(
        "Las organizaciones con propósito social manejan recursos limitados y necesitan maximizar cada acción.",
        "Mission-driven organizations manage limited resources and need to maximize every action.",
      ) as string}
      solution={t(
        "Aplicamos IA accesible y transparente a la planificación, asignación y medición de impacto social.",
        "We apply accessible and transparent AI to social planning, allocation and impact measurement.",
      ) as string}
      howItWorks={[
        t("Analizamos los datos disponibles del programa.", "We analyze the program's available data.") as string,
        t("Modelamos demanda, riesgo y eficiencia.", "We model demand, risk and efficiency.") as string,
        t("Implementamos herramientas de soporte a la decisión.", "We deploy decision support tools.") as string,
        t("Medimos impacto y reportamos a stakeholders.", "We measure impact and report to stakeholders.") as string,
      ]}
      useCases={[
        t("Optimización de donaciones", "Donations optimization") as string,
        t("Predicción de demanda social", "Social demand prediction") as string,
        t("Asignación de recursos", "Resource allocation") as string,
        t("Análisis de beneficiarios", "Beneficiary analysis") as string,
      ]}
      benefits={[
        t("Mayor eficiencia con los mismos recursos", "Greater efficiency with the same resources") as string,
        t("Decisiones basadas en evidencia", "Evidence-based decisions") as string,
        t("Reportes de impacto automáticos", "Automatic impact reports") as string,
        t("Modelos flexibles y precios reducidos", "Flexible models and reduced pricing") as string,
      ]}
    />
  );
};
export default SocialAI;

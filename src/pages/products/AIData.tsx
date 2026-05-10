import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const AIData = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("APLICACIONES DE IA", "AI APPLICATIONS") as string}
      title={t("IA para tus datos internos", "AI for your internal data") as string}
      subtitle={t(
        "Hablale a tus dashboards, reportes y bases de datos en lenguaje natural. Decisiones más rápidas, sin depender de Excel ni de IT.",
        "Talk to your dashboards, reports and databases in natural language. Faster decisions, without depending on Excel or IT.",
      ) as string}
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600"
      problem={t(
        "Tus datos están dispersos entre Excel, CRM, ERP y dashboards. Conseguir una respuesta concreta lleva días y depende de pocas personas.",
        "Your data is scattered across Excel, CRM, ERP and dashboards. Getting a concrete answer takes days and depends on a few people.",
      ) as string}
      solution={t(
        "Construimos una capa de IA sobre tus fuentes de datos para que cualquier área pueda consultar, analizar y actuar en segundos.",
        "We build an AI layer on top of your data sources so any team can query, analyze and act in seconds.",
      ) as string}
      howItWorks={[
        t("Conectamos tus fuentes (DB, ERP, CRM, planillas) de forma segura.", "We securely connect your sources (DB, ERP, CRM, spreadsheets).") as string,
        t("Modelamos los datos y definimos métricas clave junto a tu equipo.", "We model data and define key metrics together with your team.") as string,
        t("Implementamos un asistente con respuestas en lenguaje natural.", "We deploy an assistant that answers in natural language.") as string,
        t("Iteramos con feedback real de uso semana a semana.", "We iterate with real usage feedback week by week.") as string,
      ]}
      useCases={[
        t("Reportes ejecutivos automáticos", "Automated executive reports") as string,
        t("Análisis de ventas y churn", "Sales & churn analysis") as string,
        t("Consultas de operaciones en tiempo real", "Real-time ops queries") as string,
        t("KPIs financieros conversacionales", "Conversational financial KPIs") as string,
      ]}
      benefits={[
        t("Decisiones más rápidas y basadas en datos", "Faster, data-driven decisions") as string,
        t("Menor dependencia de IT y analistas", "Less dependency on IT and analysts") as string,
        t("Adopción real en toda la organización", "Real adoption across the organization") as string,
        t("Seguridad y permisos por rol", "Role-based security and permissions") as string,
      ]}
    />
  );
};
export default AIData;

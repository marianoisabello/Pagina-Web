import { ProcessPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const Construccion = () => {
  const { t } = useLang();
  return (
    <ProcessPageLayout
      step="03"
      title={t("Construcción", "Build") as string}
      subtitle={t(
        "Construimos, integramos y desplegamos en producción con sprints cortos y entregas continuas.",
        "We build, integrate and deploy to production with short sprints and continuous delivery.",
      ) as string}
      whatWeDo={t(
        "Desarrollamos modelos, agentes, integraciones y la interfaz. Realizamos QA, seguridad y pruebas con usuarios reales.",
        "We build models, agents, integrations and the interface. We do QA, security and tests with real users.",
      ) as string}
      whatClientBrings={t(
        "Disponibilidad para validación continua, accesos técnicos y feedback de usuarios.",
        "Availability for continuous validation, technical access and user feedback.",
      ) as string}
      deliverables={[
        t("Producto funcionando en producción", "Live product in production") as string,
        t("Integraciones desplegadas", "Deployed integrations") as string,
        t("Documentación y capacitación", "Documentation & training") as string,
        t("Dashboards de monitoreo", "Monitoring dashboards") as string,
      ]}
      duration={t("4 a 12 semanas", "4 to 12 weeks") as string}
      next={{ to: "/proceso/escala", label: t("Siguiente: Escala", "Next: Scale") as string }}
    />
  );
};
export default Construccion;

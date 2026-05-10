import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const Agents = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("AGENTES DE IA", "AI AGENTS") as string}
      title={t("Agentes de IA para tu operación", "AI agents for your operations") as string}
      subtitle={t(
        "Asistentes inteligentes que conversan con clientes, califican leads y operan procesos dentro de tu empresa.",
        "Intelligent assistants that chat with customers, qualify leads and operate processes inside your company.",
      ) as string}
      image="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600"
      problem={t(
        "Atender clientes, responder consultas y dar seguimiento es costoso y difícil de escalar.",
        "Serving customers, answering queries and following up is expensive and hard to scale.",
      ) as string}
      solution={t(
        "Implementamos agentes de IA conectados a tu CRM, knowledge base y canales (web, WhatsApp, email).",
        "We deploy AI agents connected to your CRM, knowledge base and channels (web, WhatsApp, email).",
      ) as string}
      howItWorks={[
        t("Definimos el rol y los objetivos del agente.", "We define the agent's role and goals.") as string,
        t("Conectamos canales, datos y herramientas internas.", "We connect channels, data and internal tools.") as string,
        t("Entrenamos al agente con tu tono y conocimiento.", "We train the agent with your tone and knowledge.") as string,
        t("Medimos resoluciones, escalamientos y satisfacción.", "We measure resolutions, escalations and satisfaction.") as string,
      ]}
      useCases={[
        t("Atención al cliente 24/7", "24/7 customer support") as string,
        t("Asistentes de ventas", "Sales assistants") as string,
        t("Soporte técnico interno", "Internal tech support") as string,
        t("Recepción y triage de pedidos", "Request intake & triage") as string,
      ]}
      benefits={[
        t("Atención inmediata sin filas", "Instant attention, no queues") as string,
        t("Escalable a miles de conversaciones", "Scales to thousands of conversations") as string,
        t("Mejora continua basada en datos", "Continuous data-driven improvement") as string,
        t("Integrable con tu stack actual", "Integrates with your current stack") as string,
      ]}
    />
  );
};
export default Agents;

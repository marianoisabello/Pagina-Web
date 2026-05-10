import { ProductPageLayout } from "@/components/PageLayouts";
import { useLang } from "@/contexts/LanguageContext";

const GenerativeAI = () => {
  const { t } = useLang();
  return (
    <ProductPageLayout
      eyebrow={t("IA GENERATIVA", "GENERATIVE AI") as string}
      title={t("Productos especializados en IA generativa", "Specialized generative AI products") as string}
      subtitle={t(
        "Generación de contenido, documentos, conocimiento interno y experiencias personalizadas a escala.",
        "Content, documents, internal knowledge and personalized experiences generated at scale.",
      ) as string}
      image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600"
      problem={t(
        "Tu equipo pierde horas creando documentos, respuestas y contenido repetitivo que podría generarse de forma asistida.",
        "Your team loses hours producing documents, replies and repetitive content that could be generated with AI assistance.",
      ) as string}
      solution={t(
        "Diseñamos productos generativos a medida, conectados a tu base de conocimiento, marca y procesos.",
        "We design custom generative products connected to your knowledge base, brand and processes.",
      ) as string}
      howItWorks={[
        t("Definimos casos de uso de alto impacto.", "We define high-impact use cases.") as string,
        t("Conectamos tu base de conocimiento y guías de marca.", "We connect your knowledge base and brand guidelines.") as string,
        t("Construimos prompts y flujos productivos.", "We build production-ready prompts and workflows.") as string,
        t("Medimos calidad y mejoramos continuamente.", "We measure quality and continuously improve.") as string,
      ]}
      useCases={[
        t("Generación de propuestas comerciales", "Sales proposal generation") as string,
        t("Asistentes de conocimiento interno", "Internal knowledge assistants") as string,
        t("Marketing y campañas personalizadas", "Marketing & personalized campaigns") as string,
        t("Resúmenes y documentación automática", "Automated summaries and documentation") as string,
      ]}
      benefits={[
        t("Más velocidad de producción de contenido", "Faster content production") as string,
        t("Consistencia de marca y tono", "Brand & tone consistency") as string,
        t("Equipos enfocados en lo estratégico", "Teams focused on what matters") as string,
        t("Escalable sin incrementar headcount", "Scales without growing headcount") as string,
      ]}
    />
  );
};
export default GenerativeAI;

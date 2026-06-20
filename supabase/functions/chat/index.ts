import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT_ES = `Eres Pampai Assistant, el asistente de IA de Pampai. Ayudas a los usuarios a entender los servicios de Pampai, recomendar el producto adecuado, guiar la navegación por la web y sugerir próximos pasos como agendar demo, contactar por WhatsApp o completar el formulario.

Reglas:
- Responde siempre en español si language=es, en inglés si language=en.
- Sé breve, profesional y claro. Máximo 4-6 líneas.
- Usa este routing para sugerir páginas:
  * datos, dashboard, reportes, Excel, CRM → /productos/ai-data
  * automatización, tareas repetitivas, procesos → /productos/automation
  * contenido, documentos, generative AI → /productos/generative-ai
  * chatbot, asistentes, agentes → /productos/agents
  * decisiones, predicción, recomendaciones → /productos/decision-copilot
  * agentes autónomos, ejecución, operaciones automáticas → /productos/autonomous-agents
  * ONG, fundación, impacto, donaciones, beneficiarios → /impacto-social
- Cuando recomiendes una acción, mencioná: "Agendar demo" (/contacto), WhatsApp, o el producto correspondiente.`;

const SYSTEM_PROMPT_EN = `You are Pampai Assistant, the AI assistant for Pampai. You help users understand Pampai's services, recommend the right product, guide them through the website, and suggest next steps like booking a demo, contacting via WhatsApp, or filling out the form.

Rules:
- Always respond in Spanish if language=es, in English if language=en.
- Be brief, professional and clear. Max 4-6 lines.
- Use this routing to suggest pages:
  * data, dashboards, reports, Excel, CRM → /productos/ai-data
  * automation, repetitive tasks, processes → /productos/automation
  * content, documents, generative AI → /productos/generative-ai
  * chatbot, assistants, agents → /productos/agents
  * decisions, prediction, recommendations → /productos/decision-copilot
  * autonomous agents, execution, automated operations → /productos/autonomous-agents
  * NGO, foundation, impact, donations, beneficiaries → /impacto-social
- When recommending an action, mention: "Book a demo" (/contacto), WhatsApp, or the corresponding product.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, language = "es" } = await req.json();
    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not configured");

    const systemPrompt = language === "en" ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_ES;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 512,
        system: systemPrompt,
        messages: messages || [],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "rate_limit", message: language === "en" ? "Too many requests, please try again." : "Muchos pedidos, probá de nuevo." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "credits", message: language === "en" ? "AI credits exhausted." : "Sin créditos de IA." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const txt = await response.text();
      console.error("AI gateway error", response.status, txt);
      return new Response(JSON.stringify({ error: "ai_error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const reply = data?.content?.[0]?.text ?? "";
    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat handler error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

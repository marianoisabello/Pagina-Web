import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2, Sparkles, Trash2, Maximize2, Minimize2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_REPLIES_ES = [
  "Quiero automatizar un proceso",
  "Quiero consultar mis datos con IA",
  "Quiero crear un agente de IA",
  "Soy una ONG",
  "Quiero contactarlos",
];
const QUICK_REPLIES_EN = [
  "I want to automate a process",
  "I want to analyze my data",
  "I want to build an AI agent",
  "I'm a non-profit",
  "I want to contact you",
];

const PampaiAssistant = () => {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { messages: next, language: lang },
      });
      if (error) throw error;
      const reply = (data as any)?.reply ?? (lang === "es" ? "No pude responder ahora." : "I couldn't reply right now.");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: lang === "es" ? "Hubo un error. Probá de nuevo en unos segundos." : "There was an error. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quick = lang === "es" ? QUICK_REPLIES_ES : QUICK_REPLIES_EN;

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        aria-label="Pampai Assistant"
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-pampai-gradient text-white shadow-[0_0_30px_rgba(124,92,255,0.5)]"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`fixed bottom-44 right-6 z-50 rounded-2xl border border-soft bg-[hsl(var(--bg-elevated))] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${expanded ? "w-[min(92vw,600px)] h-[min(85vh,760px)]" : "w-[min(92vw,380px)] h-[min(70vh,560px)]"}`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-soft bg-pampai-gradient-soft">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[hsl(var(--teal))]" />
                <div>
                  <p className="text-sm font-medium text-foreground">Pampai Assistant</p>
                  <p className="text-[10px] text-ink-muted">{t("Asistente de IA", "AI assistant")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    title={t("Limpiar chat", "Clear chat") as string}
                    className="text-ink-muted hover:text-foreground"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setExpanded(!expanded)}
                  title={expanded ? t("Reducir", "Minimize") as string : t("Agrandar", "Expand") as string}
                  className="text-ink-muted hover:text-foreground"
                >
                  {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setOpen(false)} className="text-ink-muted hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-sm text-ink-muted">
                  <p className="mb-3">
                    {t(
                      "Hola, soy el asistente de Pampai. ¿En qué te puedo ayudar?",
                      "Hi, I'm the Pampai assistant. How can I help?",
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quick.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="rounded-full border border-soft bg-[hsl(var(--bg-card))] px-3 py-1.5 text-xs text-foreground hover:border-strong"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "ml-auto bg-pampai-gradient text-white"
                      : "bg-[hsl(var(--bg-card))] border border-soft text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="bg-[hsl(var(--bg-card))] border border-soft rounded-2xl px-3.5 py-2.5 max-w-[85%]">
                  <Loader2 className="w-4 h-4 animate-spin text-[hsl(var(--teal))]" />
                </div>
              )}
            </div>

            <div className="px-4 py-2 border-t border-soft flex flex-wrap gap-2">
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="text-[11px] rounded-full border border-soft px-2.5 py-1 text-ink-muted hover:text-foreground"
              >
                {t("Agendar demo", "Book a demo")}
              </Link>
              <a
                href="https://wa.me/5491176714108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] rounded-full border border-soft px-2.5 py-1 text-ink-muted hover:text-foreground"
              >
                WhatsApp
              </a>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t border-soft flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("Escribí un mensaje...", "Type a message...") as string}
                className="flex-1 rounded-full bg-[hsl(var(--bg-card))] border border-soft px-4 py-2 text-sm focus:outline-none focus:border-[hsl(var(--primary))]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pampai-gradient text-white disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PampaiAssistant;

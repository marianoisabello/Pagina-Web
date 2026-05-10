import { motion } from "framer-motion";
import { Send, Loader2, MessageCircle, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SOLUTION_TYPES = [
  { value: "ai_data", es: "Aplicación de IA para datos", en: "AI Data Application" },
  { value: "generative_ai", es: "Producto de IA generativa", en: "Generative AI Product" },
  { value: "automation", es: "Automatización de procesos", en: "Process Automation" },
  { value: "ai_agent", es: "Agente de IA", en: "AI Agent" },
  { value: "social_ngo", es: "Proyecto social / ONG", en: "Social Project / NGO" },
  { value: "other", es: "Otro", en: "Other" },
];

const Contacto = () => {
  const { lang, t } = useLang();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    solution_type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name,
      company: form.company || null,
      email: form.email,
      phone: form.phone || null,
      solution_type: form.solution_type || null,
      message: form.message,
      source: "pampai_website",
      preferred_lang: lang,
    });

    setLoading(false);
    if (error) {
      toast.error(t("Error al enviar. Intentá de nuevo.", "Failed to send. Please try again.") as string);
    } else {
      toast.success(t("¡Mensaje enviado! Te contactaremos pronto.", "Message sent! We'll get back to you soon.") as string);
      setForm({ name: "", company: "", email: "", phone: "", solution_type: "", message: "" });
    }
  };

  return (
    <div className="pt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-2">
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("CONTACTO", "CONTACT")}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif-display mt-3 mb-5 leading-[1.05]">
            {t("Hablemos de tu proyecto", "Let's talk about your project")}
          </h1>
          <p className="text-lg text-ink-muted mb-8">
            {t(
              "Contanos qué necesitás y te respondemos en menos de 24hs hábiles.",
              "Tell us what you need and we'll reply within 24 business hours.",
            )}
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-ink-muted">
              <MessageCircle className="w-4 h-4 text-[hsl(var(--teal))]" />
              <a href="https://wa.me/5491176714108" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                +54 9 11 4439 0930
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-muted">
              <Mail className="w-4 h-4 text-[hsl(var(--teal))]" />
              hola@pampai.ai
            </li>
            <li className="flex items-center gap-3 text-ink-muted">
              <MapPin className="w-4 h-4 text-[hsl(var(--teal))]" />
              {t("Buenos Aires, Argentina", "Buenos Aires, Argentina")}
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 rounded-3xl border border-soft bg-[hsl(var(--bg-card))] p-7 md:p-10 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input required placeholder={t("Nombre", "Name") as string} value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Input placeholder={t("Empresa / organización", "Company / organization") as string} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input required type="email" placeholder="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Input placeholder={t("Teléfono", "Phone") as string} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
          </div>
          <select
            required
            value={form.solution_type}
            onChange={(e) => setForm({ ...form, solution_type: e.target.value })}
            className="w-full rounded-xl border border-soft bg-[hsl(var(--bg-elevated))] px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[hsl(var(--primary))]"
          >
            <option value="" disabled>{t("Tipo de solución", "Solution type")}</option>
            {SOLUTION_TYPES.map((s) => (
              <option key={s.value} value={s.value}>{lang === "es" ? s.es : s.en}</option>
            ))}
          </select>
          <textarea
            required
            rows={5}
            placeholder={t("Mensaje", "Message") as string}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-soft bg-[hsl(var(--bg-elevated))] px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[hsl(var(--primary))] resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-7 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {t("Enviar", "Send")}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

const Input = ({
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
}) => (
  <input
    required={required}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    className="w-full rounded-xl border border-soft bg-[hsl(var(--bg-elevated))] px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[hsl(var(--primary))]"
  />
);

export default Contacto;

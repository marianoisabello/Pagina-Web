import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  useCases: string[];
  benefits: string[];
  image?: string;
}

export const ProductPageLayout = (p: ProductPageProps) => {
  const { t } = useLang();
  return (
    <div className="pt-28 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          to="/productos"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("Volver a productos", "Back to products")}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-soft p-8 md:p-14 bg-pampai-gradient-soft"
        >
          {p.image && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${p.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
          <div className="relative">
            <span className="inline-block text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))] mb-4">
              {p.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif-display leading-[1.05] mb-5">{p.title}</h1>
            <p className="text-lg text-ink-muted max-w-2xl">{p.subtitle}</p>
          </div>
        </motion.div>

        {/* Problema / Solución */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Section title={t("El problema", "The problem")} body={p.problem} />
          <Section title={t("Nuestra solución", "Our solution")} body={p.solution} highlight />
        </div>

        {/* Cómo funciona */}
        <Block title={t("Cómo funciona", "How it works")}>
          <ol className="grid md:grid-cols-2 gap-4">
            {p.howItWorks.map((step, i) => (
              <li
                key={i}
                className="rounded-2xl border border-soft p-5 bg-[hsl(var(--bg-card))] flex gap-3"
              >
                <span className="text-[hsl(var(--primary))] font-mono-tech text-sm shrink-0">
                  0{i + 1}
                </span>
                <p className="text-sm text-ink-muted leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </Block>

        {/* Casos de uso */}
        <Block title={t("Casos de uso", "Use cases")}>
          <div className="grid sm:grid-cols-2 gap-3">
            {p.useCases.map((u) => (
              <div
                key={u}
                className="rounded-xl border border-soft px-4 py-3 text-sm text-foreground bg-[hsl(var(--bg-card))]"
              >
                {u}
              </div>
            ))}
          </div>
        </Block>

        {/* Beneficios */}
        <Block title={t("Beneficios", "Benefits")}>
          <ul className="grid sm:grid-cols-2 gap-3">
            {p.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal))] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </Block>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-soft p-8 md:p-12 bg-[hsl(var(--bg-elevated))] text-center">
          <h3 className="text-2xl md:text-4xl font-serif-display mb-4">
            {t("Hablemos de tu proyecto", "Let's talk about your project")}
          </h3>
          <p className="text-ink-muted mb-6">
            {t(
              "Te mostramos cómo aplicar esta solución en tu organización.",
              "We'll show you how to apply this solution in your organization.",
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-6 py-3 text-sm font-medium hover:opacity-90"
            >
              {t("Agendar demo", "Book a demo")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/5491176714108?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20las%20soluciones%20de%20IA%20de%20Pampai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-strong px-6 py-3 text-sm font-medium text-foreground hover:bg-[hsl(var(--bg-card))]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, body, highlight }: { title: string; body: string; highlight?: boolean }) => (
  <div
    className={`rounded-2xl p-6 border border-soft ${
      highlight ? "bg-pampai-gradient-soft" : "bg-[hsl(var(--bg-card))]"
    }`}
  >
    <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
    <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
  </div>
);

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-10">
    <h2 className="text-2xl md:text-3xl font-serif-display mb-5">{title}</h2>
    {children}
  </section>
);

interface ProcessPageProps {
  step: string;
  title: string;
  subtitle: string;
  whatWeDo: string;
  whatClientBrings: string;
  deliverables: string[];
  duration: string;
  next?: { to: string; label: string };
}

export const ProcessPageLayout = (p: ProcessPageProps) => {
  const { t } = useLang();
  return (
    <div className="pt-28 pb-10 max-w-5xl mx-auto px-6">
      <Link
        to="/proceso"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {t("Volver al proceso", "Back to process")}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl overflow-hidden border border-soft p-10 md:p-14 bg-[hsl(var(--bg-elevated))]"
      >
        <span className="inline-block text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))] mb-3">
          {p.step}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif-display leading-[1.05] mb-4">{p.title}</h1>
        <p className="text-lg text-ink-muted max-w-3xl">{p.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Section title={t("Qué hacemos", "What we do")} body={p.whatWeDo} highlight />
        <Section title={t("Qué aporta el cliente", "What the client provides")} body={p.whatClientBrings} />
      </div>

      <Block title={t("Entregables", "Deliverables")}>
        <ul className="grid sm:grid-cols-2 gap-3">
          {p.deliverables.map((d) => (
            <li
              key={d}
              className="rounded-xl border border-soft px-4 py-3 text-sm text-foreground bg-[hsl(var(--bg-card))]"
            >
              {d}
            </li>
          ))}
        </ul>
      </Block>

      <Block title={t("Tiempo estimado", "Estimated time")}>
        <p className="text-2xl font-serif-display text-[hsl(var(--primary))]">{p.duration}</p>
      </Block>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-soft p-8 bg-pampai-gradient-soft">
        <p className="text-lg font-serif-display">
          {t("¿Listo para empezar?", "Ready to start?")}
        </p>
        <div className="flex gap-3">
          {p.next && (
            <Link
              to={p.next.to}
              className="inline-flex items-center gap-2 rounded-full border border-strong px-5 py-2.5 text-sm text-foreground hover:bg-[hsl(var(--bg-card))]"
            >
              {p.next.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-5 py-2.5 text-sm font-medium hover:opacity-90"
          >
            {t("Agendar demo", "Book a demo")}
          </Link>
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Brain,
  Cpu,
  BarChart3,
  Rocket,
  Sparkles,
  Workflow,
  Database,
  Bot,
  Heart,
  GitBranch,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HERO_VIDEO = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";
const HERO_FALLBACK = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920";
const PROCESS_VIDEO = "https://videos.pexels.com/video-files/7579150/7579150-uhd_2560_1440_25fps.mp4";

/* ----------- Typewriter ----------- */
function useTypewriter(text: string, speed = 45) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

/* ----------- Counter ----------- */
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ----------- Hero ----------- */
const Hero = () => {
  const { t } = useLang();
  const titleEs = "Transformamos tu negocio con Inteligencia Artificial";
  const titleEn = "We transform your business with Artificial Intelligence";
  const title = t(titleEs, titleEn) as string;
  const typed = useTypewriter(title, 38);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video bg */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_FALLBACK}
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,15,0.55)] via-[rgba(10,10,15,0.7)] to-[hsl(var(--background))]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-strong bg-[rgba(10,10,15,0.5)] backdrop-blur px-4 py-1.5 text-xs text-ink-muted mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--teal))] animate-pulse" />
          {t("Soluciones de IA aplicada", "Applied AI solutions")}
        </div>

        <h1 className="font-serif-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-5 min-h-[1.1em]">
          {typed}
          <span className="inline-block w-[3px] h-[0.9em] bg-[hsl(var(--primary))] ml-1 animate-pulse align-middle" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-lg md:text-xl text-ink-muted max-w-2xl mx-auto mb-9"
        >
          {t(
            "Soluciones de IA aplicada para empresas reales",
            "Applied AI solutions for real businesses",
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/contacto"
            className="relative inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-8 py-3.5 text-sm font-medium shadow-[0_0_40px_rgba(124,92,255,0.45)] hover:shadow-[0_0_60px_rgba(124,92,255,0.7)] transition-shadow"
          >
            <span className="absolute inset-0 rounded-full bg-pampai-gradient animate-ping opacity-20" />
            <span className="relative">{t("Agendar demo", "Book a demo")}</span>
            <ArrowRight className="w-4 h-4 relative" />
          </Link>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 rounded-full border border-strong bg-[rgba(10,10,15,0.4)] backdrop-blur px-8 py-3.5 text-sm font-medium text-foreground hover:bg-[hsl(var(--bg-card))] transition-colors"
          >
            {t("Explorar soluciones", "Explore solutions")}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ink-muted"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

/* ----------- Stats ----------- */
const Stats = () => {
  const { t } = useLang();
  const stats = [
    { icon: Rocket, value: 200, suffix: "+", label: t("proyectos implementados", "projects delivered") },
    { icon: Heart, value: 98, suffix: "%", label: t("satisfacción de clientes", "client satisfaction") },
    { icon: Brain, value: 50, suffix: "+", label: t("empresas transformadas", "companies transformed") },
    { icon: BarChart3, value: 3, prefix: "x", label: t("ROI promedio obtenido", "average ROI achieved") },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-soft p-6 bg-[hsl(var(--bg-card))] hover:border-strong transition-colors"
            >
              <Icon className="w-7 h-7 text-[hsl(var(--teal))] mb-4" />
              <div className="text-4xl md:text-5xl font-serif-display text-foreground mb-1">
                <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <p className="text-sm text-ink-muted leading-tight">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

/* ----------- Showcase ----------- */
type Card = {
  to: string;
  image: string;
  title: string;
  tag: string;
  icon: React.ElementType;
};

const Showcase = () => {
  const { t } = useLang();

  const main: Card[] = [
    {
      to: "/productos/automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900",
      title: t("Automatización", "Automation") as string,
      tag: t("Procesos sin fricción", "Frictionless processes") as string,
      icon: Workflow,
    },
    {
      to: "/productos/ai-data",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
      title: t("Análisis de datos", "Data analysis") as string,
      tag: t("Decidí con datos en vivo", "Decide with live data") as string,
      icon: Database,
    },
    {
      to: "/productos/generative-ai",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900",
      title: t("IA Generativa", "Generative AI") as string,
      tag: t("Contenido y conocimiento a escala", "Content & knowledge at scale") as string,
      icon: Sparkles,
    },
  ];

  const advanced: Card[] = [
    {
      to: "/productos/decision-copilot",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
      title: t("Copiloto de Decisiones", "Decision Copilot") as string,
      tag: t("Predice, recomienda, actúa", "Predict, recommend, act") as string,
      icon: GitBranch,
    },
    {
      to: "/productos/social-ai",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=900",
      title: t("IA para Infraestructura Social", "Social Infrastructure AI") as string,
      tag: t("Recursos donde más impactan", "Resources where they matter most") as string,
      icon: Heart,
    },
    {
      to: "/productos/autonomous-agents",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=900",
      title: t("Agentes Autónomos", "Autonomous Agents") as string,
      tag: t("Operan, deciden, ejecutan", "Operate, decide, execute") as string,
      icon: Bot,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("SOLUCIONES", "SOLUTIONS")}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif-display mt-2">
            {t("Soluciones de IA para tu empresa", "AI solutions for your business")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {main.map((c) => (
            <ShowcaseCard key={c.to} card={c} />
          ))}
        </div>

        <div className="mt-16 mb-8">
          <span className="text-xs font-mono-tech tracking-widest text-[hsl(var(--teal))]">
            {t("PREMIUM", "PREMIUM")}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif-display mt-2">
            {t("Sistemas Avanzados de IA", "Advanced AI Systems")}
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {advanced.map((c) => (
            <ShowcaseCard key={c.to} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ShowcaseCard = ({ card }: { card: Card }) => {
  const { t } = useLang();
  const Icon = card.icon;
  return (
    <Link to={card.to} className="group cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden border border-soft bg-[hsl(var(--bg-card))] aspect-[4/5]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${card.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-card))] via-[rgba(10,10,15,0.6)] to-transparent" />
        <div className="absolute inset-0 bg-pampai-gradient opacity-0 group-hover:opacity-25 transition-opacity duration-500 mix-blend-overlay" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <Icon className="w-8 h-8 text-white mb-3 opacity-90" />
          <h3 className="text-2xl font-serif-display text-white mb-1">{card.title}</h3>
          <p className="text-sm text-white/70 mb-4">{card.tag}</p>
          <span className="inline-flex items-center gap-1.5 text-sm text-white font-medium opacity-80 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
            {t("Ver más", "Learn more")}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

/* ----------- Chart ----------- */
const ResultsChart = () => {
  const { t } = useLang();
  const data = [
    { sector: "Retail", value: 65 },
    { sector: t("Salud", "Health") as string, value: 72 },
    { sector: t("Finanzas", "Finance") as string, value: 80 },
    { sector: t("Logística", "Logistics") as string, value: 68 },
    { sector: "RRHH", value: 75 },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif-display mb-3 max-w-3xl"
        >
          {t("Resultados que hablan por sí solos", "Results that speak for themselves")}
        </motion.h2>
        <p className="text-ink-muted mb-10">
          {t(
            "Promedio de mejora en eficiencia operativa por sector",
            "Average operational efficiency improvement by sector",
          )}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-soft p-6 md:p-10 bg-[hsl(var(--bg-card))]"
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={data}>
              <defs>
                <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(252 100% 68%)" />
                  <stop offset="100%" stopColor="hsl(172 66% 50%)" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="sector" stroke="hsl(240 8% 68%)" tick={{ fontSize: 12 }} />
              <YAxis stroke="hsl(240 8% 68%)" tick={{ fontSize: 12 }} unit="%" />
              <Tooltip
                contentStyle={{
                  background: "hsl(240 18% 9%)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 12,
                  color: "white",
                }}
                cursor={{ fill: "rgba(124,92,255,0.08)" }}
              />
              <Bar dataKey="value" fill="url(#bar)" radius={[8, 8, 0, 0]} animationDuration={1400} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

/* ----------- Process video ----------- */
const ProcessVideo = () => {
  const { t } = useLang();
  const steps = [
    { icon: Brain, label: t("Diagnóstico", "Diagnosis") },
    { icon: Cpu, label: t("Diseño", "Design") },
    { icon: Rocket, label: t("Implementación", "Implementation") },
  ];
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif-display mb-10 text-center"
        >
          {t("¿Cómo trabajamos?", "How we work?")}
        </motion.h2>
        <div className="rounded-3xl overflow-hidden border border-soft bg-[hsl(var(--bg-card))]">
          <video controls className="w-full aspect-video object-cover" poster={HERO_FALLBACK}>
            <source src={PROCESS_VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pampai-gradient-soft border border-soft mb-3">
                  <Icon className="w-6 h-6 text-[hsl(var(--teal))]" />
                </div>
                <p className="text-sm md:text-base text-foreground font-medium">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/proceso"
            className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--teal))] hover:underline"
          >
            {t("Ver el proceso completo", "See the full process")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ----------- Social impact preview ----------- */
const SocialImpactPreview = () => {
  const { t } = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-soft p-8 md:p-14 bg-pampai-gradient-soft">
          <Heart className="w-10 h-10 text-[hsl(var(--teal))] mb-5" />
          <h2 className="text-4xl md:text-5xl font-serif-display mb-4 max-w-2xl">
            {t("IA para impacto social", "AI for social impact")}
          </h2>
          <p className="text-lg text-ink-muted max-w-2xl mb-7 leading-relaxed">
            {t(
              "Creamos soluciones accesibles para organizaciones que trabajan con comunidades vulnerables, comedores, asistencia a personas con discapacidad visual, adultos mayores y ONGs.",
              "We build accessible solutions for organizations working with vulnerable communities, food assistance, support for visually impaired people, the elderly, and NGOs.",
            )}
          </p>
          <Link
            to="/impacto-social"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90"
          >
            {t("Ver impacto social", "See social impact")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ----------- Final CTA strip ----------- */
const FinalStrip = () => {
  const { t } = useLang();
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif-display mb-6">
          {t("Empezá tu proyecto de IA hoy", "Start your AI project today")}
        </h2>
        <p className="text-lg text-ink-muted mb-9 max-w-2xl mx-auto">
          {t(
            "Te ayudamos a definir el mejor primer paso para incorporar IA en tu organización.",
            "We help you define the best first step to bring AI into your organization.",
          )}
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 rounded-full bg-pampai-gradient text-white px-9 py-4 text-base font-medium shadow-[0_0_40px_rgba(124,92,255,0.45)] hover:shadow-[0_0_60px_rgba(124,92,255,0.7)] transition-shadow"
        >
          {t("Agendar demo", "Book a demo")}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Showcase />
      <ResultsChart />
      <ProcessVideo />
      <SocialImpactPreview />
      <FinalStrip />
    </>
  );
};

export default Home;

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Code2,
  Cpu,
  Globe2,
  Smartphone,
  Cloud,
  Brain,
  Radio,
  GraduationCap,
  Sparkles,
  Layers,
  Zap,
  Shield,
  Rocket,
  CircuitBoard,
  Database,
  ShoppingCart,
  Printer,
  Truck,
  Building2,
  CreditCard,
} from "lucide-react";
import { ParticleField } from "./ParticleField";
import { SmoothScroll } from "./SmoothScroll";
import { TemplateSwitcher } from "./TemplateSwitcher";
import { currentSectionFromPath, pushRouteForSection, routeForSection, scrollToSection } from "../../routeUtils";

/* -------------------------------------------------------------------------- */
/* Nav                                                                        */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass rounded-full px-4" : ""
        }`}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            pushRouteForSection("top");
            scrollToSection("top");
          }}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-neon to-neon-2 opacity-90 group-hover:opacity-100 rotate-45 transition" />
            <div className="absolute inset-1 rounded bg-background rotate-45" />
            <div className="absolute inset-2 rounded-sm bg-gradient-to-br from-neon to-neon-2 rotate-45" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            HEXTORQ
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {[
            ["pillars", "About"],
            ["digital", "Services"],
            ["portfolio", "Products"],
            ["education", "Projects"],
            ["process", "Process"],
          ].map(([section, label]) => (
            <a
              key={section}
              href={routeForSection(section)}
              onClick={(e) => {
                e.preventDefault();
                pushRouteForSection(section);
                scrollToSection(section);
              }}
              className="hover:text-foreground transition"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="/contact/"
          onClick={(e) => {
            e.preventDefault();
            pushRouteForSection("cta");
            scrollToSection("cta");
          }}
          className="glass rounded-full px-4 py-2 text-sm font-medium hover:bg-white/10 transition flex items-center gap-1.5"
        >
          Start a project <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 1 — Hero / Wordmark assemble                                       */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  const letters = "HEXTORQ".split("");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section ref={ref} id="top" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <ParticleField className="absolute inset-0 w-full h-full" />
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-[var(--gradient-radial-neon)] opacity-40" />
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          An umbrella technology company
        </motion.div>

        <h1 className="font-display font-bold tracking-tighter leading-none text-[18vw] md:text-[13vw] lg:text-[11rem]">
          {letters.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, filter: "blur(20px)", rotateX: -60 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
              transition={{
                delay: 0.4 + i * 0.08,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 60px rgba(120, 100, 255, 0.4)",
              }}
            >
              {l}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          We transform ideas into digital products — software, AI, IoT and SaaS,
          engineered end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="#pillars"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-neon to-neon-2 text-white glow hover:scale-[1.02] transition"
          >
            Explore the story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#cta"
            className="glass rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            Start a project
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 2 — Manifesto                                                      */
/* -------------------------------------------------------------------------- */

function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lines = [
    "We don't build software.",
    "We build businesses.",
    "We automate workflows.",
    "We engineer innovation.",
  ];
  return (
    <section ref={ref} className="relative min-h-[120vh] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[var(--gradient-radial-violet)] opacity-20" />
      <div className="relative max-w-5xl mx-auto space-y-8 md:space-y-12">
        {lines.map((line, i) => {
          const start = i / lines.length;
          const end = (i + 1) / lines.length;
          return (
            <ManifestoLine
              key={i}
              line={line}
              progress={scrollYProgress}
              start={start}
              end={end}
              muted={i < lines.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
}

function ManifestoLine({
  line,
  progress,
  start,
  end,
  muted,
}: {
  line: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
  muted: boolean;
}) {
  const opacity = useTransform(progress, [start * 0.8, start + 0.05, end + 0.15, end + 0.25], [0.15, 1, 1, muted ? 0.2 : 1]);
  const x = useTransform(progress, [start, end], [-20, 0]);
  return (
    <motion.h2
      style={{ opacity, x }}
      className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl tracking-tighter"
    >
      {line}
    </motion.h2>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 3 — Connected World                                                */
/* -------------------------------------------------------------------------- */

function GlobeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [-60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <motion.div style={{ x: textX, opacity: textOpacity }}>
          <span className="text-xs uppercase tracking-[0.3em] text-neon">— Scene 03</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tighter">
            Technology that powers <span className="text-gradient">modern businesses.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            From apps to AI to industrial sensors — every layer connected, every
            signal in motion. Hextorq is the fabric between them.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "40+", l: "Products shipped" },
              { n: "12", l: "Industries served" },
              { n: "99.9%", l: "Uptime target" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="text-2xl font-display font-semibold text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ rotate, scale }}>
          <AnimatedGlobe />
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedGlobe() {
  const nodes = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2;
    const r = 140 + (i % 3) * 20;
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r * 0.35, i };
  });
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full bg-[var(--gradient-radial-neon)] blur-2xl opacity-60" />
      <svg viewBox="-220 -220 440 440" className="relative w-full h-full">
        <defs>
          <radialGradient id="globeGrad" cx="0.4" cy="0.35">
            <stop offset="0%" stopColor="oklch(0.35 0.15 265)" />
            <stop offset="60%" stopColor="oklch(0.2 0.08 270)" />
            <stop offset="100%" stopColor="oklch(0.14 0.03 265)" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.72 0.22 260)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.72 0.22 260)" stopOpacity="0.8" />
            <stop offset="1" stopColor="oklch(0.65 0.28 305)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle r="180" fill="url(#globeGrad)" stroke="oklch(0.72 0.22 260 / 0.3)" />
        {/* latitude lines */}
        {[-120, -60, 0, 60, 120].map((y) => (
          <ellipse key={y} cx="0" cy={y} rx="180" ry={Math.sqrt(Math.max(0, 180 * 180 - y * y)) * 0.35} fill="none" stroke="oklch(0.72 0.22 260 / 0.15)" />
        ))}
        {/* longitude */}
        {[0.3, 0.6, 0.9].map((k, i) => (
          <ellipse key={i} cx="0" cy="0" rx={180 * k} ry="180" fill="none" stroke="oklch(0.72 0.22 260 / 0.1)" />
        ))}
        {/* connecting lines */}
        {nodes.map((n, i) => {
          const next = nodes[(i + 3) % nodes.length];
          return (
            <line
              key={`l${i}`}
              x1={n.x}
              y1={n.y}
              x2={next.x}
              y2={next.y}
              stroke="url(#lineGrad)"
              strokeWidth="1"
            />
          );
        })}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="6" fill="oklch(0.72 0.22 260 / 0.2)" />
            <circle cx={n.x} cy={n.y} r="2.5" fill="oklch(0.85 0.16 200)">
              <animate attributeName="r" values="2.5;4;2.5" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 4 — Three Pillars                                                  */
/* -------------------------------------------------------------------------- */

const PILLARS = [
  {
    id: "digital",
    n: "01",
    title: "Digital Solutions",
    desc: "Software, websites, mobile apps, ERP, CRM, billing.",
    icon: Code2,
  },
  {
    id: "innovation",
    n: "02",
    title: "Innovation & Automation",
    desc: "AI, IoT, SaaS platforms, business automation.",
    icon: Cpu,
  },
  {
    id: "education",
    n: "03",
    title: "Education & Engineering",
    desc: "Student projects, research, IEEE, custom builds.",
    icon: GraduationCap,
  },
];

function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <section ref={ref} id="pillars" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div style={{ y: headingY }} className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neon">— The spine</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tighter">
            Three pillars. <span className="text-gradient">One engineering house.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#${p.id}`}
              initial={{ opacity: 0, y: 80, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 1000 }}
              className="group relative glass rounded-3xl p-8 h-full overflow-hidden hover:border-white/25 transition"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--gradient-radial-neon)] opacity-0 group-hover:opacity-60 transition duration-700" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">/{p.n}</span>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon to-neon-2 flex items-center justify-center glow">
                    <p.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm text-neon">
                  Enter pillar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 5 — Digital Solutions                                              */
/* -------------------------------------------------------------------------- */

function DigitalPillar() {
  const items = [
    { icon: Layers, t: "Custom Software", d: "Bespoke systems built to fit." },
    { icon: Building2, t: "ERP & CRM", d: "Operations, sales, finance — unified." },
    { icon: Globe2, t: "Web Applications", d: "Fast, secure, production-grade." },
    { icon: Smartphone, t: "Mobile Apps", d: "iOS, Android, cross-platform." },
    { icon: ShoppingCart, t: "E-commerce", d: "Storefronts that convert." },
    { icon: CreditCard, t: "Billing Systems", d: "Invoicing, subs, reconciliation." },
  ];
  return (
    <section id="digital" className="relative py-32 px-6 overflow-hidden">
      <PillarHeader n="01" kicker="Pillar One" title="Digital" gradient="Solutions" desc="Software, websites, mobile apps, and the business systems that hold companies together." />

      {/* Fake dashboard mock */}
      <div className="relative max-w-6xl mx-auto mt-16">
        <div className="glass rounded-3xl p-2">
          <div className="rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-muted-foreground">app.hextorq / dashboard</span>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { l: "Revenue", v: "$284K", d: "+12.4%" },
                { l: "Active users", v: "18.2K", d: "+3.1%" },
                { l: "Orders", v: "1,204", d: "+8.9%" },
                { l: "Uptime", v: "99.98%", d: "30d" },
              ].map((k) => (
                <div key={k.l} className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground">{k.l}</div>
                  <div className="text-2xl font-display font-semibold mt-1">{k.v}</div>
                  <div className="text-xs text-neon mt-1">{k.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 glass rounded-xl p-4 h-40 relative overflow-hidden">
              <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="oklch(0.72 0.22 260)" stopOpacity="0.5" />
                    <stop offset="1" stopColor="oklch(0.72 0.22 260)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 C40,60 80,90 120,70 C160,50 200,30 240,40 C280,50 320,20 400,10 L400,120 L0,120 Z" fill="url(#chartFill)" />
                <path d="M0,80 C40,60 80,90 120,70 C160,50 200,30 240,40 C280,50 320,20 400,10" fill="none" stroke="oklch(0.72 0.22 260)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-5 flex items-start gap-4 hover:bg-white/[0.06] transition"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <it.icon className="w-5 h-5 text-neon" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-medium">{it.t}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{it.d}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 6 — Innovation & Automation (AI + IoT + SaaS)                      */
/* -------------------------------------------------------------------------- */

function InnovationPillar() {
  return (
    <section id="innovation" className="relative py-32 px-6 overflow-hidden">
      <PillarHeader n="02" kicker="Pillar Two" title="Innovation" gradient="& Automation" desc="AI systems, connected devices, and SaaS products that turn insight into action." />

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        {/* AI Core */}
        <div className="glass rounded-3xl p-8 relative overflow-hidden min-h-[420px] flex flex-col">
          <div className="flex items-center gap-3">
            <Brain className="w-5 h-5 text-neon" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Artificial Intelligence</span>
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold">The AI core.</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Chatbots, agents, OCR, vision, ML models — production-grade AI that
            plugs into real workflows.
          </p>
          <NeuralCore />
          <div className="mt-auto flex flex-wrap gap-2">
            {["Chatbots", "Agents", "OCR", "Vision", "ML"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full glass">{t}</span>
            ))}
          </div>
        </div>

        {/* IoT */}
        <div className="glass rounded-3xl p-8 relative overflow-hidden min-h-[420px] flex flex-col">
          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-neon-2" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Internet of Things</span>
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold">Devices that talk.</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Sensors, industrial IoT, smart devices — factory floors to college
            labs, streaming live to the cloud.
          </p>
          <IoTScene />
          <div className="mt-auto flex flex-wrap gap-2">
            {["Sensors", "Automation", "Industrial", "Monitoring"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full glass">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SaaS orbit */}
      <div className="max-w-6xl mx-auto mt-6">
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="relative text-center max-w-xl">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">SaaS Products</span>
            </div>
            <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
              We ship <span className="text-gradient">products</span>, not just projects.
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              A growing suite of platforms — built once, deployed everywhere.
            </p>
          </div>
          <SaasOrbit />
        </div>
      </div>
    </section>
  );
}

function NeuralCore() {
  return (
    <div className="relative h-40 my-6 flex items-center justify-center">
      <div className="absolute w-32 h-32 rounded-full bg-[var(--gradient-radial-neon)] blur-xl" style={{ animation: "hx-pulse-glow 3s ease-in-out infinite" }} />
      <svg viewBox="-80 -80 160 160" className="relative w-40 h-40">
        <defs>
          <radialGradient id="coreG" cx="0.5" cy="0.5">
            <stop offset="0" stopColor="oklch(0.9 0.15 260)" />
            <stop offset="1" stopColor="oklch(0.5 0.2 300)" />
          </radialGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const x = Math.cos(a) * 55;
          const y = Math.sin(a) * 55;
          return (
            <g key={i}>
              <line x1="0" y1="0" x2={x} y2={y} stroke="oklch(0.72 0.22 260 / 0.4)" />
              <circle cx={x} cy={y} r="3" fill="oklch(0.85 0.16 200)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + (i % 3) * 0.5}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
        <circle r="14" fill="url(#coreG)" />
      </svg>
    </div>
  );
}

function IoTScene() {
  return (
    <div className="relative h-40 my-6">
      <svg viewBox="0 0 300 140" className="w-full h-full">
        <defs>
          <linearGradient id="ioBeam" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.65 0.28 305)" stopOpacity="0" />
            <stop offset="0.5" stopColor="oklch(0.65 0.28 305)" stopOpacity="0.8" />
            <stop offset="1" stopColor="oklch(0.65 0.28 305)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="oklch(1 0 0 / 0.15)" fill="none">
          <rect x="20" y="90" width="60" height="40" rx="4" />
          <rect x="120" y="90" width="60" height="40" rx="4" />
          <rect x="220" y="90" width="60" height="40" rx="4" />
          <circle cx="150" cy="30" r="18" />
        </g>
        <g stroke="url(#ioBeam)" strokeWidth="1.5" fill="none">
          <line x1="50" y1="90" x2="150" y2="48"><animate attributeName="stroke-dashoffset" values="20;0" dur="1.5s" repeatCount="indefinite" /></line>
          <line x1="150" y1="90" x2="150" y2="48" />
          <line x1="250" y1="90" x2="150" y2="48" />
        </g>
        <text x="150" y="34" textAnchor="middle" fill="oklch(0.85 0.16 200)" fontSize="10" fontFamily="monospace">CLOUD</text>
        {[50, 150, 250].map((x, i) => (
          <circle key={i} cx={x} cy="90" r="3" fill="oklch(0.72 0.22 260)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

function SaasOrbit() {
  const products = [
    { icon: CreditCard, label: "Payments" },
    { icon: Printer, label: "Print" },
    { icon: Truck, label: "Delivery" },
    { icon: Database, label: "Data" },
    { icon: Cloud, label: "Cloud" },
    { icon: Building2, label: "Ops" },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {products.map((p, i) => {
        const angle = (i / products.length) * 360;
        const duration = 30 + i * 4;
        return (
          <div
            key={p.label}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `hx-orbit ${duration}s linear infinite`,
              animationDelay: `-${(angle / 360) * duration}s`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ["--orbit-r" as any]: `${200 + (i % 2) * 40}px`,
            }}
          >
            <div className="glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs whitespace-nowrap">
              <p.icon className="w-3.5 h-3.5 text-neon" />
              {p.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 7 — Education & Engineering                                        */
/* -------------------------------------------------------------------------- */

function EducationPillar() {
  const steps = [
    { t: "Idea", d: "Bring us your concept — or pick from our library." },
    { t: "Research", d: "IEEE papers, feasibility, tech scoping." },
    { t: "Development", d: "We engineer it with you, not for you." },
    { t: "Testing", d: "QA, edge cases, real hardware." },
    { t: "Presentation", d: "Reports, decks, demo — presentation-ready." },
    { t: "Success", d: "You defend it. You own it. You ship." },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  return (
    <section id="education" className="relative py-32 px-6 overflow-hidden">
      <PillarHeader n="03" kicker="Pillar Three" title="Education" gradient="& Engineering" desc="Final year projects, IEEE builds, research guidance — engineered like production, not like homework." />

      <div ref={ref} className="relative max-w-4xl mx-auto mt-16">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />
        <motion.div
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
          className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-neon-2 to-cyan"
        />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? "" : "md:direction-rtl"
              }`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 inline-block text-left">
                  <div className="text-xs text-neon uppercase tracking-[0.2em]">Step {String(i + 1).padStart(2, "0")}</div>
                  <h4 className="mt-2 font-display text-2xl font-semibold">{s.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground max-w-sm">{s.d}</p>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-neon to-neon-2 glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 8 — Why Hextorq                                                    */
/* -------------------------------------------------------------------------- */

function WhyHextorq() {
  const values = [
    { icon: Layers, t: "Custom", d: "No templates. No shortcuts." },
    { icon: Rocket, t: "Scalable", d: "Built for 10× tomorrow." },
    { icon: Shield, t: "Secure", d: "Security in the foundation." },
    { icon: Zap, t: "Reliable", d: "Ship it. Support it. Trust it." },
    { icon: Sparkles, t: "Modern", d: "The stack of 2026, not 2016." },
    { icon: CircuitBoard, t: "Future-Ready", d: "AI-native from day one." },
  ];
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-neon">— Why us</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tighter">
            Six reasons teams pick <span className="text-gradient">Hextorq</span>.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {values.map((v) => (
            <div key={v.t} className="bg-background p-8 hover:bg-white/[0.03] transition group">
              <v.icon className="w-6 h-6 text-neon group-hover:scale-110 transition" strokeWidth={1.5} />
              <div className="mt-6 font-display text-2xl font-semibold">{v.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{v.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 9 — Portfolio                                                      */
/* -------------------------------------------------------------------------- */

function PortfolioSection() {
  const projects = [
    { t: "Nimbus Pay", tag: "Payment Gateway", grad: "from-neon/40 to-transparent" },
    { t: "PrintFlow", tag: "Printing Automation", grad: "from-neon-2/40 to-transparent" },
    { t: "RouteOne", tag: "Delivery Management", grad: "from-cyan/40 to-transparent" },
    { t: "Atlas ERP", tag: "Enterprise Suite", grad: "from-neon/40 to-transparent" },
    { t: "Sentinel Vision", tag: "AI Inspection", grad: "from-neon-2/40 to-transparent" },
    { t: "MeshLab IoT", tag: "Sensor Network", grad: "from-cyan/40 to-transparent" },
  ];
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-neon">— Selected work</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tighter">
              Products in <span className="text-gradient">the wild.</span>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 80, scale: 0.85, rotate: i % 2 === 0 ? -4 : 4 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.grad}`} />
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-x-0 top-0 h-1/2 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/10 rotate-6 group-hover:rotate-0 transition duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon to-neon-2 glow" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">{p.tag}</div>
                <div className="mt-1 font-display text-2xl font-semibold flex items-center justify-between">
                  {p.t}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 10 — Clients marquee                                               */
/* -------------------------------------------------------------------------- */

function ClientsSection() {
  const clients = ["Nova Labs", "Meridian", "Kite & Co", "Halyard", "Sable", "Ironwood", "Boreal", "Northstar", "Cascade", "Vertex"];
  const row = [...clients, ...clients];
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by teams around the world</span>
      </div>
      <div className="relative">
        <div className="flex gap-16 whitespace-nowrap" style={{ animation: "hx-marquee 40s linear infinite", width: "max-content" }}>
          {row.map((c, i) => (
            <div key={i} className="text-2xl md:text-3xl font-display font-semibold text-white/30 hover:text-white transition">
              {c}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 11 — Process                                                       */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  const steps = ["Idea", "Research", "Design", "Develop", "Test", "Deploy", "Support"];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const pathProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const dashOffset = useTransform(pathProgress, [0, 1], [1200, 0]);
  return (
    <section ref={ref} id="process" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-neon">— How we build</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tighter">
            A path from <span className="text-gradient">idea to production.</span>
          </h2>
        </div>

        <div className="mt-20 relative">
          <svg viewBox="0 0 1000 100" className="w-full h-20 hidden md:block">
            <motion.path
              d="M20,50 C150,20 300,80 450,50 C600,20 750,80 980,50"
              fill="none"
              stroke="url(#pathGrad)"
              strokeWidth="2"
              strokeDasharray="1200"
              style={{ strokeDashoffset: dashOffset }}
            />
            <defs>
              <linearGradient id="pathGrad">
                <stop offset="0" stopColor="oklch(0.72 0.22 260)" />
                <stop offset="1" stopColor="oklch(0.65 0.28 305)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:-mt-12">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-10 h-10 rounded-full bg-gradient-to-br from-neon to-neon-2 flex items-center justify-center font-mono text-xs glow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-sm font-medium">{s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section 12 — CTA                                                           */
/* -------------------------------------------------------------------------- */

function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.4]);
  return (
    <section ref={ref} id="cta" className="relative py-40 px-6 overflow-hidden">
      <motion.div style={{ scale: glowScale }} className="absolute inset-0 bg-[var(--gradient-radial-neon)] opacity-40" />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div style={{ scale, opacity }} className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]"
        >
          Let's build something{" "}
          <span className="text-gradient">extraordinary.</span>
        </motion.h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Tell us what you're trying to make. We'll help you engineer it —
          software, AI, IoT, hardware, or all of the above.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="mailto:hello@hextorq.com"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium bg-gradient-to-r from-neon to-neon-2 text-white glow hover:scale-[1.02] transition"
          >
            Start your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#top" className="glass rounded-full px-8 py-4 text-base font-medium hover:bg-white/10 transition">
            Back to top
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-neon to-neon-2 rotate-45" />
          <span className="font-display font-semibold text-foreground">HEXTORQ</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#cta" className="hover:text-foreground transition">Contact</a>
          <a href="#portfolio" className="hover:text-foreground transition">Work</a>
          <a href="#pillars" className="hover:text-foreground transition">Pillars</a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared                                                                     */
/* -------------------------------------------------------------------------- */

function SectionTransition({
  children,
  intensity = 1,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Cinematic curve: enter with blur + zoom-in, hold, exit with blur + zoom-out.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0],
  );
  const scaleRaw = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [1 - 0.08 * intensity, 1, 1, 1 + 0.06 * intensity],
  );
  const scale = useSpring(scaleRaw, { stiffness: 120, damping: 24, mass: 0.4 });
  const blurPx = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [14 * intensity, 0, 0, 10 * intensity],
  );
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);
  const y = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [60 * intensity, 0, 0, -40 * intensity],
  );
  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, filter, y, willChange: "transform, filter, opacity" }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

function PillarHeader({
  n,
  kicker,
  title,
  gradient,
  desc,
}: {
  n: string;
  kicker: string;
  title: string;
  gradient: string;
  desc: string;
}) {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-neon">— {kicker}</span>
          <span className="text-xs text-muted-foreground font-mono">/{n}</span>
        </div>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tighter leading-none">
          {title} <span className="text-gradient">{gradient}</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-lg">{desc}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Composed page                                                              */
/* -------------------------------------------------------------------------- */

export function HextorqSite() {
  useEffect(() => {
    const scrollToCurrentRoute = () => {
      const section = currentSectionFromPath();
      if (section) window.setTimeout(() => scrollToSection(section), 80);
    };
    scrollToCurrentRoute();
    window.addEventListener("popstate", scrollToCurrentRoute);
    return () => window.removeEventListener("popstate", scrollToCurrentRoute);
  }, []);

  return (
    <div className="relative bg-background text-foreground selection:bg-neon/30 selection:text-white">
      <SmoothScroll />
      <Nav />
      <TemplateSwitcher />
      <main>
        <HeroSection />
        <SectionTransition><ManifestoSection /></SectionTransition>
        <SectionTransition intensity={1.2}><GlobeSection /></SectionTransition>
        <SectionTransition><PillarsSection /></SectionTransition>
        <SectionTransition><DigitalPillar /></SectionTransition>
        <SectionTransition><InnovationPillar /></SectionTransition>
        <SectionTransition><EducationPillar /></SectionTransition>
        <SectionTransition><WhyHextorq /></SectionTransition>
        <SectionTransition><PortfolioSection /></SectionTransition>
        <SectionTransition intensity={0.6}><ClientsSection /></SectionTransition>
        <SectionTransition><ProcessSection /></SectionTransition>
        <SectionTransition intensity={1.3}><CTASection /></SectionTransition>
      </main>
      <Footer />
    </div>
  );
}

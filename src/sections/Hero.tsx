import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiMapPin, FiSmartphone, FiLayout, FiCpu, FiCode, FiCloud } from "react-icons/fi";
import developerWorkspace from "@/assets/developer-workspace.jpg";
import { profile, heroBadges } from "@/data/portfolio";

const buildAreas = [
  {
    label: "Mobile",
    icon: FiSmartphone,
    title: "Production-ready mobile apps",
    stack: "Flutter · Dart · Android · Firebase",
  },
  {
    label: "Web",
    icon: FiLayout,
    title: "Modern full-stack products",
    stack: "React · Node.js · Python · FastAPI",
  },
  {
    label: "Workflows",
    icon: FiCpu,
    title: "Intelligent data workflows",
    stack: "OpenSearch · RAG · Agents · Documents",
  },
] as const;

export function Hero() {
  const [activeArea, setActiveArea] = useState(0);
  const selectedArea = buildAreas[activeArea];
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [reduceMotion ? 0 : 7, reduceMotion ? 0 : -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [reduceMotion ? 0 : -7, reduceMotion ? 0 : 7]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to meaningful opportunities · {profile.experience}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {profile.roles.join("  •  ")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-5 max-w-xl text-base text-muted-foreground/90"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full btn-primary px-5 py-3 text-sm font-medium"
            >
              View my work <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full btn-ghost px-5 py-3 text-sm font-medium"
            >
              Let's talk
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroBadges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </motion.div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <FiMapPin /> {profile.location}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hero-scene relative mx-auto w-full max-w-sm"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <div className="hero-orbit hero-orbit-outer" aria-hidden="true">
            <span className="hero-orbit-node"><FiCloud /></span>
          </div>
          <div className="hero-orbit hero-orbit-inner" aria-hidden="true">
            <span className="hero-orbit-node"><FiCode /></span>
          </div>
          <motion.div
            aria-hidden="true"
            className="hero-float-chip -left-8 top-20 hidden sm:flex"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotateZ: [-2, 2, -2] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiSmartphone /> Mobile
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="hero-float-chip -right-8 top-12 hidden sm:flex"
            animate={reduceMotion ? undefined : { y: [0, 9, 0], rotateZ: [2, -2, 2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <FiCpu /> Workflows
          </motion.div>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="hero-tilt-card relative overflow-hidden rounded-[2rem] glass-card"
          >
            <img
              src={developerWorkspace}
              alt="Developer workstation representing mobile, web, and backend engineering"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-border bg-background/80 p-3 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-1" role="tablist" aria-label="Areas of expertise">
                {buildAreas.map((area, index) => (
                  <button
                    key={area.label}
                    type="button"
                    role="tab"
                    aria-selected={activeArea === index}
                    onClick={() => setActiveArea(index)}
                    className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-[11px] font-medium transition-colors ${
                      activeArea === index
                        ? "bg-primary/20 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <area.icon aria-hidden="true" />
                    {area.label}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedArea.label}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.18 }}
                  className="px-2 pb-1 pt-3"
                  role="tabpanel"
                >
                  <p className="text-sm font-medium">{selectedArea.title}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{selectedArea.stack}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

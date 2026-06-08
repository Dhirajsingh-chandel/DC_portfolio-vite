import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import avatar from "@/assets/avatar.jpg";
import { profile, heroBadges } from "@/data/portfolio";

export function Hero() {
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
            Available for opportunities · {profile.experience}
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
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full btn-primary px-5 py-3 text-sm font-medium"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full btn-ghost px-5 py-3 text-sm font-medium"
            >
              Contact Me <FiArrowRight />
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
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass-card">
            <img
              src={avatar}
              alt={`${profile.name} portrait`}
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="text-sm font-medium">{profile.name}</p>
                <p className="text-xs text-muted-foreground">Flutter · AI · Full Stack</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-medium text-emerald-300">
                Online
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { FiLayers } from "react-icons/fi";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A selection of products and systems I've designed, built, and shipped."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass-card transition-transform hover:-translate-y-1"
            >
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] bg-[length:18px_18px] opacity-[0.06]" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2 text-xs text-foreground/80">
                  <FiLayers /> {p.tech[0]} · {p.tech[1] ?? ""}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Challenge:</span> {p.challenge}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Result:</span> {p.result}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

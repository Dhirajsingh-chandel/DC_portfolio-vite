import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { FiBriefcase } from "react-icons/fi";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Building customer-facing applications and data products across mobile, web, and backend systems."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:block" />
          <div className="space-y-6">
            {experiences.map((e, i) => (
              <motion.div
                key={e.company}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative sm:pl-14"
              >
                <span className="absolute left-0 top-6 hidden size-8 -translate-x-1/2 place-items-center rounded-full border border-border bg-background sm:grid">
                  <FiBriefcase className="text-primary" />
                </span>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.company}</p>
                    </div>
                    <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

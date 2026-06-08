import { motion } from "framer-motion";
import { about, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const stats = [
    { value: profile.experience, label: "Experience" },
    { value: "20+", label: "Projects shipped" },
    { value: "6", label: "Domains worked" },
    { value: profile.location, label: "Based in" },
  ];
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="A developer who ships, end to end." />
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 text-base leading-relaxed text-muted-foreground"
          >
            {about.map((p, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {p}
              </p>
            ))}
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-2xl p-5"
              >
                <p className="text-2xl font-semibold text-foreground">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
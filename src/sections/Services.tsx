import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Services" title="How I can help" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex items-start justify-between gap-4 rounded-2xl glass-card p-6 transition-colors hover:border-primary/50"
            >
              <div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <FiArrowUpRight className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
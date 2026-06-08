import { motion } from "framer-motion";
import { aiCapabilities } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { FiCpu } from "react-icons/fi";

export function AIExpertise() {
  return (
    <section id="ai" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 size-[500px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Expertise"
          title="Shipping useful AI, not demos"
          description="From RAG over private data to agentic workflows that take real actions."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl glass-card p-6"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl" />
              <FiCpu className="mb-3 text-primary" />
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
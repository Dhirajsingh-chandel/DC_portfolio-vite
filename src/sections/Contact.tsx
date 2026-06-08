import { useState } from "react";
import { motion } from "framer-motion";
import { profile, socials } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { FiMail, FiPhone, FiSend, FiCheck } from "react-icons/fi";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project, role, or idea? Drop a message — I usually reply within a day."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl glass-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20">
                <FiMail />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="text-sm font-medium">{profile.email}</p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 rounded-2xl glass-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20">
                <FiPhone />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">{profile.phone}</p>
              </div>
            </a>
            <div className="flex gap-2 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-xl glass-card transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="rounded-3xl glass-card p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" className="mt-4" />
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me a bit about the project…"
                className="w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full btn-primary px-5 py-3 text-sm font-medium sm:w-auto"
            >
              {sent ? (
                <>
                  <FiCheck /> Message sent
                </>
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
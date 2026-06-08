import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-block size-2 rounded-full bg-gradient-to-br from-primary to-accent" />
          {profile.name.split(" ")[0]}.<span className="text-gradient">dev</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full btn-primary px-4 py-2 text-sm font-medium md:inline-flex"
        >
          Let's talk
        </a>
        <button
          aria-label="Menu"
          className="rounded-md border border-border p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
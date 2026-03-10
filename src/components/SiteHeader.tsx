import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/favicon.png";

const NAV_LINKS = [
  { label: "Solutions", href: "#partner" },
  { label: "Infrastructure", href: "#comparison" },
  { label: "Knowledge Base", href: "#knowledge" },
  { label: "API", href: "#terminal" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5" aria-label="CloudOps Tool Home">
          <img src={logoImg} alt="CloudOps Tool" className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-foreground">CloudOps Tool</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#terminal"
            className="gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Access
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#terminal"
                className="gradient-cta text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
                onClick={() => setOpen(false)}
              >
                Get Access
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logoImg from "@/assets/favicon.png";

const NAV_LINKS = [
  { label: "Solutions", href: "#partner" },
  { label: "Infrastructure", href: "#comparison" },
  { label: "Knowledge Base", href: "#knowledge" },
  { label: "API", href: "#terminal" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "zh", label: "中文" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "hi", label: "हिन्दी" },
  { code: "fr", label: "Français" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="CloudOps Tool Home">
          <img src={logoImg} alt="CloudOps Tool" className="h-7 w-7" />
          <span className="text-base font-bold tracking-tight text-foreground">CloudOps Tool</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe size={15} />
              <span className="uppercase text-xs font-medium">{currentLang}</span>
              <ChevronDown size={13} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 top-8 bg-card border border-border rounded-lg shadow-elevated py-1 min-w-[140px] z-50"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setCurrentLang(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-1.5 text-sm hover:bg-secondary transition-colors ${
                        currentLang === lang.code ? "text-primary font-medium" : "text-foreground"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://www.morelogin.com/?from=AAlpjpHv4azO"
            target="_blank"
            rel="noopener noreferrer"
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
              {/* Mobile language */}
              <div className="flex flex-wrap gap-2 py-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                      currentLang === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <a
                href="https://www.morelogin.com/?from=AAlpjpHv4azO"
                target="_blank"
                rel="noopener noreferrer"
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

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background/80" />

      <div className="container text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary bg-accent px-3 py-1 rounded-full">
            {t("hero.badge")}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-foreground">
            {t("hero.title1")}
            <span className="gradient-text"> {t("hero.title2")}</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed tracking-wide">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta text-primary-foreground font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#terminal"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

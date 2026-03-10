import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Coins } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";

export default function SuccessStories() {
  const { t } = useLanguage();

  const STORIES = [
    { icon: TrendingUp, nameKey: "success1.name", industryKey: "success1.industry", resultKey: "success1.result", textKey: "success1.text" },
    { icon: ShoppingCart, nameKey: "success2.name", industryKey: "success2.industry", resultKey: "success2.result", textKey: "success2.text" },
    { icon: Coins, nameKey: "success3.name", industryKey: "success3.industry", resultKey: "success3.result", textKey: "success3.text" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{t("success.badge")}</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">{t("success.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {STORIES.map((s, i) => (
            <motion.div
              key={s.nameKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-6 hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                <s.icon size={20} className="text-accent-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-foreground">{t(s.nameKey)}</span>
                <span className="text-[11px] bg-secondary px-2 py-0.5 rounded text-muted-foreground">{t(s.industryKey)}</span>
              </div>
              <div className="text-sm font-semibold text-primary mb-3">{t(s.resultKey)}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{t(s.textKey)}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-cta text-primary-foreground font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}

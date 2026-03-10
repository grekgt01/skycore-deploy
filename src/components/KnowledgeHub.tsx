import { motion } from "framer-motion";
import { Server, Fingerprint, Network, ArrowRight, Shield, Globe, Lock, Zap, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KnowledgeHub() {
  const { t } = useLanguage();

  const STATS = [
    { icon: Globe, value: "140+", labelKey: "knowledge.stats.countries" },
    { icon: Zap, value: "0.2s", labelKey: "knowledge.stats.deploy" },
    { icon: Lock, value: "99.9%", labelKey: "knowledge.stats.uptime" },
    { icon: Database, value: "50M+", labelKey: "knowledge.stats.profiles" },
  ];

  const ARTICLES = [
    { icon: Shield, tagKey: "article1.tag", date: "Feb 12, 2026", readTime: "15 min", titleKey: "article1.title", excerptKey: "article1.excerpt" },
    { icon: Server, tagKey: "article2.tag", date: "Jan 28, 2026", readTime: "12 min", titleKey: "article2.title", excerptKey: "article2.excerpt" },
    { icon: Network, tagKey: "article3.tag", date: "Jan 5, 2026", readTime: "18 min", titleKey: "article3.title", excerptKey: "article3.excerpt" },
  ];

  const REVIEWS = [
    { nameKey: "review1.name", roleKey: "review1.role", textKey: "review1.text" },
    { nameKey: "review2.name", roleKey: "review2.role", textKey: "review2.text" },
    { nameKey: "review3.name", roleKey: "review3.role", textKey: "review3.text" },
    { nameKey: "review4.name", roleKey: "review4.role", textKey: "review4.text" },
  ];

  return (
    <section id="knowledge" className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-5 rounded-xl bg-card border border-border"
            >
              <s.icon size={20} className="mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{t(s.labelKey)}</div>
            </motion.div>
          ))}
        </div>

        {/* Articles header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{t("knowledge.badge")}</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">{t("knowledge.title")}</h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">{t("knowledge.subtitle")}</p>
        </motion.div>

        {/* Articles — full-text previews */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover-lift cursor-pointer"
            >
              <div className="p-5 pb-0">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                  <a.icon size={18} className="text-accent-foreground" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                  <span className="bg-secondary px-2 py-0.5 rounded font-medium">{t(a.tagKey)}</span>
                  <span>{a.date}</span>
                  <span>· {a.readTime}</span>
                </div>
              </div>
              <div className="px-5 pb-5">
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {t(a.titleKey)}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-[12]">
                  {t(a.excerptKey)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{t("reviews.badge")}</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">{t("reviews.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.nameKey}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-3">"{t(r.textKey)}"</p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{t(r.nameKey)}</span> · {t(r.roleKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

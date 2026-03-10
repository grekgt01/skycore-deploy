import { motion } from "framer-motion";
import { Shield, Zap, Fingerprint, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";

export default function PartnerSection() {
  const { t } = useLanguage();

  const FEATURES = [
    { icon: Fingerprint, titleKey: "partner.feat1.title", descKey: "partner.feat1.desc" },
    { icon: Zap, titleKey: "partner.feat2.title", descKey: "partner.feat2.desc" },
    { icon: Shield, titleKey: "partner.feat3.title", descKey: "partner.feat3.desc" },
  ];

  return (
    <section id="partner" className="py-20 md:py-28" style={{ background: 'hsla(var(--section-bg))' }}>
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">{t("partner.badge")}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            {t("partner.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t("partner.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{t(f.titleKey)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(f.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-cta text-primary-foreground font-semibold text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            {t("partner.cta")}
            <ExternalLink size={18} />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">{t("partner.offer")}</p>
        </motion.div>
      </div>
    </section>
  );
}

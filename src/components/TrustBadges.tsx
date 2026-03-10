import { motion } from "framer-motion";
import { Shield, Container, Server, Lock, Globe, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BADGES = [
  { icon: Server, label: "Ubuntu" },
  { icon: Container, label: "Docker" },
  { icon: Globe, label: "Debian" },
  { icon: Lock, label: "OpenSSL" },
  { icon: Shield, label: "Nginx" },
  { icon: Code, label: "Python" },
];

export default function TrustBadges() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-16 border-y border-border" style={{ background: 'hsla(var(--section-bg))' }}>
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          {t("trust.label")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {BADGES.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <b.icon size={28} strokeWidth={1.5} />
              <span className="text-[11px] font-medium">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";

export default function FloatingBadge() {
  const { t } = useLanguage();

  return (
    <motion.a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-5 right-5 z-50 md:hidden gradient-cta text-primary-foreground font-semibold text-xs px-4 py-2.5 rounded-full shadow-elevated flex items-center gap-1.5 animate-pulse-glow"
    >
      {t("floating.cta")}
      <ExternalLink size={13} />
    </motion.a>
  );
}

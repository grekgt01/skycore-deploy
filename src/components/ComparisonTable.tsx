import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent">
        <Check size={14} className="text-primary" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/10">
        <X size={14} className="text-destructive" />
      </span>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export default function ComparisonTable() {
  const { t } = useLanguage();

  const ROWS = [
    { metricKey: "compare.row1", us: "~10 seconds", them: "2+ hours" },
    { metricKey: "compare.row2", us: "99.9%", them: "~85%" },
    { metricKey: "compare.row3", us: true, them: false },
    { metricKey: "compare.row4", us: true, them: false },
    { metricKey: "compare.row5", us: true, them: false },
    { metricKey: "compare.row6", us: true, them: "Manual" },
    { metricKey: "compare.row7", us: true, them: false },
    { metricKey: "compare.row8", us: "$0 (self-hosted)", them: "$15–50" },
  ];

  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("compare.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("compare.subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-card"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left" aria-label="Feature comparison">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 md:p-5 text-sm font-semibold text-foreground">{t("compare.metric")}</th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center">
                    <span className="gradient-text">{t("compare.us")}</span>
                  </th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center text-muted-foreground">
                    {t("compare.them")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.metricKey} className={i < ROWS.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-4 md:p-5 text-sm text-foreground font-medium">{t(r.metricKey)}</td>
                    <td className="p-4 md:p-5 text-center text-foreground"><Cell value={r.us} /></td>
                    <td className="p-4 md:p-5 text-center text-muted-foreground"><Cell value={r.them} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

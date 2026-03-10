import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ROWS = [
  { metric: "Initial Setup Time", us: "~10 seconds", them: "2+ hours" },
  { metric: "Uptime SLA", us: "99.9%", them: "~85%" },
  { metric: "Proxy Auto-Rotation", us: true, them: false },
  { metric: "Anti-Detect Integration", us: true, them: false },
  { metric: "Docker Containerization", us: true, them: false },
  { metric: "Firewall & Fail2Ban", us: true, them: "Manual" },
  { metric: "One-Click Updates", us: true, them: false },
  { metric: "Cost per Node/month", us: "$0 (self-hosted)", them: "$15–50" },
];

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
  return (
    <section id="comparison" className="py-20 md:py-28 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            CloudOps vs. Manual Deployment
          </h2>
          <p className="mt-4 text-muted-foreground">
            See why 10,000+ engineers chose automated infrastructure.
          </p>
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
                  <th className="p-4 md:p-5 text-sm font-semibold text-foreground">Metric</th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center">
                    <span className="gradient-text">CloudOps Tool</span>
                  </th>
                  <th className="p-4 md:p-5 text-sm font-semibold text-center text-muted-foreground">
                    Manual Setup
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.metric} className={i < ROWS.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-4 md:p-5 text-sm text-foreground font-medium">{r.metric}</td>
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

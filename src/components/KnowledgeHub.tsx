import { motion } from "framer-motion";
import { Server, Fingerprint, Network, ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    icon: Server,
    tag: "Infrastructure",
    date: "Jan 15, 2026",
    readTime: "12 min read",
    title: "Advanced VPS Hardening for High-Volume Multi-Accounting (2026 Guide)",
    excerpt:
      "A comprehensive walkthrough of kernel-level security configurations, iptables rulesets, and automated fail2ban deployment for Ubuntu 24.04 LTS servers running proxy-rotation workloads at scale.",
  },
  {
    icon: Fingerprint,
    tag: "Anti-Detect",
    date: "Dec 8, 2025",
    readTime: "15 min read",
    title: "Mastering Fingerprint Integrity: A Deep Dive into MoreLogin's Kernel",
    excerpt:
      "Explore how MoreLogin's Chromium-based engine spoofs Canvas, WebGL, AudioContext, and 200+ browser parameters at the kernel level — and why traditional extension-based approaches fail.",
  },
  {
    icon: Network,
    tag: "DevOps",
    date: "Nov 22, 2025",
    readTime: "18 min read",
    title: "Scaling Proxies: From 1 to 10,000 Nodes with Automated Bash Scripts",
    excerpt:
      "Learn the exact Bash automation pipeline we use to provision, test, and rotate residential and datacenter proxies across a fleet of 10,000+ nodes with zero manual intervention.",
  },
];

export default function KnowledgeHub() {
  return (
    <section id="knowledge" className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Knowledge Base</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Technical Articles & Guides
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Deep-dive engineering resources from our team of infrastructure specialists.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift cursor-pointer"
            >
              {/* Icon header */}
              <div className="p-6 pb-0">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <a.icon size={22} className="text-accent-foreground" />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="bg-secondary px-2 py-0.5 rounded-md font-medium">{a.tag}</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {a.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

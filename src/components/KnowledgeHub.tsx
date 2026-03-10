import { motion } from "framer-motion";
import { Server, Fingerprint, Network, ArrowRight, Shield, Cpu, Database, Globe, Lock, Zap } from "lucide-react";

const ARTICLES = [
  {
    icon: Server,
    tag: "Infrastructure",
    date: "Jan 15, 2026",
    readTime: "12 min",
    title: "Advanced VPS Hardening for High-Volume Multi-Accounting (2026 Guide)",
    excerpt: "A comprehensive walkthrough of kernel-level security configurations, iptables rulesets, and automated fail2ban deployment for Ubuntu 24.04 LTS servers running proxy-rotation workloads at scale.",
  },
  {
    icon: Fingerprint,
    tag: "Anti-Detect",
    date: "Dec 8, 2025",
    readTime: "15 min",
    title: "Mastering Fingerprint Integrity: A Deep Dive into MoreLogin's Kernel",
    excerpt: "Explore how MoreLogin's Chromium-based engine spoofs Canvas, WebGL, AudioContext, and 200+ browser parameters at the kernel level — and why traditional extension-based approaches fail.",
  },
  {
    icon: Network,
    tag: "DevOps",
    date: "Nov 22, 2025",
    readTime: "18 min",
    title: "Scaling Proxies: From 1 to 10,000 Nodes with Automated Bash Scripts",
    excerpt: "Learn the exact Bash automation pipeline we use to provision, test, and rotate residential and datacenter proxies across a fleet of 10,000+ nodes with zero manual intervention.",
  },
  {
    icon: Shield,
    tag: "Security",
    date: "Oct 30, 2025",
    readTime: "10 min",
    title: "Zero-Trust Architecture for Multi-Account Operations",
    excerpt: "How to implement a zero-trust security model across your VPS fleet. From SSH key rotation to encrypted tunnels — everything you need to keep your infrastructure impenetrable.",
  },
  {
    icon: Cpu,
    tag: "Performance",
    date: "Sep 14, 2025",
    readTime: "8 min",
    title: "Optimizing Docker Containers for 99.9% Uptime on Budget VPS",
    excerpt: "Resource allocation strategies, swap management, and cgroup tuning techniques that allow us to maintain enterprise-grade uptime on $5/month VPS instances.",
  },
  {
    icon: Database,
    tag: "Data",
    date: "Aug 3, 2025",
    readTime: "14 min",
    title: "Profile Database Architecture: Managing 50,000+ Browser Identities",
    excerpt: "A deep dive into the database schema and caching strategies behind managing tens of thousands of unique browser profiles with instant retrieval and zero data leakage.",
  },
];

const REVIEWS = [
  { name: "Alex K.", role: "DevOps Lead, Berlin", text: "CloudOps reduced our deployment time from 4 hours to under a minute. The MoreLogin integration is seamless.", rating: 5 },
  { name: "Maria S.", role: "Growth Engineer, São Paulo", text: "We manage 3,000+ accounts across 12 platforms. CloudOps + MoreLogin is the only stack that hasn't failed us.", rating: 5 },
  { name: "Chen Wei", role: "Infrastructure Architect, Shanghai", text: "The automated proxy rotation alone saved us $2,000/month in manual labor. Highly recommended.", rating: 5 },
  { name: "James R.", role: "CTO, London", text: "We evaluated 7 different solutions. CloudOps was the only one with true kernel-level fingerprint isolation.", rating: 5 },
];

const STATS = [
  { icon: Globe, value: "140+", label: "Countries covered" },
  { icon: Zap, value: "0.2s", label: "Avg. deploy time" },
  { icon: Lock, value: "99.9%", label: "Uptime guarantee" },
  { icon: Database, value: "50M+", label: "Profiles managed" },
];

export default function KnowledgeHub() {
  return (
    <section id="knowledge" className="py-16 md:py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-5 rounded-xl bg-card border border-border"
            >
              <s.icon size={20} className="mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
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
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Knowledge Base</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            Technical Articles & Guides
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Deep-dive engineering resources from our infrastructure team.
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.title}
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
                  <span className="bg-secondary px-2 py-0.5 rounded font-medium">{a.tag}</span>
                  <span>{a.date}</span>
                  <span>· {a.readTime}</span>
                </div>
              </div>
              <div className="px-5 pb-5">
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {a.excerpt}
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
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
            Trusted by Teams Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-3">"{r.text}"</p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{r.name}</span> · {r.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const COMMAND = `curl -sSL https://raw.githubusercontent.com/cloudops-tool/deploy/main/setup.sh | bash`;

export default function TerminalSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="terminal" className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            One Command. Full Deployment.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Copy the command below into your VPS terminal and let CloudOps handle the rest —
            firewall, proxy rotation, Docker, and anti-detect configuration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="terminal-window rounded-xl overflow-hidden shadow-elevated"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-muted-foreground/60 font-mono">bash — cloudops-deploy</span>
          </div>

          {/* Command */}
          <div className="relative p-5 md:p-6">
            <pre className="font-mono text-sm md:text-base text-terminal-fg overflow-x-auto whitespace-pre-wrap break-all leading-relaxed">
              <span className="text-terminal-accent">$ </span>
              {COMMAND}
            </pre>

            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terminal-border/60 hover:bg-terminal-border text-primary-foreground text-xs font-medium transition-colors"
              aria-label="Copy command"
            >
              {copied ? (
                <>
                  <Check size={14} /> Copied!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SCRIPT = `#!/bin/bash
# CloudOps Tool — Automated Multi-Accounting Server Setup
echo "Starting High-Performance Server Setup..."

sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose git curl wget

# Portainer (GUI server management via browser)
docker volume create portainer_data
docker run -d -p 9000:9000 --name portainer \\
  --restart always \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v portainer_data:/data \\
  portainer/portainer-ce:latest

echo "--------------------------------------------------"
echo "SETUP COMPLETE!"
echo "Portainer (GUI) is running on port 9000"
echo "Recommended Browser: MoreLogin"
echo "https://www.morelogin.com/?from=AAlpjpHv4azO"
echo "--------------------------------------------------"`;



const ONE_LINER = `curl -sSL https://raw.githubusercontent.com/grekgt01/docker-run/main/setup.sh | bash`;

export default function TerminalSection() {
  const [copied, setCopied] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(showFull ? SCRIPT : ONE_LINER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="terminal" className="py-16 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t("terminal.title")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto">
            {t("terminal.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="terminal-window rounded-xl overflow-hidden shadow-elevated"
        >
          {/* macOS-style title bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-terminal-border bg-[hsl(220,20%,12%)]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-muted-foreground/40 font-mono">cloudops@vps ~ bash</span>
            </div>
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-[10px] text-terminal-accent font-mono hover:underline"
            >
              {showFull ? t("terminal.showOneLiner") : t("terminal.viewFull")}
            </button>
          </div>

          {/* Command */}
          <div className="relative p-4 md:p-5">
            <pre className="font-mono text-xs md:text-sm text-terminal-fg overflow-x-auto whitespace-pre-wrap break-all leading-relaxed max-h-[320px] overflow-y-auto">
              <span className="text-terminal-accent">$ </span>
              {showFull ? SCRIPT : ONE_LINER}
            </pre>

            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terminal-border/60 hover:bg-terminal-border text-primary-foreground text-xs font-medium transition-all"
              aria-label="Copy command"
            >
              {copied ? <><Check size={13} className="text-[#28c840]" /> {t("terminal.copied")}</> : <><Copy size={13} /> {t("terminal.copy")}</>}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

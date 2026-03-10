import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="container text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary bg-accent px-3 py-1 rounded-full">
            Trusted by 10,000+ Engineers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Infrastructure that
            <span className="gradient-text"> thinks for you</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            One command to deploy, secure, and manage your entire VPS fleet.
            The gold standard for multi-accounting and proxy management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-cta text-primary-foreground font-semibold px-7 py-3 rounded-full text-sm hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Get MoreLogin — Special Offer
          </a>
          <a
            href="#terminal"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Deploy Your Server →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

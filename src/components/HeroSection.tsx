import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 text-xs font-semibold uppercase tracking-widest text-primary bg-accent px-4 py-1.5 rounded-full">
            Trusted by 10,000+ DevOps Engineers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground">
            Automate at the
            <br />
            <span className="gradient-text">Speed of Thought.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The definitive infrastructure layer for multi-accounting and proxy-rotation.
            One command to deploy your entire VPS fleet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#terminal"
            className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Deploy Now — It's Free
          </a>
          <a
            href="#knowledge"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Read the Documentation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

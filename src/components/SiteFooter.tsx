import logoImg from "@/assets/favicon.png";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "One-Click Deploy", href: "#terminal" },
      { label: "MoreLogin Integration", href: "#partner" },
      { label: "API Reference", href: "#terminal" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Base", href: "#knowledge" },
      { label: "Documentation", href: "#" },
      { label: "Community Forum", href: "#" },
      { label: "Status Page", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR Compliance", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="CloudOps Tool" className="h-7 w-7" />
              <span className="font-bold text-foreground">CloudOps Tool</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Enterprise-grade infrastructure automation for the modern web.
            </p>
            <div className="flex gap-3 text-xs">
              <button className="px-2.5 py-1 rounded-md bg-secondary font-semibold text-foreground">EN</button>
              <button className="px-2.5 py-1 rounded-md text-muted-foreground hover:bg-secondary transition-colors">中文</button>
              <button className="px-2.5 py-1 rounded-md text-muted-foreground hover:bg-secondary transition-colors">PT</button>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CloudOps Tool. All rights reserved.</p>
          <p>
            Official Partner:{" "}
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              MoreLogin Anti-Detect Browser
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

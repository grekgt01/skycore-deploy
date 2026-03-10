import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";
import logoImg from "@/assets/favicon.png";

const AFFILIATE_URL = "https://www.morelogin.com/?from=AAlpjpHv4azO";
const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "zh", label: "中文" },
  { code: "pt", label: "PT" },
];

export default function SiteFooter() {
  const { lang, setLang, t } = useLanguage();

  const COLUMNS = [
    {
      titleKey: "footer.product",
      links: [
        { labelKey: "footer.product.deploy", href: "#terminal" },
        { labelKey: "footer.product.morelogin", href: "#partner" },
        { labelKey: "footer.product.api", href: "#terminal" },
        { labelKey: "footer.product.changelog", href: "#" },
      ],
    },
    {
      titleKey: "footer.resources",
      links: [
        { labelKey: "footer.resources.kb", href: "#knowledge" },
        { labelKey: "footer.resources.docs", href: "#" },
        { labelKey: "footer.resources.community", href: "#" },
        { labelKey: "footer.resources.status", href: "#" },
      ],
    },
    {
      titleKey: "footer.legal",
      links: [
        { labelKey: "footer.legal.privacy", href: "#" },
        { labelKey: "footer.legal.terms", href: "#" },
        { labelKey: "footer.legal.cookies", href: "#" },
        { labelKey: "footer.legal.gdpr", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="CloudOps Tool" className="h-7 w-7" />
              <span className="font-bold text-foreground">CloudOps Tool</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-2 text-xs">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                    lang === l.code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.titleKey}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{t(col.titleKey)}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.labelKey}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {t(l.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{t("footer.copyright")}</p>
          <p>
            {t("footer.partner")}{" "}
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {t("footer.partnerName")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

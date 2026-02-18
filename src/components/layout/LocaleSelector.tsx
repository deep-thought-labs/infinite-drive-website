import { setPreferredLocale } from "@/content/i18n";

/**
 * Language selector (EN | ES). Navigates to same path with new locale and persists choice.
 * Uses design tokens for colors.
 */
export function LocaleSelector({
  currentLocale,
  onNavigateLocale,
  onMobileSelect,
  variant = "desktop",
}: {
  currentLocale: string;
  onNavigateLocale: (locale: "en" | "es") => void;
  onMobileSelect?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const isMobile = variant === "mobile";
  const linkStyle: React.CSSProperties = isMobile
    ? {
        display: "block",
        padding: "0.5rem 1rem",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        letterSpacing: "0.05em",
        color: "var(--id-text-muted)",
        textDecoration: "none",
        border: "none",
        background: "none",
        cursor: "pointer",
        width: "100%",
        textAlign: "left",
      }
    : {
        fontFamily: "monospace",
        fontSize: "0.85rem",
        letterSpacing: "0.05em",
        color: "var(--id-text-muted)",
        textDecoration: "none",
        padding: "0.25rem 0.5rem",
        border: "none",
        background: "none",
        cursor: "pointer",
      };

  const handleClick = (locale: "en" | "es") => {
    setPreferredLocale(locale);
    onNavigateLocale(locale);
    onMobileSelect?.();
  };

  return (
    <div
      className={isMobile ? "flex flex-col gap-1" : "flex items-center gap-1"}
      style={isMobile ? { padding: "0 1rem" } : undefined}
    >
      {(["en", "es"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => handleClick(locale)}
          style={{
            ...linkStyle,
            color: currentLocale === locale ? "var(--id-accent-soft)" : linkStyle.color,
          }}
          onMouseEnter={(e) => {
            if (currentLocale !== locale) e.currentTarget.style.color = "var(--id-text-secondary)";
          }}
          onMouseLeave={(e) => {
            if (currentLocale !== locale) e.currentTarget.style.color = "var(--id-text-muted)";
          }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

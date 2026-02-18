/**
 * Card block with optional icon/leading, title, and children. Uses design tokens.
 * compact = smaller padding. borderVariant = accent for CTA-style border.
 * iconPosition = "top" for icon above title (centered card layout).
 */
export function ContentCard({
  icon: Icon,
  leading,
  title,
  titleAlign = "left",
  children,
  compact = false,
  className = "",
  style,
  borderVariant = "default",
  iconPosition = "left",
}: {
  icon?: React.ElementType;
  leading?: React.ReactNode;
  title?: string;
  titleAlign?: "left" | "center";
  children: React.ReactNode;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
  borderVariant?: "default" | "accent";
  iconPosition?: "left" | "top";
}) {
  const padding = compact ? "p-4" : "p-6";
  const hasLeadingColumn = leading != null && Icon == null;
  const hasHeader = Icon != null || leading != null || title != null;
  const titleClass = titleAlign === "center" ? "font-mono mb-2 text-center" : "font-mono mb-2";
  const headerClass = titleAlign === "center" ? "flex items-center justify-center gap-4 mb-3" : "flex items-start gap-4 mb-3";
  const border = borderVariant === "accent" ? "1px solid var(--id-accent)" : "1px solid var(--id-border)";

  const contentBlock = (
    <>
      {title != null && (
        <h3
          className={titleClass}
          style={{ color: "var(--id-accent)", letterSpacing: "0.05em", fontSize: compact ? "1rem" : "1.2rem" }}
        >
          {title}
        </h3>
      )}
      {children}
    </>
  );

  const isTopIcon = iconPosition === "top" && Icon != null;

  return (
    <div
      className={`rounded ${padding} ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-card)",
        border,
        ...style,
      }}
    >
      {isTopIcon ? (
        <div className="text-center">
          <span className="inline-block mb-4" style={{ color: "var(--id-accent)" }}>
            <Icon size={compact ? 32 : 40} />
          </span>
          {title != null && (
            <h3
              className="font-mono mb-2"
              style={{ color: "var(--id-accent)", letterSpacing: "0.05em", fontSize: compact ? "1rem" : "1.2rem" }}
            >
              {title}
            </h3>
          )}
          {children}
        </div>
      ) : hasLeadingColumn ? (
        <div className="flex items-start gap-4">
          <span className="font-mono shrink-0" style={{ color: "var(--id-accent)", fontSize: "1.5rem", minWidth: "40px" }}>
            {leading}
          </span>
          <div className="min-w-0">{contentBlock}</div>
        </div>
      ) : (
        <>
          {hasHeader && (
            <div className={headerClass}>
              {Icon != null && (
                <span className="shrink-0" style={{ color: "var(--id-accent)" }}>
                  <Icon size={compact ? 20 : 24} />
                </span>
              )}
              {title != null && (
                <h3
                  className={titleAlign === "center" ? "font-mono text-center" : "font-mono"}
                  style={{ color: "var(--id-accent)", letterSpacing: "0.05em", fontSize: compact ? "1rem" : "1.2rem" }}
                >
                  {title}
                </h3>
              )}
            </div>
          )}
          {children}
        </>
      )}
    </div>
  );
}

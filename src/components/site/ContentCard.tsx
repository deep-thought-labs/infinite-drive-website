/**
 * Card block with optional icon/leading, title, and children. Uses design tokens.
 * compact = smaller padding for small info boxes.
 * leading = optional ReactNode (e.g. number "01" or icon) shown left of title.
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
}: {
  icon?: React.ElementType;
  leading?: React.ReactNode;
  title?: string;
  titleAlign?: "left" | "center";
  children: React.ReactNode;
  compact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const padding = compact ? "p-4" : "p-6";
  const hasLeadingColumn = leading != null && Icon == null;
  const hasHeader = Icon != null || leading != null || title != null;
  const titleClass = titleAlign === "center" ? "font-mono mb-2 text-center" : "font-mono mb-2";
  const headerClass = titleAlign === "center" ? "flex items-center justify-center gap-4 mb-3" : "flex items-start gap-4 mb-3";

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

  return (
    <div
      className={`rounded ${padding} ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-card)",
        border: "1px solid var(--id-border)",
        ...style,
      }}
    >
      {hasLeadingColumn ? (
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

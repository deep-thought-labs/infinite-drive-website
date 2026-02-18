/**
 * Highlighted box with left border. accent = accent color; muted = subtle border.
 * paddingSize "spacious" = more vertical padding (e.g. open-source callout on home).
 */
export function CalloutBox({
  children,
  variant = "accent",
  paddingSize = "default",
  borderWidth = "2px",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "muted";
  paddingSize?: "default" | "spacious";
  borderWidth?: "2px" | "3px";
  className?: string;
}) {
  const borderColor = variant === "accent" ? "var(--id-accent)" : "var(--id-text-muted)";
  const padding = paddingSize === "spacious" ? "py-6 px-4" : "p-4";

  return (
    <div
      className={`${padding} rounded ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-elevated)",
        borderLeft: `${borderWidth} solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
}

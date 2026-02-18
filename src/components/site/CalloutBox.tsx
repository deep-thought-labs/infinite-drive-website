/**
 * Highlighted box with left border. accent = accent color; muted = subtle border.
 * paddingSize "spacious" = more vertical padding (e.g. open-source callout on home).
 */
export function CalloutBox({
  children,
  variant = "accent",
  paddingSize = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "muted";
  paddingSize?: "default" | "spacious";
  className?: string;
}) {
  const borderColor = variant === "accent" ? "var(--id-accent)" : "var(--id-text-muted)";
  const padding = paddingSize === "spacious" ? "py-6 px-4" : "p-4";

  return (
    <div
      className={`${padding} rounded ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-elevated)",
        borderLeft: `2px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
}

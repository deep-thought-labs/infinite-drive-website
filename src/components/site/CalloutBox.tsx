/**
 * Highlighted box with left border. accent = accent color; muted = subtle border.
 */
export function CalloutBox({
  children,
  variant = "accent",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "accent" | "muted";
  className?: string;
}) {
  const borderColor = variant === "accent" ? "var(--id-accent)" : "var(--id-text-muted)";

  return (
    <div
      className={`p-4 rounded ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-elevated)",
        borderLeft: `2px solid ${borderColor}`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Section or page heading. Uses design tokens for color and consistent typography.
 * level 1 = page title, 2 = section (h2), 3 = subsection (h3), 4 = label (h4).
 */
export function SectionHeading({
  level,
  children,
  className = "",
  colorVariant = "primary",
}: {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  /** primary = text-primary, accent = id-accent, muted = text-muted */
  colorVariant?: "primary" | "accent" | "muted";
}) {
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4";
  const sizes: Record<number, string> = {
    1: "2.5rem",
    2: "2rem",
    3: "1.5rem",
    4: "1.2rem",
  };
  const margin = level === 1 ? "mb-4" : level === 4 ? "mb-2" : "mb-6";
  const color =
    colorVariant === "accent"
      ? "var(--id-accent)"
      : colorVariant === "muted"
        ? "var(--id-text-muted)"
        : "var(--id-text-primary)";

  return (
    <Tag
      className={`font-mono ${margin} ${className}`.trim()}
      style={{
        fontSize: sizes[level],
        color,
        letterSpacing: "0.05em",
      }}
    >
      {children}
    </Tag>
  );
}

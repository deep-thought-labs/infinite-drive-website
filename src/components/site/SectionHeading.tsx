/**
 * Section or page heading. Uses design tokens for color and consistent typography.
 * level 1 = page title, level 2 = section title.
 */
export function SectionHeading({
  level,
  children,
  className = "",
}: {
  level: 1 | 2;
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = level === 1 ? "h1" : "h2";
  const size = level === 1 ? "2.5rem" : "2rem";
  const margin = level === 1 ? "mb-4" : "mb-6";

  return (
    <Tag
      className={`font-mono ${margin} ${className}`.trim()}
      style={{
        fontSize: size,
        color: "var(--id-text-primary)",
        letterSpacing: "0.05em",
      }}
    >
      {children}
    </Tag>
  );
}

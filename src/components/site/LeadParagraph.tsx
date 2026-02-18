/**
 * Párrafo "lead" de una sección: tamaño 1.1rem y color secondary. Centraliza el patrón repetido.
 */
export function LeadParagraph({
  children,
  className = "",
  style,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "p" | "div";
}) {
  return (
    <Tag
      className={className}
      style={{
        fontSize: "1.1rem",
        color: "var(--id-text-secondary)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

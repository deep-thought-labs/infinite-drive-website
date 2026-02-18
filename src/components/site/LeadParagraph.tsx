/**
 * Párrafo "lead" de una sección: primer texto destacado bajo un título.
 * Usa color primary y 1.1rem por defecto para consistencia en todo el sitio.
 * Pasa style para sobrescribir solo cuando el contexto requiera otro color (ej. jerarquía).
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
        color: "var(--id-text-primary)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

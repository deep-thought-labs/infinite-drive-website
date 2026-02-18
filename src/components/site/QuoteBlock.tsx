/**
 * Quote block with optional author and source. Uses tokens for background and border.
 * variant: accent = left accent border; muted = left subtle border; fullBorder = gray border all sides (card style).
 */
export function QuoteBlock({
  quote,
  author,
  source,
  variant = "accent",
  className = "",
}: {
  quote: string;
  author: string;
  source?: string;
  variant?: "accent" | "muted" | "fullBorder";
  className?: string;
}) {
  const isFullBorder = variant === "fullBorder";
  const borderLeft = isFullBorder
    ? undefined
    : variant === "accent"
      ? "3px solid var(--id-accent)"
      : "2px solid var(--id-text-muted)";
  const border = isFullBorder ? "1px solid var(--id-border)" : undefined;
  return (
    <div
      className={`p-6 md:p-8 rounded ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-card)",
        borderLeft,
        border,
      }}
    >
      <blockquote
        className="italic mb-4"
        style={{ fontSize: "0.95rem", lineHeight: "1.8", color: "var(--id-text-primary)" }}
      >
        &quot;{quote}&quot;
      </blockquote>
      <p className="text-sm" style={{ color: "var(--id-text-muted)" }}>
        — {author}
        {source != null && source !== "" ? `, ${source}` : ""}
      </p>
    </div>
  );
}

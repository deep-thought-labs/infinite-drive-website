/**
 * Quote block with optional author and source. Uses tokens for background and border.
 * variant: accent = primary accent border; muted = subtle border.
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
  variant?: "accent" | "muted";
  className?: string;
}) {
  const borderLeft =
    variant === "accent"
      ? "3px solid var(--id-accent)"
      : "2px solid var(--id-text-muted)";
  return (
    <div
      className={`p-6 md:p-8 rounded ${className}`.trim()}
      style={{
        backgroundColor: "var(--id-bg-card)",
        borderLeft,
      }}
    >
      <blockquote
        className="italic mb-4"
        style={{ fontSize: "0.95rem", lineHeight: "1.8", opacity: 0.9, color: "var(--id-text-secondary)" }}
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

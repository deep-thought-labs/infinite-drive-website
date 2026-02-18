/**
 * Horizontal divider between sections. Uses token for border color and spacing.
 */
export function SectionDivider({ className = "" }: { className?: string } = {}) {
  return (
    <div
      className={className}
      style={{
        borderTop: "1px solid var(--id-border)",
        margin: "var(--id-section-gap) 0",
      }}
    />
  );
}

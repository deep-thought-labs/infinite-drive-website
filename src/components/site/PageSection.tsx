import { SectionHeading } from "./SectionHeading";

/**
 * Section wrapper with optional title (SectionHeading) and consistent bottom margin.
 * showDividerAbove = render SectionDivider before the section content.
 */
export function PageSection({
  title,
  children,
  headingLevel = 2,
  showDividerAbove = false,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  headingLevel?: 1 | 2 | 3 | 4;
  showDividerAbove?: boolean;
  className?: string;
}) {
  return (
    <section className={`mb-16 ${className}`.trim()}>
      {showDividerAbove && (
        <div
          style={{
            borderTop: "1px solid var(--id-border)",
            margin: "var(--id-section-gap) 0",
          }}
        />
      )}
      {title != null && <SectionHeading level={headingLevel}>{title}</SectionHeading>}
      {children}
    </section>
  );
}

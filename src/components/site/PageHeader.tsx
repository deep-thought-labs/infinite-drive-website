import { SectionHeading } from "./SectionHeading";

/**
 * Page title and optional subtitle. Uses SectionHeading (level 1) and token-based subtitle color.
 */
export function PageHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string | React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${className}`.trim()}>
      <SectionHeading level={1}>{title}</SectionHeading>
      {subtitle != null && (
        <p style={{ fontSize: "1.2rem", color: "var(--id-text-primary)", maxWidth: "800px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

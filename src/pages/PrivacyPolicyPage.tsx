import { PageLayout } from "@/components/layout/PageLayout";
import { useContent } from "@/contexts/LocaleContext";

const sectionTitleStyle = {
  fontSize: "1.25rem",
  color: "#6ba3db",
  letterSpacing: "0.05em",
} as const;
const bodyStyle = { opacity: 0.9, lineHeight: "1.7", color: "#c9d1d9" };

export function PrivacyPolicyPage() {
  const content = useContent();
  const { site, privacy } = content;

  return (
    <PageLayout variant="narrow">
      <h1
        className="font-mono mb-8"
        style={{
          fontSize: "2rem",
          color: "#e6edf3",
          letterSpacing: "0.05em",
        }}
      >
        {privacy.title}
      </h1>

      <p className="mb-8" style={{ fontSize: "1rem", ...bodyStyle }}>
        <strong>Last updated:</strong> {privacy.lastUpdated}. {privacy.intro}
      </p>

      <div className="space-y-10">
        {privacy.sections.map((section) => (
          <section key={section.id}>
            <h2 className="font-mono mb-4" style={sectionTitleStyle}>
              {section.title}
            </h2>
            {Array.isArray(section.body) ? (
              section.body.map((paragraph, i) => (
                <p key={i} style={bodyStyle} className={i > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p style={bodyStyle}>{section.body}</p>
            )}
            {section.id === "contact" && (
              <p style={{ ...bodyStyle, marginTop: "1rem" }}>
                <a
                  href={site.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6ba3db", textDecoration: "underline" }}
                >
                  Telegram
                </a>
                {" · "}
                <a
                  href={site.links.deepThoughtLabs}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#6ba3db", textDecoration: "underline" }}
                >
                  Deep Thought Labs
                </a>
              </p>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: "1px solid #30363d" }}>
        <p className="text-sm" style={{ opacity: 0.7, color: "#8b949e" }}>
          {privacy.footerNote}
        </p>
      </div>
    </PageLayout>
  );
}

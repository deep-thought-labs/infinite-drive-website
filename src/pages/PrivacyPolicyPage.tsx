import { PageLayout } from "@/components/layout/PageLayout";
import { useContent } from "@/contexts/LocaleContext";
import { PageHeader, SectionHeading, SiteLink } from "@/components/site";

const bodyStyle = { lineHeight: "1.7", color: "var(--id-text-primary)" };

export function PrivacyPolicyPage() {
  const content = useContent();
  const { site, privacy } = content;

  return (
    <PageLayout variant="narrow">
      <PageHeader title={privacy.title} className="mb-8" />

      <p className="mb-8" style={{ fontSize: "1rem", ...bodyStyle }}>
        <strong>{privacy.lastUpdatedLabel}</strong> {privacy.lastUpdated}. {privacy.intro}
      </p>

      <div className="space-y-10">
        {privacy.sections.map((section) => (
          <section key={section.id}>
            <SectionHeading level={3} colorVariant="accent" className="mb-4">
              {section.title}
            </SectionHeading>
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
                <SiteLink href={site.links.telegram}>Telegram</SiteLink>
                {" · "}
                <SiteLink href={site.links.deepThoughtLabs}>Deep Thought Labs</SiteLink>
              </p>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--id-border)" }}>
        <p className="text-sm" style={{ color: "var(--id-text-muted)" }}>
          {privacy.footerNote}
        </p>
      </div>
    </PageLayout>
  );
}

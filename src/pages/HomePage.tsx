import { useOutletContext } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { useContent } from "@/contexts/LocaleContext";
import { assetsMeta } from "@/content/assets";
import {
  QuoteBlock,
  ContentCard,
  CalloutBox,
  SectionDivider,
  FormattedText,
} from "@/components/site";
import dontPanicImage from "@/assets/dontpanic-space.jpg";

type OutletContext = { onNavigate: (path: string) => void };

export function HomePage() {
  const { onNavigate } = useOutletContext<OutletContext>();
  const content = useContent();
  const { site, home } = content;
  const heroAsset = assetsMeta[home.hero.imageKey];

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1
            className="font-mono"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              letterSpacing: "0.1em",
              color: "var(--id-text-primary)",
              lineHeight: "1.2",
            }}
          >
            {home.hero.title}
          </h1>
          <p
            className="font-mono"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              opacity: 0.8,
              letterSpacing: "0.05em",
              color: "var(--id-text-muted)",
            }}
          >
            {home.hero.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <img
            src={dontPanicImage}
            alt={heroAsset?.alt ?? home.hero.imageKey}
            className="w-full h-full object-cover rounded"
            style={{ maxHeight: "400px", opacity: 0.9 }}
          />
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {Array.isArray(home.ecosystemIntro) ? (
            <FormattedText
              segments={home.ecosystemIntro}
              as="p"
              className="block"
              style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: "1.8", color: "var(--id-text-primary)" }}
            />
          ) : (
            <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: "1.8", color: "var(--id-text-primary)" }}>
              {home.ecosystemIntro}
            </p>
          )}
          <QuoteBlock quote={home.quote.text} author={home.quote.author} variant="fullBorder" />
          <p style={{ fontSize: "1.1rem", opacity: 0.85, lineHeight: "1.8", color: "var(--id-text-secondary)" }}>
            {site.descriptionLong}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {home.features.map((feature) => (
            <ContentCard key={feature.title} title={feature.title} titleAlign="center">
              <p style={{ opacity: 0.9, fontSize: "0.95rem", color: "var(--id-text-secondary)" }}>
                {feature.description}
              </p>
            </ContentCard>
          ))}
        </div>

        <div className="space-y-6 mt-16">
          <p style={{ fontSize: "1.1rem", opacity: 0.9, color: "var(--id-text-primary)" }}>
            <strong>{home.closingBlock.title}</strong>
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.7, color: "var(--id-text-muted)" }}>
            {home.closingBlock.subtitle}
          </p>
          <CalloutBox className="mt-6" paddingSize="spacious">
            {Array.isArray(home.openSourceNote) ? (
              <FormattedText
                segments={home.openSourceNote}
                as="p"
                className="block"
                style={{ fontSize: "0.95rem", color: "var(--id-text-secondary)" }}
              />
            ) : (
              <p style={{ fontSize: "0.95rem", color: "var(--id-text-secondary)" }}>
                <strong style={{ color: "var(--id-accent)" }}>{home.openSourceNote}</strong>
              </p>
            )}
          </CalloutBox>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {home.ctas.map((cta) =>
              cta.internal ? (
                <button
                  key={cta.href}
                  onClick={() => onNavigate(cta.href)}
                  className="px-8 py-3 rounded font-mono transition-all"
                  style={
                    cta.internal && cta.href === "/project42"
                      ? {
                          background: "linear-gradient(135deg, var(--id-accent-soft) 0%, var(--id-accent-secondary) 100%)",
                          color: "var(--id-bg-page)",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
                          letterSpacing: "0.05em",
                        }
                      : {
                          backgroundColor: "var(--id-bg-card)",
                          color: "var(--id-accent)",
                          border: "1px solid var(--id-accent)",
                          cursor: "pointer",
                          letterSpacing: "0.05em",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (cta.internal && cta.href === "/project42") {
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 217, 255, 0.5)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    } else {
                      e.currentTarget.style.backgroundColor = "var(--id-accent)";
                      e.currentTarget.style.color = "var(--id-bg-page)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (cta.internal && cta.href === "/project42") {
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    } else {
                      e.currentTarget.style.backgroundColor = "var(--id-bg-card)";
                      e.currentTarget.style.color = "var(--id-accent)";
                    }
                  }}
                >
                  {cta.label}
                </button>
              ) : (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded font-mono transition-all inline-block"
                  style={{
                    backgroundColor: "var(--id-bg-card)",
                    color: "var(--id-accent)",
                    border: "1px solid var(--id-accent)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cta.label}
                </a>
              )
            )}
          </div>
        </div>

        <SectionDivider />

        <section className="mb-16">
          <div
            className="p-8 rounded text-center"
            style={{
              backgroundColor: "var(--id-bg-card)",
              border: "1px solid var(--id-accent)",
            }}
          >
            <h2
              className="font-mono mb-4"
              style={{ fontSize: "1.5rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}
            >
              {home.joinSection.title}
            </h2>
            <p
              className="mb-6"
              style={{
                fontSize: "1.1rem",
                color: "var(--id-text-secondary)",
                maxWidth: "600px",
                margin: "0 auto 1.5rem",
              }}
            >
              {home.joinSection.description}
            </p>
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-mono transition-all"
              style={{
                backgroundColor: "var(--id-accent)",
                color: "var(--id-bg-page)",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {home.joinSection.ctaLabel}
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

import { useOutletContext } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  site,
  homeHero,
  homeQuote,
  homeFeatures,
  homeCtas,
  homeJoinSection,
  homeOpenSourceNote,
  assetsMeta,
} from "@/content";
import dontPanicImage from "@/assets/dontpanic-space.jpg";

type OutletContext = { onNavigate: (path: string) => void };

const cardStyle = {
  backgroundColor: "#1c2128",
  border: "1px solid #30363d",
};
const headingStyle = { color: "#6ba3db", letterSpacing: "0.05em" as const };

export function HomePage() {
  const { onNavigate } = useOutletContext<OutletContext>();
  const heroAsset = assetsMeta[homeHero.imageKey];

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Hero Section — contenido desde content/marketing/home */}
        <div className="space-y-6">
          <h1
            className="font-mono"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              letterSpacing: "0.1em",
              color: "#e6edf3",
              lineHeight: "1.2",
            }}
          >
            {homeHero.title}
          </h1>
          <p
            className="font-mono"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              opacity: 0.8,
              letterSpacing: "0.05em",
              color: "#8b949e",
            }}
          >
            {homeHero.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <img
            src={dontPanicImage}
            alt={heroAsset?.alt ?? homeHero.imageKey}
            className="w-full h-full object-cover rounded"
            style={{ maxHeight: "400px", opacity: 0.9 }}
          />
        </div>

        {/* Main Description — contenido desde content */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: "1.8" }}>
            A <strong>complete digital ecosystem</strong> — a new kind of internet built from the ground up.
          </p>
          <div className="p-8 rounded" style={{ ...cardStyle, border: "1px solid #444c56" }}>
            <blockquote
              className="italic mb-4"
              style={{ fontSize: "1rem", lineHeight: "1.8", opacity: 0.9 }}
            >
              &quot;{homeQuote.text}&quot;
            </blockquote>
            <p className="text-sm" style={{ color: "#8b949e" }}>
              — {homeQuote.author}
            </p>
          </div>
          <p style={{ fontSize: "1.1rem", opacity: 0.85, lineHeight: "1.8" }}>
            {site.descriptionLong}
          </p>
        </div>

        {/* Key Features Grid — contenido desde content/marketing/home */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {homeFeatures.map((feature) => (
            <div key={feature.title} className="p-6 rounded" style={cardStyle}>
              <h3 className="font-mono mb-3" style={headingStyle}>
                {feature.title}
              </h3>
              <p style={{ opacity: 0.9, fontSize: "0.95rem" }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action — contenido desde content */}
        <div className="space-y-6 mt-16">
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            <strong>This is infrastructure for everyone.</strong>
          </p>
          <p style={{ fontSize: "1rem", opacity: 0.7 }}>
            From individuals to enterprises — democratizing tools once controlled by the kraken.
          </p>
          <div className="p-6 rounded mt-6" style={{ backgroundColor: "#161b22", ...cardStyle }}>
            <p style={{ fontSize: "0.95rem", color: "#c9d1d9" }}>
              <strong style={{ color: "#6ba3db" }}>{homeOpenSourceNote}</strong>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {homeCtas.map((cta) =>
              cta.internal ? (
                <button
                  key={cta.href}
                  onClick={() => onNavigate(cta.href)}
                  className="px-8 py-3 rounded font-mono transition-all"
                  style={
                    cta.label.startsWith("Explore Project")
                      ? {
                          background: "linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)",
                          color: "#0d1117",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)",
                          letterSpacing: "0.05em",
                        }
                      : {
                          backgroundColor: "#1c2128",
                          color: "#6ba3db",
                          border: "1px solid #6ba3db",
                          cursor: "pointer",
                          letterSpacing: "0.05em",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (cta.label.startsWith("Explore Project")) {
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 217, 255, 0.5)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    } else {
                      e.currentTarget.style.backgroundColor = "#6ba3db";
                      e.currentTarget.style.color = "#0d1117";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (cta.label.startsWith("Explore Project")) {
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    } else {
                      e.currentTarget.style.backgroundColor = "#1c2128";
                      e.currentTarget.style.color = "#6ba3db";
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
                    backgroundColor: "#1c2128",
                    color: "#6ba3db",
                    border: "1px solid #6ba3db",
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

        <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

        {/* Join Community — contenido desde content/marketing/home y site.links */}
        <section className="mb-16">
          <div
            className="p-8 rounded text-center"
            style={{ backgroundColor: "#1c2128", border: "1px solid #6ba3db" }}
          >
            <h2
              className="font-mono mb-4"
              style={{ fontSize: "1.5rem", color: "#e6edf3", letterSpacing: "0.05em" }}
            >
              {homeJoinSection.title}
            </h2>
            <p
              className="mb-6"
              style={{
                fontSize: "1.1rem",
                color: "#c9d1d9",
                maxWidth: "600px",
                margin: "0 auto 1.5rem",
              }}
            >
              {homeJoinSection.description}
            </p>
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-mono transition-all"
              style={{
                backgroundColor: "#6ba3db",
                color: "#0d1117",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8dbde8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#6ba3db";
              }}
            >
              {homeJoinSection.ctaLabel}
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

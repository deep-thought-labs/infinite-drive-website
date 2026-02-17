import { useOutletContext } from "react-router-dom";
import { useContent } from "@/contexts/LocaleContext";
import { assetsMeta } from "@/content/assets";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { Globe, Mail, HardDrive, Server, Shield, Wifi, Layers, Database } from "lucide-react";
import networkMeshImage from "../assets/blocks.jpeg";
import connectedSystemsImage from "../assets/dots.jpeg";
import type { SovereignServiceCard } from "@/content/locales/types";
import { PageHeader } from "@/components/site";

type OutletContext = { onNavigate: (path: string) => void };

const imageByKey: Record<string, string> = {
  networkMesh: networkMeshImage,
  connectedSystems: connectedSystemsImage,
};

function SovereignCard({
  card,
  icon: Icon,
}: {
  card: SovereignServiceCard;
  icon: React.ElementType;
}) {
  return (
    <Card style={{ backgroundColor: "#1c2128", borderColor: "#444c56", border: "1px solid" }}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon size={24} style={{ color: "#6ba3db" }} />
          <CardTitle className="font-mono text-sm" style={{ color: "#8b949e", letterSpacing: "0.05em" }}>
            {card.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p style={{ color: "#e6edf3" }}>{card.summary}</p>

        {card.features && card.howItWorks && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card.featuresLabel && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e" }}>
                  {card.featuresLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "#c9d1d9" }}>
                  {card.features.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.howItWorksLabel && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e" }}>
                  {card.howItWorksLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "#c9d1d9" }}>
                  {card.howItWorks.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {card.example && (
          <div className="p-4 rounded" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #6ba3db" }}>
            <p className="text-sm" style={{ color: "#c9d1d9" }}>
              {card.example}
            </p>
          </div>
        )}

        {card.boxes && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {card.boxes.map((b) => (
              <div key={b.title} className="p-4 rounded" style={{ backgroundColor: "#161b22" }}>
                <h4 className="font-mono text-sm mb-2" style={{ color: "#6ba3db" }}>
                  {b.title}
                </h4>
                <p className="text-sm" style={{ opacity: 0.85, color: "#c9d1d9" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {card.bullets && (
          <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "#c9d1d9" }}>
            {card.bullets.map((b, i) => (
              <li key={i}>→ {b}</li>
            ))}
          </ul>
        )}

        {(card.emailList || card.messagingList) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card.emailLabel && card.emailList && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e" }}>
                  {card.emailLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "#c9d1d9" }}>
                  {card.emailList.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.messagingLabel && card.messagingList && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e" }}>
                  {card.messagingLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "#c9d1d9" }}>
                  {card.messagingList.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {card.quote && (
          <div className="p-4 rounded" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #8b949e" }}>
            <p className="text-sm italic" style={{ color: "#c9d1d9" }}>
              {card.quote}
            </p>
          </div>
        )}

        {(card.storageHow || card.storageUseCases) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card.storageHowLabel && card.storageHow && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e" }}>
                  {card.storageHowLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "#c9d1d9" }}>
                  {card.storageHow.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.storageUseCasesLabel && card.storageUseCases && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e" }}>
                  {card.storageUseCasesLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "#c9d1d9" }}>
                  {card.storageUseCases.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {card.storageEconomicsTitle && (
          <div className="p-4 rounded" style={{ backgroundColor: "#161b22" }}>
            <h4 className="font-mono text-sm mb-2" style={{ color: "#6ba3db" }}>
              {card.storageEconomicsTitle}
            </h4>
            <p className="text-sm mb-2" style={{ color: "#c9d1d9" }}>
              {card.storageEconomicsDesc}
            </p>
            {card.storageEconomicsNote && (
              <p className="text-sm" style={{ color: "#8b949e" }}>
                {card.storageEconomicsNote}
              </p>
            )}
          </div>
        )}

        {card.computeBoxes && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {card.computeBoxes.map((b) => (
              <div key={b.title} className="p-4 rounded" style={{ backgroundColor: "#161b22" }}>
                <h4 className="font-mono text-sm mb-2" style={{ color: "#6ba3db" }}>
                  {b.title}
                </h4>
                <p className="text-sm" style={{ opacity: 0.85, color: "#c9d1d9" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {card.computeBullets && (
          <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "#c9d1d9" }}>
            {card.computeBullets.map((b, i) => (
              <li key={i}>→ {b}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function ServicesPage() {
  const { onNavigate } = useOutletContext<OutletContext>();
  const content = useContent();
  const s = content.services;
  const getAlt = (key: string) => assetsMeta[key]?.alt ?? "";

  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      <PageHeader title={s.header.title} subtitle={s.header.subtitle} />

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
              {s.babelfish.title}
            </h2>
            <div className="space-y-4">
              {s.babelfish.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: i === 0 ? "1.1rem" : undefined, opacity: i === 0 ? 0.9 : 0.85, color: "#c9d1d9" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <ImageWithFallback
              src={imageByKey[s.babelfish.imageKey] ?? networkMeshImage}
              alt={getAlt(s.babelfish.imageKey)}
              className="w-full h-full object-cover rounded"
              style={{ minHeight: "300px", maxHeight: "400px", opacity: 0.8 }}
            />
          </div>
        </div>

        <div className="mb-8 p-6 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "3px solid #6ba3db" }}>
          <h3 className="font-mono mb-4" style={{ fontSize: "1.2rem", color: "#6ba3db", letterSpacing: "0.05em" }}>
            {s.babelfish.protocol.title}
          </h3>
          <p className="mb-4" style={{ opacity: 0.9, color: "#c9d1d9" }}>
            {s.babelfish.protocol.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e", letterSpacing: "0.05em" }}>
                {s.babelfish.protocol.whatItDoesLabel}
              </h4>
              <ul className="space-y-2 text-sm" style={{ opacity: 0.9, color: "#c9d1d9" }}>
                {s.babelfish.protocol.whatItDoes.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm mb-3" style={{ color: "#8b949e", letterSpacing: "0.05em" }}>
                {s.babelfish.protocol.howItWorksLabel}
              </h4>
              <ul className="space-y-2 text-sm" style={{ opacity: 0.9, color: "#c9d1d9" }}>
                {s.babelfish.protocol.howItWorks.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm italic mt-6" style={{ opacity: 0.7, color: "#8b949e" }}>
            {s.babelfish.protocol.whitepaperLabel}{" "}
            <a
              href={s.babelfish.protocol.whitepaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6ba3db", textDecoration: "underline" }}
            >
              deep-thought.computer/projects/babelfish
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[Layers, Wifi, Shield].map((Icon, i) => (
            <div
              key={i}
              className="p-6 rounded text-center"
              style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}
            >
              <Icon className="mx-auto mb-4" size={40} style={{ color: "#6ba3db" }} />
              <h4 className="font-mono mb-2" style={{ color: "#c9d1d9", letterSpacing: "0.05em" }}>
                {s.babelfish.architectureCards[i].title}
              </h4>
              <p className="text-sm" style={{ opacity: 0.85, color: "#c9d1d9" }}>
                {s.babelfish.architectureCards[i].description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {s.sovereign.title}
        </h2>
        <p className="mb-8" style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "800px", color: "#c9d1d9" }}>
          {s.sovereign.intro}
        </p>

        <div className="space-y-6">
          {s.sovereign.services.map((card, i) => (
            <SovereignCard key={i} card={card} icon={[Globe, Server, Mail, HardDrive, Database][i]} />
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {s.howItConnects.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-4">
            {s.howItConnects.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: i === 0 ? "1.1rem" : undefined, color: "#c9d1d9" }}>
                {p}
              </p>
            ))}
          </div>
          <div>
            <ImageWithFallback
              src={imageByKey[s.howItConnects.imageKey] ?? connectedSystemsImage}
              alt={getAlt(s.howItConnects.imageKey)}
              className="w-full h-full object-cover rounded"
              style={{ minHeight: "250px", maxHeight: "350px", opacity: 0.8 }}
            />
          </div>
        </div>

        <div className="p-8 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #6ba3db" }}>
          <h3 className="font-mono mb-4 text-center" style={{ fontSize: "1.3rem", color: "#6ba3db", letterSpacing: "0.05em" }}>
            {s.howItConnects.stackTitle}
          </h3>
          <div className="space-y-4">
            {s.howItConnects.layers.map((layer) => (
              <div
                key={layer.layer}
                className="flex items-center gap-4 p-4 rounded"
                style={{ backgroundColor: "#161b22" }}
              >
                <div className="font-mono" style={{ color: "#6ba3db", minWidth: "150px" }}>
                  {layer.layer}
                </div>
                <div>
                  <strong style={{ color: "#e6edf3" }}>{layer.title}</strong>
                  <p className="text-sm" style={{ color: "#8b949e" }}>
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
              {s.blockchainCta.title}
            </h2>
            <div className="space-y-4">
              {s.blockchainCta.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: i === 0 ? "1.1rem" : undefined, color: "#c9d1d9" }}>
                  {p}
                </p>
              ))}
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "#c9d1d9" }}>
                {s.blockchainCta.bullets.map((b, i) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}>
              <Database size={48} className="mb-4" style={{ color: "#6ba3db" }} />
              <h3 className="font-mono mb-3" style={{ color: "#6ba3db", letterSpacing: "0.05em" }}>
                INFINITE IMPROBABILITY DRIVE
              </h3>
              <p className="mb-4" style={{ color: "#c9d1d9" }}>
                A sovereign blockchain designed for a digital nation — where trust meets Bistromathics.
              </p>
              {onNavigate && (
                <button
                  onClick={() => onNavigate("/blockchain")}
                  className="px-6 py-3 rounded font-mono transition-all"
                  style={{
                    backgroundColor: "#6ba3db",
                    color: "#0d1117",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#8dbde8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#6ba3db";
                  }}
                >
                  {s.blockchainCta.ctaButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {s.getStarted.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}>
            <h3 className="font-mono mb-3" style={{ color: "#6ba3db", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
              {s.getStarted.asUser.title}
            </h3>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "#c9d1d9" }}>
              {s.getStarted.asUser.steps.map((step, i) => (
                <li key={i}>{i + 1}. {step}</li>
              ))}
            </ul>
            <a
              href={s.getStarted.asUser.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded font-mono transition-all text-sm"
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
              {s.getStarted.asUser.ctaText}
            </a>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}>
            <h3 className="font-mono mb-3" style={{ color: "#6ba3db", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
              {s.getStarted.asBuilder.title}
            </h3>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "#c9d1d9" }}>
              {s.getStarted.asBuilder.steps.map((step, i) => (
                <li key={i}>{i + 1}. {step}</li>
              ))}
            </ul>
            <a
              href={s.getStarted.asBuilder.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded font-mono transition-all text-sm"
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
              {s.getStarted.asBuilder.ctaText}
            </a>
          </div>
        </div>

        <div
          className="mt-8 p-6 rounded text-center"
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "#e6edf3", marginBottom: "1rem" }}>
            <strong>{s.getStarted.footer.line1}</strong>
          </p>
          <p style={{ opacity: 0.8, color: "#c9d1d9" }}>
            {s.getStarted.footer.line2}
          </p>
        </div>
      </section>
    </main>
  );
}

import { useOutletContext } from "react-router-dom";
import { useContent } from "@/contexts/LocaleContext";
import { assetsMeta } from "@/content/assets";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { Globe, Mail, HardDrive, Server, Shield, Wifi, Layers, Database } from "lucide-react";
import networkMeshImage from "../assets/blocks.jpeg";
import connectedSystemsImage from "../assets/dots.jpeg";
import type { SovereignServiceCard } from "@/content/locales/types";
import { PageHeader, SectionDivider } from "@/components/site";

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
    <Card style={{ backgroundColor: "var(--id-bg-card)", borderColor: "var(--id-border-strong)", border: "1px solid" }}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon size={24} style={{ color: "var(--id-accent)" }} />
          <CardTitle className="font-mono text-sm" style={{ color: "var(--id-text-muted)", letterSpacing: "0.05em" }}>
            {card.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p style={{ color: "var(--id-text-primary)" }}>{card.summary}</p>

        {card.features && card.howItWorks && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card.featuresLabel && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)" }}>
                  {card.featuresLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {card.features.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.howItWorksLabel && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)" }}>
                  {card.howItWorksLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {card.howItWorks.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {card.example && (
          <div className="p-4 rounded" style={{ backgroundColor: "var(--id-bg-elevated)", borderLeft: "2px solid var(--id-accent)" }}>
            <p className="text-sm" style={{ color: "var(--id-text-secondary)" }}>
              {card.example}
            </p>
          </div>
        )}

        {card.boxes && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {card.boxes.map((b) => (
              <div key={b.title} className="p-4 rounded" style={{ backgroundColor: "var(--id-bg-elevated)" }}>
                <h4 className="font-mono text-sm mb-2" style={{ color: "var(--id-accent)" }}>
                  {b.title}
                </h4>
                <p className="text-sm" style={{ opacity: 0.85, color: "var(--id-text-secondary)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {card.bullets && (
          <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "var(--id-text-secondary)" }}>
            {card.bullets.map((b, i) => (
              <li key={i}>→ {b}</li>
            ))}
          </ul>
        )}

        {(card.emailList || card.messagingList) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card.emailLabel && card.emailList && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)" }}>
                  {card.emailLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {card.emailList.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.messagingLabel && card.messagingList && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)" }}>
                  {card.messagingLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {card.messagingList.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {card.quote && (
          <div className="p-4 rounded" style={{ backgroundColor: "var(--id-bg-elevated)", borderLeft: "2px solid var(--id-text-muted)" }}>
            <p className="text-sm italic" style={{ color: "var(--id-text-secondary)" }}>
              {card.quote}
            </p>
          </div>
        )}

        {(card.storageHow || card.storageUseCases) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {card.storageHowLabel && card.storageHow && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)" }}>
                  {card.storageHowLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {card.storageHow.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.storageUseCasesLabel && card.storageUseCases && (
              <div>
                <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)" }}>
                  {card.storageUseCasesLabel}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {card.storageUseCases.map((f, i) => (
                    <li key={i}>→ {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {card.storageEconomicsTitle && (
          <div className="p-4 rounded" style={{ backgroundColor: "var(--id-bg-elevated)" }}>
            <h4 className="font-mono text-sm mb-2" style={{ color: "var(--id-accent)" }}>
              {card.storageEconomicsTitle}
            </h4>
            <p className="text-sm mb-2" style={{ color: "var(--id-text-secondary)" }}>
              {card.storageEconomicsDesc}
            </p>
            {card.storageEconomicsNote && (
              <p className="text-sm" style={{ color: "var(--id-text-muted)" }}>
                {card.storageEconomicsNote}
              </p>
            )}
          </div>
        )}

        {card.computeBoxes && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {card.computeBoxes.map((b) => (
              <div key={b.title} className="p-4 rounded" style={{ backgroundColor: "var(--id-bg-elevated)" }}>
                <h4 className="font-mono text-sm mb-2" style={{ color: "var(--id-accent)" }}>
                  {b.title}
                </h4>
                <p className="text-sm" style={{ opacity: 0.85, color: "var(--id-text-secondary)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {card.computeBullets && (
          <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "var(--id-text-secondary)" }}>
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

      <SectionDivider />

      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>
              {s.babelfish.title}
            </h2>
            <div className="space-y-4">
              {s.babelfish.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: i === 0 ? "1.1rem" : undefined, opacity: i === 0 ? 0.9 : 0.85, color: "var(--id-text-secondary)" }}>
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

        <div className="mb-8 p-6 rounded" style={{ backgroundColor: "var(--id-bg-card)", borderLeft: "3px solid var(--id-accent)" }}>
          <h3 className="font-mono mb-4" style={{ fontSize: "1.2rem", color: "var(--id-accent)", letterSpacing: "0.05em" }}>
            {s.babelfish.protocol.title}
          </h3>
          <p className="mb-4" style={{ opacity: 0.9, color: "var(--id-text-secondary)" }}>
            {s.babelfish.protocol.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)", letterSpacing: "0.05em" }}>
                {s.babelfish.protocol.whatItDoesLabel}
              </h4>
              <ul className="space-y-2 text-sm" style={{ opacity: 0.9, color: "var(--id-text-secondary)" }}>
                {s.babelfish.protocol.whatItDoes.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm mb-3" style={{ color: "var(--id-text-muted)", letterSpacing: "0.05em" }}>
                {s.babelfish.protocol.howItWorksLabel}
              </h4>
              <ul className="space-y-2 text-sm" style={{ opacity: 0.9, color: "var(--id-text-secondary)" }}>
                {s.babelfish.protocol.howItWorks.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm italic mt-6" style={{ opacity: 0.7, color: "var(--id-text-muted)" }}>
            {s.babelfish.protocol.whitepaperLabel}{" "}
            <a
              href={s.babelfish.protocol.whitepaperUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--id-accent)", textDecoration: "underline" }}
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
              style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-border)" }}
            >
              <Icon className="mx-auto mb-4" size={40} style={{ color: "var(--id-accent)" }} />
              <h4 className="font-mono mb-2" style={{ color: "var(--id-text-secondary)", letterSpacing: "0.05em" }}>
                {s.babelfish.architectureCards[i].title}
              </h4>
              <p className="text-sm" style={{ opacity: 0.85, color: "var(--id-text-secondary)" }}>
                {s.babelfish.architectureCards[i].description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>
          {s.sovereign.title}
        </h2>
        <p className="mb-8" style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "800px", color: "var(--id-text-secondary)" }}>
          {s.sovereign.intro}
        </p>

        <div className="space-y-6">
          {s.sovereign.services.map((card, i) => (
            <SovereignCard key={i} card={card} icon={[Globe, Server, Mail, HardDrive, Database][i]} />
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>
          {s.howItConnects.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-4">
            {s.howItConnects.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: i === 0 ? "1.1rem" : undefined, color: "var(--id-text-secondary)" }}>
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

        <div className="p-8 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-accent)" }}>
          <h3 className="font-mono mb-4 text-center" style={{ fontSize: "1.3rem", color: "var(--id-accent)", letterSpacing: "0.05em" }}>
            {s.howItConnects.stackTitle}
          </h3>
          <div className="space-y-4">
            {s.howItConnects.layers.map((layer) => (
              <div
                key={layer.layer}
                className="flex items-center gap-4 p-4 rounded"
                style={{ backgroundColor: "var(--id-bg-elevated)" }}
              >
                <div className="font-mono" style={{ color: "var(--id-accent)", minWidth: "150px" }}>
                  {layer.layer}
                </div>
                <div>
                  <strong style={{ color: "var(--id-text-primary)" }}>{layer.title}</strong>
                  <p className="text-sm" style={{ color: "var(--id-text-muted)" }}>
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>
              {s.blockchainCta.title}
            </h2>
            <div className="space-y-4">
              {s.blockchainCta.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: i === 0 ? "1.1rem" : undefined, color: "var(--id-text-secondary)" }}>
                  {p}
                </p>
              ))}
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "var(--id-text-secondary)" }}>
                {s.blockchainCta.bullets.map((b, i) => (
                  <li key={i}>→ {b}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="p-6 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-border)" }}>
              <Database size={48} className="mb-4" style={{ color: "var(--id-accent)" }} />
              <h3 className="font-mono mb-3" style={{ color: "var(--id-accent)", letterSpacing: "0.05em" }}>
                INFINITE IMPROBABILITY DRIVE
              </h3>
              <p className="mb-4" style={{ color: "var(--id-text-secondary)" }}>
                A sovereign blockchain designed for a digital nation — where trust meets Bistromathics.
              </p>
              {onNavigate && (
                <button
                  onClick={() => onNavigate("/blockchain")}
                  className="px-6 py-3 rounded font-mono transition-all"
                  style={{
                    backgroundColor: "var(--id-accent)",
                    color: "var(--id-bg-page)",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.05em",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--id-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--id-accent)";
                  }}
                >
                  {s.blockchainCta.ctaButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "var(--id-text-primary)", letterSpacing: "0.05em" }}>
          {s.getStarted.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-border)" }}>
            <h3 className="font-mono mb-3" style={{ color: "var(--id-accent)", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
              {s.getStarted.asUser.title}
            </h3>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "var(--id-text-secondary)" }}>
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
                backgroundColor: "var(--id-accent)",
                color: "var(--id-bg-page)",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--id-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--id-accent)";
              }}
            >
              {s.getStarted.asUser.ctaText}
            </a>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: "var(--id-bg-card)", border: "1px solid var(--id-border)" }}>
            <h3 className="font-mono mb-3" style={{ color: "var(--id-accent)", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
              {s.getStarted.asBuilder.title}
            </h3>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "var(--id-text-secondary)" }}>
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
                backgroundColor: "var(--id-accent)",
                color: "var(--id-bg-page)",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--id-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--id-accent)";
              }}
            >
              {s.getStarted.asBuilder.ctaText}
            </a>
          </div>
        </div>

        <div
          className="mt-8 p-6 rounded text-center"
          style={{
            backgroundColor: "var(--id-bg-elevated)",
            border: "1px solid var(--id-border)",
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "var(--id-text-primary)", marginBottom: "1rem" }}>
            <strong>{s.getStarted.footer.line1}</strong>
          </p>
          <p style={{ opacity: 0.8, color: "var(--id-text-secondary)" }}>
            {s.getStarted.footer.line2}
          </p>
        </div>
      </section>
    </main>
  );
}

import { useOutletContext } from "react-router-dom";
import { useContent } from "@/contexts/LocaleContext";
import { assetsMeta } from "@/content/assets";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { Globe, Mail, HardDrive, Server, Shield, Wifi, Layers, Database } from "lucide-react";
import networkMeshImage from "../assets/blocks.jpeg";
import connectedSystemsImage from "../assets/dots.jpeg";
import type { SovereignServiceCard } from "@/content/locales/types";
import {
  PageHeader,
  PageSection,
  SectionDivider,
  SectionHeading,
  ContentCard,
  CalloutBox,
  SiteButton,
  SiteLink,
  LeadParagraph,
  FormattedText,
} from "@/components/site";

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
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
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
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
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
            <p className="text-sm" style={{ color: "var(--id-text-primary)" }}>
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
                <p className="text-sm" style={{ color: "var(--id-text-primary)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {card.bullets && (
          <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "var(--id-text-primary)" }}>
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
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
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
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
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
            <p className="text-sm italic" style={{ color: "var(--id-text-primary)" }}>
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
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
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
                <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
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
            <p className="text-sm mb-2" style={{ color: "var(--id-text-primary)" }}>
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
                <p className="text-sm" style={{ color: "var(--id-text-primary)" }}>
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {card.computeBullets && (
          <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "var(--id-text-primary)" }}>
            {card.computeBullets.map((b, i) => (
              <li key={i}>→ {Array.isArray(b) ? <FormattedText segments={b} /> : b}</li>
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
      <PageHeader
        title={s.header.title}
        subtitle={
          Array.isArray(s.header.subtitle) ? (
            <FormattedText segments={s.header.subtitle} />
          ) : (
            s.header.subtitle
          )
        }
      />

      <SectionDivider />

      <PageSection title={s.babelfish.title}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div className="space-y-4">
              {s.babelfish.paragraphs.map((p, i) =>
                i === 0 ? (
                  <LeadParagraph key={i}>
                    {Array.isArray(p) ? <FormattedText segments={p} /> : p}
                  </LeadParagraph>
                ) : (
                  <p key={i} style={{ color: "var(--id-text-primary)" }}>
                    {Array.isArray(p) ? <FormattedText segments={p} /> : p}
                  </p>
                )
              )}
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

        <CalloutBox variant="accent" borderWidth="3px" className="mb-8 p-6">
          <SectionHeading level={3} colorVariant="accent" className="mb-4">
            {s.babelfish.protocol.title}
          </SectionHeading>
          <p className="mb-4" style={{ color: "var(--id-text-primary)" }}>
            {Array.isArray(s.babelfish.protocol.intro) ? (
              <FormattedText segments={s.babelfish.protocol.intro} />
            ) : (
              s.babelfish.protocol.intro
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <SectionHeading level={4} colorVariant="muted" className="mb-3">
                {s.babelfish.protocol.whatItDoesLabel}
              </SectionHeading>
              <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
                {s.babelfish.protocol.whatItDoes.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading level={4} colorVariant="muted" className="mb-3">
                {s.babelfish.protocol.howItWorksLabel}
              </SectionHeading>
              <ul className="space-y-2 text-sm" style={{ color: "var(--id-text-primary)" }}>
                {s.babelfish.protocol.howItWorks.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm italic mt-6" style={{ color: "var(--id-text-muted)" }}>
            {s.babelfish.protocol.whitepaperLabel}{" "}
            <SiteLink href={s.babelfish.protocol.whitepaperUrl}>
              deep-thought.computer/projects/babelfish
            </SiteLink>
          </p>
        </CalloutBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[Layers, Wifi, Shield].map((Icon, i) => (
            <ContentCard
              key={i}
              icon={Icon}
              iconPosition="top"
              title={s.babelfish.architectureCards[i].title}
            >
              <p className="text-sm" style={{ color: "var(--id-text-primary)" }}>
                {s.babelfish.architectureCards[i].description}
              </p>
            </ContentCard>
          ))}
        </div>
      </PageSection>

      <SectionDivider />

      <PageSection title={s.sovereign.title}>
        <LeadParagraph className="mb-8 max-w-[800px]">
          {Array.isArray(s.sovereign.intro) ? (
            <FormattedText segments={s.sovereign.intro} />
          ) : (
            s.sovereign.intro
          )}
        </LeadParagraph>
        <div className="space-y-6">
          {s.sovereign.services.map((card, i) => (
            <SovereignCard key={i} card={card} icon={[Globe, Server, Mail, HardDrive, Database][i]} />
          ))}
        </div>
      </PageSection>

      <SectionDivider />

      <PageSection title={s.howItConnects.title}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-4">
            {s.howItConnects.paragraphs.map((p, i) =>
              i === 0 ? (
                <LeadParagraph key={i}>
                  {Array.isArray(p) ? <FormattedText segments={p} /> : p}
                </LeadParagraph>
              ) : (
                <p key={i} style={{ color: "var(--id-text-primary)" }}>
                  {Array.isArray(p) ? <FormattedText segments={p} /> : p}
                </p>
              )
            )}
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

        <ContentCard borderVariant="accent" className="p-8">
          <SectionHeading level={3} colorVariant="accent" className="mb-4 text-center">
            {s.howItConnects.stackTitle}
          </SectionHeading>
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
        </ContentCard>
      </PageSection>

      <SectionDivider />

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeading level={2} className="mb-6">
              {s.blockchainCta.title}
            </SectionHeading>
            <div className="space-y-4">
              {s.blockchainCta.paragraphs.map((p, i) =>
                i === 0 ? (
                  <LeadParagraph key={i}>
                    {Array.isArray(p) ? <FormattedText segments={p} /> : p}
                  </LeadParagraph>
                ) : (
<p key={i} style={{ color: "var(--id-text-primary)" }}>
                  {Array.isArray(p) ? <FormattedText segments={p} /> : p}
                </p>
              )
              )}
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "var(--id-text-primary)" }}>
                {s.blockchainCta.bullets.map((b, i) => (
                  <li key={i}>→ {Array.isArray(b) ? <FormattedText segments={b} /> : b}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <ContentCard icon={Database} iconPosition="top" title="INFINITE IMPROBABILITY DRIVE">
              <p className="mb-4" style={{ color: "var(--id-text-primary)" }}>
                A sovereign blockchain designed for a digital nation — where trust meets Bistromathics.
              </p>
              {onNavigate && (
                <SiteButton
                  variant="accent"
                  className="w-full"
                  onClick={() => onNavigate("/blockchain")}
                >
                  {s.blockchainCta.ctaButtonText}
                </SiteButton>
              )}
            </ContentCard>
          </div>
        </div>
      </PageSection>

      <SectionDivider />

      <PageSection title={s.getStarted.title}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ContentCard title={s.getStarted.asUser.title}>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "var(--id-text-primary)" }}>
              {s.getStarted.asUser.steps.map((step, i) => (
                <li key={i}>{i + 1}. {step}</li>
              ))}
            </ul>
            <SiteButton
              variant="accent"
              size="small"
              href={s.getStarted.asUser.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center"
            >
              {s.getStarted.asUser.ctaText}
            </SiteButton>
          </ContentCard>

          <ContentCard title={s.getStarted.asBuilder.title}>
            <ul className="space-y-2 text-sm mb-4" style={{ color: "var(--id-text-primary)" }}>
              {s.getStarted.asBuilder.steps.map((step, i) => (
                <li key={i}>{i + 1}. {step}</li>
              ))}
            </ul>
            <SiteButton
              variant="accent"
              size="small"
              href={s.getStarted.asBuilder.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center"
            >
              {s.getStarted.asBuilder.ctaText}
            </SiteButton>
          </ContentCard>
        </div>

        <CalloutBox variant="muted" className="mt-8 p-6 text-center">
          <p style={{ fontSize: "1.1rem", color: "var(--id-text-primary)", marginBottom: "1rem" }}>
            <strong>{s.getStarted.footer.line1}</strong>
          </p>
          <p style={{ color: "var(--id-text-primary)" }}>
            {s.getStarted.footer.line2}
          </p>
        </CalloutBox>
      </PageSection>
    </main>
  );
}

import { useContent } from "@/contexts/LocaleContext";
import { assetsMeta } from "@/content/assets";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import {
  PageHeader,
  SectionDivider,
  QuoteBlock,
  PageSection,
  ContentCard,
  CalloutBox,
  BulletList,
  SiteTable,
} from "@/components/site";
import newWorldImage from "../assets/DaVincisASCII.jpeg";
import cypherpunkImage from "../assets/punks.jpeg";

const imageByKey: Record<string, string> = {
  newWorld: newWorldImage,
  cypherpunk: cypherpunkImage,
};

export function Project42Page() {
  const content = useContent();
  const p = content.project42;
  const getAlt = (imageKey: string) => assetsMeta[imageKey]?.alt ?? "";

  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      <PageHeader title={p.header.title} subtitle={p.header.subtitle} />

      <SectionDivider />

      {/* Hero Quote */}
      <div className="mb-16">
        <QuoteBlock
          quote={p.heroQuote.text}
          author={p.heroQuote.author}
          source={p.heroQuote.source ?? undefined}
        />
      </div>

      <SectionDivider />

      {/* We Are Building a New World */}
      <PageSection title={p.newWorld.title}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4" style={{ color: "var(--id-text-secondary)" }}>
            {p.newWorld.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className="order-first lg:order-last">
            <ImageWithFallback
              src={imageByKey[p.newWorld.imageKey] ?? newWorldImage}
              alt={getAlt(p.newWorld.imageKey)}
              className="w-full h-full object-contain md:object-cover rounded"
              style={{ minHeight: "300px", maxHeight: "400px", opacity: 0.6 }}
            />
          </div>
        </div>
      </PageSection>

      <SectionDivider />

      {/* Our Philosophy */}
      <PageSection title={p.philosophy.title}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6" style={{ color: "var(--id-text-secondary)" }}>
              {p.philosophy.intro}
            </p>
            <SiteTable
              columns={[
                { key: "voice", label: p.philosophy.tableHeaderVoice },
                { key: "truth", label: p.philosophy.tableHeaderTruth },
              ]}
              rows={p.philosophy.tableRows.map((row) => ({ voice: row.voice, truth: row.truth }))}
            />
          </div>
          <div className="order-first lg:order-last">
            <ImageWithFallback
              src={imageByKey[p.philosophy.imageKey] ?? cypherpunkImage}
              alt={getAlt(p.philosophy.imageKey)}
              className="w-full h-full object-cover rounded"
              style={{ minHeight: "300px", maxHeight: "400px", opacity: 0.8 }}
            />
          </div>
        </div>
      </PageSection>

      <SectionDivider />

      {/* The Ecosystem */}
      <PageSection title={p.ecosystem.title}>
        <p className="mb-8" style={{ fontSize: "1.1rem", color: "var(--id-text-secondary)" }}>
          {p.ecosystem.intro}
        </p>

        <div className="space-y-6">
          {p.ecosystem.pillars.map((pillar) => (
            <ContentCard key={pillar.number} leading={pillar.number} title={pillar.title}>
              <p className="mb-3" style={{ color: "var(--id-text-secondary)" }}>
                {pillar.description}
              </p>
              <BulletList items={pillar.bullets} />
            </ContentCard>
          ))}
        </div>

        <div className="mt-8">
          <CalloutBox>
            <p style={{ color: "var(--id-text-secondary)" }}>{p.ecosystem.closing}</p>
          </CalloutBox>
        </div>
      </PageSection>

      <SectionDivider />

      {/* The Library of Alexandria for the Digital Age */}
      <PageSection title={p.library.title}>
        <div className="mb-6">
          <QuoteBlock
            quote={p.library.quote}
            author={p.library.quoteAuthor}
            variant="muted"
          />
        </div>

        <div className="space-y-4" style={{ color: "var(--id-text-secondary)" }}>
          {p.library.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <ContentCard title={p.library.notInventingTitle} className="mt-8">
          {p.library.notInventingParagraphs.map((text, i) => (
            <p
              key={i}
              className={i < p.library.notInventingParagraphs.length - 1 ? "mb-4" : ""}
              style={{ color: "var(--id-text-secondary)" }}
            >
              {text}
            </p>
          ))}
        </ContentCard>

        <ContentCard title={p.library.protocolsTitle} compact className="mt-8">
          <p className="mb-4" style={{ color: "var(--id-text-secondary)" }}>
            {p.library.protocolsIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.library.protocols.map((proto) => (
              <div key={proto.name}>
                <p className="text-sm mb-2" style={{ color: "var(--id-text-muted)" }}>
                  <strong>{proto.name}</strong>
                </p>
                <p className="text-sm" style={{ color: "var(--id-text-secondary)" }}>
                  {proto.description}
                </p>
              </div>
            ))}
          </div>
        </ContentCard>

        <div className="mt-6">
          <CalloutBox>
            {p.library.survivalParagraphs.map((text, i) => (
              <p
                key={i}
                className={i === 0 ? "mb-3" : "text-sm"}
                style={{ color: i === 0 ? "var(--id-text-secondary)" : "var(--id-text-muted)" }}
              >
                {text}
              </p>
            ))}
          </CalloutBox>
        </div>
      </PageSection>

      <SectionDivider />

      {/* Thursday Note - Douglas Adams Reference */}
      <PageSection>
        <CalloutBox variant="muted">
          <p className="text-sm italic mb-2" style={{ color: "var(--id-text-secondary)" }}>
            &quot;{p.thursdayNote.quote}&quot;
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--id-text-muted)" }}>
            — {p.thursdayNote.quoteAuthor}
          </p>
          {p.thursdayNote.paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-sm"
              style={{
                color: i === 0 ? "var(--id-text-secondary)" : "var(--id-text-muted)",
                marginTop: i > 0 ? "0.75rem" : undefined,
              }}
            >
              {text}
            </p>
          ))}
        </CalloutBox>
      </PageSection>

      <SectionDivider />

      {/* Final Tagline */}
      <section className="text-center mb-16">
        <div className="space-y-2">
          {p.taglines.map((line, i) => (
            <p key={i} className="font-mono" style={{ color: "var(--id-text-secondary)" }}>
              {line}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

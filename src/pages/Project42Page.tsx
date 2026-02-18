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
  FormattedText,
  LeadParagraph,
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
      <PageHeader
        title={p.header.title}
        subtitle={
          Array.isArray(p.header.subtitle) ? (
            <FormattedText segments={p.header.subtitle} />
          ) : (
            p.header.subtitle
          )
        }
      />

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
          <div className="space-y-4" style={{ color: "var(--id-text-primary)" }}>
            {(() => {
              const tightSet = new Set(p.newWorld.tightParagraphIndices ?? []);
              const groups: { tight: boolean; indices: number[] }[] = [];
              let i = 0;
              while (i < p.newWorld.paragraphs.length) {
                if (tightSet.has(i)) {
                  const indices: number[] = [];
                  while (i < p.newWorld.paragraphs.length && tightSet.has(i)) {
                    indices.push(i);
                    i++;
                  }
                  groups.push({ tight: true, indices });
                } else {
                  groups.push({ tight: false, indices: [i] });
                  i++;
                }
              }
              return groups.map((g, gi) =>
                g.tight ? (
                  <div key={gi} className="space-y-1">
                    {g.indices.map((idx) => {
                      const item = p.newWorld.paragraphs[idx];
                      return (
                        <p key={idx}>
                          {Array.isArray(item) ? (
                            <FormattedText segments={item} />
                          ) : (
                            item
                          )}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <p key={gi}>
                    {(() => {
                      const item = p.newWorld.paragraphs[g.indices[0]];
                      return Array.isArray(item) ? (
                        <FormattedText segments={item} />
                      ) : (
                        item
                      );
                    })()}
                  </p>
                )
              );
            })()}
          </div>
          <div className="order-first lg:order-last">
            <ImageWithFallback
              src={imageByKey[p.newWorld.imageKey] ?? newWorldImage}
              alt={getAlt(p.newWorld.imageKey)}
              className="w-full h-full object-contain md:object-cover rounded"
              style={{ minHeight: "300px", maxHeight: "400px", opacity: 0.8 }}
            />
          </div>
        </div>
      </PageSection>

      <SectionDivider />

      {/* Our Philosophy */}
      <PageSection title={p.philosophy.title}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
<p className="mb-6" style={{ color: "var(--id-text-primary)" }}>
            {p.philosophy.intro}
          </p>
            <SiteTable
              variant="minimal"
              columns={[
                { key: "voice", label: p.philosophy.tableHeaderVoice },
                { key: "truth", label: p.philosophy.tableHeaderTruth },
              ]}
              rows={p.philosophy.tableRows.map((row) => ({
                voice: row.voice,
                truth: Array.isArray(row.truth) ? <FormattedText segments={row.truth} /> : row.truth,
              }))}
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
        <LeadParagraph className="mb-8">
          {Array.isArray(p.ecosystem.intro) ? (
            <FormattedText segments={p.ecosystem.intro} />
          ) : (
            p.ecosystem.intro
          )}
        </LeadParagraph>

        <div className="space-y-6">
          {p.ecosystem.pillars.map((pillar) => (
            <ContentCard key={pillar.number} leading={pillar.number} title={pillar.title}>
              <p className="mb-3" style={{ color: "var(--id-text-primary)" }}>
                {pillar.description}
              </p>
              <BulletList
                items={pillar.bullets.map((b, bi) =>
                  Array.isArray(b) ? <FormattedText key={bi} segments={b} /> : b
                )}
              />
            </ContentCard>
          ))}
        </div>

        <div className="mt-8">
          <CalloutBox>
            <p style={{ color: "var(--id-text-primary)" }}>
              {Array.isArray(p.ecosystem.closing) ? (
                <FormattedText segments={p.ecosystem.closing} />
              ) : (
                p.ecosystem.closing
              )}
            </p>
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

        <div className="space-y-4" style={{ color: "var(--id-text-primary)" }}>
          {p.library.paragraphs.map((text, i) => (
            <p key={i}>
              {Array.isArray(text) ? <FormattedText segments={text} /> : text}
            </p>
          ))}
        </div>

        <ContentCard title={p.library.notInventingTitle} className="mt-8">
          {p.library.notInventingParagraphs.map((text, i) => (
            <p
              key={i}
              className={i < p.library.notInventingParagraphs.length - 1 ? "mb-4" : ""}
              style={{ color: "var(--id-text-primary)" }}
            >
              {Array.isArray(text) ? <FormattedText segments={text} /> : text}
            </p>
          ))}
        </ContentCard>

        <ContentCard title={p.library.protocolsTitle} className="mt-8">
          <p className="mb-4" style={{ color: "var(--id-text-primary)" }}>
            {p.library.protocolsIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.library.protocols.map((proto) => (
              <div key={proto.name}>
                <p className="text-sm mb-2" style={{ color: "var(--id-text-muted)" }}>
                  <strong>{proto.name}</strong>
                </p>
                <p className="text-sm" style={{ color: "var(--id-text-primary)" }}>
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
                style={{ color: i === 0 ? "var(--id-text-primary)" : "var(--id-text-muted)" }}
              >
                {Array.isArray(text) ? <FormattedText segments={text} /> : text}
              </p>
            ))}
          </CalloutBox>
        </div>
      </PageSection>

      <SectionDivider />

      {/* Thursday Note - Douglas Adams Reference */}
      <PageSection>
        <CalloutBox variant="muted">
          <p className="text-sm italic mb-2" style={{ color: "var(--id-text-primary)" }}>
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
                color: i === 0 ? "var(--id-text-primary)" : "var(--id-text-muted)",
                marginTop: i > 0 ? "0.75rem" : undefined,
              }}
            >
              {Array.isArray(text) ? <FormattedText segments={text} /> : text}
            </p>
          ))}
        </CalloutBox>
      </PageSection>

      <SectionDivider />

      {/* Final Tagline */}
      <section className="text-center mb-16">
        <div className="space-y-2">
          {p.taglines.map((line, i) => (
<p key={i} className="font-mono" style={{ color: "var(--id-text-primary)" }}>
            {line}
          </p>
          ))}
        </div>
      </section>
    </main>
  );
}

import { useContent } from "@/contexts/LocaleContext";
import {
  PageHeader,
  SiteTable,
  SectionDivider,
  QuoteBlock,
  PageSection,
  ContentCard,
  CalloutBox,
  BulletList,
  FormattedText,
  SectionHeading,
  LeadParagraph,
} from "@/components/site";

export function BlockchainPage() {
  const content = useContent();
  const b = content.blockchain;

  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      <PageHeader
        title={b.header.title}
        subtitle={
          Array.isArray(b.header.subtitle) ? (
            <FormattedText segments={b.header.subtitle} />
          ) : (
            b.header.subtitle
          )
        }
      />

      <SectionDivider />

      <section className="mb-16">
        <div className="mb-8">
          <QuoteBlock quote={b.intro.quote} author={b.intro.quoteAuthor} variant="muted" />
        </div>
        {b.intro.paragraphs.map((p, i) =>
          i === 0 ? (
            <LeadParagraph key={i} className="mb-6">
              {Array.isArray(p) ? <FormattedText segments={p} /> : p}
            </LeadParagraph>
          ) : (
            <p key={i} style={{ color: "var(--id-text-secondary)" }}>
              {Array.isArray(p) ? <FormattedText segments={p} /> : p}
            </p>
          )
        )}
      </section>

      <SectionDivider />

      <PageSection title={b.coreComponents.title} showDividerAbove={false}>
        <div className="space-y-6">
          <ContentCard title={b.coreComponents.token42.title}>
            <p style={{ color: "var(--id-text-secondary)" }}>
              {Array.isArray(b.coreComponents.token42.summary) ? (
                <FormattedText segments={b.coreComponents.token42.summary} />
              ) : (
                b.coreComponents.token42.summary
              )}
            </p>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span style={{ color: "var(--id-text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    {b.coreComponents.token42.purpose}
                  </span>
                  <span style={{ color: "var(--id-text-secondary)" }}>{b.coreComponents.token42.purposeValue}</span>
                </div>
                <div>
                  <span style={{ color: "var(--id-text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    {b.coreComponents.token42.totalSupply}
                  </span>
                  <span style={{ color: "var(--id-text-secondary)" }}>{b.coreComponents.token42.totalSupplyValue}</span>
                </div>
                <div>
                  <span style={{ color: "var(--id-text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    {b.coreComponents.token42.releaseSchedule}
                  </span>
                  <span style={{ color: "var(--id-text-secondary)" }}>
                    {Array.isArray(b.coreComponents.token42.releaseScheduleValue) ? (
                      <FormattedText segments={b.coreComponents.token42.releaseScheduleValue} />
                    ) : (
                      b.coreComponents.token42.releaseScheduleValue
                    )}
                  </span>
                </div>
                <div>
                  <span style={{ color: "var(--id-text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    {b.coreComponents.token42.atLaunch}
                  </span>
                  <span style={{ color: "var(--id-text-secondary)" }}>
                    {Array.isArray(b.coreComponents.token42.atLaunchValue) ? (
                      <FormattedText segments={b.coreComponents.token42.atLaunchValue} />
                    ) : (
                      b.coreComponents.token42.atLaunchValue
                    )}
                  </span>
                </div>
              </div>
            </div>
            <CalloutBox className="mt-4">
              <p className="text-sm" style={{ color: "var(--id-text-secondary)" }}>
                {Array.isArray(b.coreComponents.token42.keyUse) ? (
                  <FormattedText segments={b.coreComponents.token42.keyUse} />
                ) : (
                  b.coreComponents.token42.keyUse
                )}
              </p>
            </CalloutBox>
          </ContentCard>

          <ContentCard title={b.coreComponents.fish.title}>
            <p style={{ color: "var(--id-text-secondary)" }}>
              {Array.isArray(b.coreComponents.fish.summary) ? (
                <FormattedText segments={b.coreComponents.fish.summary} />
              ) : (
                b.coreComponents.fish.summary
              )}
            </p>
            <CalloutBox className="mt-4 mb-4">
              <p className="text-sm" style={{ color: "var(--id-text-secondary)" }}>
                {Array.isArray(b.coreComponents.fish.howToEarn) ? (
                  <FormattedText segments={b.coreComponents.fish.howToEarn} />
                ) : (
                  b.coreComponents.fish.howToEarn
                )}
              </p>
            </CalloutBox>
            <BulletList items={b.coreComponents.fish.bullets} />
            <p className="text-sm italic mt-2" style={{ color: "var(--id-text-muted)" }}>
              {b.coreComponents.fish.seeHow}
            </p>
          </ContentCard>

          <ContentCard title={b.coreComponents.governance.title}>
            <p style={{ color: "var(--id-text-secondary)" }}>
              {Array.isArray(b.coreComponents.governance.summary) ? (
                <FormattedText segments={b.coreComponents.governance.summary} />
              ) : (
                b.coreComponents.governance.summary
              )}
            </p>
            <div className="space-y-3" style={{ color: "var(--id-text-secondary)" }}>
              {b.coreComponents.governance.points.map((pt, i) => (
                <p key={i}>
                  → {Array.isArray(pt) ? <FormattedText segments={pt} /> : pt}
                </p>
              ))}
            </div>
            <CalloutBox className="mt-4">
              <p className="text-sm italic" style={{ color: "var(--id-text-secondary)" }}>
                &quot;{b.coreComponents.governance.quote}&quot;
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--id-text-muted)" }}>
                — {b.coreComponents.governance.quoteAuthor}
              </p>
            </CalloutBox>
          </ContentCard>
        </div>
      </PageSection>

      <SectionDivider />

      <PageSection title={b.masterPools.title}>
        <LeadParagraph className="mb-4">
          {Array.isArray(b.masterPools.paragraphs[0]) ? (
            <FormattedText segments={b.masterPools.paragraphs[0]} />
          ) : (
            b.masterPools.paragraphs[0]
          )}
        </LeadParagraph>
        <p className="mb-4" style={{ color: "var(--id-text-secondary)" }}>
          {Array.isArray(b.masterPools.paragraphs[1]) ? (
            <FormattedText segments={b.masterPools.paragraphs[1]} />
          ) : (
            b.masterPools.paragraphs[1]
          )}
        </p>
        <CalloutBox variant="muted" className="mb-6">
          <p className="text-sm" style={{ color: "var(--id-text-secondary)" }}>
            <strong style={{ color: "var(--id-text-primary)" }}>{b.masterPools.noteTitle}</strong>{" "}
            {Array.isArray(b.masterPools.note) ? (
              <FormattedText segments={b.masterPools.note} />
            ) : (
              b.masterPools.note
            )}
          </p>
        </CalloutBox>
        <p className="mb-8" style={{ color: "var(--id-text-secondary)" }}>
          {Array.isArray(b.masterPools.paragraphs[2]) ? (
            <FormattedText segments={b.masterPools.paragraphs[2]} />
          ) : (
            b.masterPools.paragraphs[2]
          )}
        </p>
        <SiteTable
          className="mb-6"
          columns={[
            { key: "pool", label: b.masterPools.tableColumns.pool },
            { key: "percent", label: b.masterPools.tableColumns.percent },
            { key: "purpose", label: b.masterPools.tableColumns.purpose },
            { key: "annualUnlock", label: b.masterPools.tableColumns.annualUnlock },
          ]}
          rows={b.masterPools.rows.map((row) => ({
            pool: <strong style={{ color: "var(--id-accent)" }}>{row.pool}</strong>,
            percent: row.percent,
            purpose: row.purpose,
            annualUnlock: row.annualUnlock,
          }))}
        />
        <CalloutBox className="mt-4">
          <p style={{ color: "var(--id-text-secondary)", fontStyle: "italic" }}>
            <strong style={{ color: "var(--id-text-primary)" }}>{b.masterPools.closingTitle}</strong>
          </p>
          <p className="mt-3 text-sm" style={{ color: "var(--id-text-muted)" }}>
            {b.masterPools.closingNote}
          </p>
        </CalloutBox>
      </PageSection>

      <SectionDivider />

      <PageSection title={b.hyperspace.title}>
        <div className="mb-6">
          <QuoteBlock quote={b.hyperspace.quote} author={b.hyperspace.quoteAuthor} variant="muted" />
        </div>
        {b.hyperspace.paragraphs.map((p, i) => (
          <LeadParagraph key={i} className="mb-6">
            {Array.isArray(p) ? <FormattedText segments={p} /> : p}
          </LeadParagraph>
        ))}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ContentCard title={b.hyperspace.nativeTitle}>
            <div className="space-y-3 text-sm" style={{ color: "var(--id-text-secondary)" }}>
              <p>
                <strong style={{ color: "var(--id-text-primary)" }}>{b.hyperspace.nativeSubtitle}</strong>
              </p>
              <BulletList items={b.hyperspace.nativeItems} />
            </div>
          </ContentCard>
          <ContentCard title={b.hyperspace.bridgesTitle}>
            <div className="space-y-3 text-sm" style={{ color: "var(--id-text-secondary)" }}>
              <p>
                <strong style={{ color: "var(--id-text-primary)" }}>{b.hyperspace.bridgesEthereum}</strong>
              </p>
              <BulletList items={b.hyperspace.bridgesEthereumItems} />
              <p className="pt-2">
                <strong style={{ color: "var(--id-text-primary)" }}>{b.hyperspace.bridgesBitcoin}</strong>
              </p>
              <BulletList items={b.hyperspace.bridgesBitcoinItems} />
            </div>
          </ContentCard>
        </div>
        <ContentCard title={b.hyperspace.ecosystemsTitle} className="mb-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {b.hyperspace.ecosystems.map((eco) => (
              <div key={eco.name} className="p-3 rounded" style={{ backgroundColor: "var(--id-bg-page)" }}>
                <p className="font-mono text-sm" style={{ color: "var(--id-text-primary)" }}>
                  {eco.name}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--id-text-muted)" }}>
                  {eco.tag}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-center mt-6 italic" style={{ color: "var(--id-text-muted)" }}>
            {b.hyperspace.ecosystemsNote}
          </p>
        </ContentCard>
        <CalloutBox>
          <p style={{ color: "var(--id-text-secondary)" }}>
            {Array.isArray(b.hyperspace.whyItMatters) ? (
              <FormattedText segments={b.hyperspace.whyItMatters} />
            ) : (
              <strong style={{ color: "var(--id-text-primary)" }}>{b.hyperspace.whyItMatters}</strong>
            )}
          </p>
          <p className="mt-3 text-sm italic" style={{ color: "var(--id-text-muted)" }}>
            {b.hyperspace.whyItMattersNote}
          </p>
        </CalloutBox>
      </PageSection>

      <SectionDivider />

      <PageSection title={b.technicalArch.title}>
        <div className="mb-12">
          <SectionHeading level={3} className="mb-6">
            {b.technicalArch.sectionTitle}
          </SectionHeading>
          <LeadParagraph className="mb-6">
            {Array.isArray(b.technicalArch.sectionIntro) ? (
              <FormattedText segments={b.technicalArch.sectionIntro} />
            ) : (
              b.technicalArch.sectionIntro
            )}
          </LeadParagraph>
          <SiteTable
            className="mb-6"
            columns={[
              { key: "layer", label: b.technicalArch.tableColumns.layer },
              { key: "function", label: b.technicalArch.tableColumns.function },
            ]}
            rows={b.technicalArch.tableRows.map((row) => ({
              layer: <strong style={{ color: "var(--id-accent)" }}>{row.layer}</strong>,
              function: row.function,
            }))}
          />
          <CalloutBox>
            <p style={{ color: "var(--id-text-secondary)", fontStyle: "italic" }}>
              <strong style={{ color: "var(--id-text-primary)" }}>{b.technicalArch.noteTitle}</strong>
            </p>
            {b.technicalArch.noteParagraphs.map((p, i) => (
              <p key={i} className="mt-3 text-sm" style={{ color: "var(--id-text-muted)" }}>
                {p}
              </p>
            ))}
          </CalloutBox>
        </div>
        <div>
          <SectionHeading level={3} className="mb-6">
            {b.technicalArch.specsTitle}
          </SectionHeading>
          <ContentCard>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {b.technicalArch.specs.map((spec) => (
                  <div key={spec.label}>
                    <SectionHeading level={4} colorVariant="muted" className="mb-2">
                      {spec.label}
                    </SectionHeading>
                    <p style={{ color: "var(--id-text-secondary)" }}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>
          <p className="text-sm italic mt-4" style={{ color: "var(--id-text-muted)" }}>
            {b.technicalArch.docsNote}
          </p>
        </div>
      </PageSection>

      <SectionDivider />

      <PageSection title={b.howToParticipate.title}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {b.howToParticipate.cards.map((card) => (
            <ContentCard key={card.title} title={card.title}>
              <p style={{ color: "var(--id-text-secondary)", fontSize: "0.95rem" }}>
                {card.description}
              </p>
            </ContentCard>
          ))}
        </div>
      </PageSection>

      <SectionDivider />

      <ContentCard borderVariant="accent" className="p-8 text-center mb-16">
        <p className="font-mono mb-2" style={{ fontSize: "1.2rem", color: "var(--id-accent)", letterSpacing: "0.05em" }}>
          &quot;{b.finalQuote.quote}&quot;
        </p>
        <p className="text-sm" style={{ color: "var(--id-text-muted)" }}>
          — {b.finalQuote.author}
        </p>
      </ContentCard>
    </main>
  );
}

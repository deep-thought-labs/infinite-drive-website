import { useContent } from "@/contexts/LocaleContext";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { PageHeader, SiteTable } from "@/components/site";

export function BlockchainPage() {
  const content = useContent();
  const b = content.blockchain;

  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      <PageHeader title={b.header.title} subtitle={b.header.subtitle} />

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <div className="mb-8 p-6 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "2px solid #8b949e" }}>
          <blockquote className="italic" style={{ color: "#c9d1d9" }}>
            "{b.intro.quote}"
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: "#8b949e" }}>
            — {b.intro.quoteAuthor}
          </p>
        </div>
        {b.intro.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: i === 0 ? "1.1rem" : undefined,
              color: "#c9d1d9",
              marginBottom: i === 0 ? "1.5rem" : undefined,
            }}
          >
            {p}
          </p>
        ))}
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {b.coreComponents.title}
        </h2>

        <div className="space-y-6">
          <Card style={{ backgroundColor: "#1c2128", borderColor: "#444c56", border: "1px solid" }}>
            <CardHeader>
              <CardTitle className="font-mono text-sm" style={{ color: "#c9d1d9", letterSpacing: "0.05em" }}>
                {b.coreComponents.token42.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: "#c9d1d9" }}>{b.coreComponents.token42.summary}</p>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span style={{ color: "#8b949e", display: "block", marginBottom: "0.5rem" }}>
                      {b.coreComponents.token42.purpose}
                    </span>
                    <span style={{ color: "#c9d1d9" }}>{b.coreComponents.token42.purposeValue}</span>
                  </div>
                  <div>
                    <span style={{ color: "#8b949e", display: "block", marginBottom: "0.5rem" }}>
                      {b.coreComponents.token42.totalSupply}
                    </span>
                    <span style={{ color: "#c9d1d9" }}>{b.coreComponents.token42.totalSupplyValue}</span>
                  </div>
                  <div>
                    <span style={{ color: "#8b949e", display: "block", marginBottom: "0.5rem" }}>
                      {b.coreComponents.token42.releaseSchedule}
                    </span>
                    <span style={{ color: "#c9d1d9" }}>{b.coreComponents.token42.releaseScheduleValue}</span>
                  </div>
                  <div>
                    <span style={{ color: "#8b949e", display: "block", marginBottom: "0.5rem" }}>
                      {b.coreComponents.token42.atLaunch}
                    </span>
                    <span style={{ color: "#c9d1d9" }}>{b.coreComponents.token42.atLaunchValue}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded mt-4" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #6ba3db" }}>
                <p className="text-sm" style={{ color: "#c9d1d9" }}>
                  {b.coreComponents.token42.keyUse}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: "#1c2128", borderColor: "#444c56", border: "1px solid" }}>
            <CardHeader>
              <CardTitle className="font-mono text-sm" style={{ color: "#c9d1d9", letterSpacing: "0.05em" }}>
                {b.coreComponents.fish.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: "#c9d1d9" }}>{b.coreComponents.fish.summary}</p>
              <div className="mb-4 p-4 rounded" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #6ba3db" }}>
                <p className="text-sm" style={{ color: "#c9d1d9" }}>
                  {b.coreComponents.fish.howToEarn}
                </p>
              </div>
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: "none", color: "#c9d1d9" }}>
                {b.coreComponents.fish.bullets.map((item, i) => (
                  <li key={i}>→ {item}</li>
                ))}
              </ul>
              <p className="text-sm italic" style={{ color: "#8b949e" }}>
                {b.coreComponents.fish.seeHow}
              </p>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: "#1c2128", borderColor: "#444c56", border: "1px solid" }}>
            <CardHeader>
              <CardTitle className="font-mono text-sm" style={{ color: "#c9d1d9", letterSpacing: "0.05em" }}>
                {b.coreComponents.governance.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: "#c9d1d9" }}>{b.coreComponents.governance.summary}</p>
              <div className="space-y-3" style={{ color: "#c9d1d9" }}>
                {b.coreComponents.governance.points.map((p, i) => (
                  <p key={i}>→ {p}</p>
                ))}
              </div>
              <div className="p-4 rounded mt-4" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #6ba3db" }}>
                <p className="text-sm italic" style={{ color: "#c9d1d9" }}>
                  "{b.coreComponents.governance.quote}"
                </p>
                <p className="mt-2 text-sm" style={{ color: "#8b949e" }}>
                  — {b.coreComponents.governance.quoteAuthor}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {b.masterPools.title}
        </h2>
        <p className="mb-4" style={{ fontSize: "1.1rem", color: "#c9d1d9" }}>
          {b.masterPools.paragraphs[0]}
        </p>
        <p className="mb-4" style={{ color: "#c9d1d9" }}>
          {b.masterPools.paragraphs[1]}
        </p>
        <div className="mb-6 p-4 rounded" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #8b949e" }}>
          <p className="text-sm" style={{ color: "#c9d1d9" }}>
            <strong style={{ color: "#e6edf3" }}>{b.masterPools.noteTitle}</strong> {b.masterPools.note}
          </p>
        </div>
        <p className="mb-8" style={{ color: "#c9d1d9" }}>
          {b.masterPools.paragraphs[2]}
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
        <div className="p-6 rounded" style={{ backgroundColor: "#161b22", borderLeft: "3px solid #6ba3db" }}>
          <p style={{ color: "#c9d1d9", fontStyle: "italic" }}>
            <strong style={{ color: "#e6edf3" }}>{b.masterPools.closingTitle}</strong>
          </p>
          <p className="mt-3 text-sm" style={{ color: "#8b949e" }}>
            {b.masterPools.closingNote}
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {b.hyperspace.title}
        </h2>
        <div className="mb-6 p-6 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "2px solid #8b949e" }}>
          <blockquote className="italic" style={{ color: "#c9d1d9" }}>
            "{b.hyperspace.quote}"
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: "#8b949e" }}>
            — {b.hyperspace.quoteAuthor}
          </p>
        </div>
        {b.hyperspace.paragraphs.map((p, i) => (
          <p key={i} className="mb-6" style={{ fontSize: "1.1rem", color: "#c9d1d9" }}>
            {p}
          </p>
        ))}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #444c56" }}>
            <h3 className="font-mono mb-4" style={{ fontSize: "1.2rem", color: "#6ba3db", letterSpacing: "0.05em" }}>
              {b.hyperspace.nativeTitle}
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#c9d1d9" }}>
              <p>
                <strong style={{ color: "#e6edf3" }}>{b.hyperspace.nativeSubtitle}</strong>
              </p>
              {b.hyperspace.nativeItems.map((item, i) => (
                <p key={i}>→ {item}</p>
              ))}
            </div>
          </div>
          <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #444c56" }}>
            <h3 className="font-mono mb-4" style={{ fontSize: "1.2rem", color: "#6ba3db", letterSpacing: "0.05em" }}>
              {b.hyperspace.bridgesTitle}
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#c9d1d9" }}>
              <p>
                <strong style={{ color: "#e6edf3" }}>{b.hyperspace.bridgesEthereum}</strong>
              </p>
              {b.hyperspace.bridgesEthereumItems.map((item, i) => (
                <p key={i}>→ {item}</p>
              ))}
              <p className="pt-2">
                <strong style={{ color: "#e6edf3" }}>{b.hyperspace.bridgesBitcoin}</strong>
              </p>
              {b.hyperspace.bridgesBitcoinItems.map((item, i) => (
                <p key={i}>→ {item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 rounded mb-6" style={{ backgroundColor: "#161b22", border: "1px solid #30363d" }}>
          <h3 className="font-mono mb-4 text-center" style={{ fontSize: "1.3rem", color: "#6ba3db", letterSpacing: "0.05em" }}>
            {b.hyperspace.ecosystemsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {b.hyperspace.ecosystems.map((eco) => (
              <div key={eco.name} className="p-3 rounded" style={{ backgroundColor: "#1c2128" }}>
                <p className="font-mono text-sm" style={{ color: "#e6edf3" }}>
                  {eco.name}
                </p>
                <p className="text-xs mt-1" style={{ color: "#8b949e" }}>
                  {eco.tag}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-center mt-6 italic" style={{ color: "#8b949e" }}>
            {b.hyperspace.ecosystemsNote}
          </p>
        </div>
        <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "3px solid #6ba3db" }}>
          <p style={{ color: "#c9d1d9" }}>
            <strong style={{ color: "#e6edf3" }}>{b.hyperspace.whyItMatters}</strong>
          </p>
          <p className="mt-3 text-sm italic" style={{ color: "#8b949e" }}>
            {b.hyperspace.whyItMattersNote}
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {b.technicalArch.title}
        </h2>
        <div className="mb-12">
          <h3 className="mb-6 font-mono" style={{ fontSize: "1.5rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
            {b.technicalArch.sectionTitle}
          </h3>
          <p className="mb-6" style={{ fontSize: "1.1rem", color: "#c9d1d9" }}>
            {b.technicalArch.sectionIntro}
          </p>
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
          <div className="p-6 rounded" style={{ backgroundColor: "#161b22", borderLeft: "3px solid #6ba3db" }}>
            <p style={{ color: "#c9d1d9", fontStyle: "italic" }}>
              <strong style={{ color: "#e6edf3" }}>{b.technicalArch.noteTitle}</strong>
            </p>
            {b.technicalArch.noteParagraphs.map((p, i) => (
              <p key={i} className="mt-3 text-sm" style={{ color: "#8b949e" }}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-mono" style={{ fontSize: "1.5rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
            {b.technicalArch.specsTitle}
          </h3>
          <div className="p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #444c56" }}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {b.technicalArch.specs.map((spec) => (
                  <div key={spec.label}>
                    <h4 className="font-mono text-sm mb-2" style={{ color: "#8b949e" }}>
                      {spec.label}
                    </h4>
                    <p style={{ color: "#c9d1d9" }}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm italic mt-4" style={{ color: "#8b949e" }}>
            {b.technicalArch.docsNote}
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {b.howToParticipate.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {b.howToParticipate.cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded"
              style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}
            >
              <h3 className="font-mono mb-3" style={{ color: "#6ba3db", letterSpacing: "0.05em" }}>
                {card.title}
              </h3>
              <p style={{ color: "#c9d1d9", fontSize: "0.95rem" }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      <div
        className="p-8 rounded text-center mb-16"
        style={{ backgroundColor: "#1c2128", border: "1px solid #6ba3db" }}
      >
        <p className="font-mono mb-2" style={{ fontSize: "1.2rem", color: "#6ba3db", letterSpacing: "0.05em" }}>
          "{b.finalQuote.quote}"
        </p>
        <p className="text-sm" style={{ color: "#8b949e" }}>
          — {b.finalQuote.author}
        </p>
      </div>
    </main>
  );
}

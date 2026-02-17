import { useContent } from "@/contexts/LocaleContext";
import { assetsMeta } from "@/content/assets";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
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
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-mono mb-4" style={{ fontSize: "2.5rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {p.header.title}
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#c9d1d9", maxWidth: "800px" }}>
          {p.header.subtitle}
        </p>
      </div>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* Hero Quote */}
      <div className="mb-16 p-8 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "3px solid #6ba3db" }}>
        <blockquote className="italic" style={{ fontSize: "0.95rem", lineHeight: "1.8", opacity: 0.9 }}>
          "{p.heroQuote.text}"
        </blockquote>
        <p className="mt-4 text-sm" style={{ color: "#8b949e" }}>
          — {p.heroQuote.author}
          {p.heroQuote.source != null ? `, ${p.heroQuote.source}` : ""}
        </p>
      </div>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* We Are Building a New World */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {p.newWorld.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4" style={{ color: "#c9d1d9" }}>
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
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* Our Philosophy */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {p.philosophy.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6" style={{ color: "#c9d1d9" }}>
              {p.philosophy.intro}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: "400px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #30363d" }}>
                    <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: "#8b949e" }}>
                      {p.philosophy.tableHeaderVoice}
                    </th>
                    <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: "#8b949e" }}>
                      {p.philosophy.tableHeaderTruth}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {p.philosophy.tableRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < p.philosophy.tableRows.length - 1 ? "1px solid #21262d" : undefined }}>
                      <td className="py-3 px-4" style={{ color: "#c9d1d9", whiteSpace: "nowrap" }}>
                        {row.voice}
                      </td>
                      <td className="py-3 px-4" style={{ color: "#c9d1d9" }}>
                        {row.truth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* The Ecosystem */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {p.ecosystem.title}
        </h2>
        <p className="mb-8" style={{ fontSize: "1.1rem", color: "#c9d1d9" }}>
          {p.ecosystem.intro}
        </p>

        <div className="space-y-6">
          {p.ecosystem.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded"
              style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}
            >
              <div className="flex items-start gap-4">
                <div className="font-mono" style={{ color: "#6ba3db", minWidth: "40px", fontSize: "1.5rem" }}>
                  {pillar.number}
                </div>
                <div>
                  <h3 className="font-mono mb-2" style={{ color: "#6ba3db", letterSpacing: "0.05em" }}>
                    {pillar.title}
                  </h3>
                  <p className="mb-3" style={{ color: "#c9d1d9" }}>
                    {pillar.description}
                  </p>
                  <ul className="space-y-1 text-sm ml-4" style={{ listStyleType: "none", color: "#c9d1d9" }}>
                    {pillar.bullets.map((b, i) => (
                      <li key={i}>→ {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "3px solid #6ba3db" }}>
          <p style={{ color: "#c9d1d9" }}>
            {p.ecosystem.closing}
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* The Library of Alexandria for the Digital Age */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: "2rem", color: "#e6edf3", letterSpacing: "0.05em" }}>
          {p.library.title}
        </h2>

        <div className="mb-6 p-6 rounded" style={{ backgroundColor: "#1c2128", borderLeft: "2px solid #8b949e" }}>
          <blockquote className="italic" style={{ color: "#c9d1d9", lineHeight: "1.7" }}>
            "{p.library.quote}"
          </blockquote>
          <p className="mt-3 text-sm" style={{ color: "#8b949e" }}>
            — {p.library.quoteAuthor}
          </p>
        </div>

        <div className="space-y-4" style={{ color: "#c9d1d9" }}>
          {p.library.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className="mt-8 p-6 rounded" style={{ backgroundColor: "#161b22", border: "1px solid #30363d" }}>
          <h3 className="font-mono mb-4" style={{ color: "#6ba3db", letterSpacing: "0.05em" }}>
            {p.library.notInventingTitle}
          </h3>
          {p.library.notInventingParagraphs.map((text, i) => (
            <p key={i} className={i < p.library.notInventingParagraphs.length - 1 ? "mb-4" : ""} style={{ color: "#c9d1d9" }}>
              {text}
            </p>
          ))}
        </div>

        <div className="mt-8 p-6 rounded" style={{ backgroundColor: "#1c2128", border: "1px solid #30363d" }}>
          <h3 className="font-mono mb-4 text-sm" style={{ color: "#6ba3db", letterSpacing: "0.05em" }}>
            {p.library.protocolsTitle}
          </h3>
          <p className="mb-4" style={{ color: "#c9d1d9" }}>
            {p.library.protocolsIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.library.protocols.map((proto) => (
              <div key={proto.name}>
                <p className="text-sm mb-2" style={{ color: "#8b949e" }}>
                  <strong>{proto.name}</strong>
                </p>
                <p className="text-sm" style={{ color: "#c9d1d9" }}>
                  {proto.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-6 p-6 rounded"
          style={{
            backgroundColor: "#161b22",
            borderLeft: "3px solid #6ba3db",
          }}
        >
          {p.library.survivalParagraphs.map((text, i) => (
            <p key={i} className={i === 0 ? "mb-3" : "text-sm"} style={{ color: i === 0 ? "#c9d1d9" : "#8b949e" }}>
              {text}
            </p>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* Thursday Note - Douglas Adams Reference */}
      <section className="mb-16">
        <div className="p-6 rounded" style={{ backgroundColor: "#161b22", borderLeft: "2px solid #8b949e" }}>
          <p className="text-sm italic mb-2" style={{ color: "#c9d1d9" }}>
            "{p.thursdayNote.quote}"
          </p>
          <p className="text-sm mb-4" style={{ color: "#8b949e" }}>
            — {p.thursdayNote.quoteAuthor}
          </p>
          {p.thursdayNote.paragraphs.map((text, i) => (
            <p key={i} className="text-sm" style={{ color: i === 0 ? "#c9d1d9" : "#8b949e", marginTop: i > 0 ? "0.75rem" : undefined }}>
              {text}
            </p>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #30363d", margin: "3rem 0" }} />

      {/* Final Tagline */}
      <section className="text-center mb-16">
        <div className="space-y-2">
          {p.taglines.map((line, i) => (
            <p key={i} className="font-mono" style={{ color: "#c9d1d9" }}>
              {line}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

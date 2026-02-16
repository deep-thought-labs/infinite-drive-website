export function PrivacyPolicyPage() {
  const sectionTitleStyle = {
    fontSize: "1.25rem",
    color: "#6ba3db",
    letterSpacing: "0.05em",
  } as const;
  const bodyStyle = { opacity: 0.9, lineHeight: "1.7", color: "#c9d1d9" };

  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-4xl mx-auto w-full">
      <h1
        className="font-mono mb-8"
        style={{
          fontSize: "2rem",
          color: "#e6edf3",
          letterSpacing: "0.05em",
        }}
      >
        Privacy Policy
      </h1>

      <p className="mb-8" style={{ fontSize: "1rem", ...bodyStyle }}>
        <strong>Last updated:</strong> 16 February 2026. This Privacy Policy describes how we collect, use, and protect information when you use the Infinite Drive website and related ecosystem resources. We are committed to transparency and to handling data in line with industry best practices and applicable law.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            1. Who We Are and Scope
          </h2>
          <p style={bodyStyle}>
            This website (e.g. infinitedrive.xyz and associated domains) is part of the <strong>Infinite Drive</strong> ecosystem—sovereign infrastructure including the <strong>Infinite Improbability Drive</strong> blockchain, the <strong>BabelFish Network</strong>, and related protocols. The project is associated with <strong>Deep Thought Labs</strong> (deep-thought.computer). This policy applies to your use of this informational website. When you run blockchain nodes or use Drive-managed services, your data remains on your own system as described in the official documentation; that architecture is designed so that we do not collect or control your node or key data.
          </p>
          <p style={bodyStyle} className="mt-4">
            <strong>What we offer:</strong> Our site and the tools or sites linked to it are designed so that <strong>you can use the technology to create your own resources, projects, and web ecosystems</strong>—for example your own websites, platforms, or internet protocols. We provide the tools and the possibility to interact with sovereign infrastructure; you have full discretion over how you use them and what you build. We are committed to the common good, to supporting users, and to preventing misuse of these tools where we can; nevertheless, it is each user’s responsibility to use the technology in a lawful and responsible manner.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            2. Blockchain and On-Chain Data
          </h2>
          <p style={bodyStyle}>
            Data recorded on the <strong>Infinite Improbability Drive</strong> blockchain—as with any public blockchain—is <strong>immutable and decentralized</strong>. Once written, it cannot be altered or erased by us or by any single party. This is by design: the chain is a neutral, censorship-resistant structure. <strong>We do not control, delete, or modify on-chain data.</strong>
          </p>
          <p style={bodyStyle} className="mt-4">
            Our role is limited to <strong>providing the tools and infrastructure</strong> that allow users to interact with the technology. We do not decide what data you submit to the network or how you use the protocols. <strong>You are responsible</strong> for what information or data you publish, transact with, or make available on-chain or through ecosystem protocols. We encourage you to understand the public and permanent nature of blockchain data before you use it.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            3. Information We Collect
          </h2>
          <p style={bodyStyle}>
            <strong>This website:</strong> We do not collect personal data through forms, accounts, or login on this site. As with any web visit, your browser may send technical data (e.g. IP address, user agent, referring URL) to the host serving the site; we do not use this for profiling or marketing. If we introduce analytics or optional features that process personal data in the future, we will update this policy and, where required, ask for your consent.
          </p>
          <p style={bodyStyle} className="mt-4">
            <strong>Ecosystem services:</strong> When you use the blockchain, run nodes via Drive, or interact with decentralized protocols, keys and node data stay under your control on your device. The documentation states that &quot;all persistent data created by Drive services remains on your system and is never shared.&quot; We do not collect or store your keys, mnemonics, or node data.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            4. How We Use Information
          </h2>
          <p style={bodyStyle}>
            Any limited technical or usage information related to this website is used only to provide and improve the site, ensure security, and comply with legal obligations. We do not sell your personal data. We do not use your data for advertising or third-party marketing.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            5. Legal Basis (where applicable)
          </h2>
          <p style={bodyStyle}>
            If and to the extent we process personal data under the GDPR or similar laws, we rely on: (a) your consent where we ask for it, (b) performance of a contract or steps at your request, (c) our legitimate interests (e.g. site operation and security), or (d) compliance with legal obligations. You may withdraw consent where it applies, without affecting the lawfulness of processing before withdrawal.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            6. Cookies and Similar Technologies
          </h2>
          <p style={bodyStyle}>
            This site may use strictly necessary cookies or local storage for basic operation (e.g. preferences or session state). We do not use advertising or non-essential tracking cookies on this policy’s effective date. If we add analytics or optional cookies later, we will describe them here and obtain consent where required. You can control or block cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            7. Third-Party Links and Services
          </h2>
          <p style={bodyStyle}>
            This website may link to third-party sites (e.g. Telegram, Deep Thought Labs, documentation, or other ecosystem resources). Those sites have their own privacy policies and practices. We are not responsible for their handling of your data. We encourage you to read their policies when you leave our site.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            8. Data Retention
          </h2>
          <p style={bodyStyle}>
            Because we do not collect personal data through this website beyond what is inherent in serving web pages, we do not retain identifiable personal data for longer than necessary for the purposes above. Server or CDN logs, if any, are typically retained only as long as needed for security and operation, in line with our host’s practices.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            9. Your Rights
          </h2>
          <p style={bodyStyle}>
            Depending on your jurisdiction, you may have the right to: access your personal data; rectify or update it; request erasure; restrict processing; data portability; object to processing; and, where applicable, lodge a complaint with a supervisory authority. To exercise these rights in relation to data processed by us in connection with this website, please contact us using the channels below. We will respond within a reasonable time and in accordance with applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            10. International Transfers
          </h2>
          <p style={bodyStyle}>
            This site may be hosted or accessed from different countries. If we transfer personal data across borders, we will do so in compliance with applicable law and, where required, use appropriate safeguards (e.g. standard contractual clauses or adequacy decisions).
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            11. Children
          </h2>
          <p style={bodyStyle}>
            This website is not directed at children under the age of 16 (or the applicable age in your jurisdiction). We do not knowingly collect personal data from children. If you believe we have received such data, please contact us and we will take steps to delete it.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            12. Changes to This Policy
          </h2>
          <p style={bodyStyle}>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will be revised when we make material changes. We encourage you to review this page periodically. Continued use of the site after changes constitutes acceptance of the updated policy to the extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="font-mono mb-4" style={sectionTitleStyle}>
            13. Contact
          </h2>
          <p style={bodyStyle}>
            For questions about this Privacy Policy or our handling of personal data, you can reach us via the channels referenced on this website: for example, the <a href="https://t.me/+nt8ysid_-8VlMDVh" target="_blank" rel="noopener noreferrer" style={{ color: "#6ba3db", textDecoration: "underline" }}>Telegram</a> community or the <a href="https://deep-thought.computer" target="_blank" rel="noopener noreferrer" style={{ color: "#6ba3db", textDecoration: "underline" }}>Deep Thought Labs</a> site. Please provide enough detail so we can respond appropriately.
          </p>
        </section>
      </div>

      <div
        className="mt-12 pt-8"
        style={{ borderTop: "1px solid #30363d" }}
      >
        <p className="text-sm" style={{ opacity: 0.7, color: "#8b949e" }}>
          Infinite Drive · Project 42 · A Deep Thought Labs project. This policy is provided for informational purposes and should be read together with any terms of use or other policies published on this site.
        </p>
      </div>
    </main>
  );
}

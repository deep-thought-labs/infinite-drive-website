import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import newWorldImage from "../assets/DaVincisASCII.jpeg";
import cypherpunkImage from "../assets/punks.jpeg";

export function Project42Page() {
  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-mono mb-4" style={{ fontSize: '2.5rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Project 42
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#c9d1d9', maxWidth: '800px' }}>
          <strong>The answer to digital sovereignty</strong> — a cyberspace where freedom is code, privacy is default, and the network belongs to everyone.
        </p>
      </div>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Hero Quote */}
      <div className="mb-16 p-8 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '3px solid #6ba3db' }}>
        <blockquote className="italic" style={{ fontSize: '0.95rem', lineHeight: '1.8', opacity: 0.9 }}>
          "Governments of the Industrial World, you weary giants of flesh and steel, I come from Cyberspace, the new home of Mind. On behalf of the future, I ask you of the past to leave us alone. You are not welcome among us. You have no sovereignty where we gather."
        </blockquote>
        <p className="mt-4 text-sm" style={{ color: '#8b949e' }}>
          — John Perry Barlow, A Declaration of the Independence of Cyberspace (1996)
        </p>
      </div>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* We Are Building a New World */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          We Are Building a New World
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4" style={{ color: '#c9d1d9' }}>
            <p>We are not launching a product.</p>
            <p>We are <strong style={{ color: '#e6edf3' }}>founding a nation</strong>.</p>
            <p>
              A <strong style={{ color: '#e6edf3' }}>cyberspace nation</strong> — open to all, owned by none, ruled by code.<br />
              Where your data is yours.<br />
              Where your voice cannot be silenced.<br />
              Where your world is built by you — not rented from a corporation.
            </p>
            <p>
              This is <strong style={{ color: '#e6edf3' }}>Project 42</strong> — the answer to life, the universe, and digital freedom.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <ImageWithFallback 
              src={newWorldImage}
              alt="Digital network"
              className="w-full h-full object-contain md:object-cover rounded"
              style={{ minHeight: '300px', maxHeight: '400px', opacity: 0.6 }}
            />
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Our Philosophy */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Our Philosophy: Cypherpunk Nation
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6" style={{ color: '#c9d1d9' }}>We stand on five pillars of truth:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: '400px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #30363d' }}>
                    <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Voice</th>
                    <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Truth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #21262d' }}>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9', whiteSpace: 'nowrap' }}>Timothy C. May</td>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Privacy is necessary for an open society.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #21262d' }}>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9', whiteSpace: 'nowrap' }}>Eric Hughes</td>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Cypherpunks write code.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #21262d' }}>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9', whiteSpace: 'nowrap' }}>John Perry Barlow</td>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>We have no elected government — and we don't want one.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #21262d' }}>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9', whiteSpace: 'nowrap' }}>Satoshi Nakamoto</td>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Trust math, not men.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9', whiteSpace: 'nowrap' }}>Douglas Adams</td>
                    <td className="py-3 px-4" style={{ color: '#c9d1d9' }}><em>Don't Panic.</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <ImageWithFallback 
              src={cypherpunkImage}
              alt="Cypherpunk gathering"
              className="w-full h-full object-cover rounded"
              style={{ minHeight: '300px', maxHeight: '400px', opacity: 0.8 }}
            />
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* The Ecosystem */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          The Ecosystem
        </h2>
        <p className="mb-8" style={{ fontSize: '1.1rem', color: '#c9d1d9' }}>
          Project 42 is not a single product — it's a <strong style={{ color: '#e6edf3' }}>complete digital nation</strong> with four interconnected pillars:
        </p>

        <div className="space-y-6">
          {/* 1. Infinite Improbability Drive - The Blockchain Foundation */}
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <div className="flex items-start gap-4">
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '40px', fontSize: '1.5rem' }}>01</div>
              <div>
                <h3 className="font-mono mb-2" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
                  THE INFINITE IMPROBABILITY DRIVE
                </h3>
                <p className="mb-3" style={{ color: '#c9d1d9' }}>
                  The blockchain foundation — a complete sovereign layer for trust, governance, and economic coordination.
                </p>
                <ul className="space-y-1 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                  <li>→ <strong style={{ color: '#e6edf3' }}>Proof of Contribution</strong> consensus — rewards those who build and maintain</li>
                  <li>→ <strong style={{ color: '#e6edf3' }}>DAO governance</strong> from block one — decisions made on-chain by the community</li>
                  <li>→ <strong style={{ color: '#e6edf3' }}>Improbability [42]</strong> — governance token for staking, voting, and network utility</li>
                  <li>→ <strong style={{ color: '#e6edf3' }}>Algorithmic Liquidity</strong> — Fish rewards and balances ecosystem value flows</li>
                  <li>→ <strong style={{ color: '#e6edf3' }}>42-year economic model</strong> — built for generations, not quarters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. BabelFish Network */}
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <div className="flex items-start gap-4">
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '40px', fontSize: '1.5rem' }}>02</div>
              <div>
                <h3 className="font-mono mb-2" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
                  BABELFISH NETWORK
                </h3>
                <p className="mb-3" style={{ color: '#c9d1d9' }}>
                  A global P2P mesh — millions of devices forming a planetary network that routes around censorship and failure.
                </p>
                <ul className="space-y-1 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                  <li>→ Self-organizing mesh topology</li>
                  <li>→ Device-to-blockchain communication</li>
                  <li>→ Encrypted by default, unstoppable by design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Sovereign Services */}
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <div className="flex items-start gap-4">
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '40px', fontSize: '1.5rem' }}>03</div>
              <div>
                <h3 className="font-mono mb-2" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
                  SOVEREIGN INTERNET SERVICES
                </h3>
                <p className="mb-3" style={{ color: '#c9d1d9' }}>
                  DNS, hosting, email, storage, compute — enterprise-grade infrastructure, fully decentralized.
                </p>
                <ul className="space-y-1 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                  <li>→ .id42 domains — yours forever</li>
                  <li>→ End-to-end encrypted communication</li>
                  <li>→ Global CDN and edge computing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. User Universes */}
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <div className="flex items-start gap-4">
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '40px', fontSize: '1.5rem' }}>04</div>
              <div>
                <h3 className="font-mono mb-2" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
                  USER-CREATED UNIVERSES
                </h3>
                <p className="mb-3" style={{ color: '#c9d1d9' }}>
                  Build websites, apps, metaverses, games — your creations, your rules, your ownership.
                </p>
                <ul className="space-y-1 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                  <li>→ Deploy globally in seconds</li>
                  <li>→ True ownership of digital assets</li>
                  <li>→ Interoperable across the ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '3px solid #6ba3db' }}>
          <p style={{ color: '#c9d1d9' }}>
            These four pillars work together as <strong style={{ color: '#e6edf3' }}>one unified system</strong> — each strengthens the others, creating a network that becomes more powerful with every user, every node, every contribution.
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* The Library of Alexandria for the Digital Age */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          The Library of Alexandria — Rebuilt for Cyberspace
        </h2>
        
        <div className="mb-6 p-6 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '2px solid #8b949e' }}>
          <blockquote className="italic" style={{ color: '#c9d1d9', lineHeight: '1.7' }}>
            "The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move."
          </blockquote>
          <p className="mt-3 text-sm" style={{ color: '#8b949e' }}>
            — Douglas Adams, The Restaurant at the End of the Universe
          </p>
        </div>

        <div className="space-y-4" style={{ color: '#c9d1d9' }}>
          <p>
            Once, humanity built the <strong style={{ color: '#e6edf3' }}>Library of Alexandria</strong> — a temple of knowledge that held the world's wisdom.
          </p>
          <p>
            It burned. Knowledge was lost. Empires fell.
          </p>
          <p>
            <strong style={{ color: '#e6edf3' }}>Project 42 is the Library of Alexandria rebuilt in code</strong> — but this time, it cannot burn.
          </p>
        </div>

        <div className="mt-8 p-6 rounded" style={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}>
          <h3 className="font-mono mb-4" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
            WE ARE NOT INVENTING THE WHEEL
          </h3>
          <p className="mb-4" style={{ color: '#c9d1d9' }}>
            We stand on the shoulders of giants — building an <strong style={{ color: '#e6edf3' }}>open, interconnected ecosystem</strong> where protocols, services, and communities collaborate toward a common good.
          </p>
          <p className="mb-4" style={{ color: '#c9d1d9' }}>
            We don't commercialize the work of others. We <strong style={{ color: '#e6edf3' }}>integrate, honor, and extend</strong> proven open-source technologies into a unified, resilient network.
          </p>
          <p style={{ color: '#c9d1d9' }}>
            Every line of code is <strong style={{ color: '#e6edf3' }}>open source</strong>. Every protocol is <strong style={{ color: '#e6edf3' }}>public</strong>. Every innovation belongs to <strong style={{ color: '#e6edf3' }}>humanity</strong>.
          </p>
        </div>

        <div className="mt-8 p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
          <h3 className="font-mono mb-4 text-sm" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
            BUILT ON OPEN PROTOCOLS & ALIGNED TECHNOLOGIES
          </h3>
          <p className="mb-4" style={{ color: '#c9d1d9' }}>
            We integrate battle-tested open-source protocols and technologies that share our vision of digital sovereignty:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>Bitcoin</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>The first decentralized money — proof that code can be law</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>Nostr</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>Censorship-resistant social communication protocol</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>EVM</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>Smart contracts and programmable trust</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>Cosmos SDK</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>Interoperable blockchain architecture</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>IPFS</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>Distributed file systems and content addressing</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>Tor</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>Anonymous routing and privacy infrastructure</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>Pears (Holepunch)</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>P2P framework for unstoppable applications</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>QVAC SDK (Tether)</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>Open tools for digital assets, stablecoins, and AI integration</p>
            </div>
            <div>
              <p className="text-sm mb-2" style={{ color: '#8b949e' }}><strong>xAI</strong></p>
              <p className="text-sm" style={{ color: '#c9d1d9' }}>AI models aligned with human flourishing</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 rounded" style={{ 
          backgroundColor: '#161b22', 
          borderLeft: '3px solid #6ba3db'
        }}>
          <p className="mb-3" style={{ color: '#c9d1d9' }}>
            <strong style={{ color: '#e6edf3' }}>We're building a decentralized, collaborative, indestructible network</strong> — not for profit, but for <strong style={{ color: '#e6edf3' }}>survival</strong>.
          </p>
          <p className="text-sm" style={{ color: '#8b949e' }}>
            The economic models we design are not for personal enrichment. They are <strong>necessary mechanisms</strong> for network operability, chain security, and fair distribution of incentives to all participants. Like the Hitchhiker's Guide itself — <em>"A wholly remarkable book. Perhaps the most remarkable, certainly the most successful book ever to come out of the great publishing corporations of Ursa Minor."</em>
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Thursday Note - Douglas Adams Reference */}
      <section className="mb-16">
        <div className="p-6 rounded" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #8b949e' }}>
          <p className="text-sm italic mb-2" style={{ color: '#c9d1d9' }}>
            "This must be Thursday. I never could get the hang of Thursdays."
          </p>
          <p className="text-sm mb-4" style={{ color: '#8b949e' }}>
            — Arthur Dent, The Hitchhiker's Guide to the Galaxy
          </p>
          <p className="text-sm" style={{ color: '#c9d1d9' }}>
            Thursdays have always been strange days in the galaxy. But perhaps that's because they're days when impossible things become probable. When hyperspace bypasses get built. When digital nations get founded. When <strong style={{ color: '#e6edf3' }}>42</strong> finally makes sense.
          </p>
          <p className="text-sm mt-3" style={{ color: '#8b949e' }}>
            If you're reading this on a Thursday, you might just be in the right place at the right time.
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Final Tagline */}
      <section className="text-center mb-16">
        <div className="space-y-2">
          <p className="font-mono" style={{ color: '#c9d1d9' }}>Project 42</p>
          <p className="font-mono" style={{ color: '#c9d1d9' }}>A Cypherpunk Nation</p>
          <p className="font-mono" style={{ color: '#c9d1d9' }}>Powered by Infinite Drive</p>
          <p className="font-mono" style={{ color: '#c9d1d9' }}>For everyone. Forever.</p>
        </div>
      </section>
    </main>
  );
}
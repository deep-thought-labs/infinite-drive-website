import { useOutletContext } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { Network, Globe, Mail, HardDrive, Server, Shield, Wifi, Layers, Database } from "lucide-react";
import networkMeshImage from "../assets/blocks.jpeg";
import connectedSystemsImage from "../assets/dots.jpeg";

type OutletContext = { onNavigate: (path: string) => void };

export function ServicesPage() {
  const { onNavigate } = useOutletContext<OutletContext>();
  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-mono mb-4" style={{ fontSize: '2.5rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          The Network & Services
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px' }}>
          A complete sovereign internet infrastructure — <strong>decentralized, user-owned, and unstoppable</strong>.
        </p>
      </div>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* BabelFish Network Introduction */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
              BabelFish Network
            </h2>
            <div className="space-y-4">
              <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                The <strong>global P2P backbone</strong> that powers everything — a network of networks connecting blockchains, services, and devices into a resilient supermesh.
              </p>
              <p style={{ opacity: 0.85, color: '#c9d1d9' }}>
                BabelFish is not just a protocol — it's a <strong>living infrastructure</strong> that grows stronger with every node, every connection, every user.
              </p>
            </div>
          </div>
          <div>
            <ImageWithFallback 
              src={networkMeshImage}
              alt="Network mesh"
              className="w-full h-full object-cover rounded"
              style={{ minHeight: '300px', maxHeight: '400px', opacity: 0.8 }}
            />
          </div>
        </div>

        {/* BabelFish Protocol Details */}
        <div className="mb-8 p-6 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '3px solid #6ba3db' }}>
          <h3 className="font-mono mb-4" style={{ fontSize: '1.2rem', color: '#6ba3db', letterSpacing: '0.05em' }}>
            THE BABELFISH PROTOCOL
          </h3>
          <p className="mb-4" style={{ opacity: 0.9, color: '#c9d1d9' }}>
            A revolutionary protocol that enables <strong>direct device-to-blockchain communication</strong> without intermediaries. <strong style={{ color: '#6ba3db' }}>100% open source</strong> — built on proven protocols like Bitcoin, Nostr, IPFS, Pears, and QVAC SDK.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                WHAT IT DOES
              </h4>
              <ul className="space-y-2 text-sm" style={{ opacity: 0.9 }}>
                <li>→ Resolves domains to blockchain addresses</li>
                <li>→ Routes traffic through the most efficient paths</li>
                <li>→ Shares storage and compute across devices</li>
                <li>→ Enables cross-chain interoperability</li>
                <li>→ Self-heals and adapts to network conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                HOW IT WORKS
              </h4>
              <ul className="space-y-2 text-sm" style={{ opacity: 0.9 }}>
                <li>→ Your device runs a lightweight node</li>
                <li>→ Connects to nearby peers automatically</li>
                <li>→ Forms a mesh that spans the globe</li>
                <li>→ No central servers, no single point of failure</li>
                <li>→ Encrypted end-to-end by default</li>
              </ul>
            </div>
          </div>
          <p className="text-sm italic mt-6" style={{ opacity: 0.7, color: '#8b949e' }}>
            Read the full whitepaper → <a 
              href="https://deep-thought.computer/projects/babelfish" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#6ba3db', textDecoration: 'underline' }}
            >
              deep-thought.computer/projects/babelfish
            </a>
          </p>
        </div>

        {/* Network Architecture Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded text-center" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <Layers className="mx-auto mb-4" size={40} style={{ color: '#6ba3db' }} />
            <h4 className="font-mono mb-2" style={{ color: '#c9d1d9', letterSpacing: '0.05em' }}>
              MULTI-LAYER
            </h4>
            <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
              Multiple overlay networks working in harmony
            </p>
          </div>
          <div className="p-6 rounded text-center" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <Wifi className="mx-auto mb-4" size={40} style={{ color: '#6ba3db' }} />
            <h4 className="font-mono mb-2" style={{ color: '#c9d1d9', letterSpacing: '0.05em' }}>
              SELF-ORGANIZING
            </h4>
            <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
              Nodes find and connect to each other automatically
            </p>
          </div>
          <div className="p-6 rounded text-center" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <Shield className="mx-auto mb-4" size={40} style={{ color: '#6ba3db' }} />
            <h4 className="font-mono mb-2" style={{ color: '#c9d1d9', letterSpacing: '0.05em' }}>
              FAULT-TOLERANT
            </h4>
            <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
              Routes around failures and censorship attempts
            </p>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Sovereign Internet Services */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Sovereign Internet Services
        </h2>
        <p className="mb-8" style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '800px' }}>
          Real tools for real freedom — <strong>enterprise-grade infrastructure</strong>, decentralized and user-controlled. No gatekeepers. No censorship. No compromise.
        </p>

        <div className="space-y-6">
          {/* Decentralized DNS */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe size={24} style={{ color: '#6ba3db' }} />
                <CardTitle className="font-mono text-sm" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                  DECENTRALIZED DNS — OWN YOUR NAME FOREVER
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#e6edf3' }}>
                Register domains on the blockchain — <strong>no renewals, no expiration, no seizure</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e' }}>Features</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9d1d9' }}>
                    <li>→ True ownership — your domain is yours forever</li>
                    <li>→ No registrars, no middlemen, no annual fees</li>
                    <li>→ Censorship-resistant — no one can take it down</li>
                    <li>→ Instant propagation across the network</li>
                    <li>→ Support for subdomains and wildcard records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e' }}>How it works</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9d1d9' }}>
                    <li>→ Register a .id42 domain on-chain</li>
                    <li>→ Point it to your blockchain address</li>
                    <li>→ Users resolve it through BabelFish nodes</li>
                    <li>→ Updates propagate in seconds</li>
                    <li>→ Works with any service in the ecosystem</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #6ba3db' }}>
                <p className="text-sm" style={{ color: '#c9d1d9' }}>
                  <strong>Example:</strong> <code style={{ backgroundColor: '#0d1117', padding: '2px 6px', borderRadius: '3px' }}>myproject.id42</code> → resolves to your blockchain address, hosting, email, everything.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Web & App Hosting */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Server size={24} style={{ color: '#6ba3db' }} />
                <CardTitle className="font-mono text-sm" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                  WEB & APP HOSTING — DEPLOY ANYWHERE, REACH EVERYWHERE
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#e6edf3' }}>
                Host websites, APIs, and applications on the <strong>global P2P infrastructure</strong> — with automatic CDN, load balancing, and DDoS protection built-in.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>Static Sites</h4>
                  <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
                    HTML, CSS, JS — deployed to the Pears distributed hash table (DHT) and served globally
                  </p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>Dynamic Apps</h4>
                  <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
                    Run backend logic on distributed compute nodes
                  </p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>Databases</h4>
                  <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
                    OrbitDB, Gun, or custom solutions on-chain
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                <li>→ <strong>Global CDN</strong> — content cached at edge nodes worldwide</li>
                <li>→ <strong>Auto-scaling</strong> — network expands based on demand</li>
                <li>→ <strong>Zero downtime</strong> — redundancy across thousands of nodes</li>
                <li>→ <strong>No server management</strong> — just deploy and forget</li>
              </ul>
            </CardContent>
          </Card>

          {/* Encrypted Email & Messaging */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Mail size={24} style={{ color: '#6ba3db' }} />
                <CardTitle className="font-mono text-sm" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                  ENCRYPTED EMAIL & MESSAGING — PRIVATE BY DEFAULT
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#e6edf3' }}>
                End-to-end encrypted communication that <strong>no one can intercept, read, or censor</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e' }}>Email</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9d1d9' }}>
                    <li>→ your-name@your-domain.id42</li>
                    <li>→ PGP encryption built-in</li>
                    <li>→ No scanning, no tracking, no ads</li>
                    <li>→ Stored encrypted on the network</li>
                    <li>→ Compatible with standard email clients</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e' }}>Messaging</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9d1d9' }}>
                    <li>→ Direct P2P messaging</li>
                    <li>→ Group chats with perfect forward secrecy</li>
                    <li>→ File sharing up to any size</li>
                    <li>→ Video & voice calls (coming soon)</li>
                    <li>→ Anonymous messaging option</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #8b949e' }}>
                <p className="text-sm italic" style={{ color: '#c9d1d9' }}>
                  "Privacy is necessary for an open society in the electronic age." — Eric Hughes
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Distributed File Storage */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <HardDrive size={24} style={{ color: '#6ba3db' }} />
                <CardTitle className="font-mono text-sm" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                  DISTRIBUTED FILE STORAGE — YOUR DATA, EVERYWHERE AND NOWHERE
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#e6edf3' }}>
                Store files across the network with <strong>redundancy, encryption, and permanence</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e' }}>How it works</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9d1d9' }}>
                    <li>→ Files split into encrypted chunks</li>
                    <li>→ Distributed across multiple nodes</li>
                    <li>→ Redundancy ensures availability</li>
                    <li>→ Only you have the decryption key</li>
                    <li>→ Content-addressed (like IPFS)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-3" style={{ color: '#8b949e' }}>Use cases</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#c9d1d9' }}>
                    <li>→ Personal backup and sync</li>
                    <li>→ Media hosting (images, videos)</li>
                    <li>→ Document sharing</li>
                    <li>→ Archival storage</li>
                    <li>→ NFT asset storage</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>Storage Economics</h4>
                <p className="text-sm mb-2" style={{ color: '#c9d1d9' }}>
                  Pay once, store forever. Or contribute your storage and earn Fish tokens.
                </p>
                <p className="text-sm" style={{ color: '#8b949e' }}>
                  The network self-balances supply and demand through algorithmic pricing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cloud Computing */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Network size={24} style={{ color: '#6ba3db' }} />
                <CardTitle className="font-mono text-sm" style={{ color: '#8b949e', letterSpacing: '0.05em' }}>
                  DISTRIBUTED CLOUD COMPUTING — SERVERLESS, LITERALLY
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#e6edf3' }}>
                Run computations on the network — <strong>from simple functions to complex AI workloads</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>Functions</h4>
                  <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
                    Deploy serverless functions that run on-demand
                  </p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>Containers</h4>
                  <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
                    Run Docker containers across the mesh
                  </p>
                </div>
                <div className="p-4 rounded" style={{ backgroundColor: '#161b22' }}>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#6ba3db' }}>GPUs</h4>
                  <p className="text-sm" style={{ opacity: 0.85, color: '#c9d1d9' }}>
                    Access distributed GPU power for AI/ML
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                <li>→ <strong>Pay per execution</strong> — only pay for what you use</li>
                <li>→ <strong>Auto-scaling</strong> — from 1 to 1,000,000 requests</li>
                <li>→ <strong>Global edge computing</strong> — runs close to your users</li>
                <li>→ <strong>Earn by sharing</strong> — contribute compute and earn tokens</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* How it All Connects */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          How It All Connects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-4">
            <p style={{ fontSize: '1.1rem', color: '#c9d1d9' }}>
              Every service runs on <strong style={{ color: '#e6edf3' }}>BabelFish Network</strong>. Every transaction settles on the <strong style={{ color: '#e6edf3' }}>Infinite Improbability Drive blockchain</strong>. Everything is powered by <strong style={{ color: '#e6edf3' }}>Improbability [42]</strong> and <strong style={{ color: '#e6edf3' }}>Fish</strong>.
            </p>
            <p style={{ color: '#c9d1d9' }}>
              This is not a collection of separate products — it's a <strong style={{ color: '#e6edf3' }}>unified ecosystem</strong> where every part strengthens the whole.
            </p>
          </div>
          <div>
            <ImageWithFallback 
              src={connectedSystemsImage}
              alt="Connected systems"
              className="w-full h-full object-cover rounded"
              style={{ minHeight: '250px', maxHeight: '350px', opacity: 0.8 }}
            />
          </div>
        </div>

        <div className="p-8 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #6ba3db' }}>
          <h3 className="font-mono mb-4 text-center" style={{ fontSize: '1.3rem', color: '#6ba3db', letterSpacing: '0.05em' }}>
            THE STACK
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: '#161b22' }}>
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '150px' }}>Layer 5</div>
              <div>
                <strong style={{ color: '#e6edf3' }}>User-Created Universes</strong>
                <p className="text-sm" style={{ color: '#8b949e' }}>Websites, apps, games, metaverses — built by users</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: '#161b22' }}>
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '150px' }}>Layer 4</div>
              <div>
                <strong style={{ color: '#e6edf3' }}>Sovereign Services</strong>
                <p className="text-sm" style={{ color: '#8b949e' }}>DNS, hosting, email, storage, compute</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: '#161b22' }}>
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '150px' }}>Layer 3</div>
              <div>
                <strong style={{ color: '#e6edf3' }}>BabelFish Network</strong>
                <p className="text-sm" style={{ color: '#8b949e' }}>Global P2P mesh, routing, and connectivity</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: '#161b22' }}>
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '150px' }}>Layer 2</div>
              <div>
                <strong style={{ color: '#e6edf3' }}>Economic Layer</strong>
                <p className="text-sm" style={{ color: '#8b949e' }}>Fish token — earned through network contributions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded" style={{ backgroundColor: '#161b22' }}>
              <div className="font-mono" style={{ color: '#6ba3db', minWidth: '150px' }}>Layer 1</div>
              <div>
                <strong style={{ color: '#e6edf3' }}>Infinite Improbability Drive</strong>
                <p className="text-sm" style={{ color: '#8b949e' }}>Blockchain core, [42] token, governance and security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Blockchain Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
              The Blockchain
            </h2>
            <div className="space-y-4">
              <p style={{ fontSize: '1.1rem', color: '#c9d1d9' }}>
                At the heart of everything sits the <strong style={{ color: '#e6edf3' }}>Infinite Improbability Drive</strong> — our blockchain that makes the impossible, improbable.
              </p>
              <p style={{ color: '#c9d1d9' }}>
                Named after Douglas Adams' revolutionary engine, it powers governance with <strong style={{ color: '#e6edf3' }}>[42]</strong> tokens and rewards network contributors with <strong style={{ color: '#e6edf3' }}>Fish</strong> tokens.
              </p>
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                <li>→ <strong style={{ color: '#e6edf3' }}>[42]</strong> — Governance and utility token for staking and voting</li>
                <li>→ <strong style={{ color: '#e6edf3' }}>Fish</strong> — Earned by contributing storage, compute, and bandwidth</li>
                <li>→ <strong style={{ color: '#e6edf3' }}>DAO governance</strong> — decisions made on-chain by the community</li>
                <li>→ <strong style={{ color: '#e6edf3' }}>Proof of Contribution</strong> — rewards those who build and maintain</li>
                <li>→ <strong style={{ color: '#e6edf3' }}>Hyperspace bypasses</strong> — native bridges to Bitcoin, Ethereum, Cosmos, and beyond</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
              <Database size={48} className="mb-4" style={{ color: '#6ba3db' }} />
              <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
                INFINITE IMPROBABILITY DRIVE
              </h3>
              <p className="mb-4" style={{ color: '#c9d1d9' }}>
                A sovereign blockchain designed for a digital nation — where trust meets Bistromathics.
              </p>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('/blockchain')}
                  className="px-6 py-3 rounded font-mono transition-all"
                  style={{ 
                    backgroundColor: '#6ba3db', 
                    color: '#0d1117',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8dbde8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#6ba3db';
                  }}
                >
                  Explore the Blockchain →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Get Started */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Start Using The Network
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
              AS A USER
            </h3>
            <ul className="space-y-2 text-sm mb-4" style={{ color: '#c9d1d9' }}>
              <li>1. Join our Telegram community</li>
              <li>2. Follow development updates</li>
              <li>3. Be among the first to test</li>
              <li>4. Get early access to the network</li>
              <li>5. Connect with other builders</li>
            </ul>
            <a
              href="https://t.me/+nt8ysid_-8VlMDVh"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded font-mono transition-all text-sm"
              style={{
                backgroundColor: '#6ba3db',
                color: '#0d1117',
                textDecoration: 'none',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8dbde8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6ba3db';
              }}
            >
              Join Telegram Community →
            </a>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
              AS A BUILDER
            </h3>
            <ul className="space-y-2 text-sm mb-4" style={{ color: '#c9d1d9' }}>
              <li>1. Access the developer resources</li>
              <li>2. Contribute to open source</li>
              <li>3. Shape the future of the network</li>
              <li>4. Earn Fish for contributions</li>
              <li>5. Deploy your projects early</li>
            </ul>
            <a
              href="https://t.me/+nt8ysid_-8VlMDVh"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 rounded font-mono transition-all text-sm"
              style={{
                backgroundColor: '#6ba3db',
                color: '#0d1117',
                textDecoration: 'none',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8dbde8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6ba3db';
              }}
            >
              Get Involved →
            </a>
          </div>
        </div>

        <div className="mt-8 p-6 rounded text-center" style={{ 
          backgroundColor: '#161b22', 
          border: '1px solid #30363d'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#e6edf3', marginBottom: '1rem' }}>
            <strong>This is infrastructure for everyone.</strong>
          </p>
          <p style={{ opacity: 0.8, color: '#c9d1d9' }}>
            From individuals to enterprises — democratizing tools once controlled by the kraken.
          </p>
        </div>
      </section>

    </main>
  );
}
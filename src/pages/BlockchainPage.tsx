import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function BlockchainPage() {
  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <h1 className="font-mono mb-4" style={{ fontSize: '2.5rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Infinite Improbability Drive
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#c9d1d9', maxWidth: '800px' }}>
          The blockchain foundation that powers Project 42 — where <strong>trust meets Bistromathics</strong>.
        </p>
      </div>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Introduction */}
      <section className="mb-16">
        <div className="mb-8 p-6 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '2px solid #8b949e' }}>
          <blockquote className="italic" style={{ color: '#c9d1d9' }}>
            "Trust math, not men."
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: '#8b949e' }}>
            — Satoshi Nakamoto
          </p>
        </div>
        
        <p style={{ fontSize: '1.1rem', color: '#c9d1d9', marginBottom: '1.5rem' }}>
          The <strong style={{ color: '#e6edf3' }}>Infinite Improbability Drive</strong> is the security and economic heart of Project 42 — a sovereign protocol that powers governance and secures the entire ecosystem.
        </p>
        
        <p style={{ color: '#c9d1d9' }}>
          Named after Douglas Adams' revolutionary engine from <em>The Hitchhiker's Guide to the Galaxy</em>, our blockchain makes the improbable possible — a truly sovereign digital nation.
        </p>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Core Components */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Core Components
        </h2>

        <div className="space-y-6">
          {/* Improbability Token */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <CardTitle className="font-mono text-sm" style={{ color: '#c9d1d9', letterSpacing: '0.05em' }}>
                IMPROBABILITY [42] — GOVERNANCE & UTILITY TOKEN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#c9d1d9' }}>
                The <strong style={{ color: '#e6edf3' }}>governance and utility token</strong> that keeps the blockchain alive — used for staking, voting, and securing the network.
              </p>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span style={{ color: '#8b949e', display: 'block', marginBottom: '0.5rem' }}>Purpose</span>
                    <span style={{ color: '#c9d1d9' }}>Governance, staking, network security, and protocol fees</span>
                  </div>
                  <div>
                    <span style={{ color: '#8b949e', display: 'block', marginBottom: '0.5rem' }}>Total Supply</span>
                    <span style={{ color: '#c9d1d9' }}>100 million cups of Improbability [42]</span>
                  </div>
                  <div>
                    <span style={{ color: '#8b949e', display: 'block', marginBottom: '0.5rem' }}>Release Schedule</span>
                    <span style={{ color: '#c9d1d9' }}>Locked at genesis, released gradually over <strong>42 years</strong></span>
                  </div>
                  <div>
                    <span style={{ color: '#8b949e', display: 'block', marginBottom: '0.5rem' }}>At Launch</span>
                    <span style={{ color: '#c9d1d9' }}>Only <strong>100 cups</strong> in circulation — earned by first guardians</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded mt-4" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #6ba3db' }}>
                <p className="text-sm" style={{ color: '#c9d1d9' }}>
                  <strong>Key Use:</strong> Stake Improbability [42] to participate in consensus, vote on proposals, and earn protocol rewards.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Fish Token */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <CardTitle className="font-mono text-sm" style={{ color: '#c9d1d9', letterSpacing: '0.05em' }}>
                FISH — NETWORK CONTRIBUTION & LIQUIDITY TOKEN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#c9d1d9' }}>
                The <strong style={{ color: '#e6edf3' }}>reward token</strong> earned by contributing to the network — a living current of value born from network activity.
              </p>
              <div className="mb-4 p-4 rounded" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #6ba3db' }}>
                <p className="text-sm" style={{ color: '#c9d1d9' }}>
                  <strong>How to Earn Fish:</strong> Share storage, provide compute power, host services, run BabelFish nodes, or contribute bandwidth to the P2P network.
                </p>
              </div>
              <ul className="space-y-2 text-sm ml-4" style={{ listStyleType: 'none', color: '#c9d1d9' }}>
                <li>→ Earned through network contributions (storage, compute, bandwidth)</li>
                <li>→ Provides liquidity between [42], Bitcoin, and stablecoins</li>
                <li>→ Stabilizes the ecosystem economy</li>
                <li>→ Created algorithmically based on network usage</li>
                <li>→ Can be traded for [42] or other assets</li>
              </ul>
              <p className="text-sm italic" style={{ color: '#8b949e' }}>
                See how Fish works → <span style={{ wordBreak: 'break-all' }}>infinitedrive.xyz/fish</span>
              </p>
            </CardContent>
          </Card>

          {/* Governance */}
          <Card style={{ backgroundColor: '#1c2128', borderColor: '#444c56', border: '1px solid' }}>
            <CardHeader>
              <CardTitle className="font-mono text-sm" style={{ color: '#c9d1d9', letterSpacing: '0.05em' }}>
                GOVERNANCE — POWER TO THE PEOPLE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p style={{ color: '#c9d1d9' }}>
                Project 42 is a <strong style={{ color: '#e6edf3' }}>DAO from day one</strong> — ruled by code, governed by contributors.
              </p>
              <div className="space-y-3" style={{ color: '#c9d1d9' }}>
                <p>→ <strong>No founders. No investors. No bosses.</strong></p>
                <p>→ <strong>Deep Thought Labs</strong> → a research sanctuary, funded by the DAO, serving the mission</p>
                <p>→ <strong>42-year horizon</strong> → we are building for generations, not quarters</p>
                <p>→ <strong>Decisions made on-chain</strong> → transparent, immutable, and fair</p>
              </div>
              <div className="p-4 rounded mt-4" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #6ba3db' }}>
                <p className="text-sm italic" style={{ color: '#c9d1d9' }}>
                  "We have no elected government — and we don't want one."
                </p>
                <p className="mt-2 text-sm" style={{ color: '#8b949e' }}>
                  — John Perry Barlow
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Master Pools - Token Distribution */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Master Pools: Token Distribution
        </h2>
        
        <p className="mb-6" style={{ fontSize: '1.1rem', color: '#c9d1d9' }}>
          The 100 million <strong style={{ color: '#e6edf3' }}>cups of Improbability [42]</strong> are <strong style={{ color: '#e6edf3' }}>locked at genesis</strong> and released gradually over <strong style={{ color: '#e6edf3' }}>42 years</strong>, controlled by the DAO from block 1.
        </p>

        <p className="mb-4" style={{ color: '#c9d1d9' }}>
          At launch, <strong style={{ color: '#e6edf3' }}>practically 0% liquid tokens</strong> circulate in the market. New tokens are generated exclusively through <strong style={{ color: '#e6edf3' }}>chain inflation</strong>, awarded directly by the protocol to <strong style={{ color: '#e6edf3' }}>validators</strong> as rewards for securing the network.
        </p>

        <div className="mb-6 p-4 rounded" style={{ backgroundColor: '#161b22', borderLeft: '2px solid #8b949e' }}>
          <p className="text-sm" style={{ color: '#c9d1d9' }}>
            <strong style={{ color: '#e6edf3' }}>Note on liquidity:</strong> While nearly all tokens remain locked, the <strong style={{ color: '#6ba3db' }}>Fish Bootstrap pool</strong> is strategically deployed to populate liquidity pools across markets. This distribution is algorithmically managed through the <strong style={{ color: '#6ba3db' }}>Fish protocol</strong> — an intelligent mechanism that balances market liquidity with long-term sustainability. Details on Fish's algorithmic behavior and tokenomics are covered in its dedicated protocol documentation.
          </p>
        </div>

        <p className="mb-8" style={{ color: '#c9d1d9' }}>
          Validators are the first to <strong style={{ color: '#e6edf3' }}>receive tokens</strong> and introduce them to the market. Additionally, these pools are continuously refinanced through <strong style={{ color: '#e6edf3' }}>transaction fee collection</strong>, ensuring perpetual sustainability.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse" style={{ backgroundColor: '#1c2128' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #30363d' }}>
                <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Pool</th>
                <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>%</th>
                <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Purpose</th>
                <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Annual Unlock</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #21262d' }}>
                <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>A. Strategic Delegation</strong></td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>40%</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Never spent — only delegated</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>1.33M</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #21262d' }}>
                <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>B. Security Rewards</strong></td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>25%</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Validator + staker rewards</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>0.83M</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #21262d' }}>
                <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>C. Perpetual R&D (Lab)</strong></td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>15%</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Institutional funding</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>0.50M</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #21262d' }}>
                <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>D. Fish Bootstrap</strong></td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>10%</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Seed liquidity pools</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>0.33M</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #21262d' }}>
                <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>E. Privacy & Resistance</strong></td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>7%</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>ZK, anti-censura R&D</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>0.23M</td>
              </tr>
              <tr>
                <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>F. Community Growth</strong></td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>3%</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>Grants, education, integrations</td>
                <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>0.10M</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 rounded" style={{ backgroundColor: '#161b22', borderLeft: '3px solid #6ba3db' }}>
          <p style={{ color: '#c9d1d9', fontStyle: 'italic' }}>
            <strong style={{ color: '#e6edf3' }}>All tokens locked. Released gradually. Controlled by DAO.</strong>
          </p>
          <p className="mt-3 text-sm" style={{ color: '#8b949e' }}>
            This distribution ensures long-term alignment, prevents dumping, and creates a self-sustaining economic model where transaction fees continuously refinance the pools for perpetual operation.
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Hyperspace Bypasses - Interoperability */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Hyperspace Bypasses: Cross-Chain Highways
        </h2>

        <div className="mb-6 p-6 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '2px solid #8b949e' }}>
          <blockquote className="italic" style={{ color: '#c9d1d9' }}>
            "The plans for the demolition of Earth were on display at the local planning department in Alpha Centauri for fifty of your Earth years... If you can't be bothered to take an interest in local affairs, that's your own lookout."
          </blockquote>
          <p className="mt-2 text-sm" style={{ color: '#8b949e' }}>
            — Douglas Adams, The Hitchhiker's Guide to the Galaxy
          </p>
        </div>

        <p className="mb-6" style={{ fontSize: '1.1rem', color: '#c9d1d9' }}>
          Just as the Vogons built <strong style={{ color: '#e6edf3' }}>hyperspace bypasses</strong> across the galaxy, Project 42 maintains <strong style={{ color: '#e6edf3' }}>direct highways</strong> between blockchain ecosystems — frictionless pathways for tokens, data, and value.
        </p>

        <p className="mb-8" style={{ color: '#c9d1d9' }}>
          No wormholes. No delays. No bureaucratic paperwork filed in triplicate. Just <strong style={{ color: '#e6edf3' }}>instant, trustless transfers</strong> across the cryptoverse.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #444c56' }}>
            <h3 className="font-mono mb-4" style={{ fontSize: '1.2rem', color: '#6ba3db', letterSpacing: '0.05em' }}>
              NATIVE INTEROPERABILITY
            </h3>
            <div className="space-y-3 text-sm" style={{ color: '#c9d1d9' }}>
              <p>
                <strong style={{ color: '#e6edf3' }}>IBC Protocol (Inter-Blockchain Communication)</strong>
              </p>
              <p>→ Native connection to the entire Cosmos ecosystem</p>
              <p>→ Trustless, permissionless token transfers</p>
              <p>→ Composable cross-chain smart contracts</p>
              <p>→ Share state and data across sovereign chains</p>
            </div>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #444c56' }}>
            <h3 className="font-mono mb-4" style={{ fontSize: '1.2rem', color: '#6ba3db', letterSpacing: '0.05em' }}>
              BRIDGES TO LEGACY CHAINS
            </h3>
            <div className="space-y-3 text-sm" style={{ color: '#c9d1d9' }}>
              <p>
                <strong style={{ color: '#e6edf3' }}>Ethereum & EVM Chains</strong>
              </p>
              <p>→ Bidirectional bridges for ETH, ERC-20, and NFTs</p>
              <p>→ Full smart contract compatibility</p>
              <p className="pt-2">
                <strong style={{ color: '#e6edf3' }}>Bitcoin Network</strong>
              </p>
              <p>→ Wrapped BTC with proof-of-reserve</p>
              <p>→ Lightning Network integration (coming)</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded mb-6" style={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}>
          <h3 className="font-mono mb-4 text-center" style={{ fontSize: '1.3rem', color: '#6ba3db', letterSpacing: '0.05em' }}>
            CONNECTED ECOSYSTEMS
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Ethereum</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>EVM Bridge</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Bitcoin</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>BTC Wrapper</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Cosmos Hub</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>IBC Native</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Osmosis</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>IBC Native</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Polygon</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>EVM Bridge</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Arbitrum</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>EVM Bridge</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Akash</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>IBC Native</p>
            </div>
            <div className="p-3 rounded" style={{ backgroundColor: '#1c2128' }}>
              <p className="font-mono text-sm" style={{ color: '#e6edf3' }}>Celestia</p>
              <p className="text-xs mt-1" style={{ color: '#8b949e' }}>IBC Native</p>
            </div>
          </div>

          <p className="text-sm text-center mt-6 italic" style={{ color: '#8b949e' }}>
            And many more through the expanding IBC universe and bridge protocols...
          </p>
        </div>

        <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', borderLeft: '3px solid #6ba3db' }}>
          <p style={{ color: '#c9d1d9' }}>
            <strong style={{ color: '#e6edf3' }}>Why it matters:</strong> Your [42] tokens, Fish rewards, and assets aren't trapped in a walled garden. Move them freely across ecosystems. Trade on any DEX. Use them in any protocol. The multiverse is open.
          </p>
          <p className="mt-3 text-sm italic" style={{ color: '#8b949e' }}>
            Unlike Earth's demolition, these hyperspace bypasses are well-documented and accessible to everyone.
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Technical Architecture Section */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          Technical Architecture
        </h2>

        {/* Full-Stack Sovereign Internet Layer */}
        <div className="mb-12">
          <h3 className="mb-6 font-mono" style={{ fontSize: '1.5rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
            Full-Stack Sovereign Internet Layer
          </h3>
          
          <p className="mb-6" style={{ fontSize: '1.1rem', color: '#c9d1d9' }}>
            Infinite Improbability Drive is not just a blockchain — it's a <strong style={{ color: '#e6edf3' }}>complete internet stack</strong> built for sovereignty.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" style={{ backgroundColor: '#1c2128' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Layer</th>
                  <th className="text-left py-3 px-4 font-mono text-sm" style={{ color: '#8b949e' }}>Function</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #21262d' }}>
                  <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>Consensus</strong></td>
                  <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>CometBFT — no single point of failure</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #21262d' }}>
                  <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>Execution</strong></td>
                  <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>EVM (Solidity) + Cosmos SDK</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #21262d' }}>
                  <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>Interoperability</strong></td>
                  <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>IBC-Go, Bitcoin/Ethereum bridges</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #21262d' }}>
                  <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>Fee Market</strong></td>
                  <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>EIP-1559 (burn + tip)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #21262d' }}>
                  <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>P2P Infrastructure</strong></td>
                  <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>BabelFish Nodes (storage, compute, DNS)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4" style={{ color: '#6ba3db' }}><strong>Privacy</strong></td>
                  <td className="py-3 px-4" style={{ color: '#c9d1d9' }}>ZK modules, anonymous routing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#161b22', borderLeft: '3px solid #6ba3db' }}>
            <p style={{ color: '#c9d1d9', fontStyle: 'italic' }}>
              <strong style={{ color: '#e6edf3' }}>Forward-compatible with Ethereum. Runs every valid contract. Adds features Ethereum doesn't have yet.</strong>
            </p>
            <p className="mt-3 text-sm" style={{ color: '#8b949e' }}>
              Deploy your Ethereum dApp today — it will work without modification. But you'll get faster blocks, lower fees, native IBC bridges, and integrated P2P infrastructure.
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div>
          <h3 className="mb-6 font-mono" style={{ fontSize: '1.5rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
            Specifications
          </h3>
          
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #444c56' }}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#8b949e' }}>Consensus Mechanism</h4>
                  <p style={{ color: '#c9d1d9' }}>Proof of Contribution + Byzantine Fault Tolerance</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#8b949e' }}>Block Time</h4>
                  <p style={{ color: '#c9d1d9' }}>~5 seconds (optimized for user experience)</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#8b949e' }}>Smart Contracts</h4>
                  <p style={{ color: '#c9d1d9' }}>Full Turing-complete VM with formal verification</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#8b949e' }}>Interoperability</h4>
                  <p style={{ color: '#c9d1d9' }}>Native bridges to Bitcoin, Ethereum, and major chains</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#8b949e' }}>Token Standards</h4>
                  <p style={{ color: '#c9d1d9' }}>[42] for governance, Fish for contributions and liquidity</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm mb-2" style={{ color: '#8b949e' }}>Network Security</h4>
                  <p style={{ color: '#c9d1d9' }}>Multi-layered with cryptographic proofs and stake-based validation</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-sm italic mt-4" style={{ color: '#8b949e' }}>
            For detailed technical documentation → <span style={{ wordBreak: 'break-all' }}>docs.infinitedrive.xyz</span>
          </p>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* How to Participate */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono" style={{ fontSize: '2rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
          How to Participate
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              STAKE [42]
            </h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.95rem' }}>
              Secure the blockchain and earn rewards. Your stake validates transactions and protects the network.
            </p>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              BUILD & CONTRIBUTE
            </h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.95rem' }}>
              Develop applications, improve infrastructure, create value. Earn Fish for network contributions.
            </p>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              GOVERN
            </h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.95rem' }}>
              Vote on proposals, shape the future. Every [42] token holder has a voice in the DAO.
            </p>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

      {/* Final Note */}
      <div className="p-8 rounded text-center mb-16" style={{ backgroundColor: '#1c2128', border: '1px solid #6ba3db' }}>
        <p className="font-mono mb-2" style={{ fontSize: '1.2rem', color: '#6ba3db', letterSpacing: '0.05em' }}>
          "The Infinite Improbability Drive is a wonderful new method of crossing vast interstellar distances."
        </p>
        <p className="text-sm" style={{ color: '#8b949e' }}>
          — Douglas Adams, The Hitchhiker's Guide to the Galaxy
        </p>
      </div>

    </main>
  );
}
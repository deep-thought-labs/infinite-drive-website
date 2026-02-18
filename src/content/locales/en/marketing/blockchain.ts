/**
 * Contenido página Blockchain — inglés.
 */

import type { LocaleBlockchain } from "../../types";

export const blockchain: LocaleBlockchain = {
  header: {
    title: "Infinite Improbability Drive",
    subtitle: [
      { type: "text", content: "The blockchain foundation that powers Project 42 — where " },
      { type: "bold", content: "trust meets Bistromathics" },
      { type: "text", content: "." },
    ],
  },
  intro: {
    quote: "Trust math, not men.",
    quoteAuthor: "Satoshi Nakamoto",
    paragraphs: [
      [
        { type: "text", content: "The " },
        { type: "bold", content: "Infinite Improbability Drive" },
        { type: "text", content: " is the security and economic heart of Project 42 — a sovereign protocol that powers governance and secures the entire ecosystem." },
      ],
      "Named after Douglas Adams' revolutionary engine from The Hitchhiker's Guide to the Galaxy, our blockchain makes the improbable possible — a truly sovereign digital nation.",
    ],
  },
  coreComponents: {
    title: "Core Components",
    token42: {
      title: "IMPROBABILITY [42] — GOVERNANCE & UTILITY TOKEN",
      summary: [
        { type: "text", content: "The " },
        { type: "bold", content: "governance and utility token" },
        { type: "text", content: " that keeps the blockchain alive — used for staking, voting, and securing the network." },
      ],
      purpose: "Purpose",
      purposeValue: "Governance, staking, network security, and protocol fees",
      totalSupply: "Total Supply",
      totalSupplyValue: "100 million cups of Improbability [42]",
      releaseSchedule: "Release Schedule",
      releaseScheduleValue: [
        { type: "text", content: "Locked at genesis, released gradually over " },
        { type: "bold", content: "42 years" },
      ],
      atLaunch: "At Launch",
      atLaunchValue: [
        { type: "text", content: "Only " },
        { type: "bold", content: "100 cups" },
        { type: "text", content: " in circulation — earned by first guardians" },
      ],
      keyUse: [
        { type: "bold", content: "Key Use: " },
        { type: "text", content: "Stake Improbability [42] to participate in consensus, vote on proposals, and earn protocol rewards." },
      ],
    },
    fish: {
      title: "FISH — NETWORK CONTRIBUTION & LIQUIDITY TOKEN",
      summary: [
        { type: "text", content: "The " },
        { type: "bold", content: "reward token" },
        { type: "text", content: " earned by contributing to the network — a living current of value born from network activity." },
      ],
      howToEarn: [
        { type: "bold", content: "How to Earn Fish: " },
        { type: "text", content: "Share storage, provide compute power, host services, run BabelFish nodes, or contribute bandwidth to the P2P network." },
      ],
      bullets: [
        "Earned through network contributions (storage, compute, bandwidth)",
        "Provides liquidity between [42], Bitcoin, and stablecoins",
        "Stabilizes the ecosystem economy",
        "Created algorithmically based on network usage",
        "Can be traded for [42] or other assets",
      ],
      seeHow: "See how Fish works → infinitedrive.xyz/fish",
    },
    governance: {
      title: "GOVERNANCE — POWER TO THE PEOPLE",
      summary: [
        { type: "text", content: "Project 42 is a " },
        { type: "bold", content: "DAO from day one" },
        { type: "text", content: " — ruled by code, governed by contributors." },
      ],
      points: [
        [{ type: "bold", content: "No founders. No investors. No bosses." }],
        [
          { type: "bold", content: "Deep Thought Labs" },
          { type: "text", content: " → a research sanctuary, funded by the DAO, serving the mission" },
        ],
        [
          { type: "bold", content: "42-year horizon" },
          { type: "text", content: " → we are building for generations, not quarters" },
        ],
        [
          { type: "bold", content: "Decisions made on-chain" },
          { type: "text", content: " → transparent, immutable, and fair" },
        ],
      ],
      quote: "We have no elected government — and we don't want one.",
      quoteAuthor: "John Perry Barlow",
    },
  },
  masterPools: {
    title: "Master Pools: Token Distribution",
    paragraphs: [
      [
        { type: "text", content: "The 100 million " },
        { type: "bold", content: "cups of Improbability [42]" },
        { type: "text", content: " are " },
        { type: "bold", content: "locked at genesis" },
        { type: "text", content: " and released gradually over " },
        { type: "bold", content: "42 years" },
        { type: "text", content: ", controlled by the DAO from block 1." },
      ],
      [
        { type: "text", content: "At launch, " },
        { type: "bold", content: "practically 0% liquid tokens" },
        { type: "text", content: " circulate in the market. New tokens are generated exclusively through " },
        { type: "bold", content: "chain inflation" },
        { type: "text", content: ", awarded directly by the protocol to " },
        { type: "bold", content: "validators" },
        { type: "text", content: " as rewards for securing the network." },
      ],
      [
        { type: "text", content: "Validators are the first to " },
        { type: "bold", content: "receive tokens" },
        { type: "text", content: " and introduce them to the market. Additionally, these pools are continuously refinanced through " },
        { type: "bold", content: "transaction fee collection" },
        { type: "text", content: ", ensuring perpetual sustainability." },
      ],
    ],
    noteTitle: "Note on liquidity:",
    note: [
      { type: "text", content: "While nearly all tokens remain locked, the " },
      { type: "accent", content: "Fish Bootstrap pool" },
      { type: "text", content: " is strategically deployed to populate liquidity pools across markets. This distribution is algorithmically managed through the " },
      { type: "accent", content: "Fish protocol" },
      { type: "text", content: " — an intelligent mechanism that balances market liquidity with long-term sustainability. Details on Fish's algorithmic behavior and tokenomics are covered in its dedicated protocol documentation." },
    ],
    tableColumns: { pool: "Pool", percent: "%", purpose: "Purpose", annualUnlock: "Annual Unlock" },
    rows: [
      { pool: "A. Strategic Delegation", percent: "40%", purpose: "Never spent — only delegated", annualUnlock: "1.33M" },
      { pool: "B. Security Rewards", percent: "25%", purpose: "Validator + staker rewards", annualUnlock: "0.83M" },
      { pool: "C. Perpetual R&D (Lab)", percent: "15%", purpose: "Institutional funding", annualUnlock: "0.50M" },
      { pool: "D. Fish Bootstrap", percent: "10%", purpose: "Seed liquidity pools", annualUnlock: "0.33M" },
      { pool: "E. Privacy & Resistance", percent: "7%", purpose: "ZK, anti-censura R&D", annualUnlock: "0.23M" },
      { pool: "F. Community Growth", percent: "3%", purpose: "Grants, education, integrations", annualUnlock: "0.10M" },
    ],
    closingTitle: "All tokens locked. Released gradually. Controlled by DAO.",
    closingNote:
      "This distribution ensures long-term alignment, prevents dumping, and creates a self-sustaining economic model where transaction fees continuously refinance the pools for perpetual operation.",
  },
  hyperspace: {
    title: "Hyperspace Bypasses: Cross-Chain Highways",
    quote:
      "The plans for the demolition of Earth were on display at the local planning department in Alpha Centauri for fifty of your Earth years... If you can't be bothered to take an interest in local affairs, that's your own lookout.",
    quoteAuthor: "Douglas Adams, The Hitchhiker's Guide to the Galaxy",
    paragraphs: [
      [
        { type: "text", content: "Just as the Vogons built " },
        { type: "bold", content: "hyperspace bypasses" },
        { type: "text", content: " across the galaxy, Project 42 maintains " },
        { type: "bold", content: "direct highways" },
        { type: "text", content: " between blockchain ecosystems — frictionless pathways for tokens, data, and value." },
      ],
      [
        { type: "text", content: "No wormholes. No delays. No bureaucratic paperwork filed in triplicate. Just " },
        { type: "bold", content: "instant, trustless transfers" },
        { type: "text", content: " across the cryptoverse." },
      ],
    ],
    nativeTitle: "NATIVE INTEROPERABILITY",
    nativeSubtitle: "IBC Protocol (Inter-Blockchain Communication)",
    nativeItems: [
      "Native connection to the entire Cosmos ecosystem",
      "Trustless, permissionless token transfers",
      "Composable cross-chain smart contracts",
      "Share state and data across sovereign chains",
    ],
    bridgesTitle: "BRIDGES TO LEGACY CHAINS",
    bridgesEthereum: "Ethereum & EVM Chains",
    bridgesEthereumItems: [
      "Bidirectional bridges for ETH, ERC-20, and NFTs",
      "Full smart contract compatibility",
    ],
    bridgesBitcoin: "Bitcoin Network",
    bridgesBitcoinItems: ["Wrapped BTC with proof-of-reserve", "Lightning Network integration (coming)"],
    ecosystemsTitle: "CONNECTED ECOSYSTEMS",
    ecosystems: [
      { name: "Ethereum", tag: "EVM Bridge" },
      { name: "Bitcoin", tag: "BTC Wrapper" },
      { name: "Cosmos Hub", tag: "IBC Native" },
      { name: "Osmosis", tag: "IBC Native" },
      { name: "Polygon", tag: "EVM Bridge" },
      { name: "Arbitrum", tag: "EVM Bridge" },
      { name: "Akash", tag: "IBC Native" },
      { name: "Celestia", tag: "IBC Native" },
    ],
    ecosystemsNote: "And many more through the expanding IBC universe and bridge protocols...",
    whyItMatters: [
      { type: "bold", content: "Why it matters: " },
      {
        type: "text",
        content:
          "Your [42] tokens, Fish rewards, and assets aren't trapped in a walled garden. Move them freely across ecosystems. Trade on any DEX. Use them in any protocol. The multiverse is open.",
      },
    ],
    whyItMattersNote:
      "Unlike Earth's demolition, these hyperspace bypasses are well-documented and accessible to everyone.",
  },
  technicalArch: {
    title: "Technical Architecture",
    sectionTitle: "Full-Stack Sovereign Internet Layer",
    sectionIntro: [
      { type: "text", content: "Infinite Improbability Drive is not just a blockchain — it's a " },
      { type: "bold", content: "complete internet stack" },
      { type: "text", content: " built for sovereignty." },
    ],
    tableColumns: { layer: "Layer", function: "Function" },
    tableRows: [
      { layer: "Consensus", function: "CometBFT — no single point of failure" },
      { layer: "Execution", function: "EVM (Solidity) + Cosmos SDK" },
      { layer: "Interoperability", function: "IBC-Go, Bitcoin/Ethereum bridges" },
      { layer: "Fee Market", function: "EIP-1559 (burn + tip)" },
      { layer: "P2P Infrastructure", function: "BabelFish Nodes (storage, compute, DNS)" },
      { layer: "Privacy", function: "ZK modules, anonymous routing" },
    ],
    noteTitle: "Forward-compatible with Ethereum. Runs every valid contract. Adds features Ethereum doesn't have yet.",
    noteParagraphs: [
      "Deploy your Ethereum dApp today — it will work without modification. But you'll get faster blocks, lower fees, native IBC bridges, and integrated P2P infrastructure.",
    ],
    specsTitle: "Specifications",
    specs: [
      { label: "Consensus Mechanism", value: "Proof of Contribution + Byzantine Fault Tolerance" },
      { label: "Block Time", value: "~5 seconds (optimized for user experience)" },
      { label: "Smart Contracts", value: "Full Turing-complete VM with formal verification" },
      { label: "Interoperability", value: "Native bridges to Bitcoin, Ethereum, and major chains" },
      { label: "Token Standards", value: "[42] for governance, Fish for contributions and liquidity" },
      { label: "Network Security", value: "Multi-layered with cryptographic proofs and stake-based validation" },
    ],
    docsNote: "For detailed technical documentation → docs.infinitedrive.xyz",
  },
  howToParticipate: {
    title: "How to Participate",
    cards: [
      {
        title: "STAKE [42]",
        description:
          "Secure the blockchain and earn rewards. Your stake validates transactions and protects the network.",
      },
      {
        title: "BUILD & CONTRIBUTE",
        description:
          "Develop applications, improve infrastructure, create value. Earn Fish for network contributions.",
      },
      {
        title: "GOVERN",
        description:
          "Vote on proposals, shape the future. Every [42] token holder has a voice in the DAO.",
      },
    ],
  },
  finalQuote: {
    quote:
      "The Infinite Improbability Drive is a wonderful new method of crossing vast interstellar distances.",
    author: "Douglas Adams, The Hitchhiker's Guide to the Galaxy",
  },
};

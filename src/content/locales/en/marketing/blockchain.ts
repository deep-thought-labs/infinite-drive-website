/**
 * Contenido página Blockchain — inglés.
 */

import type { LocaleBlockchain } from "../../types";

export const blockchain: LocaleBlockchain = {
  header: {
    title: "Infinite Improbability Drive",
    subtitle:
      "The blockchain foundation that powers Project 42 — where trust meets Bistromathics.",
  },
  intro: {
    quote: "Trust math, not men.",
    quoteAuthor: "Satoshi Nakamoto",
    paragraphs: [
      "The Infinite Improbability Drive is the security and economic heart of Project 42 — a sovereign protocol that powers governance and secures the entire ecosystem.",
      "Named after Douglas Adams' revolutionary engine from The Hitchhiker's Guide to the Galaxy, our blockchain makes the improbable possible — a truly sovereign digital nation.",
    ],
  },
  coreComponents: {
    title: "Core Components",
    token42: {
      title: "IMPROBABILITY [42] — GOVERNANCE & UTILITY TOKEN",
      summary:
        "The governance and utility token that keeps the blockchain alive — used for staking, voting, and securing the network.",
      purpose: "Purpose",
      purposeValue: "Governance, staking, network security, and protocol fees",
      totalSupply: "Total Supply",
      totalSupplyValue: "100 million cups of Improbability [42]",
      releaseSchedule: "Release Schedule",
      releaseScheduleValue: "Locked at genesis, released gradually over 42 years",
      atLaunch: "At Launch",
      atLaunchValue: "Only 100 cups in circulation — earned by first guardians",
      keyUse:
        "Stake Improbability [42] to participate in consensus, vote on proposals, and earn protocol rewards.",
    },
    fish: {
      title: "FISH — NETWORK CONTRIBUTION & LIQUIDITY TOKEN",
      summary:
        "The reward token earned by contributing to the network — a living current of value born from network activity.",
      howToEarn:
        "How to Earn Fish: Share storage, provide compute power, host services, run BabelFish nodes, or contribute bandwidth to the P2P network.",
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
      summary:
        "Project 42 is a DAO from day one — ruled by code, governed by contributors.",
      points: [
        "No founders. No investors. No bosses.",
        "Deep Thought Labs → a research sanctuary, funded by the DAO, serving the mission",
        "42-year horizon → we are building for generations, not quarters",
        "Decisions made on-chain → transparent, immutable, and fair",
      ],
      quote: "We have no elected government — and we don't want one.",
      quoteAuthor: "John Perry Barlow",
    },
  },
  masterPools: {
    title: "Master Pools: Token Distribution",
    paragraphs: [
      "The 100 million cups of Improbability [42] are locked at genesis and released gradually over 42 years, controlled by the DAO from block 1.",
      "At launch, practically 0% liquid tokens circulate in the market. New tokens are generated exclusively through chain inflation, awarded directly by the protocol to validators as rewards for securing the network.",
      "Validators are the first to receive tokens and introduce them to the market. Additionally, these pools are continuously refinanced through transaction fee collection, ensuring perpetual sustainability.",
    ],
    noteTitle: "Note on liquidity:",
    note: "While nearly all tokens remain locked, the Fish Bootstrap pool is strategically deployed to populate liquidity pools across markets. This distribution is algorithmically managed through the Fish protocol — an intelligent mechanism that balances market liquidity with long-term sustainability. Details on Fish's algorithmic behavior and tokenomics are covered in its dedicated protocol documentation.",
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
      "Just as the Vogons built hyperspace bypasses across the galaxy, Project 42 maintains direct highways between blockchain ecosystems — frictionless pathways for tokens, data, and value.",
      "No wormholes. No delays. No bureaucratic paperwork filed in triplicate. Just instant, trustless transfers across the cryptoverse.",
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
    sectionIntro:
      "Infinite Improbability Drive is not just a blockchain — it's a complete internet stack built for sovereignty.",
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

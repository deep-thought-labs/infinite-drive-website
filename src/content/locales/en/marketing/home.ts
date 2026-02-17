/**
 * Contenido página Home — inglés.
 */

import type { LocaleHome } from "../../types";

export const home: LocaleHome = {
  hero: {
    title: "INFINITE DRIVE",
    subtitle: "The Engine of Digital Freedom",
    imageKey: "dontpanic",
  },
  quote: {
    text: "Space is big. Really big. You just won't believe how vastly, hugely, mind-bogglingly big it is.",
    author: "Douglas Adams",
  },
  ecosystemIntro:
    "A complete digital ecosystem — a new kind of internet built from the ground up.",
  features: [
    {
      title: "SECURE FOUNDATION",
      description: "A blockchain that rewards builders and secures the network",
    },
    {
      title: "GLOBAL P2P NETWORK",
      description: "BabelFish Network — millions of devices forming a planetary mesh",
    },
    {
      title: "SOVEREIGN SERVICES",
      description: "DNS, hosting, email, storage — all decentralized and user-controlled",
    },
    {
      title: "YOUR UNIVERSE",
      description: "Build websites, metaverses, games — you own it all",
    },
  ],
  ctas: [
    { label: "Explore Project 42 →", href: "/project42", internal: true },
    { label: "Explore the BabelFish Network", href: "/services", internal: true },
    { label: "Discover the Foundation", href: "/blockchain", internal: true },
  ],
  joinSection: {
    title: "Join the Movement",
    description:
      "Follow our development, connect with builders, and be part of building a sovereign digital future.",
    ctaLabel: "Join Telegram Community →",
  },
  openSourceNote:
    "100% Open Source. Every protocol. Every service. Every line of code — built in the open, owned by humanity.",
  closingBlock: {
    title: "This is infrastructure for everyone.",
    subtitle:
      "From individuals to enterprises — democratizing tools once controlled by the kraken.",
  },
};

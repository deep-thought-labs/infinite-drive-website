# Registro de textos — producción (infinitedrive.xyz)

Documento generado a partir del escaneo de las páginas en producción.

**Para obtener el HTML completo con estilos (negritas, colores):** ejecutar `npm run dump:production-html` y revisar los archivos en `docs/production-snapshots/`. Ver [HOW-TO-GET-PRODUCTION-HTML.md](./HOW-TO-GET-PRODUCTION-HTML.md). Para cada bloque se indica el **texto exacto** y, cuando está documentado o es inferible, las **variantes de estilo** (parte en negrita, parte normal, color, etc.). Donde el escaneo no puede determinar estilos por fragmento, se indica *Verificar en navegador*.

**Estilos extraídos del HTML y validación OK/Gap:** ver [PRODUCTION-STYLES-FROM-HTML.md](./PRODUCTION-STYLES-FROM-HTML.md) — lista por página qué va en `<strong>`, acento, etc., y si nuestra implementación coincide o no.

---

## Home (/)

| Sección / ubicación | Texto | Rol | Variantes de estilo (producción) |
|---------------------|--------|-----|-----------------------------------|
| Marca / nav | Infinite Drive | Marca | — |
| Hero título | INFINITE DRIVE | H1 | Mayúsculas; tamaño grande; letter-spacing |
| Hero subtítulo | The Engine of Digital Freedom | Subtítulo | Color más suave / muted |
| Párrafo bajo hero | A complete digital ecosystem — a new kind of internet built from the ground up. | Lead | *Según feedback:* solo **"complete digital ecosystem"** en negrita; resto normal. Verificar. |
| Cita | "Space is big. Really big. You just won't believe how vastly, hugely, mind-bogglingly big it is." | Blockquote | Itálica; bloque con borde/card |
| Autor cita | — Douglas Adams | Atribución | Tamaño menor, muted |
| Párrafo | Infinite Drive is not just storage. It's a living infrastructure that powers a sovereign digital nation. | Body | Normal |
| Card 1 título | SECURE FOUNDATION | H3 / card title | Mayúsculas; centrado; color acento |
| Card 1 descripción | A blockchain that rewards builders and secures the network | Body | Normal |
| Card 2 título | GLOBAL P2P NETWORK | H3 / card title | Idem |
| Card 2 descripción | BabelFish Network — millions of devices forming a planetary mesh | Body | Normal |
| Card 3 título | SOVEREIGN SERVICES | H3 / card title | Idem |
| Card 3 descripción | DNS, hosting, email, storage — all decentralized and user-controlled | Body | Normal |
| Card 4 título | YOUR UNIVERSE | H3 / card title | Idem |
| Card 4 descripción | Build websites, metaverses, games — you own it all | Body | Normal |
| Cierre 1 | This is infrastructure for everyone. | Body | Normal |
| Cierre 2 | From individuals to enterprises — democratizing tools once controlled by the kraken. | Body | Normal |
| Callout Open Source | 100% Open Source. Every protocol. Every service. Every line of code — built in the open, owned by humanity. | Callout | *Según feedback:* **"100% Open Source."** (y/o parte) en negrita/acento; resto mezcla normal/negrita. Verificar. |
| Botón 1 | Explore Project 42 → | CTA | Botón primario (gradiente) |
| Botón 2 | Explore the BabelFish Network | CTA | Secundario (outline) |
| Botón 3 | Discover the Foundation | CTA | Secundario |
| Join título | Join the Movement | H2 | — |
| Join descripción | Follow our development, connect with builders, and be part of building a sovereign digital future. | Body | Normal |
| Join CTA | Join Telegram Community → | Enlace | Botón acento; enlace externo |

---

## Project 42 (/project42)

| Sección / ubicación | Texto | Rol | Variantes de estilo (producción) |
|---------------------|--------|-----|-----------------------------------|
| Título página | Project 42 | H1 | — |
| Subtítulo | The answer to digital sovereignty — a cyberspace where freedom is code, privacy is default, and the network belongs to everyone. | Lead | *Documentado:* **"The answer to digital sovereignty"** en negrita; resto normal. |
| Cita hero | "Governments of the Industrial World, you weary giants of flesh and steel…" (completa) | Blockquote | Bloque cita; itálica |
| Autor | — John Perry Barlow, A Declaration of the Independence of Cyberspace (1996) | Atribución | — |
| Sección | We Are Building a New World | H2 | — |
| Párrafo 1 | We are not launching a product. | Body | Normal |
| Párrafo 2 | We are founding a nation. | Body | Normal |
| Bloque 4 líneas | A cyberspace nation — open to all, owned by none, ruled by code. Where your data is yours. Where your voice cannot be silenced. Where your world is built by you — not rented from a corporation. | Body (4 líneas) | *Documentado:* estas 4 líneas con **menor separación** entre sí; **negrita** en frases clave (ej. "A cyberspace nation", "Where your data is yours.", etc.). |
| Párrafo cierre | This is Project 42 — the answer to life, the universe, and digital freedom. | Body | Normal |
| Sección | Our Philosophy: Cypherpunk Nation | H2 | — |
| Intro | We stand on five pillars of truth: | Body | Normal |
| Tabla | Voice \| Truth + filas (Timothy C. May, Eric Hughes, …) | Table | Celdas sin acento especial (tabla minimal) |
| Sección | The Ecosystem | H2 | — |
| Intro | Project 42 is not a single product — it's a complete digital nation with four interconnected pillars: | Body | Normal |
| Pillar 1 número | 01 | Leading | Acento |
| Pillar 1 título | THE INFINITE IMPROBABILITY DRIVE | H3 | Mayúsculas; acento |
| Pillar 1 descripción | The blockchain foundation — a complete sovereign layer for trust, governance, and economic coordination. | Body | Normal |
| Bullets pillar 1 | → 42-year economic model…; → Algorithmic Liquidity…; etc. | List | Normal |
| Pillar 2 número | 02 | Leading | — |
| Pillar 2 título | BABELFISH NETWORK | H3 | Idem |
| (Pillars 3 y 4) | (misma estructura) | — | — |
| Cierre ecosystem | These four pillars work together as one unified system — each strengthens the others… | Body | Normal |
| Sección | The Library of Alexandria — Rebuilt for Cyberspace | H2 | — |
| Cita | "The story so far: In the beginning the Universe was created…" | Blockquote | Muted / gris |
| Autor | — Douglas Adams, The Restaurant at the End of the Universe | Atribución | — |
| Párrafos Library | Once, humanity built the Library of Alexandria… / It burned. Knowledge was lost… / Project 42 is the Library… | Body | Normal |
| Subsección | WE ARE NOT INVENTING THE WHEEL | H3 | Mayúsculas |
| Párrafos Not inventing | We stand on the shoulders of giants… / We don't commercialize… / Every line of code is open source… | Body | Normal |
| Subsección | BUILT ON OPEN PROTOCOLS & ALIGNED TECHNOLOGIES | H3 | Mayúsculas |
| Intro protocolos | We integrate battle-tested open-source protocols and technologies that share our vision of digital sovereignty: | Body | Normal |
| Lista protocolos | Bitcoin / The first decentralized money…; Nostr / Censorship-resistant…; EVM; Cosmos SDK; IPFS; Tor; Pears; QVAC SDK; xAI (nombre + descripción cada uno) | List / labels | *Inferido:* nombre del protocolo en **negrita** o destacado; descripción normal. Verificar. |
| Callout survival | We're building a decentralized, collaborative, indestructible network — not for profit, but for survival. | Body | Normal |
| Párrafo económico | The economic models we design are not for personal enrichment… | Body | Normal |
| Cita Hitchhiker | "A wholly remarkable book…" (dentro del párrafo) | Inline quote | Itálica o entrecomillado |
| Cita Thursday | "This must be Thursday. I never could get the hang of Thursdays." | Blockquote / callout | Muted |
| Autor | — Arthur Dent, The Hitchhiker's Guide to the Galaxy | Atribución | — |
| Párrafos Thursday | Thursdays have always been strange days… / If you're reading this on a Thursday… | Body | Normal |
| Taglines | Project 42 / A Cypherpunk Nation / Powered by Infinite Drive / For everyone. Forever. | Taglines | Mono; centrado; posiblemente una línea en negrita. Verificar. |

---

## Blockchain (/blockchain)

| Sección / ubicación | Texto | Rol | Variantes de estilo (producción) |
|---------------------|--------|-----|-----------------------------------|
| Título | Infinite Improbability Drive | H1 | — |
| Subtítulo | The blockchain foundation that powers Project 42 — where trust meets Bistromathics. | Lead | Normal |
| Cita | "Trust math, not men." | Blockquote | Muted |
| Autor | — Satoshi Nakamoto | Atribución | — |
| Párrafos intro | The Infinite Improbability Drive is the security and economic heart… / Named after Douglas Adams'… | Body | Primero lead (1.1rem); resto normal |
| Sección | Core Components | H2 | — |
| Bloque 1 título | IMPROBABILITY [42] — GOVERNANCE & UTILITY TOKEN | H3 | Mayúsculas; acento |
| Bloque 1 resumen | The governance and utility token that keeps the blockchain alive… | Body | Normal |
| Labels + valores | Purpose / Governance, staking…; Total Supply / 100 million…; Release Schedule / Locked at genesis…; At Launch / Only 100 cups… | Key-value | Label muted; valor normal |
| Key Use | Key Use: Stake Improbability [42] to participate in consensus… | Callout | *Inferido:* "Key Use:" puede ir en negrita. Verificar. |
| Bloque 2 título | FISH — NETWORK CONTRIBUTION & LIQUIDITY TOKEN | H3 | Mayúsculas |
| Bloque 2 resumen | The reward token earned by contributing to the network… | Body | Normal |
| How to Earn | How to Earn Fish: Share storage, provide compute power… | Callout | *Inferido:* "How to Earn Fish:" en negrita. Verificar. |
| Bullets Fish | → Can be traded for [42]…; etc. | List | Normal |
| Enlace | See how Fish works → infinitedrive.xyz/fish | Link | Acento; subrayado |
| Bloque 3 título | GOVERNANCE — POWER TO THE PEOPLE | H3 | Mayúsculas |
| Bloque 3 puntos | → No founders. No investors. No bosses. / → Deep Thought Labs… / etc. | List | Normal |
| Cita Barlow | "We have no elected government — and we don't want one." | Callout / quote | Itálica |
| Autor | — John Perry Barlow | Atribución | — |
| Sección | Master Pools: Token Distribution | H2 | — |
| Párrafos | The 100 million cups… / At launch, practically 0%… / Note on liquidity: While nearly all tokens… | Body | *Documentado:* solo **"Note on liquidity:"** en negrita; resto del párrafo normal. |
| Tabla | Pool \| % \| Purpose \| Annual Unlock + filas (A. Strategic Delegation, B. Security Rewards, …) | Table | Primera columna (Pool) en **negrita** y color acento. |
| Cierre tabla | All tokens locked. Released gradually. Controlled by DAO. | Callout | *Documentado:* título (esa línea) en negrita/italic; nota debajo normal. |
| Párrafo post-tabla | This distribution ensures long-term alignment… | Body | Normal |
| Sección | Hyperspace Bypasses: Cross-Chain Highways | H2 | — |
| Cita | "The plans for the demolition of Earth were on display…" | Blockquote | Muted |
| Autor | — Douglas Adams, The Hitchhiker's Guide to the Galaxy | Atribución | — |
| Párrafos | Just as the Vogons built hyperspace bypasses… / No wormholes. No delays… | Body | Normal |
| Subsección | NATIVE INTEROPERABILITY | H3 | Mayúsculas |
| Subtítulo | IBC Protocol (Inter-Blockchain Communication) | H4 / bold | **Negrita** |
| Bullets | → Native connection to the entire Cosmos ecosystem; etc. | List | Normal |
| Subsección | BRIDGES TO LEGACY CHAINS | H3 | Mayúsculas |
| Subtítulos | Ethereum & EVM Chains / Bitcoin Network | H4 / bold | **Negrita** |
| Subsección | CONNECTED ECOSYSTEMS | H3 | Mayúsculas |
| Grid ecosistemas | Ethereum, Bitcoin, Cosmos Hub, Osmosis, Polygon, Arbitrum, Akash, Celestia + tags (EVM Bridge, IBC Native, etc.) | Grid | Nombre en primary; tag muted |
| Nota | And many more through the expanding IBC universe and bridge protocols... | Body | Itálica; muted |
| Why it matters | Why it matters: Your [42] tokens, Fish rewards, and assets aren't trapped in a walled garden. Move them freely across ecosystems. Trade on any DEX. Use them in any protocol. The multiverse is open. | Callout | *Documentado:* solo **"Why it matters: "** en negrita; resto del párrafo normal. |
| Nota post-why | Unlike Earth's demolition, these hyperspace bypasses are well-documented and accessible to everyone. | Body | Itálica; muted |
| Sección | Technical Architecture | H2 | — |
| Subsección | Full-Stack Sovereign Internet Layer | H3 | — |
| Intro | Infinite Improbability Drive is not just a blockchain — it's a complete internet stack built for sovereignty. | Body | Normal |
| Tabla | Layer \| Function (Consensus, Execution, Interoperability, …) | Table | Columna Layer en **negrita** y acento |
| Párrafos nota | Forward-compatible with Ethereum… / Deploy your Ethereum dApp today… | Body | *Inferido:* posible título (primera frase) en negrita/italic; resto normal. Verificar. |
| Subsección | Specifications | H3 | — |
| Specs | Consensus Mechanism / Proof of Contribution…; Block Time / ~5 seconds; etc. | Key-value | Label (H4) muted; valor normal |
| Enlace docs | For detailed technical documentation → docs.infinitedrive.xyz | Link | Acento |
| Sección | How to Participate | H2 | — |
| Card 1 título | STAKE [42] | H3 | Mayúsculas |
| Card 1 descripción | Secure the blockchain and earn rewards… | Body | Normal |
| Card 2 título | BUILD & CONTRIBUTE | H3 | Mayúsculas |
| Card 3 título | GOVERN | H3 | Mayúsculas |
| Cita final | "The Infinite Improbability Drive is a wonderful new method of crossing vast interstellar distances." | Blockquote / card | Borde acento; itálica |
| Autor | — Douglas Adams, The Hitchhiker's Guide to the Galaxy | Atribución | — |

---

## Services / Network (/services)

| Sección / ubicación | Texto | Rol | Variantes de estilo (producción) |
|---------------------|--------|-----|-----------------------------------|
| Título | The Network & Services | H1 | — |
| Subtítulo | A complete sovereign internet infrastructure — decentralized, user-owned, and unstoppable. | Lead | Normal |
| Sección | BabelFish Network | H2 | — |
| Párrafos | The global P2P backbone that powers everything… / BabelFish is not just a protocol… | Body | Normal |
| Subsección | THE BABELFISH PROTOCOL | H3 | Mayúsculas |
| Intro protocol | A revolutionary protocol that enables direct device-to-blockchain communication… 100% open source — built on proven protocols like Bitcoin, Nostr, IPFS, Pears, and QVAC SDK. | Body | Normal |
| Label | WHAT IT DOES | H4 | Mayúsculas; muted o accent. Verificar. |
| Bullets | → Self-heals and adapts…; etc. | List | Normal |
| Label | HOW IT WORKS | H4 | Idem |
| Enlace whitepaper | Read the full whitepaper → deep-thought.computer/projects/babelfish | Link | Acento; subrayado |
| Labels cards | MULTI-LAYER / SELF-ORGANIZING / FAULT-TOLERANT + descripción | H4 + body | — |
| Sección | Sovereign Internet Services | H2 | — |
| Intro | Real tools for real freedom — enterprise-grade infrastructure… | Body | Normal |
| Subsecciones servicios | DECENTRALIZED DNS — OWN YOUR NAME FOREVER; WEB & APP HOSTING…; ENCRYPTED EMAIL & MESSAGING…; DISTRIBUTED FILE STORAGE…; DISTRIBUTED CLOUD COMPUTING… | H4 | Mayúsculas |
| Features / How it works (por servicio) | Lists y párrafos por cada servicio | Body / list | Labels en negrita o H4. Verificar. |
| Cita Eric Hughes | "Privacy is necessary for an open society in the electronic age." — Eric Hughes | Callout | Itálica |
| Sección | How It All Connects | H2 | — |
| Párrafos | Every service runs on BabelFish Network… / This is not a collection of separate products… | Body | Normal |
| Subsección | THE STACK | H3 | Mayúsculas |
| Capas | Layer 5 / User-Created Universes; Layer 4 / Sovereign Services; … Layer 1 / Infinite Improbability Drive | List / key-value | *Inferido:* "Layer N" en acento; título de capa en negrita. Verificar. |
| Sección | The Blockchain | H2 | — |
| Párrafos + bullets | At the heart of everything sits the Infinite Improbability Drive… / → Hyperspace bypasses…; etc. | Body + list | Normal |
| Card blockchain título | INFINITE IMPROBABILITY DRIVE | H3 | Mayúsculas |
| Card descripción | A sovereign blockchain designed for a digital nation — where trust meets Bistromathics. | Body | Normal |
| Botón | Explore the Blockchain → | CTA | Acento |
| Sección | Start Using The Network | H2 | — |
| Card User título | AS A USER | H3 | Mayúsculas |
| Steps User | 1. Join our Telegram community; 2. Follow development updates; … 5. Connect with other builders | List | Números + texto normal |
| CTA User | Join Telegram Community → | Link/CTA | Acento |
| Card Builder título | AS A BUILDER | H3 | Mayúsculas |
| Steps Builder | 1. Access the developer resources; … 5. Deploy your projects early | List | Idem |
| CTA Builder | Get Involved → | Link/CTA | Acento |
| Footer | This is infrastructure for everyone. / From individuals to enterprises — democratizing tools once controlled by the kraken. | Body | *Inferido:* primera línea en negrita. Verificar. |

---

## Privacy (/privacy)

| Sección / ubicación | Texto | Rol | Variantes de estilo (producción) |
|---------------------|--------|-----|-----------------------------------|
| Título | Privacy Policy | H1 | — |
| Lead | Last updated: 16 February 2026. This Privacy Policy describes how we collect, use, and protect information… | Body | *Documentado:* solo **"Last updated:"** (o etiqueta equivalente) en negrita; fecha y resto normal. |
| Sección 1 | 1. Who We Are and Scope | H2 | Título de sección; color acento (1.25rem en ref anterior). Verificar. |
| Cuerpo 1 | This website (e.g. infinitedrive.xyz…) is part of the Infinite Drive ecosystem… | Body | Normal |
| Secciones 2–13 | 2. Blockchain and On-Chain Data; 3. Information We Collect; … 13. Contact | H2 | Idem |
| Cuerpos | Párrafos por sección | Body | Normal |
| Contact | …you can reach us via the channels referenced on this website: for example, the Telegram community or the Deep Thought Labs site. | Body | Enlaces "Telegram" y "Deep Thought Labs" en **acento + subrayado**. |
| Footer | Infinite Drive · Project 42 · A Deep Thought Labs project. This policy is provided for informational purposes… | Body | Muted; pequeño |

---

## Resumen de variantes de estilo por tipo

| Tipo de elemento | Variante típica en producción |
|------------------|-------------------------------|
| Título principal (H1) | Mayúsculas o título; tamaño grande; letter-spacing |
| Títulos de sección (H2) | 2rem; color primary; mono; letter-spacing |
| Subtítulos de bloque (H3) | Mayúsculas; color acento; mono |
| Labels (H4) | text-sm; color muted o accent según contexto |
| Párrafo lead | 1.1rem; color secondary |
| Body normal | 1rem; color secondary |
| Cita (blockquote) | Itálica; bloque con borde (accent o muted) |
| Atribución cita | text-sm; color muted |
| Callout “título + cuerpo” | Solo el título o frase inicial en **negrita**; cuerpo normal |
| Enlace externo | Color acento; subrayado |
| CTA primario | Gradiente; texto oscuro |
| CTA secundario / acento | Borde y texto acento; relleno al hover |
| Tabla: primera columna | Negrita + color acento (en tablas de datos) |
| Tabla filosofía | Sin acento; estilo minimal |

---

## Cómo usar este registro

1. **Contenido:** Usar la columna "Texto" para asegurar que los copy en `content/locales` coincidan con producción.
2. **Estilos:** Donde dice *Documentado* o *Inferido*, se ha usado feedback previo o análisis; donde dice *Verificar en navegador*, abrir [infinitedrive.xyz](https://infinitedrive.xyz) y comprobar con DevTools (font-weight, color) por fragmento.
3. **FormattedText:** Para bloques con "solo X en negrita; resto normal", usar `FormattedSegment[]` y `FormattedText` en la implementación.
4. **Actualizar:** Tras comprobar en producción, sustituir *Verificar* por la variante real (ej. "Solo 'Key Use:' en negrita") y mantener este doc como referencia única de textos y variantes por página.

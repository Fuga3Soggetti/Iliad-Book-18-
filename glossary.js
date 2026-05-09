// ─────────────────────────────────────────────────────────────────────────────
// GLOSSARY DATA  —  Iliad Book 18 Translation
// Fields: english, greek, transliteration, hittite, linearb, literal, choice, notes
// ─────────────────────────────────────────────────────────────────────────────

const GLOSSARY = {

  // ── DIVINE NAMES ──────────────────────────────────────────────────────────

  zeus: {
    english: "Zeus",
    greek: "Ζεύς",
    transliteration: "Zeus",
    literal: "Sky-father; the name is cognate with Latin Iuppiter, Sanskrit Dyaus, all from PIE *dyeu- (to shine, sky)",
    choice: "We keep Ζεύς in Greek throughout — as with all the gods — to preserve the sonic and cultural distance between the divine and mortal registers of the poem.",
    notes: "In Book 18 Ζεύς has a deliberately passive role: he set Achilles' prayer in motion (Book 1), but now watches from a distance while Hera and Iris act behind his back. His authority is immense but not omniscient."
  },

  hera: {
    english: "Hera",
    greek: "Ἥρη",
    transliteration: "Hērē",
    literal: "Etymology disputed; possibly 'protectress' or related to hōra (season, the right time)",
    choice: "Ἥρη throughout, not the Latinized Juno. Her Greek name preserves the long ē sound that grounds her epithets: ox-eyed (βοῶπις), white-armed (λευκώλενος).",
    notes: "In Book 18 Ἥρη acts unilaterally: she sends Ἶρις to Ἀχιλλεύς without Ζεύς's knowledge, and she forces the sun down early to end the day's battle. When Ζεύς confronts her (18.356–368) she does not apologize — she simply asserts her right."
  },

  hephaistos: {
    english: "Hephaestus",
    greek: "Ἥφαιστος",
    transliteration: "Hēphaistos",
    literal: "Etymology uncertain; possibly pre-Greek.",
    choice: "Ἥφαιστος throughout, not the Latinized Vulcan — Book 18 belongs to him above all others, and the Latinate form felt tonally wrong here.",
    notes: "His lameness and his extraordinary craft are in productive tension: the god most physically diminished produces the most magnificent object in the poem. His backstory (cast from Olympus, rescued by Thetis) ties him personally to the scene."
  },

  athena: {
    english: "Athena",
    greek: "Ἀθήνη",
    transliteration: "Athēnē",
    literal: "Possibly pre-Greek; ancient Greeks connected the name to the city Ἀθῆναι (Athens), though the direction of derivation is uncertain.",
    choice: "Ἀθήνη throughout. In Book 18 she appears in two modes: she physically arms Ἀχιλλεύς with her aegis and fires his war-cry, then vanishes into the narrative of the Shield as Παλλὰς Ἀθήνη leading the war city.",
    notes: "Her epithet in Book 18 is γλαυκῶπις — 'bright-eyed' or 'owl-eyed'. We render it *bright of eye* to preserve the luminosity while avoiding the ornithological literalism."
  },

  pallas: {
    english: "Pallas",
    greek: "Παλλάς",
    transliteration: "Pallás",
    literal: "Disputed. Ancient sources proposed: from πάλλειν (to brandish, to hurl) — the spear-wielder; from παλλακή (maiden); or from a pre-Greek divine name older than Greek itself. A rival tradition names Pallas as a giant or Titan whom Ἀθήνη slew in primordial battle, taking his name as a trophy.",
    choice: "Kept in Greek as an untranslated epithet preceding Ἀθήνη. The compound Παλλὰς Ἀθήνη is one of Homer's most ancient formulaic titles — a two-word divine name in which Παλλάς has hardened from epithet into something closer to a first name. To translate it would be to explain it; we prefer to let it stand with its strangeness intact.",
    notes: "Παλλὰς Ἀθήνη appears in Book 18 specifically in the Shield ekphrasis, where she leads the war city alongside Ἄρης — both cast in gold, towering over mortal soldiers. This is her civic-martial mode, distinct from her earlier physical interventions in the book (the aegis, the war-cry). The epithet here carries full ceremonial weight: not the battle-goddess who shouts from the rampart, but the divine principle of the city at war."
  },

  iris: {
    english: "Iris",
    greek: "Ἶρις",
    transliteration: "Iris",
    literal: "Rainbow; the goddess is the personification and embodiment of the rainbow as divine messenger",
    choice: "Ἶρις throughout. Her name's meaning — rainbow — gives the 'wind-footed' epithet a specific resonance: she travels as light travels.",
    notes: "In Book 18 Ἶρις acts as Ἥρη's secret agent. The phrase *wind-footed* (ποδήνεμος) renders Homer's specific compound, which combines πούς (foot) with ἄνεμος (wind)."
  },

  "iris-swift": {
    greek: "ποδήνεμος",
    transliteration: "podēnemos",
    literal: "Wind-footed — from πούς (foot) + ἄνεμος (wind). The compound belongs to Ἶρις alone; it is not the epithet of Ἀχιλλεύς.",
    choice: "We render ποδήνεμος as *swift-footed* here, assimilating Ἶρις to the general English formula for speed-epithets. The deeper sense is more precise: she does not run — she moves as wind moves, as light moves. The rainbow travels instantaneously; so does she.",
    notes: "Ἀχιλλεύς's speed-epithets (πόδας ὠκύς, ποδάρκης, ποδώκης) are all grounded in the foot — the mechanics of running. Ἶρις's ποδήνεμος is grounded in wind: motion without contact, presence without passage. The distinction mirrors their natures: Ἀχιλλεύς is the supreme mortal runner, always about to arrive; Ἶρις is divine transmission, already gone. In Book 18 she vanishes mid-conversation — *having spoken, was gone* — the grammar of her exit enacting the epithet."
  },

  ares: {
    english: "Ares",
    greek: "Ἄρης",
    transliteration: "Arēs",
    literal: "Possibly from arē (bane, ruin) — the god of war's destructive aspect",
    choice: "Ἄρης throughout, not Mars. The phrase *the toil of Ἄρης* (Ἄρεος ἔργον) is a Homeric formulaic phrase for battle-labor that we keep intact.",
    notes: "In Book 18 Ἄρης appears both as a proper noun (god) and, in Hector's speech, as a kind of personified battle-principle (*Ἐνυάλιος is shared alike of all*). The two uses bleed into each other."
  },

  apollon: {
    english: "Apollo",
    greek: "Ἀπόλλων",
    transliteration: "Apollōn",
    literal: "Etymology disputed; possibly from apella (assembly) or related to the Doric apellai (spring festival). The name is likely pre-Greek.",
    choice: "Ἀπόλλων throughout. He appears in Book 18 only in retrospect — Θέτις names him as the god who slew Πάτροκλος at the Scaean gates, giving glory to Ἕκτωρ.",
    notes: "Ἀπόλλων's role in Πάτροκλος's death (Book 16) is the pivot on which Book 18 turns. He struck first, exposing Πάτροκλος to Ἕκτωρ's spear. In Θέτις's retelling here, this causation is clearly stated."
  },

  enyalios: {
    english: "Enyalius",
    greek: "Ἐνυάλιος",
    transliteration: "Enyalios",
    linearb: "𐀁𐀝𐀷𐀪𐀍 (e-nu-wa-ri-jo)",
    literal: "An ancient war-deity, sometimes treated as an epithet of Ἄρης, sometimes as a separate god — 'the warlike one'",
    choice: "We keep Ἐνυάλιος untranslated. Hector uses it in a proverb: *Ἐνυάλιος is shared alike of all.* Translating it as 'war' or 'the war-god' flattens the archaic, slightly ritualistic quality of the saying.",
    notes: "The Linear B form 𐀁𐀝𐀷𐀪𐀍 (e-nu-wa-ri-jo) appears on the Knossos tablet KN V 52, confirming that Ἐνυάλιος was already a recognized deity in the Mycenaean world, centuries before Homer. The proverb amounts to: battle-luck is impartial. Hector uses it to justify his reckless decision to stay on the plain — the same decision that Polydamas (correctly) warned against. The archaism of Ἐνυάλιος gives the saying a slightly hollow, formulaic quality: a man reaching for authority he does not have."
  },

  // ── MORTAL NAMES ──────────────────────────────────────────────────────────

  achilles: {
    english: "Achilles",
    greek: "Ἀχιλλεύς",
    transliteration: "Akhilleus",
    literal: "He who brings grief to the host (folk etymology: ἄχος, grief + λαός, host of warriors)",
    choice: "Ἀχιλλεύς in the running text, as the translation uses Greek for all named characters in this category. The Latinized Achilles appears only in navigation and paratexts.",
    notes: "Nagy derives the name from *ákhos* (grief) + *laós* (host), making Ἀχιλλεύς literally 'he whose host of men has grief.' The etymology resonates with the Iliad's opening: *mēnin* (wrath). Book 18 is the book of his grief transformed back into wrath."
  },

  patroklos: {
    english: "Patroclus",
    greek: "Πάτροκλος",
    transliteration: "Patroklos",
    literal: "Glory (κλέος) of the father (πατήρ)",
    choice: "Πάτροκλος throughout, not the Latinized Patroclus. The name's etymology — *glory of the father* — deepens his role as Ἀχιλλεύς's surrogate-self and borrowed identity.",
    notes: "Πάτροκλος dies wearing Ἀχιλλεύς's armor in Book 16. Book 18 opens with his corpse at the center of battle and closes with his body washed and prepared for burial. He is physically absent from the action but present as its cause throughout."
  },

  thetis: {
    english: "Thetis",
    greek: "Θέτις",
    transliteration: "Thetis",
    literal: "Possibly related to τίθημι (to place, establish) — the one who sets things in order",
    choice: "Θέτις throughout. We use the Greek form to maintain the sonic distinction between the mortal and divine registers; the Latinized Thetis collapses that distance.",
    notes: "In Book 18 Θέτις hears her son's grief-cry from the sea's depths. Her lament among the Nereids (18.35–64) is the book's first great set-piece. She is simultaneously the poem's most tragic mortal-adjacent figure and one of its most active divine agents."
  },

  hektor: {
    english: "Hector",
    greek: "Ἕκτωρ",
    transliteration: "Hektōr",
    literal: "The holder, the one who holds (ἔχειν, to hold) — perhaps 'he who holds Troy together'",
    choice: "Ἕκτωρ throughout. His Homeric epithet κορυθαίολος — *of the shimmering helm* — is our consistent rendering, chosen to capture the darting, flashing quality of αἴολος over the more static 'gleaming.'",
    notes: "In Book 18 Ἕκτωρ makes the catastrophically wrong decision to stay on the plain — against Polydamas's advice. His speech of refusal (18.284–309) is a study in false confidence. The irony is total: every boast he makes will be undone in Book 22."
  },

  peleus: {
    english: "Peleus",
    greek: "Πηλεύς",
    transliteration: "Pēleus",
    literal: "Possibly related to πηλός (clay, mud) — an old chthonic name",
    choice: "Πηλεύς throughout. His name appears almost always in the formula 'son of Πηλεύς' or 'Πηλεύς's son' — a patronymic that ties Ἀχιλλεύς permanently to his mortal inheritance.",
    notes: "Πηλεύς is the mortal father of Ἀχιλλεύς; his divine armor — given as a wedding gift when Θέτις was married to him — is the very armor that now lies in Ἕκτωρ's hands. The armor's passage from divine gift to mortal loss to divine replacement structures the book."
  },

  nestor: {
    english: "Nestor",
    greek: "Νέστωρ",
    transliteration: "Nestōr",
    literal: "The one who brings home, from νέομαι (to return) — perhaps 'he who brings the army home safely'",
    choice: "Νέστωρ appears in Book 18 only as the father of Antilochus, who brings the death-news to Ἀχιλλεύς. We use the Greek form for consistency.",
    notes: "Antilochus — 'the noble son of Νέστωρ' — is chosen for this errand precisely because of his closeness to Ἀχιλλεύς. He holds Ἀχιλλεύς's hands throughout the lament, fearing self-harm. His presence is a rare moment of physical tenderness in the poem."
  },

  agamemnon: {
    english: "Agamemnon",
    greek: "Ἀγαμέμνων",
    transliteration: "Agamemnōn",
    literal: "Very steadfast, very resolute (ἄγαν + μέμνων) — or 'he who stands firm very much'",
    choice: "Ἀγαμέμνων throughout. In Book 18 he appears only in memory: as the cause of the quarrel that kept Ἀχιλλεύς from battle. His name lands heavily in both speeches that name him.",
    notes: "Ἀχιλλεύς's great speech (18.97–137) explicitly names Ἀγαμέμνων as the source of the wrath, then explicitly dismisses that grievance (*let all that be past*). The dismissal is the moral pivot of the book: grief for Πάτροκλος supersedes anger at Ἀγαμέμνων."
  },

  priamos: {
    english: "Priam",
    greek: "Πρίαμος",
    transliteration: "Priamos",
    literal: "Possibly from Luwian Priya-muwa (especially valiant) — a name of Anatolian origin",
    choice: "Πρίαμος throughout, not the Latinized Priam. In Book 18 he appears only as a patronymic: Ἕκτωρ is 'son of Πρίαμος', and the city is 'the city of Πρίαμος.'",
    notes: "The city's identification with Πρίαμος — 'this city of Πρίαμος rich in gold' (18.288) — is Hector's own formulation in his refusal speech. The pride rings hollow: the city's wealth has already been depleted to fund the war."
  },

  aiantes: {
    english: "The Ajaxes",
    greek: "Αἴαντες",
    transliteration: "Aiantes",
    literal: "The plural of Αἴας (Ajax) — the two Ajaxes: Telamonian Ajax and the lesser Ajax of Locris",
    choice: "We use Αἴαντες for the pair. The dual form in Homer (*tō Aiante*) names them as a fighting unit. Telamonian Αἴας is later mentioned singly by name.",
    notes: "The two Αἴαντες are in Book 18 the guardians of Πάτροκλος's body — three times they drive back Ἕκτωρ. The comparison to shepherds failing to drive off a lion from slaughtered prey is our translation's signature simile for this scene."
  },

  olympos: {
    english: "Olympus",
    greek: "Ὄλυμπος",
    transliteration: "Olympos",
    literal: "The mountain home of the gods; possibly pre-Greek, related to olumpos (sky, heaven)",
    choice: "Ὄλυμπος throughout. As a divine place-name it belongs with the divine register; we keep it in Greek for the same reason as the divine names.",
    notes: "In Book 18 Ὄλυμπος is both a specific mountain and a shorthand for the divine order. Θέτις goes 'up to tall Ὄλυμπος' (18.143) to retrieve the arms; she bears them down from 'snowy Ὄλυμπος' (18.616) at the book's close."
  },

  ilion: {
    english: "Ilium",
    greek: "Ἴλιον",
    transliteration: "Ilion",
    hittite: "𒃾𒇻𒊭 (Wiluša)",
    literal: "Troy — the city, named for its legendary founder Ἶλος",
    choice: "Ἴλιον appears throughout alongside 'Troy.' We use Ἴλιον where the Greek name's cultural weight matters — particularly in speech — and 'Troy' or 'Trojan' as adjective and ethnonym in narration.",
    notes: "The Hittite name Wiluša (𒃾𒇻𒊭), attested in cuneiform texts of the 13th century BCE, is now widely accepted as the Hittite rendering of the same city. The Alaksandu Treaty (c. 1280 BCE) names Wiluša as a vassal state — placing the Trojan world firmly within the Hittite diplomatic sphere at the very period Homer's war is set. The poem is called the *Iliad* — the poem of Ἴλιον — yet the city never falls within it. Every mention of Ἴλιον in Book 18 is shadowed by the foreknowledge of its destruction."
  },

  kronides: {
    english: "Son of Cronus",
    greek: "Κρονίδης / Κρόνος",
    transliteration: "Kronidēs / Kronos",
    literal: "Κρονίδης = son of Κρόνος. Κρόνος = possibly 'the fulfiller of time' or a pre-Greek name",
    choice: "We keep Κρονίδη (vocative) and 'son of Κρόνος' as patronymics. In Hector's speech the phrase 'son of Κρόνος of the crooked counsel' (18.293–4) translates ἀγκυλομήτης — 'of the bent/curved plans' — a formulaic epithet we render literally.",
    notes: "The epithet ἀγκυλομήτης (*crooked counsel*) applied to Ζεύς is one of Homer's most charged phrases. It names the divine cunning that operates through indirection — the same quality that makes divine plans feel like fate from the mortal perspective."
  },

  herakles: {
    english: "Heracles",
    greek: "Ἡρακλῆς",
    transliteration: "Hēraklēs",
    literal: "Glory of Hera — from Ἥρη + κλέος (glory, fame). The name is deeply ironic: Hera persecuted Heracles throughout his life.",
    choice: "We restore the Greek Ἡρακλῆς in the text. Achilles invokes him as a parallel mortal — the greatest hero before himself — who was loved by Zeus yet could not escape fate and Hera's wrath. Using the Greek form aligns him with the poem's divine register and keeps the naming consistent.",
    notes: "Ἡρακλῆς appears in Achilles's great speech (18.117–119) as the exemplum of heroic mortality — the argument from precedent. Even Heracles died; Achilles will too. The irony of his name (*glory of Hera*) is that Hera, whose name forms the first element, was his most relentless enemy: she sent the madness that made him kill his own children and drove him through the Twelve Labours."
  },

  // ── PLACE NAMES ───────────────────────────────────────────────────────────

  knossos: {
    english: "Knossos",
    greek: "Κνωσός",
    transliteration: "Knōsos",
    literal: "The great palace city of Crete, seat of the legendary King Minos",
    choice: "Knossos in English. Homer places Daedalus here as the craftsman who made the dancing floor for Ariadne — the same dancing floor that Hephaestus echoes in his Shield. This is one of Homer's few anchors to the Minoan world.",
    notes: "The archaeological site of Knossos (modern Heraklion, Crete) was excavated by Arthur Evans from 1900. The palace was destroyed c. 1350 BCE, centuries before Homer, yet it remained vivid in Greek mythological memory as the center of Minoan civilization, the labyrinth, and the Cretan court. Homer's brief mention confirms that Knossos still carried its legendary weight as the home of sophisticated craft and ritual dance."
  },

  daedalus: {
    english: "Daedalus",
    greek: "Δαίδαλος",
    transliteration: "Daidalos",
    literal: "The cunningly-wrought one; the craftsman whose very name means *artfully made* — the same root as the adjective δαίδαλος (*daedale* in our translation)",
    choice: "Daedalus in English. The name connects directly to the adjective δαίδαλος: Daedalus is literally 'the craftsman,' the living embodiment of *daedale* craft. Homer's mention of him here anchors the Shield ekphrasis in a lineage of both divine and legendary making.",
    notes: "In myth, Daedalus is the supreme mortal craftsman — maker of the Cretan Labyrinth, the wooden cow for Pasiphae, and the wax wings of Icarus. Homer knows him here only as the maker of the dancing floor (χορός) at Knossos for Ariadne. Hephaestus, in fashioning the Shield's own dancing floor, consciously echoes Daedalus — divine craft answering legendary craft, the god surpassing the mortal master.\n\nOn etymology: the root δαιδ- is the key. It appears in the Linear B tablets as da-da-re-jo-de (𐀅𐀅𐀩𐀍𐀆), a directional form meaning 'to the Daedaleon' — apparently a sanctuary or dedicated precinct associated with Daedalus (the suffix -de marks direction toward a place). If this reading is correct, there was already a cult site in the Mycenaean world named for the craftsman-principle the root encodes, centuries before Homer. The identification is contested — da-da-re-jo-de may refer to a place rather than a person — but it confirms that the δαιδ- root was active in Bronze Age Greek and carried institutional weight. The root itself is connected to PIE *dhedh- (to set, to make, to fashion with skill), and the reduplication in da-da- suggests an intensive or iterative sense: the one who makes with extreme, repeated craft. Daedalus is thus not merely *a* skilled maker — he is *making* itself, personified and named."
  },

  ariadne: {
    english: "Ariadne",
    greek: "Ἀριάδνη",
    transliteration: "Ariadnē",
    literal: "Most holy — from the Cretan-Greek *ari-* (intensive) + *adnos* (holy, pure); or possibly from an older Minoan divine title",
    choice: "Ariadne in English. In Homer's brief mention she appears only as the recipient of Daedalus's dancing floor — preserving a pre-Thesean layer of the tradition in which Ariadne is a Cretan cult figure rather than a tragic princess.",
    notes: "Homer's Ariadne is the daughter of Minos; the tragic love story with Theseus (and her abandonment on Naxos) is part of the wider mythological tradition but is not present here. Her epithet is καλλιπλόκαμος (*of the lovely tress*) — the single Homeric detail that identifies her. The dancing floor Daedalus made her may reflect actual Minoan ritual dance practices, which are well attested archaeologically in Minoan frescoes and seal-rings."
  },

  dardanian: {
    english: "Dardanian",
    greek: "Δαρδανίδες / Δαρδανίδων",
    transliteration: "Dardanides / Dardanidōn",
    literal: "Of or from Dardania — the older name for the Troad (the region around Troy), from its legendary founder Dardanus (Δάρδανος)",
    choice: "We use *Dardanian* in Achilles's speech (18.122–124) where he imagines a Trojan woman weeping. The older ethnic name carries more archaic weight here than the straightforward 'Trojan.'",
    notes: "Dardanus (Δάρδανος) was the legendary founder of the Dardanian people and the ancestor of the Trojan royal house: Dardanus → Tros → Ilus → Laomedon → Priam → Hector. Troy is called Dardania or Ilium interchangeably in Homer. The passage names both — *the Trojan women and the deep-bosomed Dardanian* — placing the two identities side by side. 'Dardanian' grounds the image in a deeper, more archaic layer of the Trojan tradition; 'Trojan' gives the contemporary name of the city. Together they span the full sweep of the lineage — Achilles imagining not just a woman of the city but a woman of the oldest blood."
  },

  // ── MYTHOLOGICAL FIGURES ──────────────────────────────────────────────────

  nereides: {
    english: "The Nereids",
    greek: "Νηρηΐδες",
    transliteration: "Nēreïdes",
    literal: "Daughters of Nereus (a sea-god); sea-nymphs",
    choice: "Nereids in English narration, Νηρηΐδες in the Greek-register passages. The gathering of the fifty Nereids is one of Homer's great set-pieces: each name in the catalogue carries its own etymology in the sea-world.",
    notes: "The Nereid catalogue (18.39–49) is the only such catalogue in Book 18. Each name is meaningful: Thaleia (abundance), Speio (cave-dweller), Glauke (grey-green), Galatea (milk-white), Nemertes (unerring). The catalogue enacts the sea's fullness even in grief."
  },

  // ── GREEK CONCEPTS ────────────────────────────────────────────────────────

  menis: {
    greek: "μῆνις",
    transliteration: "mēnis",
    literal: "Wrath — but a divine or heroic quality, distinct from ordinary anger (ὀργή). It is long-lasting, consuming, and carries divine weight.",
    choice: "We translate μῆνις as *wrath* throughout to preserve its sacral weight. It is distinct from χόλος (bile-anger, quick-rising) and κότος (slow, settled grudge-anger) — each of which also appears in Book 18 and has its own glossary entry. The word of the poem's first line returns transformed in Book 18: the μῆνις shifts from Ἀγαμέμνων to Ἕκτωρ.",
    notes: "μῆνις appears rarely in Homer and always denotes a consuming, long-lasting fury belonging to gods or exceptional heroes. Book 18 is the hinge: Ἀχιλλεύς explicitly says *let all that be past* (18.112) of the quarrel with Ἀγαμέμνων, replacing one μῆνις with another."
  },

  cholos: {
    greek: "χόλος",
    transliteration: "cholos",
    literal: "Bile-anger — from χολή (bile), the bodily humor believed to cause sudden, flaring anger. Quick to rise, quick to burn; the hot passion of a specific moment rather than the settled long-burning wrath of μῆνις.",
    choice: "We translate χόλος as *wrath* in both passages where it appears in Book 18 — Ἀχιλλεύς's speech (18.107–110) and Ἥρη's anger (18.119). The word is distinct from μῆνις (the sacral, consuming wrath of the poem's first line) and κότος (Ἥρη's old slow grudge), but *wrath* carries sufficient gravity in both English contexts.",
    notes: "The passage at 18.107–110 is one of Homer's most acute psychological observations. Ἀχιλλεύς acknowledges that the χόλος which drove his quarrel with Ἀγαμέμνων was *sweeter than dripping honey* — the addictiveness of anger is part of its character. The word's connection to bile (χολή) is not merely metaphorical: ancient Greek physiology treated bile as a literal cause of hot temper. The same root gives us *melancholy* (black bile, μέλαινα χολή) — the cold, heavy grief that now replaces the hot χόλος in Ἀχιλλεύς. At 18.119, χόλος Ἥρης — Hera's bile-anger — is the force that destroyed Ἡρακλῆς; Ἀχιλλεύς cites him as the ultimate parallel for a great hero felled by divine fury."
  },

  anger: {
    greek: "ἐχόλωσεν",
    transliteration: "ekholōsen",
    literal: "To fill with bile, to gall. Root: χολή, bile — the verb names anger as a physical substance rising in the body.",
    choice: "roused me to mine anger (18.112)",
    notes: "Homer's anger vocabulary is precise and should be kept distinct. μῆνις — the great sustained wrath — is Ἀχιλλεύς's overarching condition and opens the Iliad in its first word; χόλος and χολόω name the more immediate, bilious flare that specific provocation ignites. We render χόλος as wrath elsewhere in Book 18, where the word carries full dramatic weight. Here, at 18.113, Ἀχιλλεύς is looking back at what Ἀγαμέμνων did to him — a named cause, a retrospective acknowledgment — and anger fits the diminished, almost weary register of that glance backward. 'Roused me to mine anger' also preserves the causative force of ἐχόλωσεν: Ἀγαμέμνων is the agent who produced this state, and mine anger — the Elizabethan possessive before a vowel — gives the feeling that this anger is something Ἀχιλλεύς owns and names, not merely suffers."
  },

  kotos: {
    greek: "κοτεσσαμένη / κότος",
    transliteration: "kotessamenē / kotos",
    literal: "κοτεσσαμένη: aorist participle of κοτέω (to harbour anger, to be wrathful); κότος is the sustained, slow-burning wrath distinct from μῆνις and χόλος",
    choice: "We translate κότος as *wrath* here, as in the line 'Ill for the Trojans in the wrath I bore' — but the Greek word is notably different from the μῆνις of Ἀχιλλεύς. Ἥρη's anger is κότος: older, more settled, rooted in memory rather than in a fresh injury.",
    notes: "κότος is the sustained, slow-burning wrath — distinct from μῆνις (the burning wrath of Ἀχιλλεύς, the word of the Iliad's first line) and χόλος (bile-anger, quick to flash). Ἥρη's anger at the Trojans is κότος, rooted in old memory: the judgment of Paris, the slight to her beauty. When Ζεύς confronts her after her unauthorized intervention, she does not apologize — she replies with the measured confidence of someone who has been nursing this anger for years."
  },

  kudos: {
    greek: "κῦδος",
    transliteration: "kudos",
    literal: "Battle-glory, the radiance of victory — specifically the blazing success of a winning moment, not the lasting posthumous fame of κλέος. The word gives English its modern *kudos* (praise, credit), though the Homeric sense is sharper: the immediate, present-tense triumph of combat.",
    choice: "We render κῦδος as *glory* in all three passages where it appears in Book 18 — 18.165 (κῦδος ἄσπετον, boundless glory, as Hector nearly wins Patroclus's body), 18.294 (κῦδος ἀρέσθαι, in Hector's boast of what Zeus has given him at the ships), and 18.456 (κῦδος ἔδωκε, Apollo giving glory to Hector after killing Patroclus). *Glory* carries both senses in English; the hover reveals the precise Greek root each time.",
    notes: "κῦδος and κλέος are both translated *glory* in this book but name different things. κλέος is what Achilles explicitly seeks at 18.121 — the lasting fame that outlives the hero, 'what is heard of you.' κῦδος is immediate: the flash of triumph in the field, the visible radiance of a man winning. All three κῦδος occurrences in Book 18 belong to the Trojan perspective — each names a moment in which Hector or the Trojan cause appeared to be winning. None of them lasts. The word's irony in this book is that every κῦδος assigned to Hector is about to be reversed."
  },

  kleos: {
    greek: "κλέος",
    transliteration: "kleos",
    literal: "Glory, fame — from the root κλύω (to hear). Literally 'what is heard of you.'",
    choice: "We render κλέος as *glory* in most contexts, preserving its competitive and public character. In 18.165 (*glory past all telling*) the Greek is κῦδος ἄσπετον — boundless glory, the glory of having routed the enemy — not the κλέος ἄφθιτον of Book 9. κῦδος is more immediate than κλέος: the flush of victory in the field rather than lasting posthumous fame.",
    notes: "κλέος is the central prize of Homeric heroism — the only immortality available to a mortal. Book 18 pivots around it: Ἀχιλλεύς abandons the quarrel over prizes to pursue glory through vengeance, accepting his own death as the cost."
  },

  // ── NOTABLE ENGLISH CHOICES ───────────────────────────────────────────────

  daedale: {
    greek: "δαίδαλος / δαιδάλεος",
    transliteration: "daidalos / daidáleos",
    literal: "Cunningly wrought, elaborately crafted; the adjective from which the craftsman Daedalus takes his name",
    choice: "We render δαίδαλος as *daedale* — the Spenserian form (*Faerie Queene* III.vi: 'that daedale hand'). It keeps the Greek root audible, preserves the craft-resonance, and sits in the right Renaissance-English register for this translation's diction.",
    notes: "The word appears three times in the Shield passage: in 'daedale craft' (18.479), 'daedale marvels' (18.484), and 'beautiful and daedale' of the helmet (18.612). Its triple return brackets the entire ekphrasis, marking the Shield as the summit of human and divine making."
  },

  "marble-bright": {
    greek: "μαρμαρέη / μαρμάρεος",
    transliteration: "marmaréē / marmareos",
    literal: "Gleaming, flashing, sparkling — from the root μαρμαίρω (to gleam, flash, sparkle). The word gives us 'marble' in English, though in Homer it describes light-play rather than stone.",
    choice: "We translate μαρμαρέη as *marble-bright* throughout. This captures both the literal sense (radiant, gleaming) and restores the μαρμαρ- root that frames the Shield passage: *marble-bright the rim* at line 479 answers *marble-bright arms* at line 617.",
    notes: "The framing device — the same root opening and closing the Shield ekphrasis — is a deliberate compositional choice we preserve in translation. The effect is of a passage contained within its own radiance."
  },

  massy: {
    greek: "κρατερήν / βριαρή",
    transliteration: "kratérēn / briarē",
    literal: "κρατερήν = strong, mighty (of the hammer, 18.477); βριαρή = heavy, weighty (of the helmet, 18.611)",
    choice: "We use *massy* (Marlovian and Miltonic: 'massy iron' in *Paradise Lost*) for both. It captures the material weight Homer encodes in these adjectives — the forge-heaviness of Ἥφαιστος's tools and products.",
    notes: "Milton's 'Cyclops' anvil and massy arms' (*Paradise Lost* I) establishes the forge-context pedigree of the word."
  },

  "deep-bosomed": {
    greek: "βαθύκολπος",
    transliteration: "bathykolpos",
    literal: "Compound of βαθύς (deep) and κόλπος (the fold of cloth at the breast; by extension the bosom itself). Greek holds both meanings simultaneously: the sartorial and the bodily.",
    choice: "We retain *deep-bosomed* throughout — in the imagined Trojan woman of 18.122 and in the Dardanian women of 18.340.",
    notes: "The epithet appears twice in Book 18, and the pairing is structural. What Ἀχιλλεύς imagines at 18.122 — a Trojan woman weeping — collapses into the immediate present at 18.340: these are the same women, already captive, already weeping. Homer closes a loop. In Homer the fold of cloth at the breast is the primary meaning, and translators including Lattimore ('girdled') and Fagles ('deep-gowned') follow this line. The case for the anatomical reading is settled by two external witnesses: the Homeric Hymn to Demeter applies βαθυκόλποις to the Oceanid nymphs in a purely somatic context, and Aeschylus (Seven Against Thebes, 864–865) places βαθυκόλπων in direct apposition to στηθέων — the anatomical word for breast — while the adjective ἐρατῶν ('lovely') qualifies the whole as a physical description. To a fifth-century Athenian ear, the compound was embodied. Homer's system of feminine epithets encodes social status: λευκώλενος (white-armed) marks arms untouched by field labour; καλλιπάρῃος (fair-cheeked) marks cheeks unmarked by nutritional stress; βαθύκολπος marks the body that carries the fat reserves only sufficient nourishment across a lifetime produces. Bioarchaeological evidence from Mycenaean palace sites confirms differential nutrition by status; Linear B ration tablets record it explicitly. The Trojan and Dardanian women are deep-bosomed because their bodies are the visible argument for Troy's prosperity. What Ἀχιλλεύς names as trophies of war is what war actually takes."
  },

  "brief-fated": {
    greek: "ὠκύμορος",
    transliteration: "ōkymoros",
    literal: "Swift-fated, quick to die — from ὠκύς (swift) + μόρος (fate, death)",
    choice: "We translate ὠκύμορος as *brief-fated*. Homer uses it exclusively of Ἀχιλλεύς, and only in the mouths of those who love him. *Brief-fated* preserves both the temporal sense (a short span) and the elegiac weight the compound carries.",
    notes: "The word appears here on Θέτις's lips as a direct address to her son: 'Brief-fated then thou art, my child' (18.95). She has foreknowledge of his death — it is coming hard on Ἕκτωρ's — and this single compound word holds the full weight of that knowledge."
  },

  "all-shining": {
    greek: "παμφανόωσαν",
    transliteration: "pamphanoōsan",
    literal: "All-shining, blazing on every side — the παμ- prefix intensifies φαίνω (to shine, appear)",
    choice: "We render φλόγα παμφανόωσαν as *all-shining flame* at 18.206, preserving both the substance (φλόγα = flame) and the παμ- intensive prefix.",
    notes: "The *all-shining flame* that Ἀθήνη kindles above Ἀχιλλεύς's head (18.206–214) is the visual center of the war-cry scene. It connects to the smoke simile that follows: both the fire and the smoke signal a besieged city to distant observers. Ἀχιλλεύς has become a signal-fire."
  },

  "man-slaying": {
    greek: "ἀνδροφόνος",
    transliteration: "androphonos",
    literal: "Man-slaying, man-killing — ἀνήρ (man) + φόνος (slaughter, killing)",
    choice: "We render ἀνδροφόνος as *man-slaying* rather than the softer 'manslaying' or 'killer of men.' The hyphen keeps the compound's two halves audible. The word appears in one of the book's most charged moments: his *man-slaying hands* laid on Πάτροκλος's breast.",
    notes: "The epithet ἀνδροφόνος belongs in Homer most often to Ἕκτωρ. Its application to Ἀχιλλεύς's hands at 18.317 — in a moment of grief, not battle — is quietly devastating. The same hands that kill are now holding the killed."
  },

  "shimmering-helm": {
    greek: "κορυθαίολος",
    transliteration: "korythaiolos",
    literal: "Of the flashing/darting helm — κόρυς (helm) + αἴολος (quick-moving, darting, shimmering)",
    choice: "We translate κορυθαίολος as *of shimmering helm* throughout. *Shimmering* captures αἴολος's sense of rapid, darting motion better than the more static 'gleaming.'",
    notes: "The epithet is among Homer's most distinctive compounds. αἴολος carries the sense of quick movement and light-play together — not the static gleam of gold, but the flash of metal in motion. The word is used for starlings, for a lizard in sunlight, for the shimmer of snake-scales."
  },

  "tawny-lion": {
    greek: "αἴθωνα λέοντα",
    transliteration: "aithōna leonta",
    literal: "αἴθων = tawny, fiery, gleaming — from αἴθω (to burn, blaze); the lion's standard Homeric color-epithet",
    choice: "We render *tawny lion* in the simile at 18.161, recovering the color αἴθωνα that is the lion's signature Homeric quality.",
    notes: "αἴθων is the lion's color in Homer as reliably as the sea is 'wine-dark.' The tawny quality — sun-colored, fire-colored — connects lions to fire and gold throughout the poem. The simile compares Ἕκτωρ at the body of Πάτροκλος to a lion over slaughtered prey that cannot be driven off."
  },

  "swift-footed": {
    greek: "πόδας ὠκύς / ποδάρκης / ποδώκης",
    transliteration: "podas ōkys / podarkēs / podōkēs",
    literal: "Swift of foot / fleet of foot — compound epithets from πούς (foot) + ὠκύς (swift)",
    choice: "We render all three forms as *swift-footed* — the standard English formula for this epithet, which preserves both the foot-compound and the Homeric formulaic quality. It appears always in the same metrical positions in the Greek.",
    notes: "The epithet is Ἀχιλλεύς's identifying formula — he is *the* swift-footed hero of the Iliad. The irony of Book 18 is that this swift-footed hero is sitting still, paralyzed by grief, while the battle rages without him. The epithet becomes elegiac."
  },

  "podas-okys": {
    greek: "πόδας ὠκύς",
    transliteration: "podas ōkys",
    literal: "Swift of foot — πούς (foot) in the accusative of respect + ὠκύς (swift). Literally 'swift as to the feet': the quality is located in a specific part of the body, not distributed across the whole person.",
    choice: "swift-footed",
    notes: "The most frequent of Ἀχιλλεύς's speed-epithets in Book 18, appearing at lines 78, 97, and 187. The accusative-of-respect construction — swift *as to* his feet — carries the bodily precision Homer's epithets prefer. ὠκύς is the more poetic word for swift; ταχύς is the more everyday equivalent."
  },

  "podarkes": {
    greek: "ποδάρκης",
    transliteration: "podarkēs",
    literal: "Fleet of foot — πούς (foot) + ἀρκέω (to be strong enough, to ward off, to suffice). The second element gives the compound an edge of capability rather than pure speed: feet that are equal to whatever confronts them.",
    choice: "swift-footed",
    notes: "Used of Ἀχιλλεύς at 18.181, in his exchange with Ἶρις. ποδάρκης is rarer than πόδας ὠκύς and sits in a different metrical slot. The ἀρκέω root — to suffice, to ward off — distinguishes it subtly from the simple speed-compounds: these feet do not merely move fast, they are adequate to the demand placed on them."
  },

  "podokes": {
    greek: "ποδώκης",
    transliteration: "podōkēs",
    literal: "Swift-footed — πούς (foot) + ὠκύς (swift) fully fused into a single adjective. The same elements as πόδας ὠκύς, compressed.",
    choice: "swift-footed",
    notes: "Used of Ἀχιλλεύς at 18.234 as he follows the bearers carrying Πάτροκλος's body back from the field. Homer's three speed-compounds — πόδας ὠκύς, ποδάρκης, ποδώκης — occupy different metrical slots and appear in different formulaic contexts, but all name the same quality: Ἀχιλλεύς is defined by his feet. In Book 18 the swift-footed hero spends most of the book standing still."
  },

  "podas-tachys": {
    greek: "πόδας ταχὺς",
    transliteration: "podas tachys",
    literal: "Swift of foot — the same accusative-of-respect construction as πόδας ὠκύς, with ταχύς (the more everyday word for swift) in place of ὠκύς (the more poetic). Nominative form, epithet of Ἀντίλοχος.",
    choice: "swift-footed",
    notes: "Used of Ἀντίλοχος at 18.2 as he arrives running to bring Ἀχιλλεύς the news of Πάτροκλος's death — the worst errand of the war. That the swift-footed formula here belongs to Ἀντίλοχος, not Ἀχιλλεύς, is a quiet Homeric displacement: the epithet migrates to a lesser runner while its proper owner sits still by the ships."
  },

  "podas-tachyn": {
    greek: "πόδας ταχὺν",
    transliteration: "podas tachyn",
    literal: "Swift of foot — accusative form, modifying Ἀχιλλεύς as the object of the preposition ἀμφί (around). Same construction as πόδας ταχὺς, now in the accusative.",
    choice: "swift-footed",
    notes: "Used of Ἀχιλλεύς at 18.354: the Myrmidons mourn all night around swift-footed Ἀχιλλεύς, lamenting Πάτροκλος. The accusative marks Ἀχιλλεύς as the still centre around whom grief circulates — the swift-footed hero reduced to a fixed point, the epithet of motion applied to a man who is not moving."
  },

  "knowing-mind": {
    greek: "ἰδυίῃσι πραπίδεσσι",
    transliteration: "idyiēisi prapidessin",
    literal: "πραπίς (pl. πραπίδες) = the midriff or diaphragm as the seat of intelligence; ἰδυίῃσι = knowing, skilled (dative feminine plural participle of οἶδα). Literally: 'with knowing prapides' — the intelligence located in the body's physical center.",
    choice: "We translate *with knowing mind* and *with his knowing wits* for the craftsman's intelligence. Homer's πραπίδες are neither purely intellectual nor purely emotional — they name the integrated, embodied understanding that governs expert action.",
    notes: "The phrase applies twice in the forge scene: to Ἥφαιστος laboring at his bellows (*knowing wits*, 18.380) and at the start of the Shield (*with knowing mind*, 18.483). It frames the entire ekphrasis as a performance of divine craft-intelligence. πραπίς is one of Homer's body-words for cognition — less familiar than φρήν but equally physical: the mind understood as something housed in the chest, inseparable from breath and muscle."
  },

  // ── PHRASES AND IMAGES ─────────────────────────────────────────────────────

  "eris-triad": {
    greek: "Ἔρις / Κυδοιμός / Κήρ",
    transliteration: "Eris / Kydoimos / Kēr",
    literal: "Ἔρις = Discord, strife (personified); Κυδοιμός = Tumult, the din of battle (personified); Κήρ = Fate, doom, death-spirit",
    choice: "We render the three as *Discord and wild Tumult, and grim Fate* — preserving the anaphoric accumulation of Homer's line and the progression from social rupture (Ἔρις) through battlefield chaos (Κυδοιμός) to individual death (Κήρ).",
    notes: "This concentrated accumulation — three named abstractions attending war in successive anaphoric clauses — finds its structural echo in the Henry V Prologue: 'at his heels, / Leashed in like hounds, should famine, sword and fire / Crouch for employment.' Homer's three move among the combatants as independent agents; Shakespeare's three are leashed. Whether Shakespeare derived the structure from this passage through Latin translation or Chapman's partial Homer (1598), or independently, the rhetorical kinship is genuine."
  },

  linos: {
    greek: "Λίνος / αἴλινον",
    transliteration: "Linos / ailinon",
    literal: "A harvest dirge; αἴλινον is the ritual refrain, possibly from a Semitic root (*ai lanu*, 'woe to us'). By Homer's time *Linos* had been reified as a legendary musician.",
    choice: "We keep *the Linos-song* as a proper name, in the manner of our translation's classical register, preserving the archaic resonance of the term.",
    notes: "The Linos song (αἴλινον) was an ancient Greek harvest lamentation related to Near Eastern lament traditions. By Homer's time *Linos* had become a legendary musician said to have taught Orpheus and Heracles, and whose death was mourned in the harvest song that bore his name. This passage (18.569–572) is the sole Homeric reference to the Linos song in a festive context — a boy sings it while harvesters dance. Scholars debate whether the scene is joyful or tinged with the elegiac quality of the linos itself: a song of mourning sung at the moment of abundance."
  },

  "grew-into-hand": {
    greek: "ἔν τʼ ἄρα οἱ φῦ χειρί",
    transliteration: "en t' ara hoi phū kheiri",
    literal: "φῦ (aorist of φύω) = to grow, to spring up, to cleave to organically. The phrase literally means 'and she grew into her hand' — not a grasping but a growing-together. φύω names organic attachment: roots into soil, a limb into a body.",
    choice: "*She grew into her hand* renders ἔν τʼ ἄρα οἱ φῦ χειρί exactly. φῦ — the aorist of φύω — is the word that makes the translation philologically precise: Charis does not take the hand of Θέτις; she grows into it, as a living thing grows toward another.",
    notes: "The verb φύω distinguishes this gesture from the standard Homeric χεῖρα λαμβάνω (to take someone's hand). λαμβάνω is a deliberate act of grasping; φύω is organic, involuntary, plant-like. The warmth is doubled: Charis is expressing Ἥφαιστος's debt to Θέτις, who saved him when he was cast from Ὄλυμπος. The growing-into-the-hand is the body's version of that debt — a welcome that does not merely perform hospitality but enacts it at the cellular level."
  },

  wain: {
    greek: "Ἄρκτος / Ἅμαξα",
    transliteration: "Arktos / Hamaxa",
    literal: "Ἄρκτος = the Bear (Ursa Major, the zoomorphic name); Ἅμαξα = the Wagon (the mechanical folk name) — the same constellation known by two images",
    choice: "We translate Homer's Ἅμαξα as *the Wain*. *Wain* (Old English *wæn*, wagon) preserves the Indo-European mechanical image Homer uses — a wagon trundling in circles around the pole — as against the zoological *Bear* image of Ἄρκτος.",
    notes: "The Indo-European roots run deep. *Wain* descends from Proto-Indo-European *weǵʰ-* (to carry, to convey in a vehicle) — the same root as *vehicle*, *way*, and *wagon* itself. Homer's Ἅμαξα shares the conceptual origin: the Greek root ἄγω (to lead, drive) carries a related PIE ancestry. The wagon image is thus genuinely Indo-European, not coincidentally parallel. The Mesopotamian tradition likewise knew these same seven stars as a wagon: Sumerian-Akkadian MAR.GID₂.DA (𒀯𒄑𒈥𒁍𒁕), *eriqqu* — the Wagon. The constellation (now called Ursa Major, the Great Bear, or the Big Dipper in North American usage) is circumpolar at Mediterranean latitudes: it never descends below the horizon. Homer captures this astronomical fact with unadorned precision — *and hath alone no part in Ocean's baths* — the one constellation that never sinks into the encircling sea."
  },

  "lovely-tress": {
    greek: "καλλιπλόκαμος",
    transliteration: "kalliplokamos",
    literal: "Of beautiful tresses — καλλι- (beautiful) + πλόκαμος (a twisted lock of hair, a braid, from πλέκω, to twist)",
    choice: "*Of the lovely tress* renders the single Homeric epithet καλλιπλόκαμος, compressing its compound into a genitive construction. The singular *tress* (rather than plural *tresses*) is an archaism that suits our Marlovian register.",
    notes: "πλόκαμος is a single twisted braid or curl. The compound καλλιπλόκαμος appears only here in the Iliad, as Ariadne's sole identifying epithet — the single detail that Homer gives us for the legendary princess. It places her in the tradition of Homeric women defined by their hair. The lovely hair, the dancing floor, the Cretan setting: Homer gives Ariadne three details, all of them aesthetic, none of them tragic."
  }

};

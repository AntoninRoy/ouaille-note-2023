export interface Artiste {
  /** Identifiant unique (slug) */
  id: string;
  /** Nom affiche dans le slider et en alt de l'image */
  name: string;
  /** Nom decoupe en lignes pour la carte (retour a la ligne visuel) */
  nameLines?: string[];
  /** Chemin de l'image dans /public */
  image: string;
  /** Cadrage de la photo (ex: "center top", "center") */
  imagePosition?: string;
  /** Jour du festival : "VENDREDI" ou "SAMEDI" */
  day: string;
  /** Date affichee sous le nom */
  date: string;
  /** Heure de passage (optionnel, affichee en surimpression) */
  hour?: string;
  /** ID Spotify pour l'embed (partie "Decouvrir l'artiste") */
  spotifyId?: string;
  /** Type de contenu Spotify embarque. Defaut : "artist" */
  spotifyType?: "artist" | "playlist" | "album";
  /** Paragraphes de description (partie "Decouvrir l'artiste") */
  description?: string[];
  /** Credit photo (non affiche pour l'instant, conserve pour reference) */
  photoCredit?: string;
}

export const artistes2026: Artiste[] = [
  {
    id: "skip-the-use",
    name: "SKIP THE USE",
    nameLines: ["SKIP", "THE USE"],
    image: "/images/annonces/skip-the-use.jpg",
    imagePosition: "center top",
    day: "VENDREDI",
    date: "11 SEPTEMBRE 2026",
    spotifyId: "37i9dQZF1DZ06evO45CL5m",
    spotifyType: "playlist",
    description: [
      "Skip the Use est un groupe de rock francais originaire de Lille, forme en 2008. Connu pour leur energie explosive sur scene et leurs tubes comme « Nameless World » et « Ghost », le groupe melange rock, punk et electro pour creer un son unique et federateur.",
      "Apres une pause de plusieurs annees, Skip the Use revient sur le devant de la scene avec une nouvelle formation et une energie intacte. Ne manquez pas leur passage au Festival Ouaille Note !",
    ],
  },
  {
    id: "atili",
    name: "ATILI",
    image: "/images/annonces/atili.jpg",
    imagePosition: "center",
    day: "VENDREDI",
    date: "11 SEPTEMBRE 2026",
    photoCredit: "Charlotte Payan",
    spotifyId: "37i9dQZF1DZ06evO1wSsXm",
    spotifyType: "playlist",
    description: [
      "Figure incontournable de la scène dub et électro française, Atili façonne un univers unique entre basses profondes, mélodies envoûtantes et influences allant du reggae digital à la bass music.",
      "Avec plusieurs albums et des millions d'écoutes, il s'impose par un style à la fois puissant et immersif, toujours en évolution.",
      "Son nouveau projet pousse encore plus loin l'exploration, avec un son plus électronique et futuriste, où chaque fréquence est pensée pour faire vibrer autant le corps que l'esprit.",
    ],
  },
  {
    id: "beat-torrent",
    name: "BEAT TORRENT",
    nameLines: ["BEAT", "TORRENT"],
    image: "/images/annonces/beat-torrent.jpg",
    imagePosition: "center",
    day: "SAMEDI",
    date: "12 SEPTEMBRE 2026",
    photoCredit: "Annabelle Podgornii",
    spotifyId: "3C8PdQGQy4L36PHv4m3sgs",
    spotifyType: "artist",
    description: [
      "Derrière le duo, Atom et Pfel, membres du collectif C2C et multiples champions du monde de DJing. Sur scène, ils enchaînent des sets explosifs entre hip-hop, électro et rock, mêlant scratchs précis et mashups bien sentis.",
      "De retour avec un son plus électronique, plus club, mais toujours aussi efficace : une seule mission, faire trembler le dancefloor.",
    ],
  },
  {
    id: "flavia-coelho-soundsystem",
    name: "FLAVIA COELHO SOUNDSYSTEM",
    nameLines: ["FLAVIA", "COELHO", "SOUNDSYSTEM"],
    image: "/images/annonces/flavia-coelho.jpg",
    imagePosition: "center top",
    day: "VENDREDI",
    date: "11 SEPTEMBRE 2026",
    spotifyId: "37i9dQZF1DZ06evO2Nk3K8",
    spotifyType: "playlist",
    description: [
      "Flavia a parcouru tous les chemins du monde, depuis les morros de Rio de Janeiro jusqu'aux rues pavées de Paris. Dans la tradition des soundsystems jamaïcains qui ont bercé son enfance dans le Nordeste du Brésil, Flavia balancera ses flows sur des riddims originaux, remix et classics, du Roots Reggae à la Cumbia en passant par des sonorités plus électro.",
      "Des titres inédits, ses chansons revisitées.",
    ],
  },
  {
    id: "la-ruda",
    name: "LA RUDA",
    image: "/images/annonces/la-ruda.jpg",
    imagePosition: "center",
    day: "SAMEDI",
    date: "12 SEPTEMBRE 2026",
    spotifyId: "37i9dQZF1DZ06evO3fM3lM",
    spotifyType: "playlist",
    description: [
      "La Ruda, c'est plus de 20 ans d'existence où toute son envergure se retrouve sur scène. Les concerts sont portés par une énergie rare et une communion fiévreuse avec le public. La Ruda a réalisé plus de 1000 concerts, joué dans les salles les plus obscures comme dans les plus réputées, participé aux plus grands festivals en France bien sûr, mais aussi dans toute l'Europe comme au Canada, en Chine ou au Japon.",
      "Et les revoilà, en 2026 sur la route car... il y aura toujours du monde à saluer et des joies à partager. Un plaisir tenace. Alors ce sera dans l'envie ! Dans l'envoi ! Comme toujours…",
    ],
  },
  {
    id: "bianca-costa",
    name: "BIANCA COSTA",
    nameLines: ["BIANCA", "COSTA"],
    image: "/images/annonces/bianca-costa.jpg",
    imagePosition: "center top",
    day: "SAMEDI",
    date: "12 SEPTEMBRE 2026",
    spotifyId: "37i9dQZF1DZ06evO0Uq5SH",
    spotifyType: "playlist",
    description: [
      "Artiste montante du paysage musical français, Bianca Costa cumule près de 50M de streams à travers le monde. Révélée avec « Ounana » (sélectionné pour FIFA 23), elle collabore avec des figures majeures comme Sia, Major Lazer, Fally Ipupa, MC Pedrinho ou encore Soso Maness.",
      "Avec son premier album « GRINGA », elle propose un univers à son image, mêlant sonorités urbaines et influences pop dans une fusion moderne et efficace. Son single « Maluka » incarne cette énergie : un titre solaire, rythmé et accrocheur, porté par une vraie sensibilité.",
    ],
  },
  {
    id: "fatbabs-riddim-ryders",
    name: "FATBABS & THE RIDDIM RYDERS",
    nameLines: ["FATBABS &", "THE RIDDIM", "RYDERS"],
    image: "/images/annonces/fatbabs.jpg",
    imagePosition: "center",
    day: "SAMEDI",
    date: "12 SEPTEMBRE 2026",
    photoCredit: "Valentin Campagnie",
    spotifyId: "37i9dQZF1DZ06evO03C9AC",
    spotifyType: "playlist",
    description: [
      "Figure centrale du reggae français, Fatbabs s'impose aujourd'hui avec une vision claire : faire dialoguer la culture Sound System et l'efficacité du beatmaking. Producteur et chef d'orchestre, il place l'énergie collective au cœur de son live.",
      "Avec le show Fatbabs & The Riddim Ryders, accompagné de Davojah et Cheeko, il propose une performance puissante et fédératrice. Entre drops marquants et improvisations, le set crée une interaction constante avec le public, du jump collectif aux moments plus intenses.",
      "Porté par un répertoire taillé pour la scène et un album sorti en juin 2025, ce format s'adapte aussi bien aux clubs qu'aux grands festivals.",
    ],
  },
  {
    id: "bold",
    name: "BOLD (CHINESE MAN RECORDS)",
    nameLines: ["BOLD", "(CHINESE MAN RECORDS)"],
    image: "/images/annonces/bold.jpg",
    imagePosition: "center",
    day: "VENDREDI",
    date: "11 SEPTEMBRE 2026",
    photoCredit: "Damien Chamcirkan",
    spotifyId: "5VO3c66sAmJgJIbsHFZXT2",
    spotifyType: "artist",
    description: [
      "Né de la rencontre entre High Ku (Chinese Man) et Supa-Jay (Scratch Bandits Crew), BOLD fusionne avec finesse les influences Hip-Hop old school, Trip Hop et sonorités électroniques modernes. Imaginé dans les studios de Chinese Man Records, le projet construit un univers riche, à la fois brut, mélodique et immersif.",
      "Sur scène, BOLD propose un live intense où les samples oubliés rencontrent des productions percutantes et des textures électroniques modernes. Entre rythmiques lourdes, atmosphères planantes et énergie maîtrisée, le duo embarque le public dans une expérience sonore aussi puissante qu'hypnotique.",
      "Avec un set pensé pour le live, BOLD s'impose comme une proposition unique, capable de faire vibrer aussi bien les amateurs de beats underground que les scènes festival les plus électriques.",
    ],
  },
  {
    id: "oak-veins",
    name: "OAK VEINS",
    image: "/images/annonces/oak-veins.jpg",
    imagePosition: "center",
    day: "VENDREDI",
    date: "11 SEPTEMBRE 2026",
    spotifyId: "0gpHaqO3cBUzg6II50YUnc",
    spotifyType: "artist",
    description: [
      "Lauréat du Tremplin et plébiscité par les votes du public, Oak Veins ouvrira la soirée du vendredi 11 septembre.",
      "Né en 2020, Oak Veins puise ses racines dans la spiritualité du blues, la puissance du rock et l'intensité du heavy pour créer un univers aussi envoûtant qu'énergique.",
      "Porté par une voix éraillée, des guitares habitées, une basse mélodieuse et des rythmiques hypnotiques, le groupe développe depuis cinq ans un Heavy Blues singulier qu'il défend avec passion sur scène.",
      "Après un premier EP remarqué en 2022, Oak Veins a dévoilé début 2025 un premier album de 10 titres qui confirme toute la richesse et l'originalité de son univers.",
    ],
  },
  {
    id: "mc-defra",
    name: "MC DEFRA",
    image: "/images/annonces/mc-defra.jpg",
    imagePosition: "center",
    day: "SAMEDI",
    date: "12 SEPTEMBRE 2026",
    spotifyId: "7qEqJjJda4YoUM2CapOl5S",
    spotifyType: "artist",
    description: [
      "Lauréat du Tremplin et plébiscité par les votes du public, MC DEFRA ouvrira la soirée du samedi 12 septembre.",
      "Originaire de la Vienne, MC DEFRA propose un univers original à la croisée du rap, du reggae et du rock.",
      "Porté par des textes engagés, sincères et souvent teintés d'humour, il puise son inspiration dans la ruralité, les rencontres et les épreuves de la vie pour construire un projet authentique et profondément humain.",
      "Une énergie communicative, une plume singulière et une vraie présence scénique qui promettent un show unique sur la scène du Ouaille Note.",
    ],
  },
];

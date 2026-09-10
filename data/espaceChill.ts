export interface CreneauChill {
  /** Horaire affiche au-dessus du titre (ex: "16H00 - 19H00", "TOUTE LA JOURNEE") */
  hour: string;
  /** Intitule de l'animation */
  title: string;
  /** Complement de titre affiche sur la meme ligne, en plus petit */
  titleSuffix?: string;
  /** Lignes de details sous le titre (style musical, precisions, compagnie...) */
  details?: string[];
}

export interface SoireeChill {
  /** Jour du festival */
  day: "VENDREDI" | "SAMEDI";
  /** Creneaux du soir, dans l'ordre chronologique */
  creneaux: CreneauChill[];
}

export interface LogoChill {
  /** Nom du partenaire (alt de l'image) */
  name: string;
  /** Chemin du logo dans /public */
  image: string;
  /** Couleur de la pastille derriere le logo. Defaut : blanc */
  background?: string;
}

/** Programme de l'Espace Chill, par soir. */
export const espaceChill: SoireeChill[] = [
  {
    day: "VENDREDI",
    creneaux: [
      {
        hour: "16H00 - 19H00",
        title: "LE «BEFORE» DU OUAILLE NOTE ?",
        details: ["REGGAE - ELECTRO"],
      },
      {
        hour: "02H00 - 05H00",
        title: "ALAIN & LA BAIGNADE + GUEST",
        details: ["ELECTRO - TECHNO"],
      },
    ],
  },
  {
    day: "SAMEDI",
    creneaux: [
      {
        hour: "TOUTE LA JOURNEE",
        title: "JEUX / ANIMATIONS",
        details: ["LASER GAME • COMBATS DE SUMO • CORN'OUAILLE"],
      },
      {
        hour: "10H30 - 14H00",
        title: "BAR A HUITRES",
        titleSuffix: "ET SES RAFRAICHISSEMENTS",
      },
      {
        hour: "14H30",
        title: "CONCOURS DE PALET",
        details: ["INSCRIPTION A PARTIR DE 14H"],
      },
      {
        hour: "16H00 - 17H00",
        title: "DISCO FIRE",
        details: [
          "SPECTACLE MUSICAL ET FESTIF",
          "PAR LA COMPAGNIE LE BOUT DE L'ALLUMETTE",
        ],
      },
      {
        hour: "17H00 - 18H30",
        title: "LA BOOM DU OUAILLE ! AVEC MISS MUSHY",
        details: ["DEGUISEMENT ET MAQUILLAGE SUR PLACE"],
      },
      {
        hour: "02H00 - 05H00",
        title: "ALAIN & LA BAIGNADE + GUEST",
        details: ["ELECTRO - TECHNO"],
      },
    ],
  },
];

/** Partenaires jeux / animations, affiches en tete de la colonne du samedi. */
export const partenairesJeux: LogoChill[] = [
  { name: "Laser Game Evolution Poitiers", image: "/images/chill/laser-game-evolution.png" },
  { name: "Woopy On Off", image: "/images/chill/woopy.png" },
];

/** Food trucks presents sur l'Espace Chill. */
export const foodTrucksChill: LogoChill[] = [
  {
    name: "Roule Tonton",
    image: "/images/chill/roule-tonton.png",
    background: "#d1222b",
  },
  {
    name: "Afro B Food",
    image: "/images/chill/afro-b-food.png",
    background: "#111111",
  },
];

/** Boissons servies au bar de l'Espace Chill. */
export const barChill = "THE, CAFE, BIERES, SOFTS";

import Image from "next/legacy/image";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import { SiSpotify, SiDeezer } from "react-icons/si";
import { artistes2026, Artiste } from "../data/programmation2026";

type DayFilter = "VENDREDI" | "SAMEDI" | null;

const DAY_TABS: { label: string; date: string; value: DayFilter }[] = [
  { label: "TOUT", date: "11 & 12 SEPT.", value: null },
  { label: "VENDREDI", date: "11 SEPT.", value: "VENDREDI" },
  { label: "SAMEDI", date: "12 SEPT.", value: "SAMEDI" },
];

/** Ouverture des portes, par soir. Filtre par l'onglet selectionne. */
const OUVERTURE_PORTES: { day: Exclude<DayFilter, null>; hour: string }[] = [
  { day: "VENDREDI", hour: "19H00" },
  { day: "SAMEDI", hour: "18H45" },
];

/** Convertit "22H30" en minutes depuis le debut de soiree.
 *  Les heures d'apres minuit (< 06H) sont repoussees en fin de soiree. */
const heureEnMinutes = (hour?: string): number => {
  const match = hour?.match(/^(\d{1,2})H(\d{2})$/i);
  if (!match) return Number.MAX_SAFE_INTEGER;
  const heures = Number(match[1]);
  return (heures < 6 ? heures + 24 : heures) * 60 + Number(match[2]);
};

/** Dates du festival, pour preselectionner l'onglet du jour. */
const JOURS_FESTIVAL: { date: string; value: DayFilter }[] = [
  { date: "2026-09-11", value: "VENDREDI" },
  { date: "2026-09-12", value: "SAMEDI" },
];

/** Onglet a preselectionner selon la date locale du visiteur ("TOUT" hors festival). */
const ongletDuJour = (maintenant: Date): DayFilter => {
  const aujourdhui = [
    maintenant.getFullYear(),
    String(maintenant.getMonth() + 1).padStart(2, "0"),
    String(maintenant.getDate()).padStart(2, "0"),
  ].join("-");
  return JOURS_FESTIVAL.find((jour) => jour.date === aujourdhui)?.value ?? null;
};

export default function Home() {
  const description =
    "Le 11 et 12 septembre 2026, rendez-vous à Vasles (79), dans les Deux-Sèvres pour la 12ème édition du Festival Ouaille'Note.";
  const title = "Festival Ouaille Note | Vasles (79) | 11 et 12 septembre 2026";
  const pageName = "Accueil";

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [selectedArtiste, setSelectedArtiste] = useState<Artiste | null>(null);

  // Filtre de programmation : null = les deux soirs (defaut)
  const [selectedDay, setSelectedDay] = useState<DayFilter>(null);

  // Pendant le festival, on preselectionne le soir en cours. Calcule apres le
  // montage : la date du visiteur n'est pas connue au rendu serveur.
  useEffect(() => {
    setSelectedDay(ongletDuJour(new Date()));
  }, []);

  // Onglet "TOUT" : les deux ouvertures. Sinon, celle du soir selectionne.
  const portesAffichees = selectedDay
    ? OUVERTURE_PORTES.filter((porte) => porte.day === selectedDay)
    : OUVERTURE_PORTES;

  // Filtre par soir + tri chronologique. L'onglet "TOUT" garde l'ordre d'origine.
  const artistesFiltres = selectedDay
    ? artistes2026
        .filter((artiste) => artiste.day === selectedDay)
        .sort((a, b) => heureEnMinutes(a.hour) - heureEnMinutes(b.hour))
    : artistes2026;

  useEffect(() => {
    const countDownDate = new Date("Sept 11, 2026 18:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="countdown-box">
      <span className="countdown-value">{value.toString().padStart(2, "0")}</span>
      <span className="countdown-label">{label}</span>
    </div>
  );

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div>
          <div className="hero-section">
            {/* Background */}
            <div className="hero-background">
              <div className="hero-gradient" />
            </div>

            {/* Contenu */}
            <div className="hero-content-original">
              {/* Titre */}
              <h1
                style={{
                  padding: "0",
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Crunold",
                  fontSize: "25px",
                  marginBottom: "20px",
                }}
              >
                OUAILLE NOTE #12
              </h1>

              {/* Logo avec animation */}
              <motion.div
                className="logo-container logo-animated"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  position: "relative",
                  width: "80vw",
                  maxWidth: "400px",
                  height: "45vh",
                }}
              >
                <Image
                  alt="Ouaille Note 12 2026"
                  src="/images/logo/ON12TRANSPARENT.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </motion.div>

              {/* Lieu et Date */}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <span
                  style={{
                    fontSize: "50px",
                    fontFamily: "Crunold",
                    fontWeight: "400",
                    color: "#FFFFFF",
                  }}
                >
                  VASLES 79
                </span>
                <br />
                <span
                  style={{
                    fontSize: "40px",
                    fontFamily: "Bebas-Neue",
                    fontWeight: "700",
                    lineHeight: "25px",
                    color: "#ceda42",
                  }}
                >
                  11-12 SEPTEMBRE 2026
                </span>
              </div>

              {/* Compte à rebours stylisé */}
              <div className="countdown-container" style={{ marginTop: "25px" }}>
                <CountdownBox value={countdown.days} label="JOURS" />
                <CountdownBox value={countdown.hours} label="HEURES" />
                <CountdownBox value={countdown.minutes} label="MIN" />
                <CountdownBox value={countdown.seconds} label="SEC" />
              </div>

              {/* Raccourcis vers les playlists en bas de page */}
              <div className="playlist-links">
                <a className="playlist-link playlist-link-spotify" href="#playlists">
                  <SiSpotify className="playlist-link-icon" />
                  <span className="playlist-link-label">SPOTIFY</span>
                </a>
                <a className="playlist-link playlist-link-deezer" href="#playlists">
                  <SiDeezer className="playlist-link-icon" />
                  <span className="playlist-link-label">DEEZER</span>
                </a>
              </div>

              {/* Flèche scroll */}
              <div className="double-arrow" style={{ marginTop: "20px" }}>
                <RiArrowDownSLine />
              </div>
            </div>
          </div>

          {/* Section Annonce Artiste */}
          <section className="artist-section">
            <div className="artist-section-header">
              <h2 className="artist-section-title">PROGRAMMATION 2026</h2>

              {/* Onglets de filtre : les deux soirs (defaut), vendredi, samedi */}
              <div className="artist-tabs" role="tablist">
                {DAY_TABS.map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    role="tab"
                    aria-selected={selectedDay === tab.value}
                    className={`artist-tab${
                      selectedDay === tab.value ? " artist-tab-active" : ""
                    }`}
                    onClick={() => setSelectedDay(tab.value)}
                  >
                    <span className="artist-tab-day">{tab.label}</span>
                    <span className="artist-tab-date">{tab.date}</span>
                  </button>
                ))}
              </div>

              {/* Ouverture des portes : suit l'onglet selectionne */}
              <div className="doors-banner">
                <span className="doors-banner-label">
                  OUVERTURE
                  <br />
                  DES PORTES
                </span>
                <div className="doors-banner-times">
                  {portesAffichees.map((porte) => (
                    <span className="doors-banner-item" key={porte.day}>
                      <span className="doors-banner-day">{porte.day}</span>
                      <span className="doors-banner-hour">{porte.hour}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="artist-cards-list">
              {artistesFiltres.map((artiste, index) => (
                <motion.div
                  key={artiste.id}
                  className="artist-card"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  // Marge basse : l'animation demarre avant que la carte
                  // n'atteigne le bas de l'ecran.
                  viewport={{ once: true, margin: "0px 0px 150px 0px" }}
                  // Decalage borne aux deux premieres cartes : au-dela, les
                  // cartes entrent une a une dans l'ecran et n'ont pas a
                  // heriter du retard cumule de celles d'avant.
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: Math.min(index, 2) * 0.08,
                  }}
                >
                  <div className="artist-card-glow" />
                  <div className="artist-card-inner">
                    <div className="artist-card-left">
                      <div className="artist-photo-wrapper">
                        {/* Cadre décoratif incliné */}
                        <div className="artist-photo-frame" />
                        <div className="artist-photo">
                          <Image
                            src={artiste.image}
                            alt={artiste.name}
                            layout="fill"
                            objectFit="cover"
                            objectPosition={artiste.imagePosition ?? "center"}
                          />
                        </div>
                      </div>
                      {/* Heure de passage superposée sur la photo */}
                      {artiste.hour && (
                        <span className="artist-overlay-text">{artiste.hour}</span>
                      )}
                    </div>
                    <div className="artist-card-right">
                      {/* Grand texte de fond : le nom de l'artiste */}
                      <span className="artist-bg-text">{artiste.name}</span>
                      <span className="artist-day-badge">{artiste.day}</span>
                      <h3 className="artist-name">
                        {(artiste.nameLines ?? [artiste.name]).map((line, i) => (
                          <span key={i}>
                            {i > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="artist-date">{artiste.date}</p>
                      <button
                        className="artist-details-btn"
                        onClick={() => setSelectedArtiste(artiste)}
                      >
                        DECOUVRIR L&apos;ARTISTE
                      </button>
                    </div>
                  </div>

                  {/* Bande diagonale décorative */}
                  <div className="artist-card-stripe" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Playlists du festival */}
          <section className="playlists-section" id="playlists">
            <div className="playlists-header">
              <h2 className="artist-section-title">ECOUTER LA PROGRAMMATION</h2>
              <p className="playlists-subtitle">
                Les artistes de l&apos;edition 2026, sur Spotify et Deezer.
              </p>
            </div>

            <div className="playlists-grid">
              <div className="playlist-embed">
                <h3 className="playlist-embed-title">
                  <SiSpotify className="playlist-embed-icon" /> SPOTIFY
                </h3>
                <iframe
                  data-testid="embed-iframe"
                  title="Playlist Spotify du festival"
                  src="https://open.spotify.com/embed/playlist/52YcHTZthHMjbTEhN9bfMb?utm_source=generator&si=1e61819d647d4188"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: "12px" }}
                />
              </div>

              <div className="playlist-embed">
                <h3 className="playlist-embed-title">
                  <SiDeezer className="playlist-embed-icon" /> DEEZER
                </h3>
                <iframe
                  title="Playlist Deezer du festival"
                  src="https://widget.deezer.com/widget/dark/playlist/15575537143"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="encrypted-media; clipboard-write"
                  loading="lazy"
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>

      {/* Bottom Slider Artiste */}
      <AnimatePresence>
        {selectedArtiste && (
          <>
            {/* Overlay */}
            <motion.div
              className="slider-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtiste(null)}
            />
            {/* Slider */}
            <motion.div
              className="artist-slider"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="artist-slider-header">
                <h3 className="artist-slider-title">{selectedArtiste.name}</h3>
                <button
                  className="artist-slider-close"
                  onClick={() => setSelectedArtiste(null)}
                >
                  <RiCloseLine size={28} />
                </button>
              </div>
              <div className="artist-slider-content" onClick={(e) => e.stopPropagation()}>
                {/* Spotify Embed */}
                {selectedArtiste.spotifyId && (
                  <div className="artist-spotify" onClick={(e) => e.stopPropagation()}>
                    <iframe
                      src={`https://open.spotify.com/embed/${
                        selectedArtiste.spotifyType ?? "artist"
                      }/${selectedArtiste.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                )}
                {/* Description */}
                <div className="artist-description">
                  {(selectedArtiste.description ?? []).map((paragraphe, i) => (
                    <p key={i}>{paragraphe}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

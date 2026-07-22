import Layout from "@/components/Layout/Layout";
import Image from "next/legacy/image";

import styles from "../styles/Partenaires.module.css";

export default function Partenaires() {
  const description = "Partenaires du Ouaille Note ? Festival.";
  const title = "Partenaires | Festival Ouaille Note";
  const pageName = "Partenaires";

  const partenaires = [
    { path: "ministere-culture.png", nom: "Ministère de la Culture et de la Communication" },
    { path: "nouvelle-aquitaine.png", nom: "Région Nouvelle-Aquitaine" },
    { path: "deux-sevres.png", nom: "Département des Deux-Sèvres" },
    { path: "parthenay-gatine.png", nom: "Communauté de Communes Parthenay-Gâtine" },
    { path: "vasles.png", nom: "Commune de Vasles" },
    { path: "csc-pays-menigoutais.png", nom: "Centre Socio-Culturel Pays Ménigoutais" },
    { path: "credit-agricole.png", nom: "Crédit Agricole Charente-Maritime Deux-Sèvres" },
    { path: "de-meche-avec-vous.png", nom: "De mèche avec vous" },
    { path: "diffart.png", nom: "Diff'art" },
    { path: "girard-vitre.png", nom: "SAS Girard-Vitré" },
    { path: "les-2-fer.png", nom: "Les 2 Fer" },
    { path: "quincaillerie-vasleenne.png", nom: "La Quincaillerie Vasléenne" },
    { path: "yc-conseil.png", nom: "Y&C Conseil" },
    { path: "spar-vasles.png", nom: "SPAR Vasles" },
    { path: "la-regalade.png", nom: "La Régalade" },
    { path: "west-wood-tiny.png", nom: "West Wood Tiny" },
    { path: "impulsion.png", nom: "Impulsion" },
    { path: "metal-fer.png", nom: "Métal Fer Recyclage & Environnement" },
    { path: "fb-eurl.png", nom: "FB Eurl" },
    { path: "laser-game-evolution.png", nom: "Laser Game Evolution" },
    { path: "vlok.png", nom: "V'Lok" },
    { path: "prisme.png", nom: "Prisme Éclairage Scénique" },
    { path: "areas-assurances.png", nom: "Areas Assurances" },
    { path: "roule-tonton.png", nom: "Roule Tonton" },
    { path: "radio-gatine.png", nom: "Radio Gâtine" },
    { path: "eb-emilie-benoit.png", nom: "Emilie & Benoit" },
    { path: "rebeb.png", nom: "Rebeb" },
    { path: "tag.png", nom: "TAG" },
    { path: "agneau-poitou-charentes.png", nom: "L'Agneau du Poitou-Charentes" },
    { path: "si-agencement.png", nom: "SI Agencement" },
    { path: "matos-menuiserie.png", nom: "Matos Menuiserie" },
    { path: "open-5.png", nom: "L'Open 5" },
    { path: "saint-loup.png", nom: "Saint-Loup sur Thouet" },
    { path: "sylvain-rouvreau.png", nom: "Sylvain Rouvreau Menuiserie" },
    { path: "parc-mouton-village.png", nom: "Parc Mouton Village" },
    { path: "poitou-chevre.png", nom: "Fromagerie Poitou Chèvre" },
    { path: "russeil-chauffage.png", nom: "Russeil Maintenance Chauffage" },
    { path: "la-luma.png", nom: "La Luma" },
    { path: "sovam.png", nom: "Sovam" },
    { path: "tti-services.png", nom: "TTI Services Imprimerie" },
    { path: "gourbault.png", nom: "Gourbault Fer & Métaux" },
    { path: "br-zinguerie.png", nom: "BR Couverture Zinguerie" },
    { path: "v-and-b-parthenay.png", nom: "V and B Parthenay" },
    { path: "guimick-media.png", nom: "Guimick Media" },
    { path: "castorama.png", nom: "Castorama" },
    { path: "urban-painters.png", nom: "Urban Painters" },
  ];

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="page-background" style={{ padding: "0 20px", paddingBottom: "50px" }}>

          <h1
            style={{
              paddingTop: "10vh",
              paddingBottom: "5vh",
              color: "#ceda42",
              fontFamily: "Crunold",
              textAlign: "center",
              fontSize: "2.5em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            PARTENAIRES
          </h1>

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
            }}
          >
            <div className={styles.grid}>
              {partenaires.map((partenaire, i) => (
                <div key={i} className={styles.griditem}>
                  <div className={styles.picture}>
                    <div>
                      <Image
                        alt={`Partenaire ${partenaire.nom}`}
                        src={`/images/partenaires/2026/${partenaire.path}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}

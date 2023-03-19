import Layout from "@/components/Layout/Layout";
import Image from "next/legacy/image";

import styles from "../styles/Partenaires.module.css";

export default function Billetterie() {
  const description = "Partenaires du Ouaille Note ? Festival.";
  const title = "Partenaires | Festival Ouaille Note";
  const pageName = "Partenaires";

  const institutionnels = [
    {
      path: "comcompy.jpg",
      nom: "Communauté de communes Parthenay-Gatine",
    },
    {
      path: "regions.png",
      nom: "Region Aquitaine Limousin Poitou-Charentes",
    },
    {
      path: "terredefestivals.jpg",
      nom: "Terre de festivals Deux sèvres",
    },
    {
      path: "sacem.png",
      nom: "SACEM",
    },
    {
      path: "vasles.jpg",
      nom: "Commune de Vasles",
    },

    {
      path: "ministereculture.jpg",
      nom: "Ministère de la culture",
    },
  ];
  const medias = [
    {
      path: "fnac.jpg",
      nom: "La Fnac",
    },
    {
      path: "infoconcert.png",
      nom: "infoconcert.com",
    },
    {
      path: "festivalrock.jpg",
      nom: "festivalrock.com",
    },
    {
      path: "reggaepromo.png",
      nom: "reggae-promo.com",
    },
    {
      path: "radioGatine.jpg",
      nom: "Radio Gatine",
    },
    {
      path: "nouvellerepublique.png",
      nom: "La nouvelle République",
    },

    // {
    //   path: "pulsar.jpg",
    //   nom: "Radio Pulsar",
    // },
  

  ];
  const privees = [
    {
      path: "agneaupoitou.jpg",
      nom: "Agneau du poitou",
    },
    {
      path: "metsenvin.png",
      nom: "Cave Mets en vin",
    },
    {
      path: "ca.jpg",
      nom: "Crédit Agricole",
    },
    
    {
      path: "spar.jpg",
      nom: "SPAR Vasles",
    },
    {
      path: "avenirelec.png",
      nom: "Avenir Elec",
    },
    {
      path: "bordage.jpg",
      nom: "SARL Bordage",
    },
    {
      path: "fb.jpg",
      nom: "FB EURL",
    },
    {
      path: "pepsandgo.PNG",
      nom: "Peps and Go",
    },
    {
      path: "moutonvillage.png",
      nom: "Mouton Village",
    },
  {
      path: "guimick.jpg",
      nom: "GUIMICK Media",
    },
    {
      path: "lezinc.png",
      nom: "Bar le Zinc",
    },
    {
      path: "taxidutouhet.png",
      nom: "Taxi du thouet",
    },
    {
      path: "toilettes.jpg",
      nom: "Toilettes&Co",
    },
    {
      path: "espritpub.jpg",
      nom: "Esprit Pub",
    },
    {
      path: "CANIVET.png",
      nom: "Traiteur Canivet et associés",
    },
    {
      path: "tissuterie.jpg",
      nom: "La Tissuterie",
    },
    {
      path: "saintloup.png",
      nom: "Saint Loup",
    },
    {
      path: "tag.jpg",
      nom: "TAG",
    },
    {
      path: "rebeb.png",
      nom: "Rebeb",
    },
    {
      path: "prisme.jpg",
      nom: "Prisme Eclairage Scenique",
    },
    {
      path: "hydrozone.png",
      nom: "Hydrozone",
    },
    
    {
      path: "bevin.jpg",
      nom: "BE & VIN",
    },
    {
      path: "gatineprimeur.jpg",
      nom: "Gatine Primeurs",
    },
    {
      path: "open55.png",
      nom: "Open 5",
    },
    {
      path: "lasergame.png",
      nom: "Laser Game Evolution",
    },
    {
      path: "mutuellePoitiers.jpg",
      nom: "Mutuelle de Poitiers Assurances",
    },
    {
      path: "westwood.jpg",
      nom: "West wood Tiny",
    },    
    {
      path: "corpsetesprit.jpeg",
      nom: "Corps Et Esprit Institut",
    },
    {
      path: "aicm.png",
      nom: "AICM",
    },
    {
      path: "russeill.jpg",
      nom: "Russeil Chauffage",
    },
    
    {
      path: "GROUPEACTIVE.png",
      nom: "Groupe Active",
    },

    // {
    //   path: "diffart.jpg",
    //   nom: "Diffart",
    // },
    // {
    //   path: "david.jpg",
    //   nom: "Boucherie David",
    // },
    // {
    //   path: "csc.png",
    //   nom: "CSC Pays Ménigoutais",
    // },

  ];
  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <>
          <h1 className="heading1 pink">PARTENAIRES</h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2em",
              fontFamily: "Bebas-Neue",
            }}
          >
            Institutionnels
          </h2>
          <div className={styles.grid}>
            {institutionnels.map((partenaire, i) => {
              return (
                <div key={i} className={styles.griditem}>
                  <div className={styles.picture}>
                    <div>
                      <Image
                        alt={`Partenaire ${partenaire.nom}`}
                        src={`/images/partenaires/${partenaire.path}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2em",
              fontFamily: "Bebas-Neue",
            }}
          >
            Medias
          </h2>
          <div className={styles.grid}>
            {medias.map((partenaire, i) => {
              return (
                <div key={i} className={styles.griditem}>
                  <div className={styles.picture}>
                    <div>
                      <Image
                        alt={`Partenaire ${partenaire.nom}`}
                        src={`/images/partenaires/${partenaire.path}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h2
            style={{
              textAlign: "center",
              fontSize: "2em",
              fontFamily: "Bebas-Neue",
            }}
          >
            Prives
          </h2>
          <div className={styles.grid}>
            {privees.map((partenaire, i) => {
              return (
                <div key={i} className={styles.griditem}>
                  <div className={styles.picture}>
                    <div>
                      <Image
                        alt={`Partenaire ${partenaire.nom}`}
                        src={`/images/partenaires/${partenaire.path}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Layout>
    </>
  );
}

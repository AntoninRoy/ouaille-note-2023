import Layout from "@/components/Layout/Layout";
import Image from "next/legacy/image";
import { Building2, Radio, Briefcase } from "lucide-react";

import styles from "../styles/Partenaires.module.css";

export default function Partenaires() {
  const description = "Partenaires du Ouaille Note ? Festival.";
  const title = "Partenaires | Festival Ouaille Note";
  const pageName = "Partenaires";

  const institutionnels = [
    { path: "comcompy.jpg", nom: "Communauté de communes Parthenay-Gatine" },
    { path: "regions.png", nom: "Region Aquitaine Limousin Poitou-Charentes" },
    { path: "nouvelleAquitaine.jpg", nom: "Région de la Nouvelle Aquitaine" },
    { path: "terredefestivals.jpg", nom: "Terre de festivals Deux sèvres" },
    { path: "sacem.png", nom: "SACEM" },
    { path: "vasles.jpg", nom: "Commune de Vasles" },
    { path: "ministereculture.jpg", nom: "Ministère de la culture" },
  ];

  const medias = [
    { path: "fnac.jpg", nom: "La Fnac" },
    { path: "infoconcert.png", nom: "infoconcert.com" },
    { path: "festivalrock.jpg", nom: "festivalrock.com" },
    { path: "reggaepromo.png", nom: "reggae-promo.com" },
    { path: "radioGatine.jpg", nom: "Radio Gatine" },
    { path: "nouvellerepublique.png", nom: "La nouvelle République" },
    { path: "paysdegatine.jpg", nom: "Pays de gatine" },
    { path: "pulsar.jpg", nom: "Radio Pulsar" },
  ];

  const privees = [
    { path: "pizzavan.png", nom: "Pizza Van" },
    { path: "impulsion.jpg", nom: "Impulsion" },
    { path: "solaire17.png", nom: "Solaire 17" },
    { path: "victor.png", nom: "Victor Architecture" },
    { path: "busont.jpg", nom: "Busont Fabrice" },
    { path: "audreytaxi.png", nom: "Audrey Taxi" },
    { path: "agneaupoitou.jpg", nom: "Agneau du poitou" },
    { path: "metsenvin.png", nom: "Cave Mets en vin" },
    { path: "ca.jpg", nom: "Crédit Agricole" },
    { path: "spar.jpg", nom: "SPAR Vasles" },
    { path: "faitmain.jpg", nom: "Fait Main" },
    { path: "avenirelec.png", nom: "Avenir Elec" },
    { path: "bordage.jpg", nom: "SARL Bordage" },
    { path: "meche.jpg", nom: "De mèche avec vous" },
    { path: "fb.jpg", nom: "FB EURL" },
    { path: "pepsandgo.PNG", nom: "Peps and Go" },
    { path: "moutonvillage.png", nom: "Mouton Village" },
    { path: "guimick.jpg", nom: "GUIMICK Media" },
    { path: "lezinc.png", nom: "Bar le Zinc" },
    { path: "taxidutouhet.png", nom: "Taxi du thouet" },
    { path: "toilettes.jpg", nom: "Toilettes&Co" },
    { path: "espritpub.jpg", nom: "Esprit Pub" },
    { path: "CANIVET.png", nom: "Traiteur Canivet et associés" },
    { path: "tissuterie.jpg", nom: "La Tissuterie" },
    { path: "saintloup.png", nom: "Saint Loup" },
    { path: "tag.jpg", nom: "TAG" },
    { path: "rebeb.png", nom: "Rebeb" },
    { path: "prisme.jpg", nom: "Prisme Eclairage Scenique" },
    { path: "hydrozone.png", nom: "Hydrozone" },
    { path: "bevin.jpg", nom: "BE & VIN" },
    { path: "gatineprimeur.jpg", nom: "Gatine Primeurs" },
    { path: "open55.png", nom: "Open 5" },
    { path: "lasergame.png", nom: "Laser Game Evolution" },
    { path: "mutuellePoitiers.jpg", nom: "Mutuelle de Poitiers Assurances" },
    { path: "westwood.jpg", nom: "West wood Tiny" },
    { path: "corpsetesprit.jpeg", nom: "Corps Et Esprit Institut" },
    { path: "aicm.png", nom: "AICM" },
    { path: "russeill.jpg", nom: "Russeil Chauffage" },
    { path: "GROUPEACTIVE.png", nom: "Groupe Active" },
    { path: "diffart.jpg", nom: "Diffart" },
    { path: "csc.png", nom: "CSC Pays Ménigoutais" },
  ];

  const PartenaireSection = ({
    title,
    icon: Icon,
    partenaires
  }: {
    title: string;
    icon: any;
    partenaires: { path: string; nom: string }[]
  }) => (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto 30px",
        padding: "25px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "6px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "25px", justifyContent: "center" }}>
        <Icon size={28} color="#ceda42" style={{ marginRight: "15px" }} />
        <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.8em", margin: 0 }}>
          {title}
        </h2>
      </div>
      <div className={styles.grid}>
        {partenaires.map((partenaire, i) => (
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
        ))}
      </div>
    </div>
  );

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

          <PartenaireSection title="Institutionnels" icon={Building2} partenaires={institutionnels} />
          <PartenaireSection title="Médias" icon={Radio} partenaires={medias} />
          <PartenaireSection title="Privés" icon={Briefcase} partenaires={privees} />

        </div>
      </Layout>
    </>
  );
}

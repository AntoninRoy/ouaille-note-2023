import Layout from "../components/Layout/Layout";
import Image from "next/legacy/image";
import Link from "next/link";
import { MapPin, Car, Train, Users, Tent, Utensils, Shield, Gamepad2 } from "lucide-react";

export default function InfosPratiques() {
  const description = "Infos pratiques";
  const title = "Infos pratiques | Festival Ouaille Note";
  const pageName = "Infos pratiques";

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
            INFOS PRATIQUES
          </h1>

          {/* Introduction */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
              textAlign: "center",
              fontSize: "1.1em",
              lineHeight: "1.6",
            }}
          >
            Le festival Ouaille&apos;Note se déroule à <strong>Vasles</strong>, un charmant
            village situé dans le département des Deux-Sèvres. Cette année, le
            festival vous accueille dans une ambiance festive et conviviale, au
            cœur de la nature, à deux pas de Mouton Village.
          </div>

          {/* Accès au festival */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <MapPin size={32} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.8em", margin: 0 }}>
                Accès au festival
              </h2>
            </div>

            <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "rgba(206, 218, 66, 0.15)", borderRadius: "4px", borderLeft: "4px solid #ceda42" }}>
              <h3 style={{ color: "#ceda42", fontFamily: "Bebas-Neue", fontSize: "1.3em", marginBottom: "10px" }}>Adresse</h3>
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                Stade Abel Chargelègue<br />
                79340 VASLES
              </p>
            </div>

            <h3 style={{ color: "#ceda42", fontFamily: "Bebas-Neue", fontSize: "1.3em", marginBottom: "15px" }}>Comment venir ?</h3>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "15px" }}>
              <Car size={24} color="#ceda42" style={{ marginRight: "12px", flexShrink: 0, marginTop: "2px" }} />
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                <strong>En voiture :</strong> Des parkings gratuits sont à votre disposition à proximité.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "15px" }}>
              <Train size={24} color="#ceda42" style={{ marginRight: "12px", flexShrink: 0, marginTop: "2px" }} />
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                <strong>En train :</strong> La gare la plus proche est POITIERS à 30 km du festival.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <Users size={24} color="#ceda42" style={{ marginRight: "12px", flexShrink: 0, marginTop: "2px" }} />
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                <strong>En covoiturage :</strong> Favorisez le covoiturage pour venir au festival, une option écologique et conviviale !
              </p>
            </div>
          </div>

          {/* Camping */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Tent size={32} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.8em", margin: 0 }}>
                Camping
              </h2>
            </div>
            <p style={{ lineHeight: "1.8", margin: 0 }}>
              <span style={{ color: "#ceda42", fontWeight: "bold", fontSize: "1.1em" }}>Bonne nouvelle : Le camping est gratuit pour tous les festivaliers !</span>
              <br /><br />
              Situé à quelques minutes à pied du site, le camping vous permet de
              profiter pleinement du festival, dans un cadre naturel et
              relaxant. Les installations sanitaires sont disponibles sur place
              pour assurer votre confort. Un camping camion est également à
              disposition.
            </p>
          </div>

          {/* Image jeux */}
          <div style={{ maxWidth: "800px", margin: "0 auto 30px", borderRadius: "6px", overflow: "hidden" }}>
            <Image
              src={"/images/jeux.JPG"}
              width={800}
              height={450}
              layout="responsive"
              objectFit="cover"
              alt="Jeux au festival"
            />
          </div>

          {/* Animations */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Gamepad2 size={32} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.8em", margin: 0 }}>
                Animations
              </h2>
            </div>
            <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
              Samedi après-midi, profitez de diverses animations pour vous divertir en famille ou entre amis :
            </p>

            <div style={{ display: "grid", gap: "15px" }}>
              <div style={{ padding: "15px", backgroundColor: "rgba(206, 218, 66, 0.15)", borderRadius: "4px", borderLeft: "4px solid #ceda42" }}>
                <strong style={{ color: "#ceda42" }}>Jeux en bois</strong>
                <p style={{ margin: "5px 0 0", lineHeight: "1.5" }}>Testez votre adresse et amusez-vous avec des jeux en bois géants.</p>
              </div>

              <div style={{ padding: "15px", backgroundColor: "rgba(206, 218, 66, 0.15)", borderRadius: "4px", borderLeft: "4px solid #ceda42" }}>
                <strong style={{ color: "#ceda42" }}>Laser Game</strong>
                <p style={{ margin: "5px 0 0", lineHeight: "1.5" }}>Défiez vos amis dans une partie de laser game en plein air pour un moment de fun garanti !</p>
              </div>

              <div style={{ padding: "15px", backgroundColor: "rgba(206, 218, 66, 0.15)", borderRadius: "4px", borderLeft: "4px solid #ceda42" }}>
                <strong style={{ color: "#ceda42" }}>Mouton Village</strong>
                <p style={{ margin: "5px 0 0", lineHeight: "1.5" }}>Le festival se déroule à proximité de Mouton Village, un parc thématique unique. L&apos;entrée au parc est disponible à un tarif minoré le samedi ! Profitez-en pour découvrir les différentes races de moutons.</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div style={{ maxWidth: "800px", margin: "0 auto 30px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div style={{ borderRadius: "6px", overflow: "hidden" }}>
              <Image
                src={"/images/moutonvillage.JPG"}
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt="Mouton Village"
              />
            </div>
            <div style={{ borderRadius: "6px", overflow: "hidden" }}>
              <Image
                src={"/images/glisse.JPG"}
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
                alt="Activités glisse"
              />
            </div>
          </div>

          {/* Restauration */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Utensils size={32} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.8em", margin: 0 }}>
                Restauration et Buvette
              </h2>
            </div>
            <p style={{ lineHeight: "1.8", margin: 0 }}>
              Une sélection de <strong>food trucks</strong> et de stands vous attend sur le site
              pour vous régaler. Des options <strong>végétariennes et véganes</strong> sont
              également disponibles.
            </p>
          </div>

          {/* Règlement */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Shield size={32} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.8em", margin: 0 }}>
                Règlement et Sécurité
              </h2>
            </div>
            <p style={{ lineHeight: "1.6", marginBottom: "15px" }}>
              Pour garantir une expérience agréable à tous, voici quelques règles à respecter :
            </p>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "2" }}>
              <li>Respectez l&apos;environnement : utilisez les poubelles de tri mises à disposition.</li>
              <li>Les animaux de compagnie ne sont pas admis sur le site.</li>
              <li>Les bouteilles en verre et objets dangereux sont interdits.</li>
              <li>Le site est accessible aux personnes à mobilité réduite.</li>
            </ul>
            <p style={{ marginTop: "20px", padding: "15px", backgroundColor: "rgba(206, 218, 66, 0.15)", borderRadius: "4px", lineHeight: "1.6" }}>
              <strong style={{ color: "#ceda42" }}>La sécurité est notre priorité.</strong> Un service de sécurité est présent sur place pour veiller au bon déroulement du festival.
            </p>
          </div>

        </div>
      </Layout>
    </>
  );
}

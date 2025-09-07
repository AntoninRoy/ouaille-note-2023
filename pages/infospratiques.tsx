import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Image from "next/legacy/image";
import Link from "next/link";
export default function MentionLegales() {
  const description = "Infos pratiques";
  const title = "Infos pratiques | Festival Ouaille Note";
  const pageName = "Infos pratiques";

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="infos" style={{padding : "0 20px"}}>
          <div className="billetterie-link">
            <Link href="/billetterie">billetterie</Link>
          </div>
          <h1 className="heading1" style={{ color: "#6a2d84" }}>
            Infos pratiques
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              marginBottom: "20px",
            }}
          >
            Le festival Ouaille&#39;Note se déroule à Vasles, un charmant
            village situé dans le département des Deux-Sèvres. Cette année, le
            festival vous accueille dans une ambiance festive et conviviale, au
            cœur de la nature, à deux pas de Mouton Village.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Accès au festival
            </h2>
            <h3>Adresse </h3>
            <p>
              Stade Abel Chargelègue <br />
              79340 VASLES
            </p>
            <h3
              style={{
                marginTop: "20px",
              }}
            >
              Comment venir ?{" "}
            </h3>
            <p>
              <strong>En voiture : </strong>Des parkings gratuits sont à votre
              disposition à proximité.
            </p>
            <p>
              <strong>En train : </strong>La gare la plus proche est POITIERS à
              30 km du festival.
            </p>
            <p>
              <strong>En covoiturage : </strong>Favorisez le covoiturage pour
              venir au festival, une option écologique et conviviale !
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Camping
            </h2>
            <p>
              Bonne nouvelle : Le camping est gratuit pour tous les festivaliers
              ! <br />
              Situé à quelques minutes à pied du site, le camping vous permet de
              profiter pleinement du festival, dans un cadre naturel et
              relaxant. Les installations sanitaires sont disponibles sur place
              pour assurer votre confort. Un camping camion est également à
              disposition.
            </p>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            {" "}
            <Image
              src={"/images/jeux.JPG"}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Animations
            </h2>
            <p>
              Samedi après-midi, profitez de diverses animations pour vous
              divertir en famille ou entre amis :<br />
              <br />
            </p>
            <p>
              <strong>Jeux en bois :</strong> Testez votre adresse et
              amusez-vous avec des jeux en bois géants.
              <br />
              <br />
            </p>
            <p>
              <strong>Laser Game :</strong> Défiez vos amis dans une partie de
              laser game en plein air pour un moment de fun garanti !<br />
              <br />
            </p>
            <p>
              <strong>Mouton Village : </strong>Le festival se déroule à
              proximité de Mouton Village, un parc thématique unique.
              L&#39;entrée au parc est disponible à un tarif minoré le
              samedi ! Profitez-en pour découvrir les différentes races de
              moutons et vous immerger dans la vie rurale traditionnelle.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <Image
              src={"/images/moutonvillage.JPG"}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <Image
              src={"/images/glisse.JPG"}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Restauration et Buvette
            </h2>
            <p>
              Une sélection de food trucks et de stands vous attend sur le site
              pour vous régaler. Des options végétariennes et véganes sont
              également disponibles.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Règlement du Festival
            </h2>
            <p>
              Pour garantir une expérience agréable à tous, voici quelques
              règles à respecter :<br />
              <br />
              Respectez l&#39;environnement : utilisez les poubelles de tri
              mises à disposition.
              <br />
              <br />
              Les animaux de compagnie, les bouteilles en verre et les objets dangereux ne sont pas admis sur le site.
              <br />
              <br />
 
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
              textAlign: "left",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Sécurité et Accessibilité
            </h2>
            <p>
              La sécurité est notre priorité. Un service de sécurité est présent
              sur place pour veiller au bon déroulement du festival. Le site est
              accessible aux personnes à mobilité réduite.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

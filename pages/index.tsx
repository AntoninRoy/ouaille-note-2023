import Image from "next/legacy/image";
import Layout from "../components/Layout/Layout";
import { useWindowDimensions } from "@/hook/useWindowDimensions";
import { createRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { artistes } from "../data/artistes";
import { TiTicket } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";
import { ProgrammationCards } from "../components/ProgrammationCards";
import Link from "next/link";

export default function Home() {
  const description =
    "Le 9 et 10 septembre 2023, rendez-vous à Vasles (79), dans les Deux-Sèvres pour la 9ème édition du Festival Ouaille'Note ?.";
  const title = "Festival Ouaille Note | Vasles (79) | 9 et 10 septembre 2023";
  const pageName = "Accueil";

  const divRef = createRef<HTMLDivElement>();

  const inView = useInView(divRef, { once: true, margin: "-20%" });

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <>
          <div className="billetterie-link">
            <Link href="/billetterie">
              billetterie
            </Link>
          </div>

          <div
            style={{
              height: "100vh",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(22,185,235,1) 70%)",

              display: "flex",
              flexDirection: "column",
              width: "100vw",
            }}
          >
            <div
              style={{
                height: "10vh",
              }}
            ></div>
            <h1
              style={{
                height: "10vh",
                padding: "0",
                width: "100%",
                textAlign: "center",

                color: "white",
                fontFamily: "Crunold",
                fontSize: "25px",
              }}
            >
              OUAILLE NOTE #9
            </h1>
            <div
              style={{
                height: "60vh",
                position: "relative",
              }}
            >
              <Image
                className="logo-container"
                alt={`Ouaille Note 9 2023`}
                src={`/images/logo/ON9TRANSPARENT-light.png`}
                layout="fill"
                objectFit="contain"
                style={{ maxHeight: "50vh", zIndex: 0 }}
              />
            </div>

            <div
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily: "Bebas-Neue",
                color: "#e3245b",
                height: "5vh",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontFamily: "Crunold",
                  fontWeight: "400",
                  fontStyle: "normal",
                  margin: "0",
                  color: "#e3245b",
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
                  margin: "0",
                  lineHeight: "25px",
                  color: "#fff",
                }}
              >
                8-9 SEPTEMBRE 2023
              </span>
              <br />
            </div>
            <div className="double-arrow" style={{ height: "20vh" }}>
              <RiArrowDownSLine />
            </div>
          </div>

          <div className="general-container">
            <div className="text-container">
              <motion.div
                className="texte"
                style={{ flex: "1 0 50%" }}
                initial="offscreen"
                viewport={{ once: true, margin: "-25%" }}
                whileInView="onscreen"
                variants={{
                  offscreen: {},
                  onscreen: {
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    },
                  },
                }}
              >
                <span>Le festival</span>
                <p>
                  {`Après une belle édition 2022, l'association La Gatin'Ouaille vous propose une nouvelle édition de son festival ! `}
                </p>
                <p>
                  {`Vous retrouverez deux soirs de concerts au coeur de Vasles, un village gatinais aux
              portes de la Vienne, à 30 minutes de Poitiers, de Parthenay et 45
              minutes de Niort. `}{" "}
                </p>
                <p>
                  {`Tout est fait pour passer un week-end exceptionnel. En plus de la salle de concert et notre
espace extérieur, vous trouverez également un camping GRATUIT et un espace animations situé
en partie sur le Parc de Mouton Village, à moins de 200
mètres du site des concerts. `}{" "}
                </p>
              </motion.div>
              <div style={{ flex: "1 0 50%" }}>
                <div style={{ position: "relative", height: "50vh" }}>
                  <Image
                    src="/images/photo1.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="test"
                  />
                </div>
              </div>
            </div>

            <div id="programmation" className="programme-title">
              Programmation
            </div>
            <ProgrammationCards divRef={divRef} inView={inView} />
            <div className="text-container">
              <motion.div
                className="texte"
                style={{ flex: "1 0 50%" }}
                initial="offscreen"
                viewport={{ once: true, margin: "-25%" }}
                whileInView="onscreen"
                variants={{
                  offscreen: {},
                  onscreen: {
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    },
                  },
                }}
              >
                <span>Espace animation</span>
                <p>
                  {`L'espace animation est situé sur une partie du parc Mouton Village. Venez découvrir ce lieu unique, et profitez d’une entrée gratuite au parc. Une fois la visite effectuée, venez vous détendre autour d’une douzaine d’huitres, un bon burger ou encore devant un verre. Profitez
des animations présentes et essayez vous au cornouaille, aux palets ou encore au lazer game.
Ce lieu est également ouvert après les concerts du soir ou nous faisons place à quelques DJs régionnaux qui sauront enflammer l’after.`}
                </p>
              </motion.div>
              <div style={{ flex: "1 0 50%" }}>
                <div style={{ position: "relative", height: "50vh" }}>
                  <Image
                    src="/images/camping.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="test"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="video">
            <LiteYouTubeEmbed
              id="pdRyq9bIG_Q"
              title="AfterMovie 2022 - OUAILLE NOTE FESTIVAL"
            />
          </div>
        </>
      </Layout>
    </>
  );
}

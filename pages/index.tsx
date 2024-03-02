import Image from "next/legacy/image";
import Layout from "../components/Layout/Layout";
import { useWindowDimensions } from "@/hook/useWindowDimensions";
import { createRef, useEffect, useState } from "react";
import { color, motion, useInView } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { artistes } from "../data/artistes";
import { TiTicket } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";
import { ProgrammationCards } from "../components/ProgrammationCards";
import Link from "next/link";
import styles from "../styles/Partenaires.module.css";
import ArtistCard from "@/components/ArtisteCard";



export default function Home() {
  const description =
    "Le 6 et 7 septembre 2024, rendez-vous à Vasles (79), dans les Deux-Sèvres pour la 9ème édition du Festival Ouaille'Note ?.";
  const title = "Festival Ouaille Note | Vasles (79) | 6 et 7 septembre 2024";
  const pageName = "Accueil";

  const divRef = createRef<HTMLDivElement>();

  const inView = useInView(divRef, { once: true, margin: "-20%" });

  const [countDownDateStr, setCountDownDateStr] = useState<string>("");

 
  useEffect(() => {
    var countDownDate = new Date("Sept 6, 2024 18:00:00").getTime();
    const interval: any = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setCountDownDateStr(
        days + "j " + hours + "h " + minutes + "m " + seconds + "s "
      );

      // If the count down is finished, write some text
      if (distance < 0) {
        return clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <>
          <div className="billetterie-link">
            <Link href="/billetterie">billetterie</Link>
          </div>

          <div
            style={{
              height: "100vh",
              background:
                "linear-gradient(127deg, rgba(54,46,121,1) 11%, rgba(209,79,47,1) 49%, rgba(209,79,47,1) 80%, rgba(215,124,174,1) 100%)",
              // "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,0,0,0) 22%), linear-gradient(127deg, rgba(54,46,121,1) 11%, rgba(209,79,47,1) 49%, rgba(209,79,47,1) 80%, rgba(215,124,174,1) 100%)",

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
              OUAILLE NOTE #10
            </h1>
            <div
              style={{
                height: "55vh",
                position: "relative",
              }}
            >
              <Image
                className="logo-container"
                alt={`Ouaille Note 10 2024`}
                src={`/images/logo/ON10TRANSPARENT.png`}
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
                color: "#362E79",
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
                  color: "#362E79",
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
                6-7 SEPTEMBRE 2024
              </span>
              <br />
              <span
                style={{
                  fontSize: "2em",
                  fontFamily: "Bebas-Neue",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "center",
                  color: "#D77CAE",
                }}
              >
                {countDownDateStr}
              </span>
              <br />
            </div>

            <div className="double-arrow" style={{ height: "20vh" }}>
              <RiArrowDownSLine />
            </div>
          </div>

          <div className="wrapper">
            {artistes.map((artiste, index) => (
              <ArtistCard
              key={index}
                name={artiste.name}
                url={`/images/artistes/${artiste.url}`}
                size={artiste.size}
                color={artiste.color}
              />
            ))}
          </div>
          <div className="video" style={{ padding: "0" }}>
            <LiteYouTubeEmbed
              id="99VjrAmNDc8"
              title="AfterMovie 2023 - OUAILLE NOTE FESTIVAL #10"
              aspectHeight={8}
            />
          </div>

          {/* <div className="general-container">
            
            <div className="text-container" >
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
                  {`Après une belle édition 2023, l'association La Gatin'Ouaille vous propose une nouvelle édition de son festival ! `}
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
          </div> */}
        </>
      </Layout>
    </>
  );
}

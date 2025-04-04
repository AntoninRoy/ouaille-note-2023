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
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const description =
    "Le 12 et 13 septembre 2025, rendez-vous à Vasles (79), dans les Deux-Sèvres pour la 9ème édition du Festival Ouaille'Note ?.";
  const title = "Festival Ouaille Note | Vasles (79) | 12 et 13 septembre 2025";
  const pageName = "Accueil";

  const [countDownDateStr, setCountDownDateStr] = useState<string>("");

  useEffect(() => {
    var countDownDate = new Date("Sept 12, 2025 18:00:00").getTime();
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
                "linear-gradient(127deg, rgb(245,190,33) -15%, rgb(106,45,132) 35%, rgb(106,45,132) 50%, rgb(135,108,164) 100%)",
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
              OUAILLE NOTE #11
            </h1>
            <div
              style={{
                height: "55vh",
                position: "relative",
              }}
            >
              <Image
                className="logo-container"
                alt={`Ouaille Note 11 2025`}
                src={`/images/logo/ON11TRANSPARENT.png`}
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
                color: "#f5be21",
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
                  margin: "0",
                  lineHeight: "25px",
                  color: "#f5be21",
                }}
              >
                12-13 SEPTEMBRE 2025
              </span>
              <br />
              <span
                style={{
                  fontSize: "2em",
                  fontFamily: "Bebas-Neue",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "center",
                  color: "#17ace3",
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
          {/* <div className="box">
            <Image
              src={"/images/vendredi.jpg"}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="box">
            <Image
              src={"/images/samedi.jpg"}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div> */}
          {/* <div className="box">
            <iframe
              src="https://open.spotify.com/embed/playlist/4GWTFkCHJeNnd8YUbkLZaj?utm_source=generator&theme=0"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div> */}
          {/* <div className="box">
            <div className="video" style={{ padding: "0" }}>
              <LiteYouTubeEmbed
                id="LQLbE-Vv-7k"
                title="Teaser 2024 - OUAILLE NOTE FESTIVAL #10"
                aspectHeight={8}
              />
            </div>
          </div> */}

          {/* <div className="wrapper">
            {artistes.map((artiste, index) => (
              <ArtistCard
                key={index}
                name={artiste.name}
                url={`/images/artistes/${artiste.url}`}
                size={artiste.size}
                color={artiste.color}
              />
            ))}
          </div> */}
        </>
      </Layout>
    </>
  );
}

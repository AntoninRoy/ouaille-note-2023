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
import { CalendarDays, Music } from "lucide-react";

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
  // Données fictives des artistes du festival
  const artists = [
    {
      id: 1,
      name: "Danakil",
      date: "Vendredi 12 Septembre",
      time: "18:00",
      image: "danakil.jpg",
    },
    {
      id: 2,
      name: "Billx",
      date: "Samedi 13 Septembre",
      time: "18:00",
      image: "billx.jpg",
    },
    {
      id: 3,
      name: "Tairo",
      date: "Samedi 13 Septembre",
      time: "18:00",
      image: "tairo.jpg",
    },
    {
      id: 4,
      name: "Christophe Mali",
      date: "Samedi 13 Septembre",
      time: "18:00",
      image: "christophe.jpg",
    },
    {
      id: 5,
      name: "Luiza",
      date: "Samedi 13 Septembre",
      time: "18:00",
      image: "luiza.jpg",
    },
    {
      id: 6,
      name: "Mahom",
      date: "Vendredi 12 Septembre",
      time: "18:00",
      image: "mahom.jpg",
    },
    {
      id: 7,
      name: "Pierre Hugues José",
      date: "Vendredi 12 Septembre",
      time: "18:00",
      image: "pierre.jpg",
    },
    {
      id: 8,
      name: "Andrick Airways",
      date: "Samedi 13 Septembre",
      time: "18:00",
      image: "andrick.jpg",
    },
    {
      id: 9,
      name: "Radio Byzance",
      date: "Vendredi 12 Septembre",
      time: "18:00",
      image: "radio.jpg",
    },
    {
      id: 10,
      name: "Jael",
      date: "Vendredi 12 Septembre",
      time: "18:00",
      image: "jael.jpg",
    },
    {
      id: 11,
      name: "Youthie",
      date: "Samedi 13 Septembre",
      time: "18:00",
      image: "youthie.jpg",
    },
  ];
  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div
        >
          <div className="billetterie-link">
            <Link href="/billetterie">billetterie</Link>
          </div>
          <div
            style={{
              height: "100vh",
              background:
              "linear-gradient(to right bottom, rgb(245, 190, 33) -15%, rgb(106, 45, 132) 35%, rgb(106, 45, 132) 50%, rgb(135, 108, 164) 100%)",
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
          <div
            style={{
              background:
                "linear-gradient(127deg, rgb(245,190,33) -15%, rgb(106,45,132) 35%, rgb(106,45,132) 50%, rgb(135,108,164) 100%)",
            }}
          >
          <div
            className="container mx-auto py-12 px-4"
          >
            <div className="mb-12 text-center">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                style={{ textShadow: "3px 3px 0px rgba(245, 190, 33, 0.7)" }}
              >
                PROGRAMMATION 2025
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-12 bg-festival-orange rounded-full"></div>
                <Music className="h-8 w-8 text-festival-orange" />
                <div className="h-1 w-12 bg-festival-orange rounded-full"></div>
              </div>
              <p className="text-white text-xl max-w-2xl mx-auto">
                Découvrez les artistes qui vont enflammer la scène cette année !
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist) => (
                <div key={artist.id} className="group relative">
                  <div className="absolute inset-0 bg-white rounded-xl rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(23,172,227,0.4)]">
                    <div className="aspect-square relative">
                      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-festival-violet/70 z-10"></div> */}
                      <Image
                        src={"/images/artistes/" + artist.image}
                        alt={artist.name}
                        layout="fill"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* <div className="absolute top-4 right-4 bg-festival-orange text-festival-violet font-bold py-1 px-3 rounded-full text-sm z-20">
                    {artist.time}
                  </div> */}
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold mb-3 text-festival-violet">
                        {artist.name}
                      </h2>
                      <div className="flex items-center text-festival-lavender mb-2">
                        <CalendarDays className="h-5 w-5 mr-2 text-festival-orange" />
                        <span>{artist.date}</span>
                      </div>
                      {/* <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full py-2 px-4 bg-white border-2 border-festival-orange text-festival-violet rounded-full font-medium hover:bg-festival-orange hover:text-white transition-colors duration-300">
                      Voir détails
                    </button>
                  </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        </div>
      </Layout>
    </>
  );
}

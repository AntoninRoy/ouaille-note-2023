import Image from "next/legacy/image";
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";

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
                <span className="countdown-separator">:</span>
                <CountdownBox value={countdown.hours} label="HEURES" />
                <span className="countdown-separator">:</span>
                <CountdownBox value={countdown.minutes} label="MIN" />
                <span className="countdown-separator">:</span>
                <CountdownBox value={countdown.seconds} label="SEC" />
              </div>

              {/* Flèche scroll */}
              <div className="double-arrow" style={{ marginTop: "20px" }}>
                <RiArrowDownSLine />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

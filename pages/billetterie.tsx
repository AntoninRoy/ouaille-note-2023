import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Ticket, Clock } from "lucide-react";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 11 et samedi 12 septembre 2026.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";

  // Date d'ouverture de la billetterie : 2 mars 2026 à 18h00
  const openingDate = new Date("2026-03-02T18:00:00");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      setIsOpen(new Date() >= openingDate);
    };
    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen && !document.getElementById("billetweb-script")) {
      const script = document.createElement("script");
      script.id = "billetweb-script";
      script.src = "https://www.billetweb.fr/js/export.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="page-background" style={{ padding: "0 20px", paddingBottom: "50px", minHeight: "100vh" }}>

          <h1
            style={{
              paddingTop: "10vh",
              paddingBottom: "3vh",
              color: "#ceda42",
              fontFamily: "Crunold",
              textAlign: "center",
              fontSize: "2.5em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            BILLETTERIE
          </h1>

          {!isOpen ? (
            /* Message "bientôt disponible" avant 18h */
            <>
              <div
                style={{
                  maxWidth: "600px",
                  margin: "0 auto 30px",
                  padding: "40px 30px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "6px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Clock size={60} color="#ceda42" style={{ marginBottom: "20px", display: "block", margin: "0 auto 20px auto" }} />
                <h2
                  style={{
                    color: "#ceda42",
                    fontFamily: "Crunold",
                    fontSize: "1.8em",
                    margin: "0 0 20px 0",
                  }}
                >
                  Bientôt disponible !
                </h2>
                <p style={{ lineHeight: "1.8", fontSize: "1.1em", marginBottom: "25px" }}>
                  La billetterie pour le <strong style={{ color: "#ceda42" }}>Festival Ouaille Note #12</strong> ouvrira prochainement.
                </p>
                <p style={{ lineHeight: "1.6", marginBottom: "0" }}>
                  Restez connectés sur nos réseaux sociaux pour être informés de l&apos;ouverture des ventes !
                </p>
              </div>

              {/* Info gratuit enfants */}
              <div
                style={{
                  maxWidth: "600px",
                  margin: "0 auto 30px",
                  padding: "20px 25px",
                  backgroundColor: "rgba(232, 93, 4, 0.9)",
                  borderRadius: "6px",
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  border: "2px solid #ff6b35",
                  boxShadow: "0 4px 15px rgba(232, 93, 4, 0.4)"
                }}
              >
                <Ticket size={28} color="white" />
                <p style={{ margin: 0, fontSize: "1.1em", fontFamily: "Crunold", fontWeight: "bold" }}>
                  Entrée gratuite jusqu&apos;à l&apos;âge de 12 ans (pièce d&apos;identité demandée)
                </p>
              </div>
            </>
          ) : (
            /* Billetterie ouverte après 18h */
            <>
              {/* Info gratuit enfants */}
              <div
                style={{
                  maxWidth: "1000px",
                  margin: "0 auto 30px",
                  padding: "20px 25px",
                  backgroundColor: "rgba(232, 93, 4, 0.9)",
                  borderRadius: "6px",
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  border: "2px solid #ff6b35",
                  boxShadow: "0 4px 15px rgba(232, 93, 4, 0.4)"
                }}
              >
                <Ticket size={28} color="white" />
                <p style={{ margin: 0, fontSize: "1.1em", fontFamily: "Crunold", fontWeight: "bold" }}>
                  Entrée gratuite jusqu&apos;à l&apos;âge de 12 ans (pièce d&apos;identité demandée)
                </p>
              </div>

              {/* Widget Billetweb */}
              <div
                style={{
                  maxWidth: "1000px",
                  margin: "0 auto 30px",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  padding: "20px",
                }}
              >
                <a
                  title="Vente de billets en ligne"
                  href="https://www.billetweb.fr/shop.php?event=festival-ouaillenote-12"
                  className="shop_frame"
                  target="_blank"
                  data-src="https://www.billetweb.fr/shop.php?event=festival-ouaillenote-12"
                  data-max-width="100%"
                  data-initial-height="600"
                  data-scrolling="no"
                  data-id="festival-ouaillenote-12"
                  data-resize="1"
                >
                  Vente de billets en ligne
                </a>
              </div>
            </>
          )}

        </div>
      </Layout>
    </>
  );
}

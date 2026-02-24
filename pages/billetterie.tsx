import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Ticket, RefreshCw } from "lucide-react";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 11 et samedi 12 septembre 2026.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";
  const [widgetReady, setWidgetReady] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!document.getElementById("reelax-script")) {
      const s = document.createElement("script");
      s.id = "reelax-script";
      s.src = "https://reelax-tickets.com/iframe.js";
      s.defer = true;
      s.onload = () => setWidgetReady(true);
      s.onerror = () => setWidgetReady(false);
      document.body.appendChild(s);
    } else {
      setWidgetReady(true);
    }
    timeout = setTimeout(() => setWidgetReady((ok) => ok && true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="page-background" style={{ padding: "0 20px", paddingBottom: "50px" }}>

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

          {/* Info gratuit enfants */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "20px 25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px"
            }}
          >
            <Ticket size={28} color="#ceda42" />
            <p style={{ margin: 0, fontSize: "1.1em", fontFamily: "Crunold" }}>
              Entrée gratuite jusqu&apos;à l&apos;âge de 12 ans (pièce d&apos;identité demandée)
            </p>
          </div>

          {/* Iframe billetterie */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto 30px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.billetweb.fr/shop.php?event=festival-ouaillenote-111"
              width="100%"
              height={800}
              title="Billetterie Weezevent"
              style={{ border: "none" }}
            >
              Chargement…
            </iframe>
          </div>

          {/* Revente */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px", gap: "10px" }}>
              <RefreshCw size={24} color="#ceda42" />
              <p style={{ margin: 0, fontFamily: "Crunold", fontSize: "1.2em", color: "#ceda42" }}>
                Plate-forme unique de revente officielle
              </p>
            </div>

            {widgetReady ? (
              <a
                target="_blank"
                id="reelax-iframe-placeholder"
                href="https://reelax-tickets.com/e/n/festival-ouaillenote-11"
                style={{ display: "inline-block", textDecoration: "none" }}
              >
                <button
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "12px 24px",
                    borderRadius: "4px",
                    border: "2px solid #ceda42",
                    backgroundColor: "transparent",
                    color: "#ceda42",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Crunold",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#ceda42";
                    e.currentTarget.style.color = "#286954";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#ceda42";
                  }}
                >
                  <svg
                    style={{ height: "1.2em", fill: "currentColor" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.74 15.24"
                  >
                    <polygon points="11.53 0 9.77 1.76 14.22 6.21 9.77 10.66 11.53 12.41 17.74 6.21 11.53 0"></polygon>
                    <polygon points="6.21 2.83 0 9.04 6.21 15.24 7.96 13.49 3.51 9.04 7.96 4.59 6.21 2.83"></polygon>
                  </svg>
                  Bourse aux billets
                </button>
              </a>
            ) : (
              <a
                href="https://reelax-tickets.com/e/n/festival-ouaillenote-11"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "2px solid #ceda42",
                    borderRadius: "4px",
                    background: "#ceda42",
                    color: "#286954",
                    cursor: "pointer",
                    fontFamily: "Crunold",
                  }}
                >
                  Ouvrir la billetterie
                </button>
              </a>
            )}
          </div>

        </div>
      </Layout>
    </>
  );
}

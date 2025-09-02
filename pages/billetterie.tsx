import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 12 et samedi 13 septembre 2025.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";
  const [widgetReady, setWidgetReady] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    // injecte le script s'il n'existe pas
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
    // si au bout de 2s rien n’a pris, on affiche le fallback
    timeout = setTimeout(() => setWidgetReady((ok) => ok && true), 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <>
          <h1 className="heading1">BILLETTERIE</h1>
          <p
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
              fontSize: "1.1em",
              fontFamily: "Crunold",
              color: "rgb(106, 45, 132)",
              padding: "25px",
            }}
          >
            {
              "Entrée gratuite jusqu'à l'âge de 12 ans (pièce d'identité demandée)"
            }
          </p>

          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <iframe
              src="https://www.billetweb.fr/shop.php?event=festival-ouaillenote-111"
              width="100%"
              height={1000}
              title="Billetterie Weezevent"
            >
              Chargement…
            </iframe>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                textAlign: "center",
                fontSize: "1.1em",
                fontFamily: "Crunold",
                color: "rgb(230, 12, 23)",
                padding: "25px",
                paddingBottom: "0px",
              }}
            >
              {"Plate-forme unique de revente officielle : "}
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "50px",
            }}
          >
            {widgetReady ? (
              <a
                target="_blank"
                id="reelax-iframe-placeholder"
                href="https://reelax-tickets.com/e/n/festival-ouaillenote-11"
                style={{ display: "contents", color: "unset" }}
              >
                <button
                  type="button"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 0,
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <svg
                    style={{ height: "1em", marginRight: "5px" }}
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
              // Fallback propre (ouvre en nouvel onglet)
              <a
                href="https://reelax-tickets.com/e/n/festival-ouaillenote-11"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    background: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  Ouvrir la billetterie
                </button>
              </a>
            )}
          </div>
        </>
      </Layout>
    </>
  );
}

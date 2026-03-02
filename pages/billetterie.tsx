import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Ticket } from "lucide-react";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 11 et samedi 12 septembre 2026.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";

  useEffect(() => {
    if (!document.getElementById("billetweb-script")) {
      const script = document.createElement("script");
      script.id = "billetweb-script";
      script.src = "https://www.billetweb.fr/js/export.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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

        </div>
      </Layout>
    </>
  );
}

import Layout from "../components/Layout/Layout";
import { Ticket, Clock } from "lucide-react";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 11 et samedi 12 septembre 2026.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";

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

          {/* Message "bientôt disponible" */}
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

        </div>
      </Layout>
    </>
  );
}

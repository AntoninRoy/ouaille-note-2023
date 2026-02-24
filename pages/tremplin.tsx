import Layout from "../components/Layout/Layout";
import { Music } from "lucide-react";

export default function Tremplin() {
  const description = "Participez au Tremplin Ouaille Note #12 ! Inscrivez votre groupe pour avoir la chance de jouer sur la scène du festival.";
  const title = "Tremplin | Festival Ouaille Note";
  const pageName = "Tremplin";

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
            TREMPLIN
          </h1>

          {/* Introduction */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 30px",
              padding: "30px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
              textAlign: "center",
            }}
          >
            <Music size={50} color="#ceda42" style={{ display: "block", margin: "0 auto 20px auto" }} />
            <h2
              style={{
                color: "#ceda42",
                fontFamily: "Crunold",
                fontSize: "1.6em",
                margin: "0 0 20px 0",
              }}
            >
              Tremplin Ouaille Note #12
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "1.1em", marginBottom: "15px" }}>
              Vous êtes un groupe ou artiste émergent ? Participez au tremplin pour avoir la chance de vous produire sur la scène du <strong style={{ color: "#ceda42" }}>Festival Ouaille Note</strong> !
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "0" }}>
              Remplissez le formulaire ci-dessous pour vous inscrire.
            </p>
          </div>

          {/* Formulaire Google */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 30px",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdDZ4zYouS2BuqlAPTbwR9-xs4vSwD6OtbP0obKPY2HoIBAhw/viewform?embedded=true"
              width="100%"
              height="2000"
              style={{
                border: "none",
                borderRadius: "4px",
              }}
            >
              Chargement du formulaire...
            </iframe>
          </div>

        </div>
      </Layout>
    </>
  );
}

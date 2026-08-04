import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
  const description = "Merci pour votre commande, votre place pour le Festival Ouaille Note #12 est réservée.";
  const title = "Merci pour votre commande | Festival Ouaille Note #12";
  const pageName = "Merci";

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
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
            MERCI !
          </h1>

          {/* Confirmation */}
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
            <CheckCircle2
              size={60}
              color="#ceda42"
              style={{ display: "block", margin: "0 auto 20px auto" }}
            />
            <h2
              style={{
                color: "#ceda42",
                fontFamily: "Crunold",
                fontSize: "1.8em",
                margin: "0 0 20px 0",
              }}
            >
              Votre commande est confirmée
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "1.1em", marginBottom: "20px" }}>
              Vous faites officiellement partie de l&apos;aventure&nbsp;! Rendez-vous les{" "}
              <strong style={{ color: "#ceda42" }}>11 et 12 septembre 2026 à Vasles</strong> pour
              la 12<sup>e</sup> édition du Festival Ouaille Note.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "0" }}>
              Merci de votre confiance&nbsp;: chaque billet vendu fait vivre un festival associatif,
              porté par des bénévoles passionnés.
            </p>
          </div>

          {/* Et maintenant ? */}
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto 30px",
              padding: "30px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <h2
              style={{
                color: "#ceda42",
                fontFamily: "Crunold",
                fontSize: "1.5em",
                margin: "0 0 25px 0",
              }}
            >
              Et maintenant ?
            </h2>

            <p style={{ lineHeight: "1.7", marginBottom: "22px" }}>
              Vos billets vous sont envoyés <strong style={{ color: "#ceda42" }}>par e-mail</strong>{" "}
              dans les minutes qui suivent. Pensez à vérifier vos courriers indésirables si vous
              ne les voyez pas arriver.
            </p>

            <p style={{ lineHeight: "1.7", marginBottom: "22px" }}>
              Conservez-les sur votre téléphone ou imprimez-les&nbsp;: le QR code sera scanné à
              l&apos;entrée du site.
            </p>

            <p style={{ lineHeight: "1.7", marginBottom: "0" }}>
              Accès, horaires, camping, restauration&nbsp;: tout est sur la page{" "}
              <Link href="/infospratiques" style={{ color: "#ceda42", fontWeight: "bold" }}>
                Infos pratiques
              </Link>
              .
            </p>
          </div>

          {/* Partage */}
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto 30px",
              padding: "20px 25px",
              backgroundColor: "rgba(232, 93, 4, 0.9)",
              borderRadius: "6px",
              color: "white",
              textAlign: "center",
              border: "2px solid #ff6b35",
              boxShadow: "0 4px 15px rgba(232, 93, 4, 0.4)"
            }}
          >
            <p style={{ margin: 0, fontSize: "1.1em", fontFamily: "Crunold", fontWeight: "bold" }}>
              Un festival, ça se partage : parlez-en autour de vous et suivez-nous sur les réseaux !
            </p>
          </div>

          {/* Retour accueil */}
          <div style={{ textAlign: "center" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                backgroundColor: "rgba(206, 218, 66, 0.3)",
                border: "2px solid #ceda42",
                borderRadius: "4px",
                color: "white",
                fontFamily: "Bebas-Neue",
                fontSize: "1.2em",
                textDecoration: "none",
              }}
            >
              Retour à l&apos;accueil
            </Link>
          </div>

        </div>
      </Layout>
    </>
  );
}

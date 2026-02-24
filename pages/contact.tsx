import Layout from "../components/Layout/Layout";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const description = "Contact";
  const title = "Contact | Festival Ouaille Note";
  const pageName = "Contact";

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="page-background" style={{ padding: "0 20px", paddingBottom: "50px", minHeight: "100vh" }}>

          <h1
            style={{
              paddingTop: "10vh",
              paddingBottom: "5vh",
              color: "#ceda42",
              fontFamily: "Crunold",
              textAlign: "center",
              fontSize: "2.5em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            CONTACT
          </h1>

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
            <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
              <MessageCircle size={32} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.5em", margin: 0 }}>
                Une question ?
              </h2>
            </div>

            <p style={{ lineHeight: "1.8", marginBottom: "25px" }}>
              Vous avez une question au sujet du <strong style={{ color: "#ceda42" }}>Festival Ouaille Note #12</strong> et
              vous ne trouvez pas la réponse sur le site ou nos réseaux sociaux ?
            </p>

            <div
              style={{
                padding: "20px",
                backgroundColor: "rgba(206, 218, 66, 0.15)",
                borderRadius: "4px",
                borderLeft: "4px solid #ceda42",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <Mail size={24} color="#ceda42" style={{ marginRight: "10px" }} />
                <span style={{ fontFamily: "Bebas-Neue", fontSize: "1.2em", color: "#ceda42" }}>
                  Contactez-nous par email
                </span>
              </div>
              <a
                href="mailto:ouaillenote.lefestival@gmail.com"
                style={{
                  color: "white",
                  fontSize: "1.1em",
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "10px 20px",
                  marginTop: "10px",
                  backgroundColor: "rgba(206, 218, 66, 0.3)",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(206, 218, 66, 0.5)"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(206, 218, 66, 0.3)"}
              >
                ouaillenote.lefestival@gmail.com
              </a>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}

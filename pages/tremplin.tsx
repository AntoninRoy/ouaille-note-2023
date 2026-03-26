import Layout from "../components/Layout/Layout";
import { Vote, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Tremplin() {
  const description = "Votez pour votre groupe préféré du Tremplin Ouaille Note #12 ! Choisissez qui montera sur la scène du festival.";
  const title = "Vote Tremplin | Festival Ouaille Note";
  const pageName = "Tremplin";

  const [isVoteOpen, setIsVoteOpen] = useState(false);

  useEffect(() => {
    const openingDate = new Date("2026-03-30T00:00:00");
    setIsVoteOpen(new Date() >= openingDate);
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
            VOTE TREMPLIN
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
            <Vote size={50} color="#ceda42" style={{ display: "block", margin: "0 auto 20px auto" }} />
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
              C'est le moment de voter ! Les gagnants des votes participeront à une finale en live.
            </p>
            <p style={{ lineHeight: "1.6", marginBottom: "0" }}>
              Écoutez les extraits et votez pour votre favori ci-dessous.
            </p>
          </div>

          {isVoteOpen ? (
            /* Sondage vote */
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
                src="https://sondage.app.ps/embed/vote-tremplin-ouaille-note-12"
                height="720"
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "810px",
                  margin: "auto",
                  border: "3px solid #005B4A",
                  borderRadius: "6px",
                }}
              />
            </div>
          ) : (
            /* Message d'attente */
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto 30px",
                padding: "40px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "6px",
                textAlign: "center",
              }}
            >
              <Clock size={60} color="#ceda42" style={{ display: "block", margin: "0 auto 20px auto" }} />
              <p style={{ color: "white", fontSize: "1.3em", marginBottom: "10px" }}>
                Le vote ouvrira <strong style={{ color: "#ceda42" }}>prochainement</strong>
              </p>
              <p style={{ color: "#aaa", fontSize: "1em" }}>
                Revenez bientôt pour voter pour votre groupe préféré !
              </p>
            </div>
          )}

        </div>
      </Layout>
    </>
  );
}

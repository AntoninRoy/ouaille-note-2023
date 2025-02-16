import Layout from "../components/Layout/Layout";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 12 et samedi 13 septembre 2025.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";

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
              color: "rgb(209, 79, 47)",
              padding: "25px"
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
              minHeight: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            
            }}
          >
            Billeterie en ligne à venir ...
            {/* <iframe
              src=""
              width="100%"
              height={658}
              title="Billetterie Weezevent"
            >
              Chargement…
            </iframe> */}
          </div>
        </>
      </Layout>
    </>
  );
}

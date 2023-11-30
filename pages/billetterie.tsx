import Layout from "../components/Layout/Layout";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 6 et samedi 7 septembre 2024.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";



  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <>
          <h1 className="heading1">BILLETTERIE</h1>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            
          <iframe
            src="https://www.billetweb.fr/shop.php?event=festival-ouaillenote-10"
            width="100%"
            height={658}
            title="Billetterie Weezevent"
          >
            Chargement…
          </iframe>


          </div>
        </>
      </Layout>
    </>
  );
}

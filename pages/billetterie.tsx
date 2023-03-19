import Layout from "../components/Layout/Layout";

export default function Billetterie() {
  const description =
    "Billetterie du Ouaille Note ? Festival. Prenez vos billets et vos pass pour assister à tous les concerts du vendredi 9 et samedi 10 septembre 2023.";
  const title = "Billetterie | Festival Ouaille Note";
  const pageName = "Billetterie";

  const wizevent = {
    initialHeight: 658,
    eventId: "631529",
    code: "1298",
    primaryColor: "f393ba",
  };

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
            src="https://widget.weezevent.com/ticket/E952273/?code=11010&locale=fr-FR&width_auto=1&color_primary=00AEEF"
            width="100%"
            height={wizevent.initialHeight}
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
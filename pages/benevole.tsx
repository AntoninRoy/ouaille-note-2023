import Layout from "../components/Layout/Layout";

export default function Benevole() {
  const description =
    "Rejoignez l'équipe de bénévoles du Festival Ouaille'Note #12, les 11 et 12 septembre 2026 à Vasles (79).";
  const title = "Inscription nouveau bénévole | Festival Ouaille Note #12";
  const pageName = "Inscription nouveau bénévole";

  return (
    <Layout description={description} title={title} pageName={pageName}>
      <div className="page-background mentions">
        <h1 className="heading1">Inscription nouveau bénévole</h1>
        <div>
          <iframe
            title="Formulaire d'inscription nouveau bénévole"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeid7xTGKxNrxYygR0mfCpB2AdZWWk78cpH_AZPgfdirs6dAA/viewform?embedded=true"
            style={{
              display: "block",
              width: "90vw",
              height: "calc(100vh - 200px)",
              margin: "auto",
              border: "none",
            }}
          >
            Chargement…
          </iframe>
        </div>
      </div>
    </Layout>
  );
}

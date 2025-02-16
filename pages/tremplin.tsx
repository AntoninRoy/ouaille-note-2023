import Layout from "../components/Layout/Layout";
import { notFound } from "next/navigation";

export const getServerSideProps = async () => {
  return { notFound: true }; // Bloque l'accès et renvoie une erreur 404
};

export default function Tremplin() {
  const description = "";
  const title = "Vote Tremplin | Festival Ouaille Note #10";
  const pageName = "";
  return notFound();

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div
          className="mentions"
          style={{
            background:
              "linear-gradient(127deg, rgba(54,46,121,1) 11%, rgba(209,79,47,1) 49%, rgba(209,79,47,1) 80%, rgba(215,124,174,1) 100%)",
          }}
        >
          <h1 className="heading1" style={{ color: "white" }}>
            Vote Tremplin Ouaille Note #11
          </h1>
          <div>
            <iframe
              src="https://sondage.app.ps/embed/tremplin-ouaille-note-10-2024"
              height="720"
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "810px",
                margin: "auto",
                border: "3px solid #444",
                borderRadius: "6px",
              }}
            ></iframe>
            {/* <iframe
              onLoad={(event) => {
                console.log("EHOH");
              }}
              src="https://docs.google.com/forms/d/e/1FAIpQLSfJ-SyyCnpwmYu5z2AnCpXo784SLX3tL1sbOBk33CkJJTumjA/viewform?embedded=true"
              style={{
                width: "90vw",
                height: "calc(100vh - 200px)",
                margin: "auto",

              }}
            >
              Chargement…
            </iframe> */}
          </div>
        </div>
      </Layout>
    </>
  );
}

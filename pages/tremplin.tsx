import Layout from "../components/Layout/Layout";

export default function Tremplin() {
  const description = "";
  const title = "Vote Tremplin | Festival Ouaille Note #11";
  const pageName = "";

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div
          className="mentions"
          style={{
            background:
              "linear-gradient(127deg, rgb(245,190,33) -15%, rgb(106,45,132) 35%, rgb(106,45,132) 50%, rgb(135,108,164) 100%)",
          }}
        >
          <h1 className="heading1" style={{ color: "white" }}>
             Tremplin Ouaille Note #11
          </h1>
          <div>
            <iframe
              src="https://sondage.app.ps/embed/tremplin-festival-ouaille-note-2023-373433"
              height="4000"
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

              src="https://docs.google.com/forms/d/1gKbPPtaBmXEeUWMez-bHkvdrzFIY6M7EnZ-xHn3OSZ0/viewform?embedded=true"
              style={{
                width: "90vw",
                height: "3700px",
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

import { createRef, useEffect, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";

export default function Benevole() {
  const description = "";
  const title = "Inscription Bénévoles | Festival Ouaille Note #10";
  const pageName = "";


  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="mentions">
          <h1 className="heading1">Inscription Bénévole Ouaille Note #10</h1>
          <div>
            <iframe
              onLoad={(event) => {
                console.log("EHOH");
              }}
              src="https://docs.google.com/forms/d/e/1FAIpQLSdkDTcQvlhX2PdjCsISBWz000X5icKJGxGnk17dLy6-8NilsQ/viewform?embedded=true"
              style={{
                width: "90vw",
                height: "calc(100vh - 200px)",
                margin: "auto",

              }}
            >
              Chargement…
            </iframe>
          </div>
        </div>
      </Layout>
    </>
  );
}

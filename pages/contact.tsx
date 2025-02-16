import { useState } from "react";
import Layout from "../components/Layout/Layout";

export default function MentionLegales() {
  const description = "Contact";
  const title = "Contact | Festival Ouaille Note";
  const pageName = "Contact";
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean | undefined>(
    undefined
  );

  const sendEmail = (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: event.target.message.value,
        contact: event.target.contact.value,
      }),
    })
      .then((res) => {
        setShowMessage(() => res.status === 200);
        event.target.reset();
      })
      .catch((res) => {
        setShowMessage(() => res.status === 200);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="contact">
          <h1 className="heading1" style={{ color: "#6a2d84" }}>
            Contact
          </h1>

          <div
            style={{
              height: "calc(100vh - 300px)",
              display: "flex",
              justifyContent: "center",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            Vous avez une question au sujet du Festival Ouaille Note #11 et
                vous ne trouvez pas la réponse sur le site ou nos réseaux
                sociaux ? 
            Contactez-nous par email à l&lsquo;adresse suivante :
            ouaillenote.lefestival@gmail.com
          </div>
        </div>
      </Layout>
    </>
  );
}

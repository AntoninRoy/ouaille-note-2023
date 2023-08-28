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
          <h1 className="heading1" style={{ color: "#16b9eb" }}>
            Contact
          </h1>

          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              action="/api/contact"
              method="post"
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "90%",
                margin: "auto",
                maxWidth: "500px",
              }}
            >
              <h2 style={{ fontSize: "20px", color: "#e3245b" }}>
                Formulaire de contact
              </h2>
              {showMessage === true && (
                <p
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    padding: "5px 10px",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  Votre message a bien été envoyé !
                </p>
              )}
              {showMessage != true && showMessage != undefined && (
                <p
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "5px 10px",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  Votre message n&lsquo;a pas été envoyé, veuillez réessayer.
                </p>
              )}
              <p style={{ textAlign: "left", marginBottom: "20px" }}>
                Vous avez une question au sujet du Festival Ouaille Note #9 et
                vous ne trouvez pas la réponse sur le site ou nos réseaux
                sociaux ? Vous pouvez nous contacter via le formulaire
                ci-dessous. N&lsquo;oubliez pas de laisser une adresse email
                pour vous recontacter !
              </p>
              {!isLoading ? (
                <>
                  <label htmlFor="contact">Votre email : </label>
                  <input type="email" name="contact" required disabled={isLoading}/>
                  <label htmlFor="message">Votre message : </label>
                  <textarea
                    rows={10}
                    name="message"
                    required
                    disabled={isLoading}
                  />
                  <input
                    type="submit"
                    value="Envoyer"
                    disabled={isLoading}
                    style={{ backgroundColor: "#e3245b", color: "white" }}
                  />
                </>
              ) : (
                <p style={{marginBottom:"100px"}}>Envoi en cours...</p>
              )}
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

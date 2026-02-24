import Layout from "../components/Layout/Layout";
import { FileText, Users, Camera, Link2 } from "lucide-react";

export default function MentionLegales() {
  const description = "Mentions Légales";
  const title = "Mentions Légales | Festival Ouaille Note";
  const pageName = "Mentions Légales";

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="page-background" style={{ padding: "0 20px", paddingBottom: "50px" }}>

          <h1
            style={{
              paddingTop: "10vh",
              paddingBottom: "5vh",
              color: "#ceda42",
              fontFamily: "Crunold",
              textAlign: "center",
              fontSize: "2.5em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            MENTIONS LÉGALES
          </h1>

          {/* Éditeur */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <FileText size={28} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.5em", margin: 0 }}>
                Éditeur
              </h2>
            </div>
            <p style={{ lineHeight: "1.6", margin: 0, fontWeight: "bold" }}>
              Association « La Gatin&apos;Ouaille » Festival Ouaille Note ?
            </p>
          </div>

          {/* Équipe */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Users size={28} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.5em", margin: 0 }}>
                Équipe graphique et technique
              </h2>
            </div>
            <div style={{ display: "grid", gap: "10px" }}>
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                <strong style={{ color: "#ceda42" }}>Réalisation identité graphique :</strong> Thibaud Mercier
              </p>
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                <strong style={{ color: "#ceda42" }}>Conception réalisation du site internet :</strong> Thibaud Mercier
              </p>
              <p style={{ margin: 0, lineHeight: "1.6" }}>
                <strong style={{ color: "#ceda42" }}>Hébergement :</strong> Vercel.com
              </p>
            </div>
          </div>

          {/* Droits d'auteur */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <FileText size={28} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.5em", margin: 0 }}>
                Droits d&apos;auteur
              </h2>
            </div>
            <p style={{ lineHeight: "1.8", marginBottom: "15px", textAlign: "justify" }}>
              Ce site est la propriété de l&apos;association « La Gatin&apos; Ouaille » – la réservation du nom de domaine www.ouaillenote.fr a été effectué conformément aux dispositions de l&apos;AFNIC. L&apos;Association Les Gatins Ouaille se réserve tous les droits de propriété intellectuelle sur ce site Internet ainsi que sur les informations mises à disposition.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "15px", textAlign: "justify" }}>
              L&apos;ensemble de ce site (images, photos, vidéos, sons, textes) relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Conformément aux dispositions sur la protection des droits d&apos;auteur et de l&apos;article L. 122-4 du Code de la propriété intellectuelle, toute reproduction, imbrication, représentation, diffusion ou rediffusion, totale et même partielle d&apos;éléments graphiques, de la structure du site ou de contenus est strictement interdite sauf accord des parties.
            </p>
            <div
              style={{
                padding: "15px",
                backgroundColor: "rgba(206, 218, 66, 0.15)",
                borderRadius: "4px",
                borderLeft: "4px solid #ceda42",
              }}
            >
              <p style={{ margin: 0, lineHeight: "1.6", fontStyle: "italic" }}>
                La copie des textes figurant sur www.ouaillenote.fr doit faire l&apos;autorisation au préalable expresse et respecter l&apos;intégrité des documents reproduits, la citation explicite de la source telle que « Avec l&apos;aimable autorisation de la Gatin&apos; Ouaille – www.ouaillenote.fr. Tous droits réservés. », la gratuité de la diffusion.
              </p>
            </div>
          </div>

          {/* Crédits photos */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Camera size={28} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.5em", margin: 0 }}>
                Crédits photographiques
              </h2>
            </div>
            <p style={{ lineHeight: "1.8", marginBottom: "15px" }}>
              <strong style={{ color: "#ceda42" }}>Crédit photos :</strong> ©Gabriel Boyer, ©Lucas Campigli, ©Alex Ducarel, @Matthieu Bizeul, ©OVAH
            </p>
            <p style={{ lineHeight: "1.8", margin: 0, textAlign: "justify" }}>
              La structure générale ainsi que les textes, images et vidéos, son savoir-faire et tous les autres éléments composant le site sont la propriété exclusive de l&apos;éditeur du site. Ils ne peuvent être copiés ou exploités en aucun cas sur tout autre support ou réseau.
            </p>
          </div>

          {/* Liens */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              padding: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "6px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Link2 size={28} color="#ceda42" style={{ marginRight: "15px" }} />
              <h2 style={{ color: "#ceda42", fontFamily: "Crunold", fontSize: "1.5em", margin: 0 }}>
                Liens et renvois
              </h2>
            </div>
            <p style={{ lineHeight: "1.8", margin: 0, textAlign: "justify" }}>
              Ce site Internet contient des liens hypertextes vers d&apos;autres sites ainsi que des renvois à d&apos;autres sources d&apos;information. Ces liens et sources d&apos;information sont mis à votre disposition à titre indicatif uniquement. L&apos;association La Gatin&apos;Ouaille décline toute responsabilité pour les dommages pouvant résulter de la consultation des informations présentes sur les autres sites ou dans d&apos;autres sources d&apos;information en général.
            </p>
          </div>

        </div>
      </Layout>
    </>
  );
}

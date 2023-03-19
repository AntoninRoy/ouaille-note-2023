import Layout from "../components/Layout/Layout";

export default function MentionLegales() {
  const description = "Mentions Légales";
  const title = "Mentions Légales | Festival Ouaille Note";
  const pageName = "Mentions Légales";

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="mentions">
          <h1>Mentions legales</h1>
          <h2>EDITEUR</h2>
          <strong>
            {"Association « La Gatin'Ouaille » Festival Ouaille Note ?"}
          </strong>
          <h2>EQUIPE GRAPHIQUE ET TECHNIQUE</h2>
          <p>{`Réalisation identité graphique : Thibaud Mercier`}</p>
          <p>
            {`Conception
          réalisation du site internet : Thibaud Mercier`}
          </p>

          <p>{`Hébergement : Vercel.com`}</p>

          <h2>DROITS D’AUTEUR</h2>
          <p>
            {`Ce site est la propriété de l’association « La Gatin’ Ouaille » – la réservation du nom de domaine www.ouaillenote.fr a été effectué conformément aux dispositions de l’AFNIC. L’Association Les Gatins Ouaille se réserve tous les droits de propriété intellectuelle sur ce site Internet ainsi que sur les informations mises à disposition. L’ensemble de ce site (images, photos, vidéos, sons, textes) relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Conformément aux dispositions sur la protection des droits d’auteur et de l’article L. 122-4 du Code de la propriété intellectuelle, toute reproduction, imbrication, représentation, diffusion ou rediffusion, totale et même partielle d’éléments graphiques, de la structure du site ou de contenus (des images, des photos, des vidéos et des sons) est strictement interdite sauf accord des parties.`}
          </p>
          <p>
            {`La copie des textes figurant sur www.ouaillenote.fr doit faire l’autorisation au préalable expresse et respecter l’intégrité des documents reproduits, la citation explicite de la source telle que « Avec l’aimable autorisation de la Gatin’ Ouaille – www.ouaillenote.fr. Tous droits réservés. », la gratuité de la diffusion.`}
          </p>
          <h2>CRÉDITS PHOTOGRAPHIQUES</h2>
          <p>{`Crédit photos : ©Gabriel Boyer, ©Lucas Campigli, ©Alex Ducarel, @Matthieu Bizeul, ©OVAH`}</p>
          <p>
            {`La structure générale ainsi que les textes, images et vidéos, son savoir-faire et tous les autres éléments composant le site sont la propriété exclusive de l’éditeur du site. Ils ne peuvent être copiés ou exploités en aucun cas sur tout autre support ou réseau..`}
          </p>
          <p>
            {`L’Association La Gatin’ Ouaille décline toute responsabilité pour les dommages pouvant résulter de l’utilisation des informations de ce site Internet. Par conséquent, vous êtes entièrement responsable de l’utilisation que vous faites de ces informations.`}
          </p>
          <h2>LIENS ET RENVOIS</h2>
          <p>
            {`Ce site Internet contient des liens hypertextes vers d’autres sites ainsi que des renvois à d’autres sources d’information. Ces liens et sources d’information sont mis à votre disposition à titre indicatif uniquement. L’association La Gatin’Ouaille décline toute responsabilité pour les dommages pouvant résulter de la consultation des informations présentes sur les autres sites ou dans d’autres sources d’information en général, et auxquelles renvoie ce site.`}
          </p>
        </div>
      </Layout>
    </>
  );
}
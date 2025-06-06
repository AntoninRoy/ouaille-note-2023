import Footer from "./Footer";
import Head from "next/head";
import { ReactElement } from "react";
import Menu from "./Menu";
import { Analytics } from "@vercel/analytics/react";
import { artistes } from "../../data/artistes";
import Facebook from "../../tracking/Facebook";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Layout(props: {
  title: string;
  description: string;
  pageName: string;
  children: ReactElement<any, any>;
}) {
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Festival",
    name: props.title,
    organizer: "Association « La Gatin'Ouaille »",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2025-09-12",
    endDate: "2025-09-13",
    description: props.description,
    image: [`https://www.ouaillenote.fr/images/logo/logoviolet.jpg`],
    performers: artistes.map((artistes) => ({
      "@type": "PerformingGroup",
      name: artistes.name,
      image: `https://www.ouaillenote.fr/images/artistes/${artistes.url}`,
    })),
    offers: [
      {
        "@type": "Offer",
        url: "https://www.billetweb.fr/shop.php?event=festival-ouaillenote-10",
        price: "49.99",
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        name: "PASS 2 JOURS : 12/13 SEPTEMBRE 2025",
        validFrom: "2025-01-01",
      },
      {
        "@type": "Offer",
        url: "https://www.billetweb.fr/shop.php?event=festival-ouaillenote-10",
        price: "27.99",
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        name: "VENDREDI 12 SEPTEMBRE 2025",
        validFrom: "2025-01-01",
      },
      {
        "@type": "Offer",
        url: "https://www.billetweb.fr/shop.php?event=festival-ouaillenote-10",
        price: "27.99",
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        name: "SAMEDI 13 SEPTEMBRE 2025",
        validFrom: "2025-01-01",
      },
    ],
    location: {
      "@type": "Place",
      name: "Salle Abel Chargelegue",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue du stade",
        addressLocality: "Vasles",
        postalCode: "79340",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:image"
          content={`https://www.ouaillenote.fr/images/logo/logoviolet.jpg`}
        />
        <meta
          property="og:url"
          content="https://www.ouaillenote.fr/programmation"
        />
        <meta property="fb:app_id" content="ouaillenote.lefestival" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@OuailleNote" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta
          name="twitter:image"
          content={`https://www.ouaillenote.fr/images/logo/logoviolet.jpg`}
        />
        <meta
          name="keywords"
          content={`${props.pageName} Musique, Ouaille Note 2025, Festival, Été 2025, à Vasles 79340 Deux-Sèvres`}
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Facebook />
      <Menu />
      <Link
        href="https://www.tiktok.com/@ouaillenotefestival"
        passHref={true}
        target="_blank"
      >
        <div className="reseaux-link" style={{ right: "calc((100vw - (100vw - 100%)) - 100vw/2 - 25px)" }}>
          <FaTiktok size="2em" className="icon-style" />
        </div>
      </Link>
      <Link
        href="https://www.facebook.com/ouaillenote.lefestival/"
        passHref={true}
        target="_blank"
      >
        <div className="reseaux-link" style={{ right: "calc((100vw - (100vw - 100%)) - 100vw/2 - 80px)" }}>
          <FaFacebook size="2em" className="icon-style" />
        </div>
      </Link>
      <Link
        href="https://www.secure.instagram.com/ouaillenotefestival/"
        passHref={true}
        target="_blank"
      >
        <div className="reseaux-link" style={{ right: "calc((100vw - (100vw - 100%)) - 100vw/2 + 30px)" }}>
          <FaInstagram size="2em" className="icon-style" />
        </div>
      </Link>
      {props.children}
      <Analytics />
      <Footer />
    </>
  );
}

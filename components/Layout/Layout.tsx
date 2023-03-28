import Footer from "./Footer";
import Head from "next/head";
import { JsxElement } from "typescript";
import { ReactElement } from "react";
import Menu from "./Menu";

export default function Layout(props : {title : string, description : string, pageName : string, children : ReactElement<any, any>}) {
  const performers = [
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
    {
      name: "",
      imageSrc: "",
    },
  ];

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Festival",
    name: props.title,
    organizer: "Association « La Gatin'Ouaille »",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: "2023-09-08",
    endDate: "2023-09-09",
    description: props.description,
    image: [`https://www.ouaillenote.fr/images/logo/logo.png`],
    performers: performers.map((performer) => ({
      "@type": "PerformingGroup",
      name: performer.name,
      image: `https://www.ouaillenote.fr/images/artistes/${performer.imageSrc}`,
    })),
    offers: [
      {
        "@type": "Offer",
        url: "https://my.weezevent.com/festival-ouaillenote-9",
        price: "44.90",
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        name: "PASS 2 JOURS : 8/9 SEPTEMBRE 2023",
        validFrom: "2023-03-13",
      },
      {
        "@type": "Offer",
        url: "https://my.weezevent.com/festival-ouaillenote-9",
        price: "24.90",
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        name: "VENDREDI 8 SEPTEMBRE 2023",
        validFrom: "2023-03-13",
      },
      {
        "@type": "Offer",
        url: "https://my.weezevent.com/festival-ouaillenote-9",
        price: "24.90",
        priceCurrency: "EUR",
        availability: "http://schema.org/InStock",
        name: "SAMEDI 9 SEPTEMBRE 2023",
        validFrom: "2023-03-13"
      }
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
          content={`https://www.ouaillenote.fr/images/logo/logo.png`}
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
          content={`https://www.ouaillenote.fr/images/logo/logo.png`}
        />
        <meta
          name="keywords"
          content={`${props.pageName} Musique, Ouaille Note 2023, Festival, Été 2023, à Vasles 79340 Deux-Sèvres`}
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      {props.children}
      <Footer />
    </>
  );
}
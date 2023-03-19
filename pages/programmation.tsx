import { ProgrammationCards } from "@/components/ProgrammationCards";
import { useInView } from "framer-motion";
import Image from "next/legacy/image";
import { createRef } from "react";
import Layout from "../components/Layout/Layout";

import styles from "../styles/Programmation.module.css";

export default function Programmation() {
  const description =
    "Découvrez toute la programmation et tous les artistes du Ouaille Note ? Festival par jour. Le vendredi 8 et samedi 9 septembre 2023.";
  const title = "Programmation | Festival Ouaille Note";
  const pageName = "Programmation";

  const divRef = createRef<HTMLDivElement>();

  const inView = useInView(divRef, { once: true, margin: "-20%" });

  return (
    <>
      <Layout description={description} title={title} pageName={pageName}>
        <div className="general-container">
          <div className="heading1" style={{backgroundColor : "black"}}>Programmation</div>
          <ProgrammationCards divRef={divRef} inView={inView} />
        </div>
      </Layout>
    </>
  );
}

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className="menu"
        style={{
          height: "5vh",
        }}
      >
        {showMenu ? (
          <IoMdClose onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <RxHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
        )}
      </div>
      <motion.div
        initial={false}
        animate={showMenu ? "open" : "closed"}
        className="menu-container"
        variants={{
          open: {
            top: 0,
            display: "flex",
            transition: {
              type: "spring",
              stiffness: 400,
              duration: 0.3,
              damping: 40,
            },
          },
          closed: {
            top: "-50vh",
            display: "flex",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 40,
              duration: 0.5,
            },
          },
        }}
      >
        <div className="menu-item">
          <Link href="/">Accueil</Link>
        </div>
        <div className="menu-item">
          <Link href="/programmation">Programmation</Link>
        </div>

        <div className="menu-item">
          <Link href="/billetterie">Billetterie</Link>
        </div>
        {/* <div className="menu-item">Gallerie</div> */}
        <div className="menu-item">
          <Link href="/partenaires">Partenaires</Link>
        </div>
        {/* <div className="menu-item">
          <Link href="/contact">Contact</Link>
        </div> */}
      </motion.div>
    </>
  );
}

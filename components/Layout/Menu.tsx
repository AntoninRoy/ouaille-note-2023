import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { useRouter } from "next/router";

const menuItems = [
  { href: "/", label: "Accueil" },
  { href: "/billetterie", label: "Billetterie" },
  { href: "/tremplin", label: "Tremplin" },
  { href: "/infospratiques", label: "Infos pratiques" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const lineVariants = {
  closed: {
    width: "0%",
  },
  open: {
    width: "100%",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      {/* Bouton Hamburger animé */}
      <button
        className="menu-button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Menu"
      >
        <div className="hamburger-container">
          <motion.span
            className="hamburger-line"
            animate={showMenu ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="hamburger-line"
            animate={showMenu ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="hamburger-line"
            animate={showMenu ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </button>

      {/* Menu Fullscreen */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="menu-nav">
              {menuItems.map((item, index) => {
                const isActive = currentPath === item.href;
                return (
                  <motion.div
                    key={item.href}
                    className="menu-item-wrapper"
                    variants={itemVariants}
                  >
                    <Link
                      href={item.href}
                      className={`menu-link ${isActive ? "menu-link-active" : ""}`}
                      onClick={(e) => {
                        if (isActive) {
                          e.preventDefault();
                        }
                        setShowMenu(false);
                      }}
                    >
                      <span className="menu-number">0{index + 1}</span>
                      <span className="menu-label">{item.label}</span>
                      {isActive && <span className="menu-active-indicator">●</span>}
                    </Link>
                    <motion.div
                      className="menu-line"
                      variants={lineVariants}
                    />
                  </motion.div>
                );
              })}
            </nav>

            {/* Décoration Logo */}
            <motion.div
              className="menu-decoration"
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 0.15, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/images/logo/ON12TRANSPARENT.png"
                alt="Ouaille Note 12"
                width={400}
                height={400}
                objectFit="contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

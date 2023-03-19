import { artistes } from "@/data/artistes";
import { useWindowDimensions } from "@/hook/useWindowDimensions";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import Image from "next/legacy/image";

export const ProgrammationCards: FC<{ divRef: any; inView: any }> = ({
  divRef,
  inView,
}) => {
  const [large, setLarge] = useState<number>();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setLarge(
      divRef.current?.firstElementChild?.clientWidth
        ? divRef.current?.firstElementChild?.clientWidth
        : 70
    );
  }, [width]);

  return (
    <div ref={divRef} className="artistes-container">
      {artistes.map((artiste, index) => (
        <motion.div
          key={index}
          style={{
            height: large ? large + 80 + "px" : "100vh",
            borderBottom: "1px solid black",
          }}
          className={artiste.className}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-20%" }}
          variants={
            inView
              ? {
                  offscreen: {},
                  onscreen: {
                    x: 0,
                    backgroundColor: "#000",
                    backgroundPositionX: artiste.backgroundPositionX,
                    backgroundPositionY: artiste.backgroundPositionY,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 1,
                    },
                  },
                }
              : {}
          }
        >
          <div
            style={{
              width: large ? large - 100 + "px" : "100vh",
              height: large ? large - 100 + "px" : "100vh",
              position: "relative",
              top: large ? 100 / 2 + "px" : "0",
              left: large ? 100 / 2 + "px" : "0",
            }}
          >
            <Image
              className="image-artiste"
              src={artiste.image.src}
              layout="fill"
              objectFit="contain"
              alt={artiste.image.alt}
            />

            <motion.div
              className="artiste-title"
              style={artiste.customStyle}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-20%" }}
              variants={
                inView
                  ? {
                      offscreen: {},
                      onscreen: {
                        opacity: 1,
                        backgroundPositionY: artiste.backgroundPositionY,
                        transition: {
                          type: "spring",
                          bounce: 0.2,
                          duration: 2,
                          delay: 0.5,
                        },
                      },
                    }
                  : {}
              }
            >
              {artiste.name}
            </motion.div>
          </div>
          <motion.p
            initial="offscreen"
            viewport={{ once: true }}
            whileInView="onscreen"
            variants={
              inView
                ? {
                    offscreen: {},
                    onscreen: {
                      opacity: 1,
                      top: "85px",
                      transition: {
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      },
                    },
                  }
                : {}
            }
            className="artiste-date"
          >
            {/*  */}
            {artiste.date}
          </motion.p>
          {/* <div className="decouvrir">Découvrir</div> */}
        </motion.div>
      ))}
    </div>
  );
};

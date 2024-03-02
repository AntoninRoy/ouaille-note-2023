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
     
    </div>
  );
};

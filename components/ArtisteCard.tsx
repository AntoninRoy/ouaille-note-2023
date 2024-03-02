import React from "react";
import Image from "next/legacy/image";

interface ArtistCardProps {
  name: string;
  url: string;
  size?: string;
  color?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, url,size = "", color ="" }) => {
  return (
    <div className="box">
      <Image src={url} width={0} height={0} sizes="100vw" />
      <div className={`bottom ${size} ${color}`}>{name}</div>
    </div>
  );
};

export default ArtistCard;

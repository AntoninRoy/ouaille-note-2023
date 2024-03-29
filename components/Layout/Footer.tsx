import SocialMedias from "./SocialMedias";
import Image from "next/legacy/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Image
          alt="Logo Ouaille Note 10"
          src="/images/logo/ON10TRANSPARENT.png"
          width="300"
          height="150"
          objectFit="contain"
        />
      </div>
      <div>
        <SocialMedias />
      </div>
      <div>
        {"@GATIN'OUAILLE 2024 - "}

        <Link href="/mentionslegales">
          MENTIONS LÉGALES
        </Link>
      </div>
    </div>
  );
}
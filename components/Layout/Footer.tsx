import SocialMedias from "./SocialMedias";
import Image from "next/legacy/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Image
          alt="Logo Ouaille Note 9"
          src="/images/logo/logo.png"
          width="300"
          height="150"
          objectFit="contain"
        />
      </div>
      <div>
        <SocialMedias />
      </div>
      <div>
        {"@GATIN'OUAILLE 2023 - "}

        <Link href="/mentionslegales">
          MENTIONS LÉGALES
        </Link>
      </div>
    </div>
  );
}
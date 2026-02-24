import SocialMedias from "./SocialMedias";
import Image from "next/legacy/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Image
          alt="Logo Ouaille Note 12"
          src="/images/logo/ON11TRANSPARENT.png"
          width="300"
          height="150"
          objectFit="contain"
        />
      </div>
      <div>
        <SocialMedias />
      </div>
      <div>
        {"@GATIN'OUAILLE 2026 - "}

        <Link href="/mentionslegales">
          MENTIONS LÉGALES
        </Link>
      </div>
    </div>
  );
}
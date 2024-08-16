import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="social-medias">
      <Link
        href="https://www.facebook.com/ouaillenote.lefestival/"
        passHref={true}
      >
        <FaFacebook size="1.4em" className="icon-style" />
      </Link>
      <Link
        href="https://www.secure.instagram.com/ouaillenotefestival/"
        passHref={true}
      >
        <FaInstagram size="1.4em" className="icon-style" />
      </Link>
      <Link href="https://www.tiktok.com/@ouaillenotefestival" passHref={true}>
        <FaTiktok size="1.4em" className="icon-style" />
      </Link>
    </div>
  );
}
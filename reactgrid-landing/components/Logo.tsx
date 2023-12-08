import logoIcon from "@/public/static/logo-light.svg";
import nightLogoIcon from "@/public/static/logo-night.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return (
    <Link href="/">
      <Image
        src={logoIcon}
        alt="ReactGrid logo"
        width={180}
        className="dark:hidden"
      />
    </Link>
  );  

  return (
    <Link href="/">
      <Image src={nightLogoIcon} alt="ReactGrid logo" width={180} className="dark:hidden" />
      <Image src={logoIcon} alt="ReactGrid logo" width={180} className="hidden dark:block" />
    </Link>
  );
};

export default Logo;
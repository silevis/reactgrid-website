import { parse } from "url";
import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/public/static/logo-light.svg";
import { HeaderLink } from "@/components/HeaderLink";
import { headers } from "next/headers";

const getCurrentRoute = () => {
  const fullUrl = headers().get("referer");
  const parsedUrl = parse(fullUrl || "");
  return parsedUrl.pathname;
};

export default function Header() {
  const currentRoute = getCurrentRoute();

  console.log("currentRoute: ", currentRoute);

  return (
    <nav className="bg-green-primary sticky top-0 border-2 border-lime-600 grid grid-cols-header h-[96px]">
      <Link
        href="/"
        className="col-start-2 border-l-2 border-lime-600 flex justify-center items-center"
      >
        <Image src={logoIcon} alt="ReactGrid" width={210} />
      </Link>
      <HeaderLink href="/features">Features</HeaderLink>
      <HeaderLink href="/examples">Examples</HeaderLink>
      <HeaderLink href="/docs">Docs</HeaderLink>
      <HeaderLink href="/blog">Blog</HeaderLink>
      <HeaderLink href="/get-now">Get now!</HeaderLink>
      <span className="border-l-2 border-lime-600"></span>
      <span className="border-l-2 border-lime-600"></span>
    </nav>
  );
}

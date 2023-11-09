import { parse } from "url";
import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/public/static/logo-light.svg";
import { HeaderLink } from "@/components/headerlink";
import { headers } from "next/headers";

const getCurrentRoute = () => {
  const fullUrl = headers().get("referer");
  const parsedUrl = new URL(fullUrl || "");
  return parsedUrl.pathname;
};

export default function Header() {
  const currentRoute = getCurrentRoute();

  console.log("currentRoute: ", currentRoute);

  return (
    <nav className="bg-green-primary top-0 border-top-2 border-white grid grid-cols-header h-[96px] text-white">
      <Link
        href="/"
        className="col-start-3 col-end-7 border-l-2 border-white flex justify-start items-center ps-5"
      >
        <Image src={logoIcon} alt="ReactGrid" width={210} />
      </Link>
      <HeaderLink href="/features">Features</HeaderLink>
      <HeaderLink href="/examples">Examples</HeaderLink>
      <HeaderLink href="/docs">Docs</HeaderLink>
      <HeaderLink href="/get-now">Get now!</HeaderLink>
      <span className="border-l-2 border-white"></span>
      <span className="border-l-2 border-white"></span>
    </nav>
  );
}

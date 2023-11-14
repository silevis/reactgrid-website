import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/public/static/logo-light.svg";
import { HeaderLink } from "@/components/header-link";
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
    <nav className="bg-green-primary top-0 border-t-1 border-l-1 border-b-1 border-r-1 font-dm-sans border-white grid grid-cols-header h-[96px] text-white">
      <div className="col-start-1 2xl:col-start-3 col-end-5 2xl:col-end-7 border-l-1 border-white flex items-center ps-5 justify-start">
        <Link href="/">
          <Image src={logoIcon} alt="ReactGrid" width={210} />
        </Link>
      </div>
      <HeaderLink href="/features">Features</HeaderLink>
      <HeaderLink href="/examples">Examples</HeaderLink>
      <HeaderLink href="/docs">Docs</HeaderLink>
      <HeaderLink href="/get-now">Support</HeaderLink>
      <span className="border-l-1 hidden 2xl:flex border-white"></span>
      <span className="border-l-1 hidden 2xl:flexborder-white"></span>
    </nav>
  );
}

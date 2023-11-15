"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import logoIcon from "@/public/static/logo-light.svg";
import { HeaderLink } from "./header-link";
import Image from "next/image";

export const NavItems = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative bg-green-primary top-0 border-t-1 border-l-1 border-b-1 border-r-1 font-dm-sans border-white grid grid-cols-header h-[96px] text-white">
      <div className="col-start-1 2xl:col-start-3 col-end-5 2xl:col-end-7 border-l-1 border-white flex items-center ps-5 justify-start">
        <Link href="/">
          <Image src={logoIcon} alt="ReactGrid" width={210} />
        </Link>
      </div>
      <div className="hidden md:grid col-start-5 col-end-13 2xl:col-start-7 2xl:col-end-11 grid-cols-navLinks">
        <HeaderLink href="/features">Features</HeaderLink>
        <HeaderLink href="/examples">Examples</HeaderLink>
        <HeaderLink href="/docs">Docs</HeaderLink>
        <HeaderLink href="/support">Support</HeaderLink>
      </div>
      <div className="absolute md:hidden right-10 top-1/2 transform -translate-y-1/2">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <span className="border-l-1 hidden 2xl:flex border-white"></span>
      <span className="border-l-1 hidden 2xl:flexborder-white"></span>
    </nav>
  );
};

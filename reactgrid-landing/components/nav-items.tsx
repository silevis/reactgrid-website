"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoIcon from "@/public/static/logo-light.svg";
import { HeaderLink } from "./header-link";
import Image from "next/image";

export const NavItems = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleBodyOverflow = () => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    toggleBodyOverflow();
  }, [isOpen]);

  return (
    <nav className="relative bg-green-primary top-0 border-t-1 border-l-1 border-b-1 border-r-1 font-dm-sans border-green-light grid grid-cols-header h-[96px] text-white-primary">
      <div className="col-start-1 2xl:col-start-3 col-end-13 md:col-end-5 2xl:col-end-7 border-l-1 border-green-light flex items-center ps-5 justify-start">
        <Link href="/">
          <Image src={logoIcon} alt="ReactGrid" width={180} />
        </Link>
      </div>
      <div
        className={`${
          isOpen ? "grid" : "hidden"
        } fixed md:static z-40 p-8 md:p-0 md:grid w-screen text-black-primary md:text-white-primary left-0 bg-white-primary md:bg-transparent h-screen md:w-auto md:h-auto md:relative md:grid col-start-5 col-end-13 2xl:col-start-7 2xl:col-end-11 grid-cols-1 md:grid-cols-navLinks justify-items-start md:justify-items-stretch content-start md:content-stretch top-[96px] md:top-auto gap-y-4 md:gap-y-0`}
      >
        <HeaderLink href="/features">Features</HeaderLink>
        <HeaderLink href="/examples">Examples</HeaderLink>
        <HeaderLink href="/docs">Docs</HeaderLink>
        <HeaderLink href="/support">Support</HeaderLink>
      </div>
      <div className="absolute md:hidden right-10 top-1/2 transform -translate-y-1/2 z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <span className="border-l-1 hidden 2xl:flex border-l-1 border-green-light"></span>
      <span className="hidden 2xl:flex"></span>
    </nav>
  );
};

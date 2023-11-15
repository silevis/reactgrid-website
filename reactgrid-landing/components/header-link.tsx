"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const HeaderLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const underlineClass = isActive ? "border-b-2" : "";

  return (
    <Link
      href={href}
      className={`${
        href === "/get-now" ? "" : ""
      } border-l-1 border-green-light flex text-md md:text-xs font-bold justify-center items-center ${underlineClass}`}
    >
      {children}
    </Link>
  );
};

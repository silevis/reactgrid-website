import githubIcon from "@/public/static/github.svg";
import npmIcon from "@/public/static/npm.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-header bg-footer py-[40px] gap-y-32">
      <div className="flex justify-between gap-y-16 col-start-3 col-end-11 flex-wrap lg:flex-nowrap">
        <div className="w-[100%] sm:w-[50%] lg:w-auto">
          <h2 className="font-bold text-sm mb-[32px]">Info</h2>
          <ul className="text-white-secondary3 flex flex-col gap-y-2">
            <li>Cookies</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-[100%] sm:w-[50%] lg:w-auto">
          <h2 className="font-bold text-sm mb-[32px]">Explore</h2>
          <ul className="text-white-secondary3 flex flex-col gap-y-2">
            <li>Features</li>
            <li>Examples</li>
            <li>Docs</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="w-[100%] sm:w-[50%] lg:w-auto">
          <h2 className="font-bold text-sm mb-[32px]">Social</h2>
          <ul className="text-white-secondary3 flex gap-x-8">
            <li>
              <Image src={npmIcon} alt="npm icon" className="md:w-auto" />
            </li>
            <li>
              <Image
                src={githubIcon}
                alt="github icon"
                className=" md:w-auto"
              />
            </li>
          </ul>
        </div>
        <div className="w-[100%] sm:w-[50%] lg:w-auto">
          <h2 className="font-bold text-sm mb-[32px]">Contact</h2>
          <ul className="text-white-secondary3 flex flex-col gap-y-2">
            <li>Silevis Software Sp. z o.o.</li>
            <li>Sienkiewicza Street 17/3</li>
            <li>25-007 Kielce, Poland</li>
          </ul>
        </div>
      </div>
      <div className="col-start-3 col-end-11 text-center text-white-secondary2">
        Copyright © 2019-2020 Silevis Software Sp. z o.o. All rights reserved.
      </div>
    </footer>
  );
};

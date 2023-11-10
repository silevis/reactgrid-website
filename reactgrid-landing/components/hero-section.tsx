import Image from "next/image";
import rightIcon from "@/public/static/right-arrow.svg";

export const HeroSection = () => {
  return (
    <div className="pb-4 box-border font-dm-sans bg-green-primary text-white hero-section grid grid-cols-header grid-rows-header">
      <div className="border-t-1 border-b-1 col-start-1 col-end-3 row-start-1 row-end-7"></div>
      <div className="title-text border-4 col-start-3 col-end-9 row-start-1 row-span-6 flex justify-items-center items-center p-40px">
        <h1 className="text-3xl font-bold">
          Spreadsheet experience for your React app
        </h1>
      </div>
      <div className="border-t-1 col-start-9 col-end-11 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        342 352,34
      </div>
      <div className="border-l-1 border-t-1 col-start-11 col-end-13 row-start-1 row-span-2 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        1024
      </div>
      <div className="border-t-1 col-start-9 col-end-11 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        404
      </div>
      <div className="border-t-1 col-start-9 col-end-11 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        64, 128, 256
      </div>
      <div className="border-t-1 border-l-1 col-start-11 col-end-13 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        605 725
      </div>
      <div className="border-t-1 col-start-9 col-end-11 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        36.6
      </div>
      <div className="border-t-1 border-l-1 col-start-11 col-end-13 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        16 080,60
      </div>
      <div className="border-t-1 border-b-1 col-start-9 font-bold text-xl col-end-11 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        189 243,07
      </div>
      <div className="inline-block border-t-1 border-l-1 border-b-1 col-start-11 col-end-13 row-start-5 row-span-2 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        432
      </div>
      <div className="border-b-1 col-start-9 col-end-11 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        3.14
      </div>
      <div className="inline-block border-l-1 border-b-1 col-start-3 col-end-7 row-start-7 row-span-2 text-md flex justify-center items-center p-40px">
        <h2>
          ReactGrid is a component for displaying and entering data in a
          spreadsheet-like way.
        </h2>
      </div>
      <div className="inline-block border-l-1 border-b-1 col-start-7 col-end-9 row-start-7 row-span-2 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        256
      </div>
      <div className="inline-block border-l-1 border-b-1 col-start-9 col-end-11 row-start-7 row-span-2 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        5.10.15
      </div>
      <div className="inline-block border-l-1 border-b-1 border-r-1 col-start-11 col-end-13 row-start-7 font-bold text-xl row-span-2 flex justify-center items-center p-40px text-green-secondary">
        256
      </div>
      <button className="inline-block border-l-1 border-b-1 col-start-3 col-end-4 row-start-9 font-bold text-xl flex justify-center items-center p-40px text-xs">
        install <Image src={rightIcon} alt="install npm package" />
      </button>
      <div className="inline-block border-l-1 border-b-1 col-start-4 col-end-7 row-start-9 flex items-center p-40px font-dm-mono bg-green-secondary">
        <p>npm i @silevis/reactgrid</p>
      </div>
      <div className="inline-block border-l-1 border-b-1 col-start-7 col-end-8 row-start-9 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        192
      </div>
      <div className="inline-block border-l-1 border-b-1 col-start-8 col-end-9 row-start-9 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        64
      </div>
      <div className="inline-block border-l-1 border-b-1 col-start-9 col-end-10 row-start-9 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        0.33
      </div>
      <div className="inline-block border-l-1 border-b-1 border-r-1 col-start-10 col-end-11 row-start-9 font-bold text-xl flex justify-center items-center p-40px text-green-secondary">
        0.7
      </div>
    </div>
  );
};

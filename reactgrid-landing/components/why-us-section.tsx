import Image from "next/image";
import illustration2 from "@/public/static/illustration2.svg";
import illustration3 from "@/public/static/illustration3.svg";

export const WhyUsSection = () => {
  return (
    <section className="">
      <div className="pt-[128px] pb-[80px]">
        <h1 className="text-md sm:text-xl md:text-2xl font-bold text-center text-black-primary">
          Why is ReactGrid unique?
        </h1>
        <p className="text-center text-xs md:text-sm px-8 text-black-secondary">
          Congue dictum neque, nibh at vel turpis dignissim felis pellentesque.
          Nulla iaculis faucibus nisi nunc netus dolor.
        </p>
      </div>
      <div className="grid grid-cols-header">
        <div className="col-start-3 col-end-11 flex justify-between gap-x-16">
          <div className="flex flex-1 flex-col items-center gap-y-4">
            <Image src={illustration2} alt="ReactGrid" width={300} />
            <h2 className="text-black-primary font-bold text-sm">
              Open source
            </h2>
            <p className="text-black-secondary2 text-center">
              ReactGrid follows an open-source development model, allowing free
              access, modification, and distribution of its source code. This
              fosters collaboration and transparency, aligning with ReactGrid's
              reactivity principles in building a dynamic and community-driven
              software ecosystem
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-y-4">
            <Image src={illustration2} alt="ReactGrid" width={300} />

            <h2 className="text-black-primary font-bold text-sm">
              Place any cell anywhere
            </h2>
            <p className="text-black-secondary2 text-center">
              ReactGrid is fully customizable and extensible. You can literally
              place any cell type anywhere in the grid.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-y-4">
            <Image src={illustration3} alt="ReactGrid" width={300} />
            <h2 className="text-black-primary font-bold text-sm">
              Optimized for touch devices
            </h2>
            <p className="text-black-secondary2 text-center">
              ReactGrid gives the same experience to you no matter if you work
              on desktop or mobile devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

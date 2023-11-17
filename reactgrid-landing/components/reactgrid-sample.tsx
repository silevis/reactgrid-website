import "@/styles.scss";

export default function ReactGridMainExample() {
  return (
    <div className="text-white-primary font-dm-sans">
      <div className="grid grid-cols-header grid-rows-2 bg-green-primary py-[128px]">
        <h1 className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 xl:col-start-3 xl:col-end-11 text-md sm:text-xl md:text-2xl font-bold text-center">
          ReactGrid component
        </h1>
        <p className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 xl:col-start-3 xl:col-end-11 text-center text-xs md:text-sm">
          Congue dictum neque, nibh at vel turpis dignissim felis pellentesque.
          Nulla iaculis faucibus nisi nunc netus dolor.
        </p>
      </div>
      {/* <BPSample /> temp disabled */}
      <div className="react-grid-sample relative h-[600px] md:h-[800px] bg-green-secondary grid grid-cols-header">
        <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 xl:col-start-3 xl:col-end-11 h-full bg-white-primary shadow-reactgrid-sample rounded-t-[16px] flex justify-center items-center text-[#a5a5a5] font-bold text-xl">
          Placeholder.
        </div>
      </div>
    </div>
  );
}

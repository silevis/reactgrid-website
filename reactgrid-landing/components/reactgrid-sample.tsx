import { BPSample } from "./samples/budget-planner";
import "@/styles.scss";

export default function ReactGridMainExample() {
  return (
    <div className="text-white font-dm-sans pb-[80px]">
      <div className="bg-green-primary pt-[128px] pb-[80px]">
        <h1 className="text-2xl font-bold text-center">ReactGrid component</h1>
        <p className="text-center text-xs">
          Congue dictum neque, nibh at vel turpis dignissim felis pellentesque.
          Nulla iaculis faucibus nisi nunc netus dolor.
        </p>
      </div>
      {/* <BPSample /> temp disabled */}
      <div className="react-grid-sample relative h-[800px] flex justify-center align-center">
        <div className="w-[1200px] h-full bg-white shadow-reactgrid-sample rounded-t-[16px] flex justify-center items-center text-[#a5a5a5] font-bold text-xl">
          Placeholder.
        </div>
      </div>
    </div>
  );
}

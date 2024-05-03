import LeftSideBar from "@/components/LeftSideBar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 ">
        <LeftSideBar />
      </div>
      <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-400 opacity-15"></div>
      <div className="col-span-3 "></div>
    </div>
  );
}

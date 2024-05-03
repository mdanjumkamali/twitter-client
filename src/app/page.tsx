import FeedCard from "@/components/FeedCard";
import LeftSideBar from "@/components/LeftSideBar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 ">
        <LeftSideBar />
      </div>
      <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-400 border-opacity-15 h-screen overflow-scroll">
        <FeedCard />
      </div>
      <div className="col-span-3 "></div>
    </div>
  );
}

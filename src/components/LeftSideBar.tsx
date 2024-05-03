import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

interface SideBarButton {
  title: string;
  icon: React.ReactNode;
}

const SideBarMenuItem: SideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];
const LeftSideBar = () => {
  return (
    <div className="flex flex-col justify-start pt-2">
      <div className="hover:bg-gray-600 w-fit h-fit p-2 rounded-full flex items-center cursor-pointer transition-all">
        <BsTwitter className="text-2xl" />
      </div>
      <div className="space-y-2 pt-8">
        {SideBarMenuItem.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 hover:bg-gray-600 w-fit py-2 px-3 rounded-full cursor-pointer transition-all"
          >
            <div className="text-3xl">{item.icon}</div>
            <span className="text-xl">{item.title}</span>
          </div>
        ))}
      </div>
      <button className="w-[calc(100%-30px)] bg-[#1d9bf0] p-3 rounded-full mt-4 text-lg font-semibold">
        Post
      </button>
    </div>
  );
};

export default LeftSideBar;

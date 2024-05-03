import Image from "next/image";
import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border-t-[1px] border-gray-400 border-opacity-15 p-4 hover:bg-slate-900 cursor-pointer transition-all">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src={"https://avatars.githubusercontent.com/u/54454863?v=4"}
            alt="img"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>ANJUM KAMALI</h5>
          <p>
            I hope you find these animation libraries useful and have fun
            incorporating them into your React projects. If you have any
            questions or need further guidance, feel free to ask.🙌😊
          </p>

          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

import { CircleProfileIcon } from "../../../../svg/Circleprofile";
import { LiveIcon } from "../../../../svg/Live";
import { Media } from "../../../../svg/Media";

export default function Addpost() {
  return (
    <div className="p-2 border border-line_color rounded-md flex justify-between items-center">
      <span className=" font-GilroyMedium text-black text-nase">
        Add to your post
      </span>
      <div className="flex items-center gap-x-3">
        <div
          className="w-10 h-10 rounded-full hover:bg-white_l
        cursor-pointer transition-all ease-linear duration-100 flex items-center"
        >
          <Media />
        </div>
        <div
          className="w-10 h-10 rounded-full hover:bg-white_l
        cursor-pointer transition-all ease-linear duration-100 flex items-center"
        >
          <LiveIcon />
        </div>
        <div
          className="w-10 h-10 rounded-full hover:bg-white_l
        cursor-pointer transition-all ease-linear duration-100 flex items-center"
        >
          <CircleProfileIcon />
        </div>
      </div>
    </div>
  );
}

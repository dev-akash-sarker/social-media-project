import { LiveIcon } from "../../../svg/Live";
import { Media } from "../../../svg/Media";
import CreatePostPopup from "./CreatePostPopup";

export default function PostHome() {
  return (
    <>
      <CreatePostPopup />
      <div className="mt-10 py-10 px-6 bg-white_light rounded-md">
        <div className="w-full flex items-center gap-x-3 bg-white py-2 px-2 rounded-full mb-6">
          <div className="w-12 h-12 rounded-full bg-black"></div>
          <input
            type="text"
            placeholder="What's on your mind ?"
            className="w-[95%] bg-transparent focus:outline-none"
          />
        </div>
        <div className="border-t-2 border-white">
          <div className="mt-7 flex justify-around items-center gap-x-7">
            <div className="flex items-center gap-x-3">
              <LiveIcon />
              <span className=" font-GilroyMedium text-black">Live Video</span>
            </div>
            <div className="flex items-center gap-x-3">
              <Media />
              <span className=" font-GilroyMedium text-black">
                Image/Gallery
              </span>
            </div>
            <div className="flex items-center gap-x-3">
              <LiveIcon />
              <span className=" font-GilroyMedium text-black">Activities</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

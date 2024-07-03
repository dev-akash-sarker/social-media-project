import { CircleCloseIcon } from "../../../../svg/CircleClose";
import Addpost from "./Addpost";
import { useEffect, useRef, useState } from "react";
import EmojiPickers from "./EmojiPickers";

export default function CreatePostPopup() {
  const [text, setText] = useState("");
  const textref = useRef(null);

  return (
    <>
      <div className=" absolute top-0 left-0 w-full bg-blur h-screen z-50 flex justify-center items-center">
        <div className="w-[30%] bg-white shadow-md rounded-sm">
          <div className=" relative border-b border-white_light mt-8 ">
            <h3 className=" font-GilroyBold text-lg text-black text-center">
              Create Post
            </h3>
            <div className=" absolute top-1 right-2">
              <CircleCloseIcon />
            </div>
          </div>
          <div className="px-3 py-4">
            <div className="flex items-center gap-x-3">
              <div className="w-12 h-12 rounded-full bg-white_light"></div>
              <h4 className=" font-GilroyBold text-base text-black">
                One Year Academy
              </h4>
            </div>
            <div className="mt-5">
              <textarea
                ref={textref}
                onChange={(e) => setText(e.target.value)}
                value={text}
                maxLength={100}
                className=" w-full min-h-24 focus:outline-none p-2 font-GilroyMedium text-base"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 cursor-pointer custom-gradient rounded-md"></div>
              <EmojiPickers text={text} setText={setText} textref={textref} />
            </div>

            <div>
              <Addpost />
            </div>
            <div className=" w-full bg-white_light hover:bg-black p-2 text-black hover:text-white rounded-md text-center font-GilroyMedium">
              Post
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

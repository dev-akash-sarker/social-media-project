import { ReduceText } from "../../../functions/ReduceText";

export default function RightFriends() {
  const originalName = "Hello world yes u an ";
  const reduceText = ReduceText(originalName, 13);
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className=" font-GilroyBold text-lg text-black">
              Friend Request
            </h4>
          </div>
          <div>
            <h4 className=" font-GilroyMedium bg-button_color inline-block text-base mt-3 text-black rounded-full py-2 px-3">
              See All
            </h4>
          </div>
        </div>
        {/* demo line */}
        <div className="flex items-center mt-8">
          <div className=" w-[45%] flex justify-start items-center ">
            <div className="w-8 h-8 bg-secondary_color rounded-full mr-1"></div>
            <div>
              <h5 className=" font-GilroyBold text-[13px] text-black">
                {reduceText}
              </h5>
              <span className=" font-GilroyNormal text-sm text-secondary_color leading-none">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-start box-border gap-2">
            <button className="px-5 py-2 rounded-full  border border-button_color  hover:bg-[#a2a1a1] hover:text-white text-[12px]">
              Accept
            </button>
            <button className="px-5 py-2 rounded-full border border-button_color bg-red text-white text-[12px] hover:bg-[#ff4c7f] hover:text-white">
              Reject
            </button>
          </div>
        </div>
        {/* demo line */}
        <div className="flex items-center mt-8">
          <div className=" w-[45%] flex justify-start items-center ">
            <div className="w-8 h-8 bg-secondary_color rounded-full mr-1"></div>
            <div>
              <h5 className=" font-GilroyBold text-[13px] text-black">
                {reduceText}
              </h5>
              <span className=" font-GilroyNormal text-sm text-secondary_color leading-none">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-start box-border gap-2">
            <button className="px-5 py-2 rounded-full  border border-button_color  hover:bg-[#a2a1a1] hover:text-white text-[12px]">
              Accept
            </button>
            <button className="px-5 py-2 rounded-full border border-button_color bg-red text-white text-[12px] hover:bg-[#ff4c7f] hover:text-white">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

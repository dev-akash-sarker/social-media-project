import { ReduceText } from "../../../functions/ReduceText";

export default function RightPart() {
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
        <div className="flex items-center mt-8">
          <div className="w-3/6 flex items-center gap-x-3 ">
            <div className="w-8 h-8 bg-secondary_color rounded-full"></div>
            <div className="w-[62%]">
              <h5 className=" font-GilroyBold text-[12px] text-black">
                {reduceText}
              </h5>
              <span className=" font-GilroyNormal text-sm text-secondary_color leading-none">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="w-3/6 flex items-center justify-normal box-border">
            <button className="px-5 py-2 rounded-full border-button_color border-[1px] text-[12px]">
              Accept
            </button>
            <button className="px-5 py-2 rounded-full border-button_color border-[1px] bg-red text-[12px]">
              Reject
            </button>
          </div>
        </div>
        {/* demo line */}
        <div className="flex items-center mt-8">
          <div className="w-3/6 flex items-center gap-x-3 ">
            <div className="w-8 h-8 bg-secondary_color rounded-full"></div>
            <div className="w-[62%]">
              <h5 className=" font-GilroyBold text-[12px] text-black">
                {reduceText}
              </h5>
              <span className=" font-GilroyNormal text-sm text-secondary_color leading-none">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="w-3/6 flex items-center justify-normal box-border">
            <button className="px-5 py-2 rounded-full border-button_color border-[1px] text-[12px]">
              Accept
            </button>
            <button className="px-5 py-2 rounded-full border-button_color border-[1px] bg-red text-[12px]">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

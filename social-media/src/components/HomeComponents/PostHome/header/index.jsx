import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";
import SearchSuggestionFeild from "./search/SearchSuggestionFeild";
import OutSideClick from "../../../../functions/click";

export default function Header() {
  const [iconvisible, setIconvisible] = useState(true);
  const [isFull, setIsFull] = useState(false);

  const fullRef = useRef(null);
  const inputbox = useRef(null);

  OutSideClick(fullRef, () => {
    setIsFull(false);
  });

  useEffect(() => {
    inputbox.current.focus();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className={isFull ? "w-[40%]" : ""}>
          <h4 className="font-GilroyBold text-2xl text-black">Feeds</h4>
        </div>
        <div
          ref={fullRef}
          className={
            isFull
              ? "w-[60%] relative transition-all ease-linear duration-75"
              : "relative transition-all ease-linear duration-75"
          }
        >
          <div
            onClick={() => setIsFull(true)}
            className="w-full z-30 relative flex items-center gap-x-3 border border-secondary_border_color border-1 py-3 px-4 rounded-full mt-3 font-GilroyNormal"
          >
            {!iconvisible && <SearchIcon />}
            {iconvisible && (
              <div onClick={() => inputbox.current.focus()}>
                <SearchIcon />
              </div>
            )}

            <div>
              <input
                ref={inputbox}
                type="text"
                placeholder="Search..."
                onFocus={() => setIconvisible(false)}
                onBlur={() => setIconvisible(false)}
                className="focus:outline-none cursor-pointer"
              />
            </div>
          </div>
          <div
            className={`${
              !isFull && "hidden"
            }  absolute transition-all ease-linear duration-75 top-11 z-0 left-0 w-full bg-white shadow-sm rounded-md min-h-[400px] max-h-[70vh]`}
          >
            <SearchSuggestionFeild />
          </div>
        </div>
      </div>
    </>
  );
}

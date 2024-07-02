import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";
import SearchSuggestionFeild from "./search/SearchSuggestionFeild";
import OutSideClick from "../../../../functions/click";
import { BackSearchIcon } from "../../../../svg/BackSearchIcon";
import { LeftData } from "../../leftPart/Data";
import { Link, useLocation } from "react-router-dom";
import SettingOptions from "../../leftPart/SettingOptions";

export default function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [iconvisible, setIconvisible] = useState(true);

  const [isFull, setIsFull] = useState(false);
  const [show, setShow] = useState(false);
  const fullRef = useRef(null);
  const inputbox = useRef(null);
  const settingoptionref = useRef(null);

  OutSideClick(fullRef, () => {
    setIsFull(false);
  });
  OutSideClick(settingoptionref, () => {
    setShow(false);
  });

  useEffect(() => {
    inputbox.current.focus();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-between items-center mt-5 gap-4 z-[9999]  lg:gap-0">
          <div
            className={
              isFull
                ? " w-[5%] lg:block lg:w-[40%]"
                : "flex justify-between items-center w-[50%] lg:w-[60%] relative"
            }
          >
            <h4 className="font-GilroyBold text-2xl text-black hidden lg:block">
              Feeds
            </h4>
            <div
              onClick={() => isFull(false)}
              className={isFull ? "lg:hidden" : "hidden lg:hidden"}
            >
              <BackSearchIcon width="20px" />
            </div>
          </div>
          <div
            ref={fullRef}
            className={
              isFull
                ? "relative w-full lg:w-[60%] custom-animation"
                : "relative lg:w-[40%] custom-animation-return"
            }
          >
            <div
              onClick={() => setIsFull(true)}
              className={
                isFull
                  ? "w-full z-30 relative flex items-center gap-x-3 border border-secondary_border_color border-1 py-2 px-3 lg:py-3 lg:px-4 rounded-full my-3 font-GilroyNormal"
                  : "w-12 lg:w-full z-30 relative flex items-center gap-x-3 border border-secondary_border_color border-1 py-2 px-3 lg:py-3 lg:px-4 rounded-full my-3 font-GilroyNormal"
              }
            >
              {!iconvisible && <SearchIcon />}
              {iconvisible && (
                <div onClick={() => inputbox.current.focus()}>
                  <SearchIcon />
                </div>
              )}

              <div className={isFull ? "block" : "hidden lg:block"}>
                <input
                  ref={inputbox}
                  type="text"
                  placeholder="Search..."
                  onFocus={() => setIconvisible(false)}
                  onBlur={() => setIconvisible(false)}
                  className="focus:outline-none cursor-pointer w-full"
                />
              </div>
            </div>
            <div
              className={`${
                !isFull && "hidden"
              }  absolute transition-all ease-linear duration-75 top-11 z-10 left-0 w-full bg-white shadow-sm rounded-md min-h-[400px] max-h-[70vh]`}
            >
              <SearchSuggestionFeild />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-start items-center border-b border-primary_color">
          <div className="w-12 h-12 block lg:hidden rounded-full bg-purple border border-line_color my-4"></div>
          <div className=" flex mx-auto">
            {LeftData.map((data, index) => {
              const Icondata = data.icon;
              const settingseparation = data.title === "Settings" && (
                <>
                  <div className="relative">
                    <div
                      onClick={() => setShow(!show)}
                      className={` flex items-center rounded-full hover:bg-black cursor-pointer group ${
                        show && "bg-black text-white"
                      }`}
                    >
                      <div className=" group-hover:text-white">
                        <Icondata />
                      </div>
                    </div>
                    {show && (
                      <>
                        <div
                          className=" absolute top-10 -left-[250px] bg-white w-[300px] rounded-md p-4"
                          ref={settingoptionref}
                        >
                          <SettingOptions />
                        </div>
                      </>
                    )}
                  </div>
                </>
              );
              return (
                <>
                  {settingseparation ? (
                    settingseparation
                  ) : (
                    <Link
                      className="mx-8 last:mr-0 relative"
                      key={index}
                      to={data.to}
                    >
                      <Icondata />
                      {pathname === data.to && (
                        <div className=" absolute -z-30 top-[49.5px] left-0 w-[24px] h-[4px] bg-red"></div>
                      )}
                    </Link>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

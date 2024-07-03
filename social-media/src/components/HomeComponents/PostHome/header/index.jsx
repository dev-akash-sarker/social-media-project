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
  // const backsearch = useRef(null);

  OutSideClick(fullRef, () => {
    setIsFull(false);
  });
  OutSideClick(settingoptionref, () => {
    setShow(false);
  });
  // OutSideClick(backsearch, () => {
  //   setIsFull(false);
  // });

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
                ? " hidden lg:block lg:w-[40%]"
                : "flex justify-between items-center w-[50%] lg:w-[60%] relative"
            }
          >
            <h4 className="font-GilroyBold text-2xl text-black hidden lg:block">
              Feeds
            </h4>
          </div>
          <div
            ref={fullRef}
            className={
              isFull
                ? "relative flex items-center gap-x-3 w-full lg:w-[60%] custom-animation"
                : "relative flex gap-x-4 lg:w-[40%] custom-animation-return"
            }
          >
            <div
              onClick={() => setIsFull(false)}
              className={
                isFull
                  ? "block lg:hidden z-40 ml-4 cursor-pointer"
                  : "hidden lg:hidden"
              }
            >
              <BackSearchIcon width="20px" />
            </div>
            <div
              onClick={() => setIsFull(true)}
              className={
                isFull
                  ? "w-full z-30 relative mr-4 flex items-center gap-x-3 border border-secondary_border_color border-1 py-2 px-3 lg:py-3 lg:px-4 rounded-full my-3 font-GilroyNormal"
                  : "w-14 lg:w-full z-30 relative flex items-center gap-x-3 border border-secondary_border_color border-1 py-2 px-4 lg:py-3 lg:px-4 rounded-full my-3 font-GilroyNormal"
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
                  className=" absolute top-2 lg:top-3 w-[90%] left-12 focus:outline-none cursor-pointer"
                />
              </div>
            </div>
            <div
              className={
                isFull
                  ? "bg-white shadow-md z-10 absolute top-0 left-0 -mt-5 w-full h-[100vh] lg:top-0 lg:left-0 lg:min-h-[400px] lg:max-h-[70vh]"
                  : "hidden"
              }
            >
              <SearchSuggestionFeild />
            </div>
            {isFull == false && (
              <div className="w-12 h-12 block lg:hidden rounded-full bg-purple border border-line_color my-4"></div>
            )}
          </div>
        </div>
        <div className="lg:hidden flex justify-start items-center border-b border-primary_color">
          <div className=" flex mx-auto">
            {LeftData.map((data, index) => {
              const Icondata = data.icon;
              const settingseparation = data.title === "Settings" && (
                <>
                  <div className="py-3 px-5 hover:bg-nav_hover_color rounded-md last:mr-0 relative">
                    <div
                      onClick={() => setShow(!show)}
                      className=" cursor-pointer"
                    >
                      <div>
                        <Icondata />
                      </div>
                    </div>
                    {show && (
                      <>
                        <div
                          className=" absolute shadow-md top-20 -left-[250px] bg-white w-[300px] rounded-md p-4"
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
                      className="py-3 px-5 hover:bg-nav_hover_color rounded-md last:mr-0 relative"
                      key={index}
                      to={data.to}
                    >
                      {pathname === data.to ? (
                        <div className="text-blue">
                          <Icondata />
                          {pathname === data.to && (
                            <div className=" absolute -z-30 top-[49.5px] left-0 w-[64px] rounded-md h-[4px] bg-blue"></div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <Icondata />
                          {pathname === data.to && (
                            <div className=" absolute -z-30 top-[49.5px] left-0 w-[30px] h-[4px] bg-blue"></div>
                          )}
                        </div>
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

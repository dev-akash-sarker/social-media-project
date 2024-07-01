import { NavLink } from "react-router-dom";
import { LeftData } from "./Data";
import { useRef, useState } from "react";
import SettingOptions from "./SettingOptions";
import OutSideClick from "../../../functions/click";

export default function LeftHomeData() {
  const [show, setShow] = useState(false);
  const settingoptionref = useRef(null);

  OutSideClick(settingoptionref, () => {
    setShow(false);
  });
  return (
    <>
      <div className="mt-10 w-3/4 mx-auto ">
        {LeftData.map((data, index) => {
          const { icon, title } = data;
          const ItemIcon = icon;
          const settingseparation = data.title === "Settings" && (
            <>
              <div className=" relative">
                <div
                  onClick={() => setShow(!show)}
                  className={` flex items-center gap-x-4 mb-5 px-6 py-3 rounded-full hover:bg-black cursor-pointer group ${
                    show && "bg-black text-white"
                  }`}
                >
                  <div className=" group-hover:text-white">
                    <ItemIcon />
                  </div>
                  <div
                    className={`font-GilroyMedium text-lg text-black group-hover:text-white ${
                      show && " text-white"
                    }`}
                  >
                    {title}
                  </div>
                </div>
                {show && (
                  <>
                    <div
                      className=" absolute top-16 left-0 bg-white w-[300px] rounded-md p-4"
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
                <div key={index}>
                  <NavLink
                    to={data.to}
                    className=" flex items-center gap-x-4 mb-5 px-6 py-3 rounded-full hover:bg-black cursor-pointer group"
                  >
                    <div className=" group-hover:text-white">
                      <ItemIcon />
                    </div>
                    <div className=" font-GilroyMedium text-lg text-black group-hover:text-white">
                      {title}
                    </div>
                  </NavLink>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

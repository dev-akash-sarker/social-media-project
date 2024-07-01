import { NavLink } from "react-router-dom";
import { Logout } from "../../../svg/Logout";
import { Moon } from "../../../svg/Moon";
import { useState } from "react";
import DisplayModes from "./settingColor";

export default function SettingOptions() {
  const [visible, setVisible] = useState(false);
  if (visible) {
    return <DisplayModes />;
  }
  return (
    <>
      <div>
        <ul>
          <li className="group cursor-pointer" onClick={() => setVisible(true)}>
            <NavLink to="#" className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full bg-white_light flex items-center justify-center">
                <Moon />
              </div>
              <div>
                <p className=" font-GilroyBold text-base group-hover:text-secondary_color transition-all ease-linear duration-75">
                  Display & Accessibility
                </p>
              </div>
            </NavLink>
          </li>
          <li className="group cursor-pointer">
            <NavLink to="#" className="flex items-center my-2 gap-x-3">
              <div className="w-10 h-10 rounded-full bg-white_light flex items-center justify-center">
                <Logout />
              </div>
              <div>
                <p className=" font-GilroyBold text-base group-hover:text-secondary_color transition-all ease-linear duration-75">
                  Logout
                </p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

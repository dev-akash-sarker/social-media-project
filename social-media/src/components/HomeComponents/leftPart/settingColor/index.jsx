import { Moon } from "../../../../svg/Moon";
import { BackIcon } from "../../../../svg/backIcon";

export default function DisplayModes() {
  return (
    <>
      <div className="bg-white inline-block shadow-md p-4">
        <div className="flex items-center gap-x-5">
          <div className="hover:text-secondary_color transi ease-linear duration-75">
            <BackIcon />
          </div>
          <h4 className=" font-GilroyBold text-lg text-black mb-4">
            Display & Accessibility
          </h4>
        </div>
        <div className="flex items-center justify-between gap-x-6">
          <div className="w-10 h-10 rounded-full bg-white_light flex items-center justify-center">
            <Moon />
          </div>
          <div>
            <h4>Dark Mode</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
              <div className=" flex  justify-between items-center mb-3">
                <label
                  htmlFor="dark"
                  className=" font-GilroyNormal text-sm text-black"
                >
                  On
                </label>
                <input type="radio" name="darkmood" id="dark" />
              </div>

              <div className=" flex justify-between items-center mb-3">
                <label
                  htmlFor="white"
                  className=" font-GilroyNormal text-sm text-black"
                >
                  Off
                </label>
                <input type="radio" name="darkmood" id="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

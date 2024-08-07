import { Outlet } from "react-router-dom";
import RightPart from "../components/HomeComponents/RightPart";
import LeftPart from "../components/HomeComponents/leftPart";
import Header from "../components/HomeComponents/PostHome/header";

export default function RootLayout() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[70px,4fr,1fr] xl:grid-cols-[1fr,3fr,1fr] gap-x-6 mx-6 lg:mx-0">
        <div className="bg-main_bg h-screen box-border hidden lg:block">
          <LeftPart />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <Outlet />
        </div>
        <div className=" hidden lg:block">
          <RightPart />
        </div>
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";
import RightPart from "../components/HomeComponents/RightPart";
import LeftPart from "../components/HomeComponents/leftPart";
import Header from "../components/HomeComponents/PostHome/header";

export default function RootLayout() {
  return (
    <>
      <div className="grid grid-cols-[1fr,3fr,1fr] gap-x-6">
        <div className="bg-main_bg h-screen box-border">
          <LeftPart />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <Outlet />
        </div>
        <div>
          <RightPart />
        </div>
      </div>
    </>
  );
}

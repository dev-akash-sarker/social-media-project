import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

export default function LoggedInUser() {
  const { userInfo } = useSelector((state) => state.registration);
  return userInfo ? <Outlet /> : <Login />;
}

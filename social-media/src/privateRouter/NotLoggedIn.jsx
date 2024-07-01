import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoggedInUser() {
  const { userInfo } = useSelector((state) => state.registration);
  return userInfo ? <Navigate to={"/home"} /> : <Outlet />;
}

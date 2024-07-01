import { Helmet } from "react-helmet-async";
import LeftAuth from "../../components/Authentication/leftAuth";
import { ToastContainer, toast } from "react-toastify";
import LoginForm from "../../components/login/LoginForm";
import LoginBanner from "../../svg/LoginBanner";
export default function Login() {
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Faceconnect - Log you account</title>
      </Helmet>
      <div className=" relative z-10">
        <div className=" hidden -z-[1] lg:block w-[500px] h-[500px] bg-purple rounded-full absolute -top-[300px] -left-[245px]"></div>
        <div className=" container flex gap-x-6 justify-center items-center h-screen">
          <div className="lg:w-[45%] hidden lg:block">
            <LeftAuth icon={<LoginBanner />} />
          </div>
          <div className=" w-full lg:w-[45%]">
            <LoginForm toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
}

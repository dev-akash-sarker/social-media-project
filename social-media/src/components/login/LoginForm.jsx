import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../validation";
import { useLoginUserMutation } from "../../features/api/authApi";
import { useDispatch } from "react-redux";
import { loggedInUsers } from "../../features/users/authSlice";
// import { useState } from "react";
// import DateOfBirth from "./DateOfBirth";
// import Gender from "./Gender";
// import { useAddUserMutation } from "../../features/api/authApi";

const initialState = {
  email: "",
  password: "",
};
export default function LoginForm({ toast }) {
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const loginUserAPI = async () => {
    const loginMutation = await loginUser({
      email: formik.values.email,
      password: formik.values.password,
    });

    if (loginMutation?.data) {
      toast.success(loginMutation?.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else if (loginMutation?.error) {
      toast.error(loginMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
      });
    }
    // eslint-disable-next-line no-unused-vars
    const { message, ...rest } = loginMutation.data;

    localStorage.setItem("user", JSON.stringify(rest));
    dispatch(loggedInUsers(rest));

    console.log("hellos", rest);
    console.log("login mutation", loginMutation?.data);
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signIn,
    onSubmit: (values) => {
      console.log(values);
      loginUserAPI();
    },
  });

  const { errors, touched } = formik;

  return (
    <div className="w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none">
      {/* custom-placeholder-color */}
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className=" flex items-center gap-5"
        >
          <div className="w-[70%] border-r-2 pr-6 border-line_color">
            <div className="">
              <input
                className={
                  formik.errors.email && formik.touched.email
                    ? "w-full px-4 py-2 border border-line_color rounded-md mb-5 outline-none custom-placeholder-color"
                    : "w-full px-4 py-2 border border-line_color rounded-md mb-5 outline-none"
                }
                type="email"
                placeholder={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : "Email"
                }
                onChange={formik.handleChange}
                autoComplete="off"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name="email"
              />
              <br />
              <input
                className={
                  formik.errors.password && formik.touched.password
                    ? "w-full px-4 py-2 border border-line_color rounded-md mb-5 outline-none custom-placeholder-color"
                    : "w-full px-4 py-2 border border-line_color rounded-md mb-5 outline-none"
                }
                type="password"
                placeholder={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : "Password"
                }
                onChange={formik.handleChange}
                autoComplete="off"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                name="password"
              />
            </div>

            <div className="flex xs:flex-col md:flex-row md:justify-between md:items-center font-GilroyNormal">
              <button
                className="px-6 py-2 bg-black text-white rounded-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>

          <p className=" w-[30%] font-GilroyMedium mt-5 lg:mt-0 text-base xl:text-sm 3xl:text-base sm:mt-0">
            Create an account?{" "}
            <Link to={"/registration"} className="text-primary_color underline">
              Registration
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

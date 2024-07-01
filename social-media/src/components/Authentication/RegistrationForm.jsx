import { useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signUp } from "../../validation";
import { useState } from "react";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../features/api/authApi";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDate: new Date().getDate(),
  gender: "",
};
export default function RegistrationForm({ toast }) {
  const navigate = useNavigate();
  const [ageError, setAgeError] = useState("");
  const [addUser, { isLoading }] = useAddUserMutation();
  const registrationAPI = async () => {
    const signupMutation = await addUser({
      fName: formik.values.fName,
      lName: formik.values.lName,
      email: formik.values.email,
      password: formik.values.password,
      bYear: formik.values.bYear,
      bMonth: formik.values.bMonth,
      bDate: formik.values.bDate,
      gender: formik.values.gender,
    });

    if (signupMutation?.data) {
      toast.success(signupMutation?.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (signupMutation?.error) {
      toast.error(signupMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: false,
        theme: "light",
      });
    }

    console.log("signupMutation", signupMutation.data);
    console.log("signupMutation", signupMutation.error.data.message);
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      const currentDate = new Date();
      const picked_Date = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDate
      );
      const adult = new Date(1970 + 18, 0, 1);
      const tooOld = new Date(1970 + 70, 0, 1);

      if (currentDate - picked_Date < adult) {
        setAgeError(" Underage ,you are not 18 +");
      } else if (currentDate - picked_Date > tooOld) {
        return setAgeError("You are more than 70 years");
      }

      registrationAPI();
      formik.resetForm();
      console.log("submitted");
    },
  });

  const { errors, touched } = formik;

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYears - index);

  const months = Array.from(
    new Array(12),
    (val, index) => new Date().getMonth() + index
  );

  const days = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };

  const getDates = Array.from(new Array(days()), (val, index) => 1 + index);

  return (
    <div className="w-full rounded-md shadow-md p-4 lg:px-11 lg:py-7 box-border border border-line_color lg:border-none">
      {/* custom-placeholder-color */}
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="lg:flex lg:gap-5">
            <input
              className={
                formik.errors.fName && formik.touched.fName
                  ? "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none custom-placeholder-color"
                  : "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none"
              }
              type="text"
              placeholder={
                formik.errors.fName ? formik.errors.fName : "First Name"
              }
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              value={formik.values.fName}
              name="fName"
            />
            <input
              className={
                formik.errors.lName && formik.touched.lName
                  ? "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none custom-placeholder-color"
                  : "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none"
              }
              type="text"
              placeholder={
                formik.errors.lName && formik.touched.lName
                  ? formik.errors.lName
                  : "Last Name"
              }
              onChange={formik.handleChange}
              autoComplete="off"
              onBlur={formik.handleBlur}
              value={formik.values.lName}
              name="lName"
            />
          </div>

          <div className="lg:flex lg:gap-5">
            <input
              className={
                formik.errors.email && formik.touched.email
                  ? "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none custom-placeholder-color"
                  : "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none"
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
            <input
              className={
                formik.errors.password && formik.touched.password
                  ? "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none custom-placeholder-color"
                  : "w-full lg:w-1/2 px-4 py-2 border border-line_color rounded-md mb-5 outline-none"
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

          <DateOfBirth
            formik={formik}
            years={years}
            months={months}
            getDates={getDates}
            ageError={ageError}
          />
          <Gender formik={formik} errors={errors} touched={touched} />

          <div className="flex xs:flex-col md:flex-row md:justify-between md:items-center font-GilroyNormal">
            <button
              className="px-6 py-2 bg-button_color text-white rounded-full"
              type="submit"
            >
              Submit
            </button>
            <p className="font-GilroyMedium mt-5 lg:mt-0 text-base xl:text-sm 3xl:text-base sm:mt-0">
              Already have an account?{" "}
              <Link to={"/login"} className="text-primary_color underline">
                Signin
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

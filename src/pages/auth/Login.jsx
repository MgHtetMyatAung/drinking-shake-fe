import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-star.png";
import { useNavigate } from "react-router-dom";
import { BiChevronsLeft } from "react-icons/bi";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useFormik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showEye, setShowEye] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (user?.email === values.email && user?.password === values.password) {
        navigate("/");
      } else {
      }
    },
  });

  return (
    <div className="container mx-auto flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">
      <button
        className=" absolute top-8 md:top-10 left-5 md:left-20 flex items-center gap-3 md:gap-5 active:gap-2 transition-all duration-200"
        onClick={() => navigate("/")}
      >
        <BiChevronsLeft size={20} /> Back Home
      </button>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className=" text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showEye ? "text" : "password"}
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {showEye ? (
                <RxEyeOpen
                  className={`absolute right-5 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowEye(false)}
                  id="open-eye"
                />
              ) : (
                <RxEyeClosed
                  className={`absolute right-5 top-3 text-gray-500 cursor-pointer`}
                  onClick={() => setShowEye(true)}
                  id="close-eye"
                />
              )}
              {formik.errors.password && formik.touched.password ? (
                <div className=" text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <div className=" pt-3">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account ?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ms-5"
            onClick={() => navigate("/sign-up")}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

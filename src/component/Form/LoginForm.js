import React, { useEffect, useState } from "react";
import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { loginRequest } from "../../redux/action";
import toast from "react-hot-toast";
import { RegisterButton } from "../Button/Button";

export const LoginForm = ({ isAdmin }) => {
  const [passType, setPassType] = useState(true);

  const history = useHistory();

  const dispatch = useDispatch();

  const { loginSuccess, loginError, loginLoading, user } = useSelector(
    (state) => {
      const {
        success: { login: loginSuccess },
        errors: { login: loginError },
      } = state.ajaxStatuses;

      const { loginLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        loginSuccess,
        loginError,
        loginLoading,
        user,
      };
    }
  );

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: yup.object({
      usernameOrEmail: yup.string().required("First name is required"),
      password: yup.string().required("Password is required"),
    }),

    onSubmit: (prop) => {
      console.log(prop);

      dispatch(loginRequest(prop));
    },
  });

  useEffect(() => {
    if (loginError) {
      toast.error(loginError, {
        duration: 4000,
      });
    }
  }, [loginError]);

  useEffect(() => {
    if (loginSuccess) {
      toast.success(loginSuccess, {
        duration: 4000,
      });

      history.push("/dashboard");

      // dispatch(clearloginSuccess());
    }
  }, [loginSuccess]);

  return (
    <div className="shadow rounded-3xl p-8">
      <div className="text-3xl">{isAdmin ? "Admin Log in" : "Log in"}</div>
      <form onSubmit={formik.handleSubmit} className="grid gap-8 ">
        <div className="grid gap-4">
          <div className="pt-8">
            <div
              className="
    flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
            >
              <UserCircleIcon className="h-6 text-gray-600 mr-2" />
              <input
                type="text"
                className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
                placeholder="Username or email"
                name="usernameOrEmail"
                {...formik.getFieldProps("usernameOrEmail")}
              />
            </div>
          </div>

          <div className="">
            <div
              className="
    flex items-center rounded-lg px-2 
    py-1 w-full bg-gray-100 "
            >
              <LockClosedIcon className="h-6 text-gray-600 mr-2" />
              <input
                type={passType ? "password" : "text"}
                className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {passType ? (
                <EyeIcon
                  onClick={() => setPassType((type) => !type)}
                  className="
          h-6 text-gray-600 mr-2 cursor-pointer "
                />
              ) : (
                <EyeOffIcon
                  onClick={() => setPassType((type) => !type)}
                  className="h-6 text-gray-600 mr-2 cursor-pointer "
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <RegisterButton
            loading={loginLoading}
            disable={!(formik.dirty && formik.isValid)}
            action={formik.handleSubmit}
            text="Log in"
          />
        </div>
      </form>

      {!isAdmin && (
        <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal mt-4">
          Don't have an account?
          <Link
            to="/register"
            className="text-green-500 font-medium cursor-pointer"
          >
            {""} Create One
          </Link>
        </h1>
      )}
    </div>
  );
};

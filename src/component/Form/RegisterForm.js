import React, { useState } from "react";
import { useEffect } from "react";
import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  UserCircleIcon,
  UsersIcon,
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/outline";
import { countries } from "../../contries";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { registerRequest } from "../../redux/action";
import toast from "react-hot-toast";
import { RegisterButton } from "../Button/Button";
import PinInput from "react-pin-input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const RegisterForm = () => {
  const [confirmPin, setConfirmPin] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const [passType, setPassType] = useState(true);
  const [passType1, setPassType1] = useState(true);

  const [$countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [numStartCode, setNumStartCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (countries) setCountries(countries);
  }, []);

  const { registerSuccess, registerError, registerLoading, user } = useSelector(
    (state) => {
      const {
        success: { register: registerSuccess },
        errors: { register: registerError },
      } = state.ajaxStatuses;

      const { registerLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        registerSuccess,
        registerError,
        registerLoading,
        user,
      };
    }
  );

  let query = useQuery();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      phone: "",
      country: "",
      email: "",
      password: "",
      epin: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      userName: yup.string().required("Username is required"),
      phone: yup.string().required("Phone is required"),
      country: yup.string().required("Country is required"),
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
      epin: yup.string().required("Epin is required"),
    }),

    onSubmit: (prop) => {
      // console.log(prop);
      if (prop.password !== confirmPassword) {
        toast.error("Password does not match", {
          duration: 3000,
        });
      } else if (prop.epin !== confirmPin) {
        toast.error("E-Pin does not match", {
          duration: 3000,
        });
      } else {
        let formData = prop;
        let refId = query.get("refId");

        console.log(refId);

        dispatch(registerRequest({ formData, refId }));
      }
    },
  });

  useEffect(() => {
    if (registerError) {
      toast.error(registerError, {
        duration: 4000,
      });
    }
  }, [registerError]);

  useEffect(() => {
    if (registerSuccess) {
      toast.success(registerSuccess, {
        duration: 4000,
      });

      // dispatch(clearregisterSuccess());
    }
  }, [registerSuccess]);

  const handleSelect = (e) => {
    setCountry(e.target.value);
    formik.setFieldValue("country", e.target.value);

    $countries.filter((country) => {
      if (country.name == e.target.value) {
        setNumStartCode(country.code);
      }
    });
  };

  const handlePhone = (e) => {
    const mobile = numStartCode + e.target.value;
    formik.setFieldValue("phone", mobile);
  };

  return (
    <div className="shadow rounded-3xl p-8">
      <div className="text-3xl">Register</div>
      <form onSubmit={formik.handleSubmit} className="grid gap-4 mt-4">
        <div className="grid gap-4">
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
              placeholder="Username"
              name="userName"
              {...formik.getFieldProps("userName")}
            />
          </div>

          <div
            className="
    flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <UsersIcon className="h-6 flex-shrink-0 text-gray-600 mr-2 cursor-pointer" />
            <div className="grid gap-2 grid-cols-2 divide-gray-800 divide-x-2">
              <input
                type="text"
                className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
                placeholder="First Name"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              <input
                type="text"
                className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
                name="lastName"
                {...formik.getFieldProps("lastName")}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 ">
            <MailIcon className="h-6 text-gray-600 mr-2" />
            <input
              type="text"
              className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
              name="email"
              {...formik.getFieldProps("email")}
              placeholder="Email"
            />
          </div>

          <div
            className="
    flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <LocationMarkerIcon className="h-6 flex-shrink-0 text-gray-600 mr-2 cursor-pointer" />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-filled-label">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={country}
                onChange={handleSelect}
              >
                {$countries.length > 0 &&
                  $countries.map(({ name, index }) => (
                    <MenuItem key={index} value={name}>
                      {name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div
            className="
    flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
          >
            <PhoneIcon className="h-6 text-gray-600 mr-2" />
            <p className="">{numStartCode}</p>
            <input
              type="text"
              className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
              name="phone"
              onChange={(e) => handlePhone(e)}
              placeholder="Phone Number"
              disabled={numStartCode ? false : true}
            />
          </div>

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
              {...formik.getFieldProps("password")}
              placeholder="Password"
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
          <div
            className="
    flex items-center rounded-lg px-2 
    py-1 w-full bg-gray-100 "
          >
            <LockClosedIcon className="h-6 text-gray-600 mr-2" />
            <input
              type={passType1 ? "password" : "text"}
              className="
          py-2 px-4 rounded-md bg-gray-100 flex-grow  focus:outline-none
          placeholder-gray-200::placeholder placeholder-opacity-75
          "
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passType1 ? (
              <EyeIcon
                onClick={() => setPassType1((type) => !type)}
                className="
          h-6 text-gray-600 mr-2 cursor-pointer "
              />
            ) : (
              <EyeOffIcon
                onClick={() => setPassType1((type) => !type)}
                className="h-6 text-gray-600 mr-2 cursor-pointer "
              />
            )}
          </div>

          <div className="grid mx-auto">
            <h1
              className="
            text-lg font-[DM Sans] 
            font-bold text-green-black
          "
            >
              Create e-wallet PIN
            </h1>
            <p
              className="
            text-sm font-[DM Sans] 
            font-normal text-gray-main
          "
            >
              This is to keep all payments secured
            </p>
            <PinInput
              length={4}
              initialValue=""
              secret
              type="numeric"
              inputMode="number"
              style={{ padding: "5px" }}
              inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
              inputFocusStyle={{ borderColor: "#00A69C" }}
              onComplete={(value, index) => {
                formik.setFieldValue("epin", value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <div className="grid mx-auto">
            <h1
              className="
            text-lg font-[DM Sans] 
            font-bold text-green-black
          "
            >
              Confirm e-wallet PIN
            </h1>
            <PinInput
              length={4}
              initialValue=""
              secret
              type="numeric"
              inputMode="number"
              style={{ padding: "5px" }}
              inputStyle={{ borderColor: "#828282", borderRadius: "0.4rem" }}
              inputFocusStyle={{ borderColor: "#00A69C" }}
              onComplete={(value, index) => {
                setConfirmPin(value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal ">
            By creating an account, you are agreeing to all our{" "}
            <span className=" text-green-main font-medium">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-green-main font-medium">Privacy Policy</span>
          </h1>

          <RegisterButton
            loading={registerLoading}
            disable={!(formik.dirty && formik.isValid)}
            action={formik.handleSubmit}
            text="Create Account"
          />
        </div>
        <h1 className="font-[DM Sans] text-[#001F1D] text-xs font-normal ">
          Already have a Portal account?{" "}
          <Link
            to="/login"
            className="text-green-500 font-medium cursor-pointer"
          >
            Log in
          </Link>
        </h1>
      </form>
    </div>
  );
};

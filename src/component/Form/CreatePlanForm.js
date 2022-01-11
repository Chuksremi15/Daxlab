import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { createPlanRequest, clearCreatePlanSuccess } from "../../redux/action";
import toast from "react-hot-toast";
import { RegisterButton } from "../Button/Button";

export const CreatePlanForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { createPlanSuccess, createPlanError, createPlanLoading, user } =
    useSelector((state) => {
      const {
        success: { createPlan: createPlanSuccess },
        errors: { createPlan: createPlanError },
      } = state.ajaxStatuses;

      const { createPlanLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        createPlanSuccess,
        createPlanError,
        createPlanLoading,
        user,
      };
    });

  const formik = useFormik({
    initialValues: {
      planName: "",
      recyclingPeriod: "",
      minAmount: "",
      maxAmount: "",
      profitProduction: "",
      assigningBonus: "",
      doubleBonus: "",
      doubleBonusLimit: "",
    },
    validationSchema: yup.object({
      planName: yup.string().required("Field is required"),
      recyclingPeriod: yup.string().required("Field is required"),
      minAmount: yup.string().required("Field is required"),
      maxAmount: yup.string().required("Field is required"),
      profitProduction: yup.string().required("Field is required"),
      assigningBonus: yup.string().required("Field is required"),
      doubleBonus: yup.string().required("Field is required"),
      doubleBonusLimit: yup.string().required("Field is required"),
    }),

    onSubmit: (prop) => {
      console.log(prop);

      dispatch(createPlanRequest(prop));
    },
  });

  useEffect(() => {
    if (createPlanError) {
      toast.error(createPlanError, {
        duration: 4000,
      });
    }
  }, [createPlanError]);

  useEffect(() => {
    if (createPlanSuccess) {
      toast.success(createPlanSuccess, {
        duration: 4000,
      });

      history.push("/dashboard");

      dispatch(clearCreatePlanSuccess());
    }
  }, [createPlanSuccess]);

  return (
    <div className="rounded-xl shadow  mx-auto max-w-screen-sm p-6 mt-5">
      <h1 className="text-2xl">Create Plan</h1>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Plan Name
          </label>
          <input
            type="text"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Plan name"
            name="planName"
            {...formik.getFieldProps("planName")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Recycling period (Months)
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Recycling period"
            name="recyclingPeriod"
            {...formik.getFieldProps("recyclingPeriod")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Min amount
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Min Amount"
            name="minAmount"
            {...formik.getFieldProps("minAmount")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Max amount
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Max amount"
            name="maxAmount"
            {...formik.getFieldProps("maxAmount")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profit production (%)
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Profit production"
            name="profitProduction"
            {...formik.getFieldProps("profitProduction")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Assigning bonus
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Assigning bonus"
            name="assigningBonus"
            {...formik.getFieldProps("assigningBonus")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Double bonus
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Double bonus"
            name="doubleBonus"
            {...formik.getFieldProps("doubleBonus")}
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Double bonus limit
          </label>
          <input
            type="Number"
            className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
            placeholder="Double bonus limit"
            name="doubleBonusLimit"
            {...formik.getFieldProps("doubleBonusLimit")}
          />
        </div>

        <div className="mt-5">
          <RegisterButton
            loading={false}
            disable={!(formik.dirty && formik.isValid)}
            action={formik.handleSubmit}
            text="Create plan"
          />
        </div>
      </form>
    </div>
  );
};

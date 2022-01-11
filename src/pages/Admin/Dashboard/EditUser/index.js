import React, { useEffect } from "react";
import { AdminSideNav, TopNav } from "../../../../component/Navbar/SideNav";
import { BreadCrumbs } from "../../../../component/BreadCrumb";
import { UserTableHead } from "../../../../component/Table/UserTableHead";
import { UserTableBody } from "../../../../component/Table/UserTableBody";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUpdateUserSuccess,
  getUserInvestmentsRequest,
  getUserRequest,
  updateUserRequest,
} from "../../../../redux/action";
import toast from "react-hot-toast";
import { CircularProgress } from "@material-ui/core";
import { InvestmentTableHead } from "../../../../component/Table/InvestmentTableHead";
import { useParams } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const EditUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const history = useHistory();

  const {
    getUsersSuccess,
    getUsersError,
    getUsersLoading,
    users,
    singleUser,
    updateUserSuccess,
    updateUserError,
    updateUserLoading,
  } = useSelector((state) => {
    const {
      success: { getUsers: getUsersSuccess, updateUser: updateUserSuccess },
      errors: { getUsers: getUsersError, updateUser: updateUserError },
    } = state.ajaxStatuses;

    const { getUsersLoading, updateUserLoading } = state.loadingIndicator;

    const { users, singleUser } = state.userData;

    return {
      getUsersSuccess,
      getUsersError,
      getUsersLoading,
      singleUser,
      users,
      updateUserSuccess,
      updateUserError,
      updateUserLoading,
    };
  });

  useEffect(() => {
    if (getUsersError) {
      toast.error(getUsersError, {
        duration: 4000,
      });
    }
  }, [getUsersError]);

  useEffect(() => {
    dispatch(getUserRequest(id));
    dispatch(getUserInvestmentsRequest(id));
  }, [getUserRequest, getUserInvestmentsRequest]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      totalEarning: "",
      roiBalance: "",
      totalInvestmentBalance: "",
      depositeBalance: "",
      achievementLevel: "",
    },
    validationSchema: yup.object({}),

    onSubmit: (prop) => {
      console.log(prop);
      const formData = prop;
      const id = singleUser._id;
      dispatch(updateUserRequest({ formData, id }));
    },
  });

  useEffect(() => {
    if (updateUserError) {
      toast.error(updateUserError, {
        duration: 3000,
      });
    }
  }, [updateUserError]);

  useEffect(() => {
    if (updateUserSuccess) {
      toast.success("User Update Succcessful", {
        duration: 3000,
      });

      history.push("/admin/dashboard");

      dispatch(clearUpdateUserSuccess());
    }
  }, [updateUserSuccess]);

  useEffect(() => {
    if (singleUser) {
      formik.setValues((values) => ({
        ...values,
        firstName: singleUser.firstName ? singleUser.firstName : "",
        lastName: singleUser.lastName ? singleUser.lastName : "",
        totalEarning: singleUser.totalEarning ? singleUser.totalEarning : "",
        roiBalance: singleUser.roiBalance ? singleUser.roiBalance : "",
        totalInvestmentBalance: singleUser.totalInvestmentBalance
          ? singleUser.totalInvestmentBalance
          : "",
        depositeBalance: singleUser.depositeBalance
          ? singleUser.depositeBalance
          : "",
        achievementLevel: singleUser.achievementLevel
          ? singleUser.achievementLevel
          : "",
      }));
    }
  }, [singleUser]);

  return (
    <div>
      <AdminSideNav />
      <TopNav />

      <div className="container mx-auto max-w-screen-xl px-5">
        <BreadCrumbs title="Welcome" subTitle="Edit user" href="/admin/users" />
        <div className=" sm:mt-0">
          <div className="">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={formik.handleSubmit}>
                <div className=" mt-5 shadow-lg border overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <h1 className="text-2xl mb-2">Edit User Information</h1>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          {...formik.getFieldProps("firstName")}
                          autoComplete="given-name"
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          {...formik.getFieldProps("lastName")}
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="totalEarning"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Total earning
                        </label>
                        <input
                          type="text"
                          name="totalEarning"
                          id="totalEarning"
                          {...formik.getFieldProps("totalEarning")}
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="roiBalance"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          ROI balance
                        </label>
                        <input
                          type="text"
                          name="roiBalance"
                          id="roiBalance"
                          {...formik.getFieldProps("roiBalance")}
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="depositeBalance"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Deposited balance
                        </label>
                        <input
                          type="text"
                          name="depositeBalance"
                          id="depositeBalance"
                          {...formik.getFieldProps("depositeBalance")}
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="totalInvestmentBalance"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Total investment balance
                        </label>
                        <input
                          type="text"
                          name="totalInvestmentBalance"
                          id="totalInvestmentBalance"
                          {...formik.getFieldProps("totalInvestmentBalance")}
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="achievementLevel"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Achievement level
                        </label>
                        <input
                          type="text"
                          name="achievementLevel"
                          {...formik.getFieldProps("achievementLevel")}
                          id="achievementLevel"
                          className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      action={formik.handleSubmit}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {updateUserLoading ? (
                        <CircularProgress color="black" size="20px" />
                      ) : (
                        "Update"
                      )}
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-6">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <h1 className="my-4 text-2xl">User Investments</h1>
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <InvestmentTableHead />

                  {users.map((user) => (
                    <UserTableBody user={user} key={user._id} />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

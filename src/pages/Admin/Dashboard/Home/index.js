import React, { useEffect } from "react";
import { AdminSideNav, TopNav } from "../../../../component/Navbar/SideNav";
import { BreadCrumbs } from "../../../../component/BreadCrumb";
import { UserTableHead } from "../../../../component/Table/UserTableHead";
import { UserTableBody } from "../../../../component/Table/UserTableBody";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "../../../../redux/action";
import toast from "react-hot-toast";
import { CircularProgress } from "@material-ui/core";

const Home = () => {
  const dispatch = useDispatch();

  const { getUsersSuccess, getUsersError, getUsersLoading, users } =
    useSelector((state) => {
      const {
        success: { getUsers: getUsersSuccess },
        errors: { getUsers: getUsersError },
      } = state.ajaxStatuses;

      const { getUsersLoading } = state.loadingIndicator;

      const { users } = state.userData;

      return {
        getUsersSuccess,
        getUsersError,
        getUsersLoading,
        users,
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
    dispatch(getUsersRequest());
  }, [getUsersRequest]);

  return (
    <div>
      <AdminSideNav />
      <TopNav />

      <div className="container mx-auto max-w-screen-xl px-5">
        <BreadCrumbs title="Welcome" subTitle="Users" href="/admin/users" />

        {!getUsersLoading ? (
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <UserTableHead />

                    {users.map((user) => (
                      <UserTableBody user={user} key={user._id} />
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center col-span-3 justify-self-center align-self-center mt-36">
            {" "}
            <CircularProgress color="black" size="20px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

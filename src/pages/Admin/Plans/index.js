import React, { useEffect } from "react";
import { AdminSideNav, TopNav } from "../../../component/Navbar/SideNav";
import { BreadCrumbs } from "../../../component/BreadCrumb";
import { AdminPlanCard } from "../../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPlansRequest } from "../../../redux/action";
import toast from "react-hot-toast";
import { CircularProgress } from "@material-ui/core";

const Plans = () => {
  const dispatch = useDispatch();

  const { getPlansSuccess, getPlansError, getPlansLoading, plans } =
    useSelector((state) => {
      const {
        success: { getPlans: getPlansSuccess },
        errors: { getPlans: getPlansError },
      } = state.ajaxStatuses;

      const { getPlansLoading } = state.loadingIndicator;

      const { plans } = state.planData;

      return {
        getPlansSuccess,
        getPlansError,
        getPlansLoading,
        plans,
      };
    });

  useEffect(() => {
    if (getPlansError) {
      toast.error(getPlansError, {
        duration: 4000,
      });
    }
  }, [getPlansError]);

  useEffect(() => {
    dispatch(getPlansRequest());
  }, [getPlansRequest]);

  return (
    <div>
      <AdminSideNav />
      <TopNav />
      <div className="container mx-auto max-w-screen-xl px-5">
        <BreadCrumbs title="Plans" subTitle="View Plans" href="/admin/plans" />
        <div className="grid grid-cols-3 gap-10">
          {getPlansLoading ? (
            <div className="text-center col-span-3 justify-self-center align-self-center mt-36">
              {" "}
              <CircularProgress color="black" size="20px" />
            </div>
          ) : (
            plans.map((plan) => <AdminPlanCard plan={plan} key={plan._id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;

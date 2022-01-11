import React, { useEffect, useState } from "react";
import { SideNav, TopNav } from "../../../component/Navbar/SideNav";
import { BreadCrumbs } from "../../../component/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getPlansRequest } from "../../../redux/action";
import toast from "react-hot-toast";
import { PlanCard } from "../../../component/Card";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

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

  const [paymentModal, setPaymentModal] = useState(true);
  
  const modalClose = () => {
    setPaymentModal(!paymentModal);
  };
  return (
    <div>
      <SideNav />
      <TopNav />
      <Modal
        open={paymentModal}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex justify-center w-100 h-screen">
          <div className="w-96 h-96 bg-white py-10 px-5 rounded-lg mt-40">
            <form
              className="flex flex-col gap-4"
              action=""
              method="POST"
              id="checkout-form"
            >
              <div>
                <label
                  for="creditCard"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75"
                  type="text"
                  name="creditCard"
                  id="creditCard"
                  placeholder="Enter card number"
                />
              </div>

              <div>
                <label
                  for="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  Security Code
                </label>
                <input
                  className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75"
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="Enter Security Code"
                />
              </div>

              <div className="">
                <label for="Expiration">Exp. (MM/YYYY)</label>
                <div className="flex w-48 gap-2">
                  <input
                    className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75"
                    type="text"
                    name="exp-month"
                    id="exp-month"
                    size="2"
                  />
                  <span className="text-2xl"> / </span>
                  <input
                    className=" w-full py-2 px-4 rounded-md bg-gray-50 border focus:outline-none    placeholder-gray-200::placeholder placeholder-opacity-75"
                    type="text"
                    name="exp-year"
                    id="exp-year"
                    size="4"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="submit-button"
                className="bg-green-500 text-gray-50 border rounded-xl font-bold cursor-pointer text-center py-2 mt-5"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </Modal>
      <div className="container mx-auto max-w-screen-xl px-5">
        <BreadCrumbs title="Plans" subTitle="View Plans" href="/admin/plans" />
        <div className="grid grid-cols-3 gap-10">
          {getPlansLoading ? (
            <div className="text-center col-span-3 justify-self-center align-self-center mt-36">
              {" "}
              <CircularProgress color="black" size="20px" />
            </div>
          ) : (
            plans.map((plan) => <PlanCard plan={plan} key={plan._id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Plans;

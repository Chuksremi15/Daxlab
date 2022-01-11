import React, { useEffect } from "react";
import { SideNav, TopNav } from "../../../component/Navbar/SideNav";
import { useSideNavState } from "../../../zust";
import { FaDollarSign } from "react-icons/fa";
import { BalanceCard, InvestmentCard } from "../../../component/Card";
import { Referral } from "../../../component/Referral";
import { BreadCrumbs } from "../../../component/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();

  const { getUserSuccess, getUserError, getUserLoading, user } = useSelector(
    (state) => {
      const {
        success: { getUser: getUserSuccess },
        errors: { getUser: getUserError },
      } = state.ajaxStatuses;

      const { getUserLoading } = state.loadingIndicator;

      const { user } = state.userData;

      return {
        getUserSuccess,
        getUserError,
        getUserLoading,
        user,
      };
    }
  );

  useEffect(() => {
    if (getUserError) {
      toast.error(getUserError, {
        duration: 4000,
      });
    }
  }, [getUserError]);

  return (
    <div>
      <SideNav />
      <TopNav />
      <div className="container px-4  mx-auto max-w-screen-xl">
        <BreadCrumbs title="Welcome" subTitle="Dashboard" href="/portal" />

        <div className="grid grid-cols-3 gap-6">
          <InvestmentCard
            amount={user.depositeBalance && user.depositeBalance}
            text="DEPOSIT WALLET BALANCE"
          />
          <InvestmentCard
            amount={user.depositeBalance && user.depositeBalance}
            text="TOTAL INVESTMENT BALANCE"
          />
          <InvestmentCard
            amount={user.depositeBalance && user.depositeBalance}
            text="ROI BALANCE"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <BalanceCard text="TOTAL EARNING" />
          <BalanceCard text="REFERRAL COUNT" />
          <BalanceCard text="ACHIEVEMENT LEVEL" />
        </div>
      </div>

      <Referral link={user.referralLink} />
    </div>
  );
};

export default Home;

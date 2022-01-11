import React from "react";
import { AdminSideNav, TopNav } from "../../../component/Navbar/SideNav";
import { BreadCrumbs } from "../../../component/BreadCrumb";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { loginRequest } from "../../../redux/action";
import toast from "react-hot-toast";
import { RegisterButton } from "../../../component/Button/Button";
import { CreatePlanForm } from "../../../component/Form/CreatePlanForm";

const CreatePlan = () => {
  return (
    <div>
      <AdminSideNav />
      <TopNav />
      <div className="container mx-auto max-w-screen-xl px-5">
        <BreadCrumbs
          title="Plan"
          subTitle="Create plan"
          href="/admin/createplan"
        />
        <CreatePlanForm />
      </div>
    </div>
  );
};

export default CreatePlan;

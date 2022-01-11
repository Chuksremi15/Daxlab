import React from "react";
import { FaDollarSign } from "react-icons/fa";

export const InvestmentCard = ({ amount, text }) => {
  return (
    <div className="rounded-xl border p-6 shadow mt-4 font-headline flex items-center space-x-4">
      <div className="bg-green-500 py-2  pl-3 rounded-full w-12">
        <FaDollarSign className="text-2xl h-8 text-gray-50" />
      </div>
      <div>
        <p className="text-lg text-gray-500 font-medium">{text}</p>
        <p className="text-3xl ">${amount}</p>
      </div>
    </div>
  );
};

export const BalanceCard = ({ amount, text }) => {
  return (
    <div className=" bg-green-500 border text-gray-50 rounded-xl p-6 shadow mt-4 font-headline flex items-center space-x-4">
      <div className="bg-yellow-500 py-2  pl-3 rounded-full w-12">
        <FaDollarSign className="text-2xl h-8 " />
      </div>
      <div>
        <p className="text-lg text-gray-50 font-medium">{text}</p>
        <p className="text-3xl text-right">{amount}</p>
      </div>
    </div>
  );
};

export const AdminPlanCard = ({ plan }) => {
  return (
    <div className="rounded-xl shadow-lg my-3 border hover:scale-105 duration-500 transform transition cursor-pointer">
      <img src="/img/plan/plan.jpg" alt="" className="rounded-xl" />
      <div className="p-3">
        <div className="text-gray-900 text-2xl font-medium">
          {plan.planName}
        </div>
        <div className="my-2">
          <div className="text-gray-700 text-lg ">
            Recycling period:{" "}
            <span className="text-gray-600">{plan.recyclingPeriod} months</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Min amount:{" "}
            <span className="text-gray-600"> ${plan.minAmount} </span>
          </div>
          <div className="text-gray-700 text-lg ">
            Max amount: <span className="text-gray-600">${plan.maxAmount}</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Profit production:{" "}
            <span className="text-gray-600">{plan.profitProduction}%</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Assignning bonus:{" "}
            <span className="text-gray-600">${plan.assigningBonus}</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Double bonus:{" "}
            <span className="text-gray-600">${plan.doubleBonus}</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Double bonus limit:{" "}
            <span className="text-gray-600">{plan.doubleBonusLimit}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-5">
          <div className="bg-gray-50 border rounded-xl font-bold cursor-pointer text-center py-2">
            Edit
          </div>
          <div className="bg-red-900 rounded-xl text-gray-50 cursor-pointer text-center py-2">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlanCard = ({ plan }) => {
  return (
    <div className="rounded-xl shadow-lg my-3 border hover:scale-105 duration-500 transform transition cursor-pointer">
      <img src="/img/plan/plan.jpg" alt="" className="rounded-xl" />
      <div className="p-3">
        <div className="text-gray-900 text-2xl font-medium">
          {plan.planName}
        </div>
        <div className="my-2">
          <div className="text-gray-700 text-lg ">
            Recycling period:{" "}
            <span className="text-gray-600">{plan.recyclingPeriod} months</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Min amount:{" "}
            <span className="text-gray-600"> ${plan.minAmount} </span>
          </div>
          <div className="text-gray-700 text-lg ">
            Max amount: <span className="text-gray-600">${plan.maxAmount}</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Profit production:{" "}
            <span className="text-gray-600">{plan.profitProduction}%</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Assignning bonus:{" "}
            <span className="text-gray-600">${plan.assigningBonus}</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Double bonus:{" "}
            <span className="text-gray-600">${plan.doubleBonus}</span>
          </div>
          <div className="text-gray-700 text-lg ">
            Double bonus limit:{" "}
            <span className="text-gray-600">{plan.doubleBonusLimit}</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-green-500 text-gray-50 border rounded-xl font-bold cursor-pointer text-center py-2">
            Invests
          </div>
        </div>
      </div>
    </div>
  );
};

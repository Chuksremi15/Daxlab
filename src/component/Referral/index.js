import React from "react";
import { ClipboardIcon } from "@heroicons/react/outline";

export const Referral = ({ link }) => {
  const websiteURL = "https://www.dexlabscrap/register/";
  return (
    <div className="container max-w-7xl mx-auto mt-8 mb-8 px-4">
      <div className="rounded-xl shadow border ">
        <div className="text-2xl p-4">Share Your Referral Link</div>
        <div className="divide-black border"></div>
        <div className="grid grid-cols-2 bg-gray-50">
          <div className="p-4">
            <img src="img/referral/referral2.png" alt="" />
          </div>
          <div className="p-4">
            <div className="">
              <div
                className="
                  flex items-center rounded-lg px-2 py-1 w-full bg-gray-100 "
              >
                <input
                  type="text"
                  className="
              py-2 px-4 rounded-md  flex-grow  focus:outline-none
              placeholder-gray-200::placeholder placeholder-opacity-75
              "
                  value={`${websiteURL}` + `${link}`}
                  placeholder="Referral link"
                  disabled
                />
                <ClipboardIcon className="h-6 text-gray-600 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

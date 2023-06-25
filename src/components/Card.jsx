import React from "react";
import hashIcon from "../assets/hash.svg";
import Button from "./Button";
const Card = ({ data }) => {
  const { desc, singleRate, doubleRate } = data;
  return (
    <div className="w-full lg:w-1/3 max-w-sm border-2 border-gray-200 rounded-lg relative bg-[#F5F4F4] shadow-md">
      <div className="py-3">
        <div className="flex items-center justify-center p-3 2">
          <img src={hashIcon} alt="" className="w-12 h-12" />
        </div>
        <h2 className="text-[#85C371] text-[1.19rem] font-poppins italic tracking-[-0.01194rem] text-center">
          Holiday Inn
        </h2>
      </div>

      <div
        className="  border rounded-lg p-5 bg-[#EEE] "
        style={{ boxShadow: `0px -2px 8px 0px rgba(0, 0, 0, 0.25)` }}
      >
        <p className="text-center text-sm text-[#959595] mb-6 lg:mb-3 font-medium font-lato">
          {desc}
        </p>
        <div className="flex items-center justify-between space-x-3">
          <div className="text-[#959595] font-medium font-poppins text-sm">
            <p className="S">Singles: {singleRate}</p>
            <p className="S">Doubles:{doubleRate}</p>
          </div>

          <Button style="sm"> Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;

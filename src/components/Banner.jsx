import React from "react";
import BannerInfoCard from "./BannerInfoCard";

const Banner = () => {
  return (
    <div className="bg-white p-7 xl:p-10 w-full shadow-md">
      <BannerInfoCard />
      <div className="w-full rounded-full border-[3px] mt-10 flex text-xs xl:text-[1.05rem] text-[#959595] font-lato font-medium tracking-[-0.07406rem] border-gray-300  overflow-hidden">
        <div className="w-2/5 bg-[#FDF307] uppercase  py-1 xl:py-2 px-3 h-full overflow-hidden">
          RECEIVED
        </div>
        <div className="w-1/5 text-center uppercase  py-1 xl:py-2 px-3 border-l-[3px] border-r-[3px] border-gray-300">
          NEGOTIATING
        </div>
        <div className="w-2/5 text-center uppercase  py-1 xl:py-2 px-3">
          COMPLETED
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

const Banner = () => {
  return (
    <div className="bg-white p-10 w-full shadow-md">
      <div className="flex items-center justify-start">
        {/* 1- Title Information */}
        <div className="w-72 2xl:w-80">
          <h2 className="text-[#48AF78] text-[1.6rem]  2xl:text-3xl tracking-[-0.02756rem] font-lato font-bold">
            St Judes Hospital
          </h2>
          <p className="text-[#959595] font-lato font-medium text-[1.08rem] tracking-[-0.00531rem]">
            Sarasota,FL. 33178
          </p>
        </div>

        {/* 2- Dates  Information*/}
        <div className="w-80 border-l-[3px] border-r-[3px] border-gray-300 flex items-center justify-center space-x-4 ">
          <div className="">
            <h2 className="text-[#48AF78] text-2xl  2xl:text-[1.76rem] tracking-[-0.02756rem] font-lato font-bold">
              10
            </h2>
            <p className="text-[#959595] font-lato font-medium text-[1.03rem] tracking-[-0.00531rem]">
              October
            </p>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.3}
              stroke="currentColor"
              className="w-6 h-6 -mt-5 -ml-4 text-[#48AF78]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </div>
          <div className="">
            <h2 className="text-[#48AF78] text-2xl  2xl:text-[1.76rem] tracking-[-0.02756rem] font-lato font-bold">
              17
            </h2>
            <p className="text-[#959595] font-lato font-medium text-[1.03rem] tracking-[-0.00531rem]">
              December
            </p>
          </div>
        </div>
        {/* 3- Room  Information*/}
        <div className=" px-10">
          <h2 className="text-[#48AF78] text-[1.6rem]  2xl:text-3xl tracking-[-0.02756rem] font-lato font-bold">
            20 Rooms
          </h2>
          <p className="text-[#959595] font-lato font-medium text-[1.03rem] tracking-[-0.00531rem]">
            10 Singles, 10 doubles
          </p>
        </div>
      </div>

      <div className="w-full rounded-full border-[3px] mt-10 flex text-[1.05rem] text-[#959595] font-lato font-medium tracking-[-0.07406rem] border-gray-300  overflow-hidden">
        <div className="w-2/5 bg-[#FDF307] uppercase py-2 px-3 h-full overflow-hidden">
          RECEIVED
        </div>
        <div className="w-1/5 text-center uppercase py-2 px-3 border-l-[3px] border-r-[3px] border-gray-300">
          NEGOTIATING
        </div>
        <div className="w-2/5 text-center uppercase py-2 px-3">COMPLETED</div>
      </div>
    </div>
  );
};

export default Banner;

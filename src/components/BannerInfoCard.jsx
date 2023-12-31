import React from "react";

const BannerInfoCard = (props) => {
  return (
    <>
      <div className="w-full lg:max-w-max">
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-center lg:justify-start  w-full  lg:max-w-max ">
          {/* 1- Title Information */}
          <div className="w-full text-center lg:text-left lg:w-60 xl:w-80">
            <h2 className="text-[#48AF78] text-base  xl:text-3xl tracking-[-0.02756rem] font-lato font-bold">
              St Judes Hospital
            </h2>
            <p className="text-[#959595] font-lato font-medium text-sm xl:text-[1.08rem] tracking-[-0.00531rem]">
              Sarasota,FL. 33178
            </p>
          </div>

          {/* 2- Dates  Information*/}
          <div className="w-full lg:w-60 xl:w-80 border-none lg:border-l-[3px] lg:border-r-[3px]  flex items-center justify-center space-x-4 ">
            <div className="text-center lg:text-left">
              <h2 className="text-[#48AF78] text-base   xl:text-[1.76rem] tracking-[-0.02756rem] font-lato font-bold">
                10
              </h2>
              <p className="text-[#959595] font-lato font-medium text-sm xl:text-[1.03rem] tracking-[-0.00531rem]">
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
                className="w-6 h-6 -mt-5 lg:-ml-4 text-[#48AF78]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-[#48AF78] text-base  xl:text-[1.76rem] tracking-[-0.02756rem] font-lato font-bold">
                17
              </h2>
              <p className="text-[#959595] font-lato font-medium text-sm xl:text-[1.03rem] tracking-[-0.00531rem]">
                December
              </p>
            </div>
          </div>
          {/* 3- Room  Information*/}
          <div className="w-full text-center lg:text-left lg:w-60  xl:w-80 px-10">
            <h2 className="text-[#48AF78] text-base  xl:text-3xl tracking-[-0.02756rem] font-lato font-bold">
              20 Rooms
            </h2>
            <p className="text-[#959595] font-lato font-medium text-sm xl:text-[1.03rem] tracking-[-0.00531rem]">
              10 Singles, 10 doubles
            </p>
          </div>
        </div>

        {props?.children}
      </div>
    </>
  );
};

export default BannerInfoCard;

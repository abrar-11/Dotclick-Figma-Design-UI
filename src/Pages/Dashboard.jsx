import React from "react";
import Banner from "../components/Banner";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-5/6  flex flex-col items-start justify-start space-y-8 h-full py-10">
        {/* Page Title */}
        <h1 className="text-[#72AA83] font-semibold font-poppins text-[1.78rem] tracking-[-0.03569rem]">
          You currently have 3 requests
        </h1>
        {/* Banner */}
        <Banner />

        
      </div>
    </div>
  );
};

export default Dashboard;

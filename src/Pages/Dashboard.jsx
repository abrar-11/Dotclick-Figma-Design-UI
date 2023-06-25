import React, { useState } from "react";
import Banner from "../components/Banner";
import BannerInfoCard from "../components/BannerInfoCard";
import Button from "../components/Button";
import Card from "../components/Card";

const Dashboard = () => {
  const [details, setDetails] = useState([
    {
      desc: "1.5 miles away from joblocation. ",
      singleRate: "$120",
      doubleRate: "$145",
    },
    {
      desc: "1.5 miles away from joblocation. ",
      singleRate: "$120",
      doubleRate: "$145",
    },
    {
      desc: "1.5 miles away from joblocation. ",
      singleRate: "$120",
      doubleRate: "$145",
    },
  ]);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-5/6  flex flex-col items-start justify-start space-y-8 h-full py-10">
        {/* Page Title */}
        <h1 className="text-[#72AA83] font-semibold font-poppins text-[1.78rem] tracking-[-0.03569rem]">
          You currently have 3 requests
        </h1>
        {/* Banner */}
        <Banner />

        <div className="bg-white p-10 w-full shadow-md rounded-[54px] space-y-10">
          <BannerInfoCard>
            <Button style="longBtn">COMPLETED</Button>
          </BannerInfoCard>

          <div className="flex items-center justify-between gap-5">
            {details.map((elem, index) => {
              return <Card key={index} data={elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

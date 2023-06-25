import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const SideBar = () => {
  const activeRoute = "Current requests";
  const [routes, setRoutes] = useState([
    {
      link: "/",
      name: "Current requests",
    },
    {
      link: "/",
      name: "Ongoing stays",
    },
    {
      link: "/",
      name: "Previous stays",
    },
    {
      link: "/",
      name: "Reports",
    },
  ]);
  return (
    <div className="w-80 2xl:w-96 h-full bg-white px-7 py-9 2xl:py-14 flex flex-col justify-between">
      {/* Logo + Links */}
      <div className="space-y-8 w-full">
        {/* Logo Here */}
        <h1 className="logo uppercase text-[#323232] text-3xl font-extrabold font-lato italic">
          Logdn
        </h1>

        {/* Links */}

        <div className="w-full">
          {routes?.map((route, index) => {
            return (
              <Link
                to={route.link}
                className={`py-4 2xl:py-6 border-b text-xl 2xl:text-2xl font-semibold border-gray-500 ${
                  activeRoute === route.name
                    ? "text-[#72AA83] "
                    : "text-[#494949]"
                }  w-full inline-block hover:opacity-90 cursor-pointer transition ease-in`}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-1">
        <Button style="gradient">Log - Out</Button>
        <p className="text-[#494949] text-xs xl:text-sm font-medium">
          Help-Desk:
        </p>
        <p className="text-[#494949] text-xs xl:text-sm font-medium">
          786-874 9988
        </p>
      </div>
    </div>
  );
};

export default SideBar;

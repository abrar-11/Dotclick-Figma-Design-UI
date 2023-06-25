import React from "react";
import SideBar from "../components/SideBar";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen min-h-screen xl:max-h-[100vh]  darkGray max-w-[100vw] xl:overflow-hidden flex">
      <SideBar />
      {props.children}
    </div>
  );
};

export default Layout;

import React from "react";
import SideBar from "../components/SideBar";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen darkGray max-w-[100vw] overflow-hidden flex">
      <SideBar />
      {props.children}
    </div>
  );
};

export default Layout;

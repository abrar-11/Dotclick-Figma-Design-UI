import React from "react";
import SideBar from "../components/SideBar";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen">
      <SideBar />
      {props.children}
    </div>
  );
};

export default Layout;

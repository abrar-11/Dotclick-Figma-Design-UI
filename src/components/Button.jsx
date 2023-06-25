import React from "react";

const Button = ({ children, style = "longBtn" }) => {
  const getStyleClasee = (style) => {
    switch (style) {
      case "longBtn":
        return "bg-[#44A16F] rounded-[24px] px-2 py-3 hover:bg-[#388c5f] w-96 text-white w-full mt-10";
      case "sm":
        return "bg-[#44A16F] rounded-[10px] text-white w-28 py-3 text-[1.09rem]";
      case "red":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "gray":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  };

  const styleClass = getStyleClasee(style);

  return <button className={styleClass}>{children}</button>;
};

export default Button;

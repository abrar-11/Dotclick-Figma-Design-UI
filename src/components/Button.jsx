import React from "react";

const Button = ({ children, style = "longBtn" }) => {
  const getStyleClasee = (style) => {
    switch (style) {
      case "longBtn":
        return "bg-[#44A16F] rounded-[24px] px-2 py-3 hover:bg-[#388c5f] w-96 text-white w-full mt-10";
      case "sm":
        return "bg-[#44A16F] rounded-[10px] text-white w-28 py-3 text-[1.09rem]";
      case "gradient":
        return "bg-gradient-to-b from-[#48AF78] to-[#42996B] rounded-md py-3 text-center text-white font-bold font-poppins text-md w-[90%]";

      default:
        return "bg-blue-500 hover:bg-blue-600 text-white";
    }
  };

  const styleClass = getStyleClasee(style);

  return <button className={styleClass}>{children}</button>;
};

export default Button;

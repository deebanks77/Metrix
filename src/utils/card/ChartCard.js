import React from "react";

const ChartCard = ({ bgColor, text }) => {
  return (
    <div className="">
      <div
        className={`w-[350px] h-[80px] rounded-lg p-4 ${
          bgColor ? bgColor : "bg-[#5460F0]"
        }`}
      >
        <p className="text-white text-[16px] font-poppins">
          {text ? text : "  Hello, I want to make enquiries about your product"}
        </p>
      </div>
      {/* <small className="text-[10px] text-gray-500 font-inter">12:55am</small> */}
    </div>
  );
};

export default ChartCard;

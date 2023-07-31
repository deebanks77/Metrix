import React from "react";
import TabWithIcon from "../utils/tab/TabWithIcon";
import { FaChevronDown } from "react-icons/fa";

const ChartPipe = () => {
  return (
    <div className="eightChild min-w-[663px] h-[369px] py-5 px-4 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-2">
          <p>Summary</p>
          <TabWithIcon
            icon={<FaChevronDown size="1rem" color="#BEC0CA" />}
            text="Sales"
            textColor="text-[#5570F1] text-[12px]"
            className={` px-2 py-1 bg-gray-200 hover:bg-[#fff]`}
            inverse
          />
        </div>
        <TabWithIcon
          icon={<FaChevronDown size="1rem" color="#BEC0CA" />}
          text="Last 7 Days"
          textColor="text-[#5570F1] text-[12px]"
          className={` px-2 py-1 hover:bg-[#fff]`}
          inverse
        />
      </div>
      <div className="flex justify-around gap-5  w-[663px] mt-5">
        <div className="pipe h-[272px] rounded-lg flex flex-col justify-between ">
          <p className="text-[#A6A8B1] text-[11px]">100k</p>
          <p className="text-[#A6A8B1] text-[11px]">80k</p>
          <p className="text-[#A6A8B1] text-[11px]">60k</p>
          <p className="text-[#A6A8B1] text-[11px]">40k</p>
          <p className="text-[#A6A8B1] text-[11px]">20k</p>
          <p className="text-[#fff] text-[11px]">0</p>
        </div>

        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[180px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 10</p>
        </div>
        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[80px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 11</p>
        </div>
        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[120px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 12</p>
        </div>
        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[140px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 13</p>
        </div>
        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[80px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 14</p>
        </div>
        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[150px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 15</p>
        </div>
        <div className="h-[272px] flex flex-col justify-between items-center">
          <div className="pipe w-[13px] h-[242px] rounded-lg bg-gray-300 flex flex-col justify-end ">
            <div className="innerPipe w-full h-[100px] bg-[#5670F1] rounded-lg"></div>
          </div>
          <p className="text-[#A6A8B1] text-[11px]">Sep 16</p>
        </div>
      </div>
    </div>
  );
};

export default ChartPipe;

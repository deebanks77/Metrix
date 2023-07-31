import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { TabWithIcon, Card } from "../../utils";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);

const BigCard = () => {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["", "", ""],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#f8c992", "#97A5EB", "#5560F5"],
        hoverBackgroundColor: ["#f8c992"],
      },
    ],
  };
  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  return (
    <div className="fourthChild min-w-[321px] h-[367px] px-[15px] py-[11px] bg-white rounded-lg flex flex-col gap-2 ">
      <div className="flex items-center justify-between ">
        <p className="text-[#1C1D22]">Marketing</p>
        <TabWithIcon
          icon={<FaChevronDown size="1rem" color="#BEC0CA" />}
          text="This Week"
          textColor="text-[#BEC0CA]"
          className="bg-[#fff] hover:bg-[#fff] px-2 py-1"
          inverse
        />
      </div>
      <div className="flex items-center gap-1">
        <TabWithIcon
          icon={<div className="h-2 w-2 bg-purple-600 rounded-full" />}
          text="Acquisition"
          textColor="text-[#BEC0CA] text-[11px] font-poppins"
          className="bg-[#fff] hover:bg-[#fff] px-1 py-1 font-poppins"
        />
        <TabWithIcon
          icon={<div className="h-2 w-2  bg-purple-300 rounded-full" />}
          text="Purchase"
          textColor="text-[#BEC0CA] text-[11px] font-poppins"
          className="bg-[#fff] hover:bg-[#fff] px-1 py-1 font-poppins"
        />
        <TabWithIcon
          icon={<div className="h-2 w-2 bg-orange-300 rounded-full" />}
          text="Retention"
          textColor="text-[#BEC0CA] text-[11px] font-poppins"
          className="bg-[#fff] hover:bg-[#fff] px-1 py-1 font-poppins"
        />
      </div>
      <div className="w-[205px] h-[205px] m-auto">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default BigCard;

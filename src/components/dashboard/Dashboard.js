import React, { useState } from "react";
import { CgVolume } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { PiChatBold, PiHandbagSimple } from "react-icons/pi";
import "./Dashboard.css";

import { TabWithIcon, Card, SmallCard } from "../../utils";
import BigCard from "../../utils/card/BigCard";
import OrderTab from "../../utils/tab/OrderTab";
import { orderList } from "../../utils/tab/contactCardList";
import ChartPipe from "../ChartPipe";
import { useShellContext } from "../../context/ShellContext";

const Dashboard = () => {
  const { setUrl } = useShellContext();
  const path = window.location.href;
  useState(() => {
    const isPath = window.location.href.slice("/").includes("conversations");
    if (isPath) {
      setUrl(true);
    } else {
      setUrl(false);
    }
    return () => setUrl(false);
  }, [path]);

  return (
    <div className="py-[28px] px-[19px] font-poppins dashboardContainer">
      <Card
        card="bg-white min-w-[321px]  h-[145px] firstChild"
        firstIcon={<CgVolume size="1rem" color="#5570F1" />}
        secondIcon={<FaChevronDown size="1rem" color="#BEC0CA" />}
        iconText="Nannys Shop"
        firstCard={{ text: "Sales", value: "400,000.00" }}
        secondCard={{ text: "Volume", value: "400", percentage: "+20.00%" }}
      />
      <Card
        card="bg-white min-w-[321px]  h-[145px] secondChild"
        firstIcon={<GoPeople size="1rem" color="black" />}
        secondIcon={<FaChevronDown size="1rem" color="#BEC0CA" />}
        firstIconBg="bg-[#f8c992]"
        secondIconBg="bg-[#fff]"
        iconText="This Week"
        firstCard={{ text: "Customers", value: "1,250", percentage: "+15.80%" }}
        secondCard={{ text: "Active", value: "1,180", percentage: "+85%" }}
      />
      <Card
        card="bg-white min-w-[426px] h-[145px] thirdChild"
        firstIcon={<PiHandbagSimple size="1rem" color="black" />}
        secondIcon={<FaChevronDown size="1rem" color="#BEC0CA" />}
        firstIconBg="bg-[#f8c992]"
        iconText="This Week"
        firstCard={{
          text: "All Orders",
          value: "450",
        }}
        secondCard={{ text: "Pending", value: "5" }}
        thirdCard={{ text: "Completed", value: "455" }}
      />
      <BigCard fourthChild />
      <Card
        card="bg-[#5570F1] hover:bg-[#5570F1] min-w-[321px]  h-[159px] fifthChild"
        firstIcon={<PiChatBold size="1rem" color="white" />}
        firstIconBg="bg-[#7087F3]"
        iconText="This Week"
        firstCard={{
          text: "All Products",
          value: "45",
          textStyle: "text-[white]",
          valueStyle: "text-[white]",
          percentage: "+0.00%",
        }}
        secondCard={{
          text: "Active",
          value: "35",
          percentage: "+24%",
          textStyle: "text-[white]",
          valueStyle: "text-[white]",
        }}
      />
      <Card
        card="bg-white min-w-[321px]h-[159px] sixthChild"
        firstIcon={<BsCart3 size="1rem" color="black" />}
        secondIcon={<FaChevronDown size="1rem" color="#BEC0CA" />}
        firstIconBg="bg-[#f8c992]"
        iconText="This Week"
        firstCard={{
          text: "Abandoned chart",
          value: "20%",
          percentage: "+0.00%",
          textStyle: "text-[#CC5F5F]",
        }}
        secondCard={{
          text: "Customer",
          value: "30",
          //   className: "text-[#8B8D97]",
        }}
      />

      <div className="seventhChild min-w-[426px] h-[727px] bg-[#fff] rounded-lg p-5">
        <p className="font-inter text-[16px] text-[#45464E] mb-4">
          Recent Orders
        </p>
        {orderList.map((item) => {
          return <OrderTab {...item} />;
        })}
      </div>

      <ChartPipe />
    </div>
  );
};

export default Dashboard;

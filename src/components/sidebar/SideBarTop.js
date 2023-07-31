import React from "react";
import MetrixLogo from "../../images/Graph.svg";
import { AiOutlineAppstore } from "react-icons/ai";
import { PiHandbagSimple, PiChatDuotone } from "react-icons/pi";
import { BsPeople, BsChatDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import "./SideBarTop.css";
import { useShellContext } from "../../context/ShellContext";

import TabWithIcon from "../../utils/tab/TabWithIcon";
import { IconContext } from "react-icons";

import { Link, useParams } from "react-router-dom";

const SideBarTop = () => {
  const { setSideBarOpen, sideBarOpen, url } = useShellContext();

  return (
    <div
      className={`px-[32px] pt-[14px] pb-[37px] flex flex-col gap-[24px] ${
        sideBarOpen
          ? "w-[200px] lg:w-[240px] 2xl:w-[296px]"
          : "w-[88px] items-center"
      }`}
    >
      <div
        className="flex items-center gap-2 hover:cursor-pointer"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <img src={MetrixLogo} alt="Metrix" />
        <h1
          className={`font-poppins font-bold text-[20px] ${
            sideBarOpen ? "block" : "hidden"
          }`}
        >
          Metrix
        </h1>
      </div>
      <div
        className={`flex flex-col items-center hover:cursor-pointer ${
          sideBarOpen ? " w-[200px]" : "w-[88px]"
        }`}
      >
        {sideBarOpen ? (
          <Link to="/dashboard" className="w-full">
            <TabWithIcon
              icon={<AiOutlineAppstore size="1.5rem" />}
              text={sideBarOpen && "Dashboard"}
              textColor="text-[#53545C] tabText"
              path="/dashboard"
            />
          </Link>
        ) : (
          <Link to="/dashboard">
            <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
              <IconContext.Provider value={{ className: "tabIcon" }}>
                <AiOutlineAppstore size="1.5rem" />
              </IconContext.Provider>
            </div>
          </Link>
        )}
        {sideBarOpen ? (
          <TabWithIcon
            icon={<PiHandbagSimple size="1.5rem" />}
            text={sideBarOpen && "Orders"}
            value={sideBarOpen && 3}
            textColor="text-[#53545C] tabText"
          />
        ) : (
          <div className={`p-3 rounded-lg hover:bg-[#5670F1]`}>
            <IconContext.Provider value={{ className: "tabIcon" }}>
              <PiHandbagSimple size="1.5rem" />
            </IconContext.Provider>
          </div>
        )}
        {sideBarOpen ? (
          <TabWithIcon
            icon={<BsPeople size="1.5rem" />}
            text={sideBarOpen && "Customers"}
            textColor="text-[#53545C] tabText"
          />
        ) : (
          <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
            <IconContext.Provider value={{ className: "tabIcon" }}>
              <BsPeople size="1.5rem" />
            </IconContext.Provider>
          </div>
        )}
        {sideBarOpen ? (
          <TabWithIcon
            icon={<PiChatDuotone size="1.5rem" />}
            text={sideBarOpen && "Inventory"}
            textColor="text-[#53545C] tabText"
          />
        ) : (
          <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
            <IconContext.Provider value={{ className: "tabIcon" }}>
              <PiChatDuotone size="1.5rem" />
            </IconContext.Provider>
          </div>
        )}
        {sideBarOpen ? (
          <Link to="/conversations" className="w-full">
            <TabWithIcon
              icon={<BsChatDots size="1.5rem" />}
              text={sideBarOpen && "Conversations"}
              value={sideBarOpen && 16}
              textColor="text-[#53545C] tabText"
              path="conversations"
            />
          </Link>
        ) : (
          <Link to="/conversations">
            <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
              <IconContext.Provider value={{ className: "tabIcon" }}>
                <BsChatDots size="1.5rem" />
              </IconContext.Provider>
            </div>
          </Link>
        )}
        {sideBarOpen ? (
          <TabWithIcon
            icon={<IoSettingsOutline size="1.5rem" />}
            text={sideBarOpen && "Settings"}
            textColor="text-[#53545C] tabText"
          />
        ) : (
          <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
            <IconContext.Provider value={{ className: "tabIcon" }}>
              <IoSettingsOutline size="1.5rem" />
            </IconContext.Provider>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBarTop;

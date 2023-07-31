import React, { useEffect, useState } from "react";
import TabWithIcon from "../utils/tab/TabWithIcon";
import { FaChevronDown } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import avatar from "../images/avatar.jpeg";

import { useShellContext } from "../context/ShellContext";

const AppBar = () => {
  const { sideBarOpen, url } = useShellContext();

  return (
    <header
      className={`h-[83px] bg-white shadow-sm w-full fixed flex flex-col gap-1 top-0 px-[21px] py-[14px] transition-all duration-300 ease-in-out z-50 border border-white ${
        sideBarOpen
          ? "ml-[200px] lg:ml-[240px] 2xl:ml-[296px] w-[calc(100vw - 200px)] lg:w-[calc(100vw - 240px)] 2xl:w-[calc(100vw - 290px)]"
          : "ml-[88px] w-[calc(100vw - 88px)]"
      }`}
    >
      <div
        className={` flex items-center justify-between border-b border-gray-200 ${
          sideBarOpen
            ? "pr-[200px] pb-[8px] lg:pr-[240px] 2xl:pr-[290px]"
            : "pr-[80px]"
        }`}
      >
        <div className="text-[20px] text-[#45464E] font-poppins">Dashboard</div>
        <div className=" items-center justify-between gap-4 hidden md:flex">
          <TabWithIcon
            icon={<FaChevronDown size="1rem" />}
            text="Nannys Shop"
            className="bg-[#ffd9ae] hover:bg-[#f8c992] px-2 py-1"
            inverse
          />
          <div>
            <BiSolidBell size="1rem" color="#5570F1" />
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="w-[32px] h-[32px] rounded-lg"
          />
        </div>
        <div className="block md:hidden">
          <GiHamburgerMenu size="1.5rem" color="gray" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <AiFillHome size="1rem" color="#5570F1" />
        {url && <span className="text-gray-500">/ Conversations</span>}
      </div>
    </header>
  );
};

export default AppBar;

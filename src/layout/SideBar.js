import React from "react";
import { useShellContext } from "../context/ShellContext";
import SideBarTop from "../components/sidebar/SideBarTop";
import SideBarBottom from "../components/sidebar/SideBarBottom";

const SideBar = () => {
  const { sideBarOpen, setSideBarOpen } = useShellContext();

  return (
    <div
      className={`hideScrollBar bg-white h-screen  overflow-auto fixed left-0 top-0 bottom-0 transition-all duration-300 ease-in-out flex flex-col items-center justify-between ${
        sideBarOpen ? "w-[200px] lg:w-[240px] 2xl:w-[296px] " : "w-[88px]"
      }`}
    >
      <SideBarTop />
      <SideBarBottom />
    </div>
  );
};

export default SideBar;

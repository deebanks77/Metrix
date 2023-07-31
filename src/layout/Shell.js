import { useState } from "react";

import AppBar from "./AppBar";
import SideBar from "./SideBar";
import { useShellContext } from "../context/ShellContext";

export const Shell = ({ children }) => {
  const { sideBarOpen, setSideBarOpen } = useShellContext();

  return (
    <div className="w-screen h-screen overflow-aut">
      <SideBar />
      <AppBar />
      <main
        className={[
          "mt-[69px]",
          sideBarOpen ? "ml-[200px] lg:ml-[240px] 2xl:ml-[296px]" : "ml-[88px]",
        ].join(" ")}
      >
        {children && children}
      </main>
    </div>
  );
};

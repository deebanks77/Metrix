import React from "react";
import TabWithIcon from "../../utils/tab/TabWithIcon";
import { FiHeadphones, FiChevronRight } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { useShellContext } from "../../context/ShellContext";
import { IconContext } from "react-icons";

const SideBarBottom = () => {
  const { setSideBarOpen, sideBarOpen } = useShellContext();
  return (
    <div className="flex flex-col items-center gap-[14px] w-[200px] 2xl:w-[233px] mb-10 cursor-pointer">
      {sideBarOpen ? (
        <TabWithIcon
          icon={<FiHeadphones size="1.5rem" />}
          text="Contact Support"
          className="bg-[#efeff0] hover:bg-slate-400 px-[10px] py-[10px] "
        />
      ) : (
        <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
          <IconContext.Provider value={{ className: "tabIcon" }}>
            <FiHeadphones size="1.5rem" />
          </IconContext.Provider>
        </div>
      )}
      {sideBarOpen ? (
        <div className="flex flex-col items-center bg-[#ffd9ae] w-full rounded-lg">
          <TabWithIcon
            icon={<GoGift size="1rem" />}
            text="Free Gift Awaits You"
            textColor="#1C1D22 text-[12px]"
            className="bg-[#ffd9ae] hover:bg-[#ffd9ae] px-[10px] py-[10px] "
          />
          <div className="w-full px-[10px] py-[10px] flex items-center gap-3">
            <small className="text-[#6E7079]">Upgrade your account</small>
            <span>
              <FiChevronRight />
            </span>
          </div>
        </div>
      ) : (
        <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
          <IconContext.Provider value={{ className: "tabIcon" }}>
            <GoGift size="1rem" />
          </IconContext.Provider>
        </div>
      )}
      {sideBarOpen ? (
        <TabWithIcon
          icon={<HiOutlineLogout size="1.5rem" color="#DE9595" />}
          text="Logout"
          className="bg-[#fff] hover:bg-gray-300 px-[10px] py-[10px] "
          textColor="text-[#DE9595]"
        />
      ) : (
        <div className={` p-3 rounded-lg hover:bg-[#5670F1]`}>
          <IconContext.Provider value={{ className: "tabIcon" }}>
            <HiOutlineLogout size="1.5rem" color="#DE9595" />
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

export default SideBarBottom;

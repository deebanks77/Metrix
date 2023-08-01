import React from "react";
import { IconContext } from "react-icons";
import "./TabWithIcon.css";
import { useIncludesPath, useIsPath } from "../../utils/useIncludePath";

const TabWithIcon = ({
  className,
  text,
  icon,
  value,
  textColor,
  inverse,
  path,
}) => {
  const isDestPath = useIsPath(path);
  const isDestInPath = useIncludesPath(path);
  return (
    <div
      className={`w-full items-center gap-4 rounded-lg  cursor-pointer ${
        isDestPath && "bg-[#5560F1]"
      } ${isDestInPath && "bg-[#5560F1] text-white"} ${
        className
          ? className
          : "hover:bg-[#5560F1] px-[10px] py-[10px] tabWithIcon"
      } ${inverse ? "flex flex-row-reverse" : "flex"}`}
    >
      <IconContext.Provider
        value={{ className: `${isDestPath && "text-[#fff]"} tabIcon` }}
      >
        {icon}
      </IconContext.Provider>

      <p
        className={`${
          textColor ? textColor : "tabText text-black text-[14px] font-inter"
        } ${isDestPath && "text-[#fff]"} ${isDestInPath && "text-[#fff]"}`}
      >
        {text}
      </p>
      {value && (
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-300 text-black font-light text-[10px]">
          {value}
        </div>
      )}
    </div>
  );
};

export default TabWithIcon;

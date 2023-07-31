import React from "react";

const SmallCard = ({ content }) => {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={` font-thin ${
          content?.textStyle
            ? content.textStyle
            : "text-[#8B8D97] text-[14px] text-center"
        } ${content.textWidth && content.textWidth}`}
      >
        {content?.text}
      </p>
      <div className="flex items-center gap-2">
        {content?.icon && content.icon}
        {content?.value && (
          <p
            className={` font-poppins ${
              content?.valueStyle
                ? content.valueStyle
                : "text-[#45464E] text-[20px]"
            }`}
          >
            {content?.value}
          </p>
        )}
        {content?.percentage === "string" && (
          <p className="text-[#519C66] text-[12px]">{content?.percentage}</p>
        )}
        {content?.time && content.time}
      </div>
    </div>
  );
};

export default SmallCard;

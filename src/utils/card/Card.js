import React from "react";
import { IconContext } from "react-icons";
import "./Card.css";

import TabWithIcon from "../../utils/tab/TabWithIcon";
import SmallCard from "./SmallCard";

const Card = ({
  card,
  firstIcon,
  firstIconBg,
  secondIconBg,
  secondIcon,
  iconText,
  firstCard,
  secondCard,
  thirdCard,
}) => {
  return (
    <div
      className={`px-[15px] py-[11px]  rounded-lg flex flex-col justify-between ${
        card ? card : "bg-white min-w-[321px] h-[145px]"
      }`}
    >
      <div className="flex items-center justify-between ">
        <div
          className={`px-2 py-2 w-8 h-8 rounded-lg ${
            firstIconBg ? firstIconBg : "bg-gray-200"
          }`}
        >
          <IconContext.Provider value={{ className: "cardIcon" }}>
            {firstIcon}
          </IconContext.Provider>
        </div>
        {secondIcon && (
          <TabWithIcon
            icon={secondIcon}
            text={iconText}
            textColor="text-[#BEC0CA]"
            className={` px-2 py-1 ${
              secondIconBg ? secondIconBg : "bg-[#fff]"
            } hover:bg-[#fff]`}
            inverse
          />
        )}
      </div>
      <div className="flex items-center gap-10">
        <SmallCard
          content={{
            text: firstCard?.text,
            value: firstCard?.value,
            percentage: firstCard?.percentage,
            textStyle: firstCard?.textStyle,
            valueStyle: firstCard?.valueStyle,
          }}
        />
        <SmallCard
          content={{
            text: secondCard?.text,
            value: secondCard?.value,
            percentage: secondCard?.percentage,
            textStyle: secondCard?.textStyle,
            valueStyle: secondCard?.valueStyle,
          }}
        />
        {thirdCard?.text && (
          <SmallCard
            content={{
              text: `${thirdCard?.text}`,
              value: `${thirdCard?.value}`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;

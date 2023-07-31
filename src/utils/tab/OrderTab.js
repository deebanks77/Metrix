import React from "react";
import { SmallCard } from "../../utils";
import Phone from "../../images/phoneGold.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import TabWithIcon from "../../utils/tab/TabWithIcon";

const OrderTab = ({ image, firstCard, secondCard, thirdCard }) => {
  return (
    <div className="flex items-center justify-between border-b border-b-gray-200">
      <div className="flex items-center gap-2 w-[343px] h-[61px]">
        <div className="w-[49px] h-[49px]">
          <img
            src={image ? image : Phone}
            alt="Phone"
            className="w-full h-full object-contain"
          />
        </div>
        <SmallCard
          content={{
            text: firstCard?.text ? firstCard.text : "Iphone 13",
            value: firstCard?.value ? firstCard.value : "$740,000 x 1",
            valueStyle: "text-[12px]",
            textStyle: "text-[12px]",
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <SmallCard
          content={{
            text: secondCard?.text ? secondCard.text : "12 Sep 2022",
            textStyle: "w-[85px] text-[12px]",
            value: secondCard?.value ? secondCard.value : "",
            valueStyle: secondCard?.valueStyle
              ? secondCard.valueStyle
              : "text-[12px] text-[#CC5F5F] px-1 py-[1px] bg-[#FEF0EF] rounded-lg",
          }}
        />
        {thirdCard && (
          <SmallCard
            content={{
              text: "View Profile",
              textStyle: "w-20 text-[12px]",
              value: "0",
              valueStyle: "text-[12px] text-[#A6A8B1] px-1 py-[1px] rounded-lg",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OrderTab;

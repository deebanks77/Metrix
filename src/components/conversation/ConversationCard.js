import React from "react";
import { SmallCard } from "../../utils";
import Phone from "../../images/phoneGold.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import TabWithIcon from "../../utils/tab/TabWithIcon";

const ConversationCard = ({ image, firstCard, secondCard, thirdCard }) => {
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
            icon: <div className="w-2 h-2 bg-blue-400 rounded-lg" />,
            time: (
              <div className="text-[10px] font-inter text-gray-500 ">
                12:55am
              </div>
            ),
          }}
        />
      </div>
      <div className="flex gap-2">
        <SmallCard
          content={{
            text: secondCard?.text ? secondCard.text : "12 Sep 2022",
            textStyle:
              "w-[105px] text-[12px] bg-[#FFEBD3] p-1 rounded-lg text-center",
            value: secondCard?.value ? secondCard.value : "",
            valueStyle: "text-[12px] text-[#CC5F5F] px-1 py-[1px] rounded-lg",
          }}
        />
        {thirdCard && (
          <SmallCard
            content={{
              text: "View Profile",
              textStyle: "w-20 text-[12px]",
              value: "0",
              valueStyle: "text-[12px] text-[#A6A8B1] px-1 py-[1px] rounded-lg",
              icon: <HiOutlineShoppingBag size="1rem" color="#45464E" />,
              time: (
                <div className="text-[10px] font-inter text-gray-500 ">
                  Orders
                </div>
              ),
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ConversationCard;

// #FFEBD3

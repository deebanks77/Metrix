import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCheckCircle, BsEmojiSmile, BsSendFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import OrderTab from "../../utils/tab/OrderTab";
import { conatctList, contact } from "../../utils/tab/contactCardList";
import ChartCard from "../../utils/card/ChartCard";
import ConversationCard from "./ConversationCard";
import { useShellContext } from "../../context/ShellContext";

// Code will be refactored
const Conversation = () => {
  const contactStyles = {
    aside: { flex: "0 0 25%" },
    card: { flex: "1" },
  };
  const { setUrl } = useShellContext();
  const path = window.location.href;
  useState(() => {
    const isPath = window.location.href.slice("/").includes("conversations");
    if (isPath) {
      setUrl(true);
    }
    return () => setUrl(false);
  }, [path]);

  return (
    <div className="px-[22px] py-[28px]">
      <div className="flex justify-between items-center w-full mb-5">
        <h2 className="text-[#45464E] font-inter text-[16px]">
          Conversations With Customers
        </h2>
        <button className="bg-[#5670F1] text-[white] rounded-lg px-4 py-2">
          New Message
        </button>
      </div>

      <div className="flex gap-4 ">
        {/* Contact Tab */}
        <div
          className="min-w-[350px] 2xl:min-w-[410px] min-h-[calc(100vh-128px)] flex flex-col gap-3 p-[24px] bg-white rounded-lg"
          style={contactStyles.aside}
        >
          <div className="flex items-center justify-between">
            <p className="font-poppins text-[20px] text-[#2C2D33]">Contact</p>
            <p className="font-poppins text-[20px] text-[#A6A8B1]">34</p>
          </div>
          <div className="flex items-center gap-2 w-[300px] h-[45px] border border-[#ABAFB1] rounded-lg p-1">
            <BiSearch size="1.5rem" color="#5570F1" />
            <input
              type="text"
              className="w-full h-full outline-none border-none"
            />
          </div>
          <div className="">
            {conatctList.map((item) => {
              return <OrderTab {...item} />;
            })}
          </div>
        </div>
        {/* Conversation card */}
        <div
          className="min-w-[821px]  min-h-[calc(100vh-128px)] p-4 bg-white rounded-lg"
          style={contactStyles.card}
        >
          {/* Top */}
          <div className="Top">
            <ConversationCard {...contact} />
          </div>
          {/* Middle - Chap */}
          <div className="Middle mt-2 flex flex-col gap-4">
            {/* Conversation Card */}
            <div className="w-full flex items-center flex-col">
              <p className="font-poppins text-[14px] text-[#1C1D22] place-content-center text-center rounded-lg px-4 py-2 bg-gray-200">
                12 Aug 2022
              </p>
              <div className="w-full flex justify-start">
                <div className="w-[50%] flex flex-col gap-3">
                  <OrderTab />
                  <ChartCard />
                  <small className="text-[10px] text-gray-500 font-inter">
                    12:55am
                  </small>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <div className="w-[50%] flex flex-col justify-end gap-2">
                <ChartCard
                  bgColor="bg-[#FDBA74]"
                  text="Hello Janet, thank you for reaching out"
                />
                <div className="flex items-center gap-2 justify-end">
                  <small className="text-[10px] text-gray-500 font-inter">
                    12:55am
                  </small>
                  <BsCheckCircle size="1rem" color="" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end gap-2">
              <div className="w-[50%] flex flex-col justify-end">
                <ChartCard
                  bgColor="bg-[#FDBA74]"
                  text="Hello Janet, thank you for reaching out"
                />
                <div className="flex items-center gap-2 justify-end">
                  <small className="text-[10px] text-gray-500 font-inter">
                    12:55am
                  </small>
                  <BsCheckCircle size="1rem" color="" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center flex-col gap-3">
              <p className="font-poppins text-[14px] text-[#1C1D22] place-content-center text-center rounded-lg px-4 py-2 bg-gray-200">
                12 Aug 2022
              </p>
              <div className="w-full flex justify-start">
                <div className="w-[50%] flex flex-col gap-3">
                  <ChartCard />
                  <small className="text-[10px] text-gray-500 font-inter">
                    12:55am
                  </small>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="Bottom min-w-[736px] h-[51px] w-full flex items-center border border-gray-300 rounded-lg mt-10">
            <AiOutlinePlus size="1.5rem" color="#1C1D22" />
            <input
              type="text"
              className="w-[100%] h-[100%] outline-none px-3"
            />
            <div className="flex items-center gap-2 px-2 py-1">
              <BsEmojiSmile size="1.5rem" color="#1C1D22" />
              <div className="flex items-center gap-2 bg-orange-200 px-2 py-2 rounded-lg">
                <p>Send</p>
                <BsSendFill size="1.5rem" color="#1C1D22" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;

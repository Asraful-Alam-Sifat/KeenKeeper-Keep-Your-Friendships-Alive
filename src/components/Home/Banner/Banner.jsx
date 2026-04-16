"use client";

import React, { useState } from "react";
import Data from "@/assets/Json/Data.json";

const Banner = () => {
  const [friendCount, setFriendCount] = useState(Data.length);

  const filterOnTrack = Data.filter((data) => data.status === "on-track");
  const onTrack = filterOnTrack.length;

  const filterNeedAttention = Data.filter((data) => data.status === "overdue");
  const needAttention = filterNeedAttention.length;

  return (
    <div className="max-w-11/12 mx-auto mt-20 p-2 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4">
      <div className="w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-green-700 transition-all duration-300 shadow-sm">
        <span id="total-friends" className="font-bold text-green-900 text-3xl ">
          {friendCount}
        </span>
        Total Friends
      </div>

      <div className="w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-green-700 transition-all duration-300 shadow-sm">
        <span id="on-track" className="font-bold text-green-900 text-3xl ">
          {onTrack}
        </span>
        On Track
      </div>

      <div className="w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-green-700 transition-all duration-300 shadow-sm">
        <span
          id="need-attention"
          className="font-bold text-green-900 text-3xl "
        >
          {needAttention}
        </span>
        Need Attention
      </div>

      <div className="w-full md:w-80 h-40 bg-base-100 border-2 border-gray-300 rounded-lg flex justify-center items-center flex-col text-gray-500 text-xl font-bold mx-auto hover:border-green-700 transition-all duration-300 shadow-sm">
        <span id="interactions" className="font-bold text-green-900 text-3xl ">
          12
        </span>
        Interactions This Month
      </div>
    </div>
  );
};

export default Banner;

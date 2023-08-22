import React from "react";

const LookingForWork = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-6">
        <div className="relative">
          <div className="absolute -left-0.5 -top-0.5 h-3 w-3 animate-pulse rounded-full bg-green-500 blur-sm"></div>
          <div className=" h-2 w-2 rounded-full border-[1px] border-green-700 bg-green-500 shadow-sm"></div>
        </div>
        <p className="text-neoGrey">Looking for work</p>
      </div>
    </div>
  );
};
export default LookingForWork;

import React from 'react';

const LookingForWork = () => {
  return (
    <div className="flex flex-row space-x-6 h-10 items-center">
      <div className="relative">
        <div className="absolute blur-sm rounded-full bg-green-500 -top-0.5 -left-0.5 h-3 w-3 animate-pulse"></div>
        <div className=" rounded-full bg-green-500 h-2 w-2 shadow-sm border-[1px] border-green-800"></div>
      </div>
      <p className="text-pText">Looking for work</p>
    </div>
  );
};
export default LookingForWork;

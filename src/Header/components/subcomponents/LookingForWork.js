import React from 'react';
import { Logo } from '../../../images';

const LookingForWork = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-6 h-10 items-center">
        <div className="relative">
          <div className="absolute blur-sm rounded-full bg-green-300 -top-0.5 -left-0.5 h-3 w-3 animate-pulse"></div>
          <div className=" rounded-full bg-green-400 h-2 w-2 shadow-sm border-[1px] border-green-800"></div>
        </div>
        <p className="text-pText">Looking for work</p>
      </div>
      <img src={Logo} alt="Paul Logo"></img>
    </div>
  );
};
export default LookingForWork;

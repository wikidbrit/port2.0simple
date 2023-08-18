import React from 'react';

const MainCta = ({ text }) => {
  return (
    <button className="h-[4rem] w-[8rem] bg-gradient-to-r p-[2px] from-pPink to-pBlue hover:p-[4px] duration-200">
      <div className="flex items-center justify-center bg-zinc-900 h-full w-full">
        <span className="text-gray-300">{text}</span>
      </div>
    </button>
  );
};
export default MainCta;

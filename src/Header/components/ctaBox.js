import React from 'react';

const CtaBox = () => {
  return (
    <div className="flex flex-row space-x-5">
      <button className="h-[4rem] w-[7rem] bg-gradient-to-r p-[2px] from-pPink to-pBlue">
        <div className="flex items-center justify-center bg-zinc-900 h-full w-full">
          <span className="text-gray-300">Contact</span>
        </div>
      </button>
      <button className="h-[4rem] w-[7rem] bg-gradient-to-r p-[2px] from-pPink to-pBlue">
        <div className="flex items-center justify-center bg-zinc-900 h-full w-full">
          <span className="text-gray-300">Resume</span>
        </div>
      </button>
    </div>
  );
};
export default CtaBox;

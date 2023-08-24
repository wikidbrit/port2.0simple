import React from "react";

const TitleAreaSelectionBox = () => {
  return (
    <div className="absolute -left-1 top-1.5 h-[6.5rem] w-[5.2rem]  border-2 border-lightWater-800">
      <div className="grid h-full w-full grid-cols-2 place-content-between gap-4  border-[2px] border-lightWater-400">
        <div className="h-2 w-2 -translate-x-1 -translate-y-1 border-[1px] border-lightWater-400 bg-steel-100"></div>
        <div className="h-2 w-2 -translate-y-1 translate-x-1 place-self-end border-[1px] border-lightWater-400 bg-steel-100"></div>
        <div className="h-2 w-2 -translate-x-1 translate-y-1 border-[1px] border-lightWater-400 bg-steel-100"></div>
        <div className="h-2 w-2 translate-x-1 translate-y-1 place-self-end border-[1px] border-lightWater-400 bg-steel-100"></div>
      </div>
    </div>
  );
};
export default TitleAreaSelectionBox;

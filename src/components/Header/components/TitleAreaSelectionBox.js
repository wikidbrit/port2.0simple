import React from "react";

const TitleAreaSelectionBox = () => {
  return (
    <div className="absolute -left-1 top-3 h-[5.8rem] w-[5.2rem]  border-2 border-lightWater-800">
      <div className="grid h-full w-full grid-cols-2 place-content-between gap-4  border-[2px] border-lightWater-500">
        <div className="h-2 w-2 -translate-x-2 -translate-y-2 border-[1px] border-lightWater-500 bg-lightWater-800"></div>
        <div className="h-2 w-2 -translate-y-2 translate-x-2 place-self-end border-[1px] border-lightWater-500 bg-lightWater-800"></div>
        <div className="h-2 w-2 -translate-x-2 translate-y-2 border-[1px] border-lightWater-500 bg-lightWater-800"></div>
        <div className="h-2 w-2 translate-x-2 translate-y-2 place-self-end border-[1px] border-lightWater-500 bg-lightWater-800"></div>
      </div>
    </div>
  );
};
export default TitleAreaSelectionBox;

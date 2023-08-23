import React from "react";
import { BGDarkmode } from "../../../assets/svgs";
import TitleAreaSelectionBox from "./TitleAreaSelectionBox";

const TitleArea = () => {
  return (
    <div className="h-[75vh] w-full">
      <div className="absolute top-[10vh] w-full opacity-30">
        <BGDarkmode />
      </div>
      <div className="flex h-full flex-row place-content-center items-center justify-between px-20 text-8xl tracking-wider ">
        <p className="bg-gradient-to-r from-steel-400 to-steel-100 bg-clip-text font-black text-transparent">
          DESI
          <span className="relative text-steel-200">
            <TitleAreaSelectionBox />G
          </span>
          N
        </p>
        <div className="flex h-20 w-20 place-content-center items-center rounded-xl border-[2px] border-steel-100">
          <p className="text-xl tracking-normal text-steel-100">&</p>
        </div>
        <p className="bg-gradient-to-l from-steel-400 to-steel-100 bg-clip-text font-black text-transparent">
          {"{ CODE }"}
        </p>
      </div>
    </div>
  );
};
export default TitleArea;

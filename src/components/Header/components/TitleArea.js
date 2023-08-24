import React from "react";
import { BGDarkmode } from "../../../assets/svgs";
import TitleAreaSelectionBox from "./TitleAreaSelectionBox";
import TopCode from "./TopCode";
import BottomCode from "./BottomCode";
import TopShards from "./TopShards";
import BottomShards from "./BottomShards";

const TitleArea = () => {
  return (
    <div className="h-[720px] w-full">
      <div className="absolute w-full opacity-30">
        <BGDarkmode />
      </div>
      <div className="flex h-full flex-row place-content-center items-center justify-between px-20 text-8xl tracking-wider ">
        <div className="flex flex-col">
          <TopShards />
          <p className="bg-gradient-to-r from-steel-400 to-steel-100 bg-clip-text font-black text-transparent">
            DESI
            <span className="relative text-steel-200">
              <TitleAreaSelectionBox />G
            </span>
            N
          </p>
          <BottomShards />
        </div>
        <div className="flex h-12 w-12 place-content-center items-center rounded-full border-[2px] border-steel-400">
          <p className="text-xl tracking-normal text-steel-400">&</p>
        </div>

        <div className="flex flex-col space-y-3">
          <TopCode />
          <p className="flex bg-gradient-to-l from-steel-400 to-steel-100 bg-clip-text font-black text-transparent">
            <span className="-translate-y-1 pr-10 font-light text-green-300">
              {"{ "}
            </span>
            CODE
            <span className="-translate-y-1 pl-10 font-light text-green-300">
              {" }"}
            </span>
          </p>
          <BottomCode />
        </div>
      </div>
    </div>
  );
};
export default TitleArea;

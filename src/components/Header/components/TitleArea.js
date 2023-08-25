import React, { useContext } from "react";
import { BGDarkmode, BGLightmode } from "../../../assets/svgs";
import TitleAreaSelectionBox from "./TitleAreaSelectionBox";
import TopCode from "./TopCode";
import BottomCode from "./BottomCode";
import TopShards from "./TopShards";
import BottomShards from "./BottomShards";
import ThemeContext from "../../../context/ThemeContext";
import classNames from "classnames";

const TitleArea = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="h-[65vh] w-full">
      <div className="flex h-full flex-row place-content-center items-center justify-between px-20 text-8xl tracking-wider ">
        <div className="flex flex-col">
          <TopShards />
          <p
            className={classNames(
              theme === "dark"
                ? "from-steel-400 to-steel-100 "
                : "from-steel-400 to-steel-700",
              "bg-gradient-to-r bg-clip-text font-black text-transparent",
            )}
          >
            DESI
            <span
              className={classNames(
                theme === "dark" ? "text-steel-200" : "text-steel-600",
                "relative",
              )}
            >
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
          <p
            className={classNames(
              theme === "dark"
                ? "from-steel-400 to-steel-100 "
                : "from-steel-400 to-steel-700",
              "flex bg-gradient-to-l bg-clip-text font-black text-transparent",
            )}
          >
            <span
              className={classNames(
                theme === "dark"
                  ? "text-green-300 opacity-40"
                  : "text-green-700 opacity-60",
                "pr-10 font-mono font-extralight  opacity-40",
              )}
            >
              {"{ "}
            </span>
            CODE
            <span
              className={classNames(
                theme === "dark"
                  ? "text-green-300 opacity-40"
                  : "text-green-700 opacity-60",
                "pl-10 font-mono font-extralight  opacity-40",
              )}
            >
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

import React, { useContext } from "react";
import TitleAreaSelectionBox from "./TitleAreaSelectionBox";
import TopCode from "./TopCode";
import BottomCode from "./BottomCode";
import TopShards from "./TopShards";
import BottomShards from "./BottomShards";
import ThemeContext from "../../../context/ThemeContext";
import classNames from "classnames";
import useGetBreakpoints from "../../../hooks/useGetBreakpoints";

const TitleArea = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="h-[65vh] w-full">
      <div className="flex h-full flex-col place-content-center items-center justify-between space-y-2 px-0 text-6xl tracking-wider lg:flex-row lg:px-20 lg:text-8xl">
        <div className="flex flex-col">
          <div className="hidden lg:block">
            <TopShards />
          </div>

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
        <div className="flex h-12 w-12 place-content-center items-center border-[2px] border-steel-700">
          <p className="text-xl tracking-normal text-steel-600">&</p>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="hidden lg:block">
            <TopCode />
          </div>

          <p
            className={classNames(
              theme === "dark"
                ? "from-steel-400 to-steel-100 "
                : "from-steel-400 to-steel-700",
              "mx-auto flex bg-gradient-to-l bg-clip-text font-black text-transparent",
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

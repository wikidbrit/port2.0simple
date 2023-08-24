import React, { useContext } from "react";
import MainButton from "../../buttons/MainButton";
import { TbChevronDown } from "react-icons/tb";
import ThemeContext from "../../../context/ThemeContext";
import classNames from "classnames";

const MainCta = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="flex w-full flex-col place-content-center items-center space-y-5">
      <div className="mx-auto text-center">
        <p
          className={classNames(
            theme === "dark" ? "text-steel-200" : "text-steel-600",
            "text-lg",
          )}
        >
          Elevating Brands with Design Mastery<br></br>
          and Code Wizardry
        </p>
      </div>
      <div>
        <MainButton text={"Get to know me"} />
      </div>
      <div
        className={classNames(
          theme === "dark" ? "text-lightWater" : "text-water",
          "pt-6",
        )}
      >
        <TbChevronDown size={"1.5rem"} />
      </div>
    </div>
  );
};
export default MainCta;

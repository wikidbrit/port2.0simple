import React from "react";
import MainButton from "../../buttons/MainButton";
import { TbCircleChevronsDown } from "react-icons/tb";

const MainCta = () => {
  return (
    <div className="flex w-full flex-col place-content-center items-center space-y-5">
      <div className="mx-auto text-center">
        <p className=" text-lg text-steel-200">
          Elevating Brands with Design Mastery<br></br>
          and Code Wizardry
        </p>
      </div>
      <div>
        <MainButton text={"Get to know me"} />
      </div>
      <div className="pt-6 text-lightWater">
        <TbCircleChevronsDown size={"1.5rem"} />
      </div>
    </div>
  );
};
export default MainCta;

import React, { useContext } from "react";
import ModalHeader from "./components/ModalHeader";
import classNames from "classnames";

import ThemeContext from "../../context/ThemeContext";

import {
  TbChecklist,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandFigma,
  TbBrandGithub,
  TbBrandGatsby,
} from "react-icons/tb";

import {
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from "react-icons/si";

import SkillGague from "./components/SkillGague";
import MainButton from "../buttons/MainButton";

const SkillsModal = ({ close }) => {
  const theme = useContext(ThemeContext);

  const gitHubColor = theme === "dark" ? "#FFFFFF" : "#000000";
  return (
    <div
      className={classNames(
        theme === "dark"
          ? "from-steel-800 to-steel-900"
          : "border-[1px] border-water-800 from-steel to-steel-400",
        "w-[40rem] space-y-10 rounded-lg bg-gradient-to-br p-6 text-neoGrey",
      )}
    >
      <ModalHeader
        theme={theme}
        close={close}
        title={"My skillset"}
        subTitle={"I know stuff, all sorts of stuff."}
        icon={
          <TbChecklist className="mx-auto text-neoMiddleBlue" size={"2rem"} />
        }
      />
      <div className="space-y-1">
        <p className="font-bold">Programming</p>
        <p className="w-full leading-7">
          I recently graduated from Hyper Island with qualifications in Front
          End Development and 2 years at the fintech app Alwy working in the
          front end.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-2">
        <SkillGague
          offset
          icon={<TbBrandHtml5 color="#F16528" size={"2rem"} />}
          value={69}
          text={"HTML"}
        />
        <SkillGague
          offset
          icon={<TbBrandCss3 color="#264DE4" size={"2rem"} />}
          value={73}
          text={"CSS"}
        />
        <SkillGague
          offset
          icon={<TbBrandJavascript color="#FFD000" size={"2rem"} />}
          value={60}
          text={"JavaScript"}
        />
        <SkillGague
          icon={<TbBrandTypescript color="#007ACC" size={"2rem"} />}
          value={50}
          text={"Typescript"}
        />
        <SkillGague
          icon={<TbBrandGithub color={gitHubColor} size={"2rem"} />}
          value={66}
          text={"GitHub"}
        />
        <SkillGague
          icon={<TbBrandGatsby color="#663399" size={"2rem"} />}
          value={56}
          text={"Gatsby"}
        />
      </div>
      <div className="space-y-1">
        <p className="font-bold">Design</p>
        <p className="w-full leading-7">
          I have a bachelor's degree in Digital Art and Design from Full Sail
          University in the USA, and have worked with digital design for 10
          years.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <SkillGague
          icon={<TbBrandFigma color="#5552FE" size={"2rem"} />}
          value={66}
          text={"Figma"}
        />
        <SkillGague
          icon={<SiAdobeillustrator color="#FF9A00" size={"1.7rem"} />}
          value={68}
          text={"Illustrator"}
        />
        <SkillGague
          icon={<SiAdobephotoshop color="#31A8FF" size={"1.7rem"} />}
          value={62}
          text={"Photoshop"}
        />

        <SkillGague
          icon={<SiAdobeindesign color="#FF3366" size={"1.7rem"} />}
          value={52}
          text={"InDesign"}
        />
        <SkillGague
          icon={<SiAdobeaftereffects color="#9999FF" size={"1.7rem"} />}
          value={42}
          text={"After Effects"}
        />
      </div>
      <p className="w-full leading-7">
        I bring a unique blend of creative and technical skills to the each and
        every project. I can see the practicalities in design before
        implimentation in the code identifying potential issues before they
        arise during the design phase.
      </p>
      <div className="flex items-center justify-center">
        <MainButton text={"Close"} onClick={close} />
      </div>
    </div>
  );
};
export default SkillsModal;

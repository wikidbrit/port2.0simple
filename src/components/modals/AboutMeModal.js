import React, { useState, useContext } from "react";
import PersonalContent from "./components/PersonalContent";
import ProfessionalContent from "./components/ProfessionalContent";
import SwitchButton from "./components/SwitchButton";
import image from "../../assets/images/try.png";
import ThemeContext from "../../context/ThemeContext";
import classNames from "classnames";
import ModalHeader from "./components/ModalHeader";
import IconButtonSmall from "../buttons/IconButtonSmall";
import { TbX } from "react-icons/tb";

const AboutMeModal = ({ close }) => {
  const [professionalToggle, setProfessionalToggle] = useState(false);
  const [personalToggle, setPersonalToggle] = useState(true);
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    setProfessionalToggle(!professionalToggle);
    setPersonalToggle(!personalToggle);
  };

  return (
    <div
      className={classNames(
        theme === "dark" ? "bg-darkNeoForeground" : "bg-neoBackground",
        "w-[40rem] space-y-6 rounded-lg p-6 text-neoGrey",
      )}
    >
      <ModalHeader
        theme={theme}
        close={close}
        title={"About me"}
        subTitle={"My name is Paul Fleming"}
        image={image}
        altImage={"Profile picture of Paul Fleming"}
      />
      <div className="flex w-full flex-row space-x-2 py-5">
        <SwitchButton
          title={"Professional"}
          subTitle={"My professional experience."}
          toggle={professionalToggle}
          setToggle={() => handleClick}
        />
        <SwitchButton
          title={"Personal"}
          subTitle={"More about me."}
          toggle={personalToggle}
          setToggle={() => handleClick}
        />
      </div>
      <div>
        {personalToggle & !professionalToggle ? (
          <ProfessionalContent />
        ) : (
          <PersonalContent />
        )}
      </div>
      <div>
        <IconButtonSmall onClick={close} icon={<TbX size={"1.2rem"} />} />
        <button
          className={classNames(
            theme === "dark" ? "raised-dark" : "raised",
            "mx-auto flex rounded-lg px-8 py-3",
          )}
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default AboutMeModal;

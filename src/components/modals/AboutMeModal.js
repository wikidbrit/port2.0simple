import React, { useState, useContext } from "react";
import PersonalContent from "./components/PersonalContent";
import ProfessionalContent from "./components/ProfessionalContent";
import SwitchButton from "./components/SwitchButton";
import image from "../../assets/images/try.png";
import ThemeContext from "../../context/ThemeContext";
import classNames from "classnames";
import ModalHeader from "./components/ModalHeader";
import MainButton from "../../components/buttons/MainButton";

const AboutMeModal = ({ close }) => {
  const [professionalToggle, setProfessionalToggle] = useState(false);
  const [personalToggle, setPersonalToggle] = useState(true);
  const theme = useContext(ThemeContext);

  const handleProfessionalToggle = () => {
    setProfessionalToggle(true);
    setPersonalToggle(false);
  };

  const handlePersonalToggle = () => {
    setProfessionalToggle(false);
    setPersonalToggle(true);
  };

  return (
    <div
      className={classNames(
        theme === "dark"
          ? "from-steel-800 to-steel-900"
          : "border-[1px] border-water-800 from-steel to-steel-400",
        "h-screen w-screen space-y-6 overflow-scroll bg-gradient-to-br p-6 text-steel-300 lg:h-auto lg:w-[42rem] lg:overflow-auto",
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
          theme={theme}
          title={"Professional"}
          subTitle={"My professional experience."}
          toggle={professionalToggle}
          setToggle={() => handlePersonalToggle}
        />
        <SwitchButton
          theme={theme}
          title={"Personal"}
          subTitle={"More about me."}
          toggle={personalToggle}
          setToggle={() => handleProfessionalToggle}
        />
      </div>
      <div>
        {personalToggle & !professionalToggle ? (
          <ProfessionalContent />
        ) : (
          <PersonalContent />
        )}
      </div>
      <div className="flex items-center justify-center">
        <MainButton onClick={close} text="Close"></MainButton>
      </div>
    </div>
  );
};
export default AboutMeModal;

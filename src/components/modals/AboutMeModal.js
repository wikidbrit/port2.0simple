import React, { useState } from 'react';
import PersonalContent from './components/PersonalContent';
import ProfessionalContent from './components/ProfessionalContent';
import SwitchButton from './components/SwitchButton';
import image from '../../images/try.png';

const AboutMeModal = () => {
  const [professionalToggle, setProfessionalToggle] = useState(true);
  const [personalToggle, setPersonalToggle] = useState(false);

  const handleClick = () => {
    setProfessionalToggle(!professionalToggle);
    setPersonalToggle(!personalToggle);
  };

  return (
    <div className="text-neoGrey space-y-6 p-6">
      <div className="space-y-2">
        <div className="flex flex-row space-x-6">
          <img
            className=" raised rounded-full border-[2px] object-cover w-[72px] h-[72px]"
            src={image}
            alt="Paul Fleming with a grey background"
          ></img>
          <div className="flex flex-col justify-center text-left">
            <p className="text-2xl font-bold">About me</p>
            <p className="text-sm">Paul Fleming</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-2 w-full">
        <SwitchButton
          title={'Professional'}
          subTitle={'My professional experience.'}
          toggle={professionalToggle}
          setToggle={() => handleClick}
        />
        <SwitchButton
          title={'Personal'}
          subTitle={'More about me.'}
          toggle={personalToggle}
          setToggle={() => handleClick}
        />
      </div>
      {personalToggle & !professionalToggle ? (
        <ProfessionalContent />
      ) : (
        <PersonalContent />
      )}
    </div>
  );
};
export default AboutMeModal;

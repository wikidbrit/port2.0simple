import React, { useState } from 'react';
import PersonalContent from './components/PersonalContent';
import ProfessionalContent from './components/ProfessionalContent';
import SwitchButton from './components/SwitchButton';
import image from '../../images/try.png';
import { TbCircleX } from 'react-icons/tb';

const AboutMeModal = ({ close }) => {
  const [professionalToggle, setProfessionalToggle] = useState(false);
  const [personalToggle, setPersonalToggle] = useState(true);

  const handleClick = () => {
    setProfessionalToggle(!professionalToggle);
    setPersonalToggle(!personalToggle);
  };

  return (
    <div className="text-neoGrey space-y-6 p-6 rounded-lg bg-neoBackground">
      <div className="space-y-2 flex flex-row justify-between items-center">
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
        <button
          className="raised p-2 rounded-full hover:text-neoMiddleBlue absolute right-7 top-6"
          onClick={close}
        >
          <TbCircleX size={'1.5rem'} />
        </button>
      </div>

      <div className="flex flex-row space-x-2 w-full py-5">
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
      <div>
        {personalToggle & !professionalToggle ? (
          <ProfessionalContent />
        ) : (
          <PersonalContent />
        )}
      </div>
      <div>
        <button
          className="raised px-8 py-3 rounded-lg mx-auto flex"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default AboutMeModal;

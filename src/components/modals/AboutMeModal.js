import React, { useState, useContext } from 'react';
import PersonalContent from './components/PersonalContent';
import ProfessionalContent from './components/ProfessionalContent';
import SwitchButton from './components/SwitchButton';
import image from '../../images/try.png';
import ThemeContext from '../../context/ThemeContext';
import classNames from 'classnames';
import ModalHeader from './components/ModalHeader';

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
        theme === 'dark' ? 'bg-darkNeoForeground' : 'bg-neoBackground',
        'text-neoGrey space-y-6 p-6 rounded-lg '
      )}
    >
      <ModalHeader
        theme={theme}
        close={close}
        title={'About me'}
        subTitle={'My name is Paul Fleming'}
        image={image}
        altImage={'Profile picture of Paul Fleming'}
      />
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
          className={classNames(
            theme === 'dark' ? 'raised-dark' : 'raised',
            'px-8 py-3 rounded-lg mx-auto flex'
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

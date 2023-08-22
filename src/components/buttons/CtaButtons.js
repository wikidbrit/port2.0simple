import React, { useContext } from 'react';

import Popup from 'reactjs-popup';
import ContactMeModal from '../modals/ContactMeModal';

import ThemeContext from '../../context/ThemeContext';
import CtaButton from './CtaButton';
import { TbBrandLinkedin, TbMessage2Share, TbFileLike } from 'react-icons/tb';

const CtaButtons = () => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
  const contentStyle = {
    background: '#2EB2EC',
    borderRadius: '2rem',
  };

  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-row space-x-4">
      <Popup
        modal
        nested
        trigger={
          <CtaButton
            theme={theme}
            icon={<TbMessage2Share size={'1.2rem'} />}
            text={'Contact'}
          />
        }
        {...{ overlayStyle, contentStyle }}
      >
        {(close) => <ContactMeModal close={close} />}
      </Popup>

      <a
        href="https://www.linkedin.com/in/pflemingonline/"
        target="blank"
        rel="noreferrer"
      >
        <CtaButton
          theme={theme}
          icon={<TbBrandLinkedin size={'1.2rem'} />}
          text={'LinkedIn'}
        />
      </a>
      <CtaButton
        theme={theme}
        icon={<TbFileLike size={'1.2rem'} />}
        text={'Resume'}
      />
    </div>
  );
};
export default CtaButtons;

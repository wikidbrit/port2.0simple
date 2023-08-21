import React, { useContext } from 'react';

import Popup from 'reactjs-popup';
import ModalContainer from '../containers/ModalContainer';

import ThemeContext from '../../context/ThemeContext';
import CtaButton from './CtaButton';
import { TbBrandLinkedin, TbMessage2Share, TbFileLike } from 'react-icons/tb';

const CtaButtons = () => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
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
        {...{ overlayStyle }}
      >
        <ModalContainer title={'Contact Me'}>
          <p>pflemingonline@gmail.com</p>
        </ModalContainer>
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

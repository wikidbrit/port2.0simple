import React from 'react';

import Popup from 'reactjs-popup';
import ModalContainer from '../containers/ModalContainer';

import CtaButton from './CtaButton';
import { TbBrandLinkedin, TbMessage2Share, TbFileLike } from 'react-icons/tb';

const CtaButtons = () => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  return (
    <div className="flex flex-row space-x-5">
      <Popup
        modal
        nested
        trigger={
          <CtaButton
            icon={<TbMessage2Share size={'1.6rem'} />}
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
          icon={<TbBrandLinkedin size={'1.6rem'} />}
          text={'LinkedIn'}
        />
      </a>
      <CtaButton icon={<TbFileLike size={'1.6rem'} />} text={'Resume'} />
    </div>
  );
};
export default CtaButtons;

import React from 'react';
import CtaButton from './CtaButton';

import { MdMailOutline, MdOutlineFileOpen } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';

const CtaButtons = () => {
  return (
    <div className="flex flex-row space-x-4">
      <CtaButton
        icon={<MdMailOutline color="#4B99FE" size={'1.2rem'} />}
        text={'Contact'}
      />
      <a
        href="https://www.linkedin.com/in/pflemingonline/"
        target="blank"
        rel="noreferrer"
      >
        <CtaButton
          icon={<AiOutlineLinkedin color="#4B99FE" size={'1.2rem'} />}
          text={'LinkedIn'}
        />
      </a>
      <CtaButton
        icon={<MdOutlineFileOpen color="#4B99FE" size={'1.2rem'} />}
        text={'Resume'}
      />
    </div>
  );
};
export default CtaButtons;

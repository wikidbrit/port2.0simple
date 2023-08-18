import React from 'react';
import CtaButton from './buttons/CtaButton';

import { MdMailOutline, MdOutlineFileOpen } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';

const CtaButtons = () => {
  return (
    <div className="flex flex-row space-x-4">
      <CtaButton
        icon={<MdMailOutline color="#00B4D6" size={'1.2rem'} />}
        text={'Contact'}
      />
      <CtaButton
        icon={<AiOutlineLinkedin color="#00B4D6" size={'1.2rem'} />}
        text={'LinkedIn'}
      />
      <CtaButton
        icon={<MdOutlineFileOpen color="#00B4D6" size={'1.2rem'} />}
        text={'Resume'}
      />
    </div>
  );
};
export default CtaButtons;

import React from 'react';
import CtaButton from './CtaButton';

import { TbBrandLinkedin, TbMail, TbFileLike } from 'react-icons/tb';

const CtaButtons = () => {
  return (
    <div className="flex flex-row space-x-5">
      <CtaButton icon={<TbMail color="#4B99FE" size={'1.6rem'} />} />
      <a
        href="https://www.linkedin.com/in/pflemingonline/"
        target="blank"
        rel="noreferrer"
      >
        <CtaButton icon={<TbBrandLinkedin color="#4B99FE" size={'1.6rem'} />} />
      </a>
      <CtaButton
        icon={<TbFileLike color="#4B99FE" size={'1.6rem'} />}
        text={'Resume'}
      />
    </div>
  );
};
export default CtaButtons;

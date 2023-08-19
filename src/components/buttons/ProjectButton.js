import React from 'react';

import { GoArrowUpRight } from 'react-icons/go';

const ProjectButton = ({ text }) => {
  return (
    <div className="raised-button h-full p-4 relative">
      <div className="rounded-full p-2 h-fit w-fit absolute right-3 top-3">
        <GoArrowUpRight color="#4B99FE" size={'1.2rem'} />
      </div>
      <p className="text-xl text-neoGrey absolute bottom-3 left-3">{text}</p>
    </div>
  );
};
export default ProjectButton;

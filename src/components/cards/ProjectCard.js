import React from 'react';

import { FiArrowUpRight } from 'react-icons/fi';
import { ImArrowUpRight2 } from 'react-icons/im';

const ProjectCard = ({ title, subTitle, image }) => {
  return (
    <div className="p-6 raised space-y-6 rounded-xl relative">
      <div className="flex flex-row justify-between">
        <div className="space-y-2 text-neoGrey">
          <p className="text-3xl title">{title}</p>
          <p>{subTitle}</p>
        </div>
        <div className=" rounded-full p-2 h-fit absolute right-2 top-2">
          <ImArrowUpRight2 color="#4B99FE" size={'1.7rem'} />
        </div>
      </div>

      <img
        src={image}
        alt="testing"
        className="object-cover h-[25rem] w-full rounded-lg"
      ></img>
    </div>
  );
};
export default ProjectCard;

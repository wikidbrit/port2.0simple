import React from 'react';

import { GoArrowUpRight } from 'react-icons/go';

const ProjectCard = ({ title, subTitle, image }) => {
  return (
    <div className="p-4 bg-pSemi space-y-6 rounded-2xl">
      <div className="flex flex-row justify-between">
        <div className="space-y-2">
          <p className="text-pWhite text-2xl">{title}</p>
          <p className="text-pText">{subTitle}</p>
        </div>
        <GoArrowUpRight color="#00B4D6" size={'1.2rem'} />
      </div>

      <img
        src={image}
        alt="testing"
        className="object-cover h-48 w-full rounded-xl"
      ></img>
    </div>
  );
};
export default ProjectCard;

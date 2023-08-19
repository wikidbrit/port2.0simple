import React from 'react';

import { GoArrowUpRight } from 'react-icons/go';

const ProjectCard = ({ title, subTitle, image }) => {
  return (
    <div className="p-4 raised space-y-6 rounded-2xl">
      <div className="flex flex-row justify-between">
        <div className="space-y-2">
          <p className="text-neoGrey text-2xl">{title}</p>
          <p className="text-neoGrey">{subTitle}</p>
        </div>
        <div className="inset rounded-full p-2 h-fit">
          <GoArrowUpRight color="#00B4D6" size={'1.2rem'} />
        </div>
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

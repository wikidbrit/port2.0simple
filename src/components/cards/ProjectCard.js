import React from 'react';
import classNames from 'classnames';

import ThemeContext from '../../context/ThemeContext';

import { TbCircleArrowUpRight } from 'react-icons/tb';

const ProjectCard = ({ title, subTitle, image }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      className={classNames(
        theme === 'dark' ? 'raised-dark' : 'raised',
        'p-6  space-y-6 rounded-xl relative'
      )}
    >
      <div className="flex flex-row justify-between">
        <div className="space-y-2 text-neoGrey">
          <p className="text-2xl ">{title}</p>
          <p>{subTitle}</p>
        </div>
        <div className=" rounded-full p-2 h-fit absolute right-2 top-2">
          <TbCircleArrowUpRight color="#2EB2EC" size={'1.6rem'} />
        </div>
      </div>

      <img
        src={image}
        alt="testing"
        className="object-cover h-[15.5rem] w-full rounded-lg"
      ></img>
    </div>
  );
};
export default ProjectCard;

import React from 'react';

import { Link } from 'react-router-dom';

import useGetContent from '../hooks/useGetContent';

import ProjectCard from '../components/cards/ProjectCard';
import ProjectButton from '../components/buttons/ProjectButton';

import { BiUserCircle } from 'react-icons/bi';
import { TbChecklist } from 'react-icons/tb';

const Projects = () => {
  const { data, firstProject, remainingProjects } = useGetContent();

  if (!data) return <div>Loading</div>;

  return (
    <div className="grid grid-cols-4 gap-6 pt-20">
      <Link to={`./project/${firstProject.slug}`} className="col-span-3">
        <ProjectCard
          title={firstProject.title}
          subTitle={firstProject.subtext}
          image={firstProject.coverimage.url}
        />
      </Link>
      <div className="flex flex-col row-span-1 gap-6">
        <ProjectButton
          text={'About me'}
          icon={<BiUserCircle color="#4B99FE" size={'2rem'} />}
        />
        <ProjectButton
          text={'My Skillset'}
          icon={<TbChecklist color="#4B99FE" size={'2rem'} />}
        />
      </div>

      {remainingProjects.map((item, index) => (
        <Link key={index} to={`./project/${item.slug}`} className="col-span-2">
          <ProjectCard
            title={item.title}
            subTitle={item.subtext}
            image={item.coverimage.url}
          />
        </Link>
      ))}
    </div>
  );
};
export default Projects;

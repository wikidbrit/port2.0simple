import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import useGetContent from '../hooks/useGetContent';

const Projects = () => {
  const { data } = useGetContent();
  return (
    <div className="grid grid-cols-2 gap-4">
      <ProjectCard title={'card1'} subTitle={'Subtitle1'} image={'urlTest'} />
      <ProjectCard title={'card2'} subTitle={'Subtitle2'} image={'urlTest'} />
    </div>
  );
};
export default Projects;

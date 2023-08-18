import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import useGetContent from '../hooks/useGetContent';

const Projects = () => {
  const { data } = useGetContent();

  const portfolioData = data;

  if (!data) return <div>Loading</div>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {portfolioData.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          subTitle={item.subtext}
          image={item.coverimage.url}
        />
      ))}
    </div>
  );
};
export default Projects;

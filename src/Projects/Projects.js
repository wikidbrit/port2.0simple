import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import useGetContent from '../hooks/useGetContent';

const Projects = () => {
  const { data } = useGetContent();

  if (!data) return <div>Loading</div>;

  const portfolioData = data;

  console.log(portfolioData);

  return (
    <div className="grid grid-cols-2 gap-4">
      {portfolioData.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          image={'text'}
        />
      ))}
    </div>
  );
};
export default Projects;

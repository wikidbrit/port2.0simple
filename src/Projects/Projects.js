import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import useGetContent from '../hooks/useGetContent';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { data, firstProject, remainingProjects } = useGetContent();

  if (!data) return <div>Loading</div>;

  return (
    <div className="grid grid-cols-2 gap-6">
      <Link to={`./project/${firstProject.slug}`}>
        <ProjectCard
          title={firstProject.title}
          subTitle={firstProject.subtext}
          image={firstProject.coverimage.url}
        />
      </Link>

      {remainingProjects.map((item, index) => (
        <Link key={index} to={`./project/${item.slug}`}>
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

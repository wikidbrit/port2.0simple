import React from "react";

import { Link } from "react-router-dom";

import useGetContent from "../hooks/useGetContent";

import ProjectCard from "../components/cards/ProjectCard";
import ProjectButton from "../components/buttons/ProjectButton";
import Popup from "reactjs-popup";

import { TbChecklist, TbUserShare } from "react-icons/tb";
import AboutMeModal from "../components/modals/AboutMeModal";
import SkillsModal from "../components/modals/SkillsModal";

const Projects = () => {
  const { data, remainingProjects, firstTwoProjects } = useGetContent();

  const contentStyle = {
    background: "#2EB2EC",
  };

  if (!data) return <div>Loading</div>;

  return (
    <div className="z-0 grid grid-cols-12  gap-4" id="Projects">
      {firstTwoProjects?.map((item, index) => (
        <Link key={index} to={`./project/${item.slug}`} className="col-span-5">
          <ProjectCard
            title={item.title}
            subTitle={item.subtext}
            image={item.coverImage.url}
            type={item.projectType}
          />
        </Link>
      ))}

      <div className="col-span-2 row-span-1 flex flex-col gap-4">
        {/* About Section */}
        <Popup
          modal
          nested
          trigger={
            <ProjectButton
              eyebrow={"Who I am"}
              boxText={"Who I am"}
              text={"About me"}
              icon={<TbUserShare color="#D6D6D6" size={"1.6rem"} />}
            />
          }
          {...{ contentStyle }}
        >
          {(close) => <AboutMeModal close={close} />}
        </Popup>
        {/* Skillset Section */}
        <Popup
          modal
          nested
          trigger={
            <ProjectButton
              boxText={"What I know"}
              eyebrow={"What I know"}
              text={"My Skillset"}
              icon={<TbChecklist color="#D6D6D6" size={"1.6rem"} />}
            />
          }
          {...{ contentStyle }}
        >
          {(close) => <SkillsModal close={close} />}
        </Popup>
      </div>

      {remainingProjects.map((item, index) => (
        <Link key={index} to={`./project/${item.slug}`} className="col-span-6">
          <ProjectCard
            title={item.title}
            subTitle={item.subtext}
            image={item.coverImage.url}
            type={item.projectType}
          />
        </Link>
      ))}
    </div>
  );
};
export default Projects;

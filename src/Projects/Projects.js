import React from "react";

import { Link } from "react-router-dom";

import useGetContent from "../hooks/useGetContent";

import ProjectCard from "../components/cards/ProjectCard";
import ProjectButton from "../components/buttons/ProjectButton";
import Popup from "reactjs-popup";

import { TbChecklist, TbUserShare } from "react-icons/tb";
import AboutMeModal from "../components/modals/AboutMeModal";
import SkillsModal from "../components/modals/SkillsModal";
import useModalStyles from "../hooks/useModalStyles";

const Projects = () => {
  const { data, remainingProjects, firstTwoProjects } = useGetContent();
  const { OVERLAY_STYLE, MODAL_STYLES } = useModalStyles();

  if (!data) return <div>Loading</div>;

  return (
    <div
      className="z-0 grid w-full grid-cols-2 gap-4 px-4 lg:grid-cols-12 lg:px-0"
      id="Projects"
    >
      {firstTwoProjects?.map((item, index) => (
        <Link
          key={index}
          to={`./project/${item.slug}`}
          className="col-span-2 lg:col-span-5"
        >
          <ProjectCard
            title={item.title}
            subTitle={item.subtext}
            image={item.coverImage.url}
            type={item.projectType}
          />
        </Link>
      ))}

      <div className="col-span-2 row-span-2 mx-auto flex h-56 w-56 flex-col gap-4 lg:col-span-1 lg:row-span-1 lg:h-auto ">
        {/* About Section */}
        <Popup
          modal
          nested
          overlayStyle={OVERLAY_STYLE}
          trigger={
            <ProjectButton
              eyebrow={"Who I am"}
              boxText={"Who I am"}
              text={"About me"}
              icon={<TbUserShare color="#D6D6D6" size={"1.6rem"} />}
            />
          }
          {...{ OVERLAY_STYLE, MODAL_STYLES }}
        >
          {(close) => <AboutMeModal close={close} />}
        </Popup>
        {/* Skillset Section */}
        <Popup
          modal
          nested
          overlayStyle={OVERLAY_STYLE}
          trigger={
            <ProjectButton
              boxText={"What I know"}
              eyebrow={"What I know"}
              text={"My Skillset"}
              icon={<TbChecklist color="#D6D6D6" size={"1.6rem"} />}
            />
          }
          {...{ OVERLAY_STYLE, MODAL_STYLES }}
        >
          {(close) => <SkillsModal close={close} />}
        </Popup>
      </div>

      {remainingProjects.map((item, index) => (
        <Link
          key={index}
          to={`./project/${item.slug}`}
          className="col-span-2 lg:col-span-6"
        >
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

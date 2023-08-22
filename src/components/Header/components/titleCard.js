import React from "react";
import CtaButtons from "../../buttons/CtaButtons";

const TitleCard = () => {
  return (
    <div className="space-y-16 text-pWhite">
      <div className="space-y-6">
        <div className="title -space-y-7 text-[4.8rem] font-medium">
          <p className="text-neoGrey">Hey, I'm Paul</p>
          <p className="blue-gradient">a UI/UX Designer and </p>
          <p className="blue-gradient">Front End Developer.</p>
        </div>
        <p className="w-1/2 leading-7 text-neoGrey">
          With a decade of experience in design, and more recently an education
          and work experience in front end development. I bring a toolkit that
          includes the Adobe Creative Suite, Figma, React, CSS, HTML, and a
          rising passion in UI/UX product design.
        </p>
      </div>
      <CtaButtons />
      <div className="mx-auto h-[2px] w-48 rounded-full bg-neoMiddleBlue"></div>
    </div>
  );
};
export default TitleCard;

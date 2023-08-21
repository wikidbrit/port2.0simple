import React from 'react';
import CtaButtons from '../../buttons/CtaButtons';

const TitleCard = () => {
  return (
    <div className="text-pWhite space-y-16">
      <div className="space-y-6">
        <div className="text-[4.8rem] -space-y-7 font-medium title">
          <p className="text-neoGrey">Hey, I'm Paul</p>
          <p className="blue-gradient">a UI/UX Designer and </p>
          <p className="blue-gradient">Front End Developer.</p>
        </div>
        <p className="text-neoGrey leading-7 w-1/2">
          With a decade of experience in design, and more recently an education
          and work experience in front end development. I bring a toolkit that
          includes the Adobe Creative Suite, Figma, React, CSS, HTML, and a
          rising passion in UI/UX product design.
        </p>
      </div>
      <CtaButtons />
      <div className="w-48 mx-auto h-[2px] rounded-full bg-neoMiddleBlue"></div>
    </div>
  );
};
export default TitleCard;

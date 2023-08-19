import React from 'react';
import CtaButtons from '../../buttons/CtaButtons';

const TitleCard = () => {
  return (
    <div className="text-pWhite space-y-12">
      <div className="text-[5.25rem] -space-y-6 font-medium title">
        <p className="text-neoGrey">Hey, I'm Paul</p>
        <p className="blue-gradient">a UI/UX Designer and </p>
        <p className="blue-gradient">Front End Developer.</p>
      </div>
      <CtaButtons />
      <p className="text-neoGrey leading-7 w-3/4">
        With a decade of experience in design, and more recently an education
        and work experience in front end development. I bring a toolkit that
        includes the Adobe Creative Suite, Figma, React, CSS, HTML, and a rising
        passion in UI/UX product design.
      </p>
    </div>
  );
};
export default TitleCard;

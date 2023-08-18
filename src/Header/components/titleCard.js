import React from 'react';
import LookingForWork from './subcomponents/LookingForWork';
import CtaButtons from './subcomponents/CtaButtons';

const TitleCard = () => {
  return (
    <div className="text-pWhite space-y-10">
      <LookingForWork />
      <div className="text-[4.2rem] w-[90%] -space-y-6">
        <p>Hey, I'm Paul</p>
        <p className="gradient-text">a UI/UX Designer and </p>
        <p className="gradient-text">Font End Developer.</p>
      </div>
      <CtaButtons />
      <p className="text-pText">
        With a decade of experience in design, and more recently an education
        and work experience in front end development. I bring a toolkit that
        includes the Adobe Creative Suite, Figma, React, CSS, HTML, and a rising
        passion in UI/UX product design.
      </p>
    </div>
  );
};
export default TitleCard;

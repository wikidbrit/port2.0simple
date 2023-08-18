import React from 'react';
import LookingForWork from './subcomponents/LookingForWork';
import CtaButtons from './subcomponents/CtaButtons';

const TitleCard = () => {
  return (
    <div className="text-pWhite space-y-14">
      <LookingForWork />
      <div className="text-[4rem] w-[90%] -space-y-4 font-medium">
        <p>Hey, I'm Paul</p>
        <p className="text-eBlue">a UI/UX Designer and </p>
        <p className="text-eBlue">Front End Developer.</p>
      </div>
      <CtaButtons />
      <p className="text-pText leading-7">
        With a decade of experience in design, and more recently an education
        and work experience in front end development. I bring a toolkit that
        includes the Adobe Creative Suite, Figma, React, CSS, HTML, and a rising
        passion in UI/UX product design.
      </p>
    </div>
  );
};
export default TitleCard;

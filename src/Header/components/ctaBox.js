import React from 'react';
import MainCta from '../../components/buttons/MainCta';

const CtaBox = () => {
  return (
    <div className="flex flex-row space-x-5">
      <MainCta text="Contact"></MainCta>
      <MainCta text="Resume"></MainCta>
    </div>
  );
};
export default CtaBox;

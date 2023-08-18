import React from 'react';
import CtaButtons from '../Header/components/subcomponents/CtaButtons';

const Contact = () => {
  return (
    <div className="pb-20 w-full space-y-14">
      <div>
        <p className="text-[4rem] text-pWhite">
          Lets get in touch<span className="text-eBlue">.</span>
        </p>
        <p className="text-pText">
          I am open to collaborate on your next big idea, or just say hello!
          Thanks!
        </p>
      </div>

      <CtaButtons />
    </div>
  );
};
export default Contact;

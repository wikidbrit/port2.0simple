import React from 'react';
import CtaButtons from '../buttons/CtaButtons';

const Contact = () => {
  return (
    <div className="pb-20 w-full space-y-14">
      <div>
        <p className="text-[4rem] text-neoGrey title">
          Lets get in touch<span className="text-neoDarkBlue">.</span>
        </p>
        <p className="text-neoGrey">
          I am open to collaborate on your next big idea, or just say hello!
          Thanks!
        </p>
      </div>

      <CtaButtons />
    </div>
  );
};
export default Contact;

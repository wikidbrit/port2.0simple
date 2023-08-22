import React from "react";
import CtaButtons from "../buttons/CtaButtons";

const Contact = () => {
  return (
    <div className="w-full space-y-14 pb-20">
      <div>
        <p className="title text-[4rem] text-neoGrey">
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

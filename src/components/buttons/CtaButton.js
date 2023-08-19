import React from 'react';

const CtaButton = ({ icon, text }) => {
  return (
    <button className="text-neoGrey px-7 py-3 rounded-full raised-button flex flex-row items-center space-x-4 hover:px-9 duration-200 hover:text-neoDarkBlue transition-all hover:title">
      <div>{icon}</div>
      <div>{text}</div>
    </button>
  );
};
export default CtaButton;

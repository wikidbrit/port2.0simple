import React from 'react';

const CtaButton = ({ icon, text }) => {
  return (
    <button className="text-pWhite px-7 py-3 rounded-full bg-pSemi flex flex-row items-center space-x-4 hover:px-9 duration-200 hover:text-pBlue">
      <div>{icon}</div>
      <div>{text}</div>
    </button>
  );
};
export default CtaButton;

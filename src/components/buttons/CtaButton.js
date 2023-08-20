import React from 'react';

const CtaButton = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-neoGrey px-5 py-3 rounded-md raised-button flex flex-row items-center space-x-4 hover:px-8 duration-200 hover:text-neoMiddleBlue transition-all hover:font-semibold"
    >
      <div>{icon}</div>
      {text && <p className="pr-3">{text}</p>}
    </button>
  );
};
export default CtaButton;

import React from "react";

const IconButtonSmall = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="new-button flex h-10 w-10 place-content-center items-center text-center"
    >
      {icon}
    </button>
  );
};
export default IconButtonSmall;

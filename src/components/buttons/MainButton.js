import React from "react";

const MainButton = ({ onClick, text }) => {
  return (
    <button className="new-button px-6 py-2 font-medium text-steel-50 duration-200 hover:-translate-y-[2px]">
      <p className=" tracking-wide shadow-sm">{text}</p>
    </button>
  );
};
export default MainButton;

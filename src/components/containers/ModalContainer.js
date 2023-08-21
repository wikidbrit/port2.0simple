import React from 'react';

const ModalContainer = ({ title, children }) => {
  return (
    <div className="">
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
};
export default ModalContainer;

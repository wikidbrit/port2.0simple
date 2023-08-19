import React from 'react';

const ModalContainer = ({ title, children }) => {
  return (
    <div className="p-5 bg-neoBackground rounded-lg">
      <p>{title}</p>
      <div>{children}</div>
    </div>
  );
};
export default ModalContainer;

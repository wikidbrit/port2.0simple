import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="h-[100%] bg-neoBackground relative">
      <div className=" pt-[9rem] pb-20 px-[14.2rem] space-y-16">{children}</div>
    </div>
  );
};
export default Layout;

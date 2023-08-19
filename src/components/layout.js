import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="h-[100%] bg-neoBackground relative">
      <div className=" pt-24 pb-20 px-[21rem] space-y-16">{children}</div>
    </div>
  );
};
export default Layout;

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="h-[100%] bg-neoBackground relative">
      <div className=" pt-[14.2rem] pb-20 px-[24.2rem] space-y-16">
        {children}
      </div>
    </div>
  );
};
export default Layout;

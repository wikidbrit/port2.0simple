import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="w-scree h-screen bg-pDark">
      <div className=" pt-28 px-[21rem]">{children}</div>
    </div>
  );
};
export default Layout;

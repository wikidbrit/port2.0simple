import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className=" bg-pDark">
      <div className=" pt-28 pb-20 px-[21rem] space-y-16">{children}</div>
    </div>
  );
};
export default Layout;

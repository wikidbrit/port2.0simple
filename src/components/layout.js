import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="w-scree h-screen bg-zinc-900">
      <div className="p-5">{children}</div>
    </div>
  );
};
export default Layout;

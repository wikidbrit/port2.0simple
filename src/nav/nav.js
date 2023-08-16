import React from 'react';
import MainCta from '../components/buttons/MainCta';

const Nav = () => {
  return (
    <div className="flex justify-between w-full">
      <div className=" w-24 h-24 bg-slate-200"></div>
      <MainCta text="Contact"></MainCta>
    </div>
  );
};
export default Nav;

import React from 'react';
import { CtaBox, TitleCard } from './components';

const Header = () => {
  return (
    <div className=" h-[60rem]">
      <div className=" h-2/3 flex justify-around flex-col">
        <TitleCard />
        <CtaBox />
      </div>
    </div>
  );
};
export default Header;

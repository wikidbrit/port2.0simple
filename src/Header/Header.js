import React from 'react';
import { CtaBox, TitleCard } from './components';

const Header = () => {
  return (
    <div>
      <div className=" h-2/3 flex justify-around flex-col px-32 pt-20 space-y-10">
        <TitleCard />
        <CtaBox />
      </div>
    </div>
  );
};
export default Header;

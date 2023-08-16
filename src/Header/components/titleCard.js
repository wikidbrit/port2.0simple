import React from 'react';

const TitleCard = () => {
  return (
    <div className="text-gray-300 space-y-10">
      <p>Hey, I'm Paul Fleming. Welcome to my portfolio page!</p>
      <p className="flex flex-row text-[5.3rem] overflow-visible">
        Developer &{' '}
        <div className="relative poetsenOne">
          <span className="absolute h-32 z-10 top-1 left-1 gradient-text">
            Designer
          </span>
          <span className="absolute left-2 z-20">Designer</span>
        </div>
      </p>
      <p>
        I help you ideate, iterate, and developer the best solution your brand
        deserves.
      </p>
    </div>
  );
};
export default TitleCard;

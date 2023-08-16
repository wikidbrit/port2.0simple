import React from 'react';

const TitleCard = () => {
  return (
    <div className="text-gray-300 space-y-5">
      <p>Hey, I'm Paul Fleming. Welcome to my portfolio page!</p>
      <p className="flex flex-row text-6xl">
        Developer &{' '}
        <div className="relative poetsenOne">
          <span className="absolute z-10 top-0.5 left-1 text-pink-500">
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
